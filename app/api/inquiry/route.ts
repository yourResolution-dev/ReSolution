import { NextResponse } from "next/server";

const PROJECT_TYPES = [
  "Web Development",
  "Mobile Development",
  "UI / UX Design",
  "Software Systems",
  "AI & Automation",
  "Something else",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const recentByIp = new Map<string, number[]>();

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
  reference?: unknown;
  company?: unknown;
};

type CleanInquiry = {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
  reference: string;
};

function asString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validate(payload: InquiryPayload) {
  const errors: Record<string, string> = {};

  const name = asString(payload.name, 100);
  const email = asString(payload.email, 200);
  const message = asString(payload.message, 4000);
  const type = asString(payload.projectType, 60);
  const projectType = (PROJECT_TYPES as readonly string[]).includes(type)
    ? type
    : PROJECT_TYPES[0];

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) {
    errors.message = "Tell us a little more about the project.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, values: null };
  }

  return {
    errors: null,
    values: {
      name,
      email,
      projectType,
      budget: asString(payload.budget, 60),
      timeline: asString(payload.timeline, 60),
      message,
      reference: asString(payload.reference, 120),
    } satisfies CleanInquiry,
  };
}

function isRateLimited(ip: string) {
  if (!ip || ip === "unknown") return false;
  const now = Date.now();
  const stamps = (recentByIp.get(ip) ?? []).filter(
    (stamp) => now - stamp < RATE_LIMIT_WINDOW_MS,
  );

  if (stamps.length >= RATE_LIMIT_MAX) {
    return true;
  }

  stamps.push(now);
  recentByIp.set(ip, stamps);

  if (recentByIp.size > 500) {
    for (const [key, value] of recentByIp) {
      if (value.every((stamp) => now - stamp >= RATE_LIMIT_WINDOW_MS)) {
        recentByIp.delete(key);
      }
    }
  }

  return false;
}

async function sendWithResend(inquiry: CleanInquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL ?? "Resolution <onboarding@resend.dev>";

  if (!apiKey || !to) return false;

  const headers = [
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Project type: ${inquiry.projectType}`,
    inquiry.budget ? `Estimated budget: ${inquiry.budget}` : "",
    inquiry.timeline ? `Desired timeline: ${inquiry.timeline}` : "",
    inquiry.reference ? `Reference: ${inquiry.reference}` : "",
  ].filter(Boolean);

  const body = [...headers, "", inquiry.message].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: inquiry.email,
      subject: `New project inquiry — ${inquiry.projectType}`,
      text: body,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("[inquiry] Resend rejected the message", response.status, detail);
    return false;
  }

  return true;
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: real visitors never see or fill this field.
  if (asString(payload.company, 100).length > 0) {
    return NextResponse.json({ ok: true, sent: true });
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = (forwarded?.split(",")[0] ?? "unknown").trim();
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const { errors, values } = validate(payload);
  if (errors || !values) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    const sent = await sendWithResend(values);
    if (!sent) {
      // Not configured yet: the client falls back to the prepared email draft.
      return NextResponse.json({ ok: true, sent: false });
    }
    return NextResponse.json({ ok: true, sent: true });
  } catch (error) {
    console.error("[inquiry] delivery failed", error);
    return NextResponse.json(
      { ok: false, error: "We could not send your message." },
      { status: 502 },
    );
  }
}
