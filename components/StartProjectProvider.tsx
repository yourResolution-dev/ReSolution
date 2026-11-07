"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { ArrowRight, Check, ChevronDown, Copy, Mail, X } from "lucide-react";
import styles from "./StartProjectDialog.module.css";

const CONTACT_EMAIL = "hello@resolution.dev";

const PROJECT_TYPES = [
  "Web Development",
  "Mobile Development",
  "UI / UX Design",
  "Software Systems",
  "AI & Automation",
  "Something else",
] as const;

const BUDGET_RANGES = [
  "< $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k+",
] as const;

const TIMELINES = [
  "< 1 month",
  "1 – 3 months",
  "Flexible",
] as const;

type StartProjectContextValue = {
  openInquiry: (subject?: string) => void;
};

const StartProjectContext = createContext<StartProjectContextValue | null>(null);

export function useStartProject() {
  const context = useContext(StartProjectContext);
  if (!context) {
    throw new Error("useStartProject must be used within StartProjectProvider");
  }
  return context;
}

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  company: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  email: "",
  projectType: PROJECT_TYPES[0],
  budget: "",
  timeline: "",
  message: "",
  company: "",
};

export function StartProjectProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [brief, setBrief] = useState("");

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("resolution_inquiry_draft");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          setForm((current) => ({
            ...current,
            ...parsed,
          }));
        }
      }
    } catch {
      // sessionStorage not available
    }
  }, []);

  const openInquiry = useCallback((nextSubject?: string) => {
    triggerRef.current =
      typeof document !== "undefined"
        ? (document.activeElement as HTMLElement | null)
        : null;
    setSubject(nextSubject ?? null);
    setStatus("idle");
    setErrors({});
    const matchedType = PROJECT_TYPES.find((type) => type === nextSubject);
    setForm((current) => ({
      ...current,
      projectType: matchedType ?? current.projectType ?? PROJECT_TYPES[0],
    }));
    setCopied(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    // Keep React state in sync with the native dialog, otherwise isOpen stays
    // true after closing and the dialog can never be reopened.
    setIsOpen(false);
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }

    if (dialog.open) dialog.close();
    return undefined;
  }, [isOpen]);

  const contextValue = useMemo(() => ({ openInquiry }), [openInquiry]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => {
      const next = { ...current, [field]: value };
      try {
        sessionStorage.setItem("resolution_inquiry_draft", JSON.stringify(next));
      } catch {}
      return next;
    });
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const nextErrors: FormErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = "Tell us a little more about the project.";
    }

    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }

    const headers = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Project type: ${form.projectType}`,
      form.budget ? `Estimated budget: ${form.budget}` : "",
      form.timeline ? `Desired timeline: ${form.timeline}` : "",
      subject ? `Reference: ${subject}` : "",
    ].filter(Boolean);

    const fullBrief = [...headers, "", form.message.trim()].join("\n");

    setBrief(fullBrief);
    setMailtoUrl(
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `Project inquiry — ${form.projectType}`,
      )}&body=${encodeURIComponent(fullBrief)}`,
    );

    setSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          projectType: form.projectType,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message.trim(),
          reference: subject ?? "",
          company: form.company,
        }),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; sent?: boolean }
        | null;
      setDelivered(Boolean(response.ok && result?.ok && result?.sent));
      try {
        sessionStorage.removeItem("resolution_inquiry_draft");
      } catch {}
    } catch {
      // Network failure: keep the prepared brief so the visitor can still send it.
      setDelivered(false);
    } finally {
      setSubmitting(false);
      setStatus("success");
    }
  };

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(brief);
      } else if (typeof document !== "undefined") {
        const textarea = document.createElement("textarea");
        textarea.value = brief;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <StartProjectContext.Provider value={contextValue}>
      {children}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="inquiry-title"
        onClose={() => setIsOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className={styles.panel}>
          <header className={styles.header}>
            <div className={styles.headerCopy}>
              <p className={styles.eyebrow}>Start a project</p>
              <h2 id="inquiry-title" className={styles.title}>
                {status !== "success"
                  ? "Tell us about your idea."
                  : delivered
                    ? "Your brief is on its way."
                    : "Your brief is ready."}
              </h2>
            </div>
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label="Close dialog"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          {status === "success" ? (
            <div className={styles.success} aria-live="polite">
              <span className={styles.successMark} aria-hidden="true">
                <Check size={22} />
              </span>
              {delivered ? (
                <>
                  <p className={styles.successTitle}>
                    Thanks{form.name.trim() ? `, ${form.name.trim().split(" ")[0]}` : ""} —
                    your brief is with our team.
                  </p>
                  <p className={styles.successCopy}>
                    We will reply to <strong>{form.email.trim()}</strong> within one
                    business day.
                  </p>
                </>
              ) : (
                <>
                  <p className={styles.successTitle}>
                    Thanks{form.name.trim() ? `, ${form.name.trim().split(" ")[0]}` : ""} — we
                    have everything we need to start the conversation.
                  </p>
                  <p className={styles.successCopy}>
                    Send the prepared brief to{" "}
                    <a className={styles.inlineLink} href={`mailto:${CONTACT_EMAIL}`}>
                      {CONTACT_EMAIL}
                    </a>{" "}
                    and we will reply within one business day.
                  </p>
                </>
              )}
              <div
                className={styles.successActions}
                hidden={delivered}
              >
                <a className="btn btnDark" href={mailtoUrl}>
                  Open email draft
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
                <button
                  type="button"
                  className="btn btnLight"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      Copied
                      <Check size={15} aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      Copy brief
                      <Copy size={15} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {subject ? (
                <p className={styles.subject}>
                  <span>Regarding</span> {subject}
                </p>
              ) : null}

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="field-name">Your name</label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Cooper"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "error-name" : undefined}
                    required
                  />
                  {errors.name ? (
                    <p className={styles.error} id="error-name">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className={styles.field}>
                  <label htmlFor="field-email">Email</label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "error-email" : undefined}
                    required
                  />
                  {errors.email ? (
                    <p className={styles.error} id="error-email">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="field-company">Company</label>
                <input
                  id="field-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(event) => updateField("company", event.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="field-projectType">Project type</label>
                <div className={styles.selectWrap}>
                  <select
                    id="field-projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={(event) =>
                      updateField("projectType", event.target.value)
                    }
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} aria-hidden="true" />
                </div>
              </div>

              <div className={styles.field}>
                <label id="label-budget">Estimated budget (optional)</label>
                <div
                  className={styles.pillGroup}
                  role="radiogroup"
                  aria-labelledby="label-budget"
                >
                  {BUDGET_RANGES.map((range) => (
                    <button
                      key={range}
                      type="button"
                      className={styles.pillBtn}
                      data-active={form.budget === range || undefined}
                      role="radio"
                      aria-checked={form.budget === range}
                      onClick={() =>
                        updateField("budget", form.budget === range ? "" : range)
                      }
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label id="label-timeline">Desired timeline (optional)</label>
                <div
                  className={styles.pillGroup}
                  role="radiogroup"
                  aria-labelledby="label-timeline"
                >
                  {TIMELINES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={styles.pillBtn}
                      data-active={form.timeline === t || undefined}
                      role="radio"
                      aria-checked={form.timeline === t}
                      onClick={() =>
                        updateField("timeline", form.timeline === t ? "" : t)
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="field-message">What are you building?</label>
                <textarea
                  id="field-message"
                  name="message"
                  rows={4}
                  placeholder="A short brief — the idea, the audience and what success looks like."
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  required
                />
                {errors.message ? (
                  <p className={styles.error} id="error-message">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className={styles.formFooter}>
                <button
                  type="submit"
                  className="btn btnDark"
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? "Sending…" : "Prepare brief"}
                  {submitting ? null : (
                    <ArrowRight size={15} aria-hidden="true" />
                  )}
                </button>
                <a className={styles.mailLink} href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail size={14} aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </StartProjectContext.Provider>
  );
}
