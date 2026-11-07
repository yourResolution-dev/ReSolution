import type { Metadata, Viewport } from "next";
import "../tokens.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/inter-tight";
import "@fontsource/caveat/400.css";
import "@fontsource/caveat/600.css";
import "./globals.css";
import { StartProjectProvider } from "@/components/StartProjectProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://resolution.dev"),
  title: "Resolution — Turning Ideas Into Digital Reality",
  description:
    "Resolution is a digital product development organisation building modern websites, mobile applications and custom software systems that solve real problems.",
  keywords: [
    "Resolution",
    "digital product agency",
    "web development",
    "mobile development",
    "UI UX design",
    "software systems",
    "AI automation",
  ],
  openGraph: {
    title: "Resolution — Turning Ideas Into Digital Reality",
    description:
      "We design and build modern websites, mobile apps and software systems that solve real problems and create meaningful impact.",
    type: "website",
    siteName: "Resolution",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resolution — Turning Ideas Into Digital Reality",
    description:
      "We design and build modern websites, mobile apps and software systems that solve real problems.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Resolution",
  url: "https://resolution.dev",
  logo: "https://resolution.dev/icon.svg",
  description:
    "We design and build modern websites, mobile apps and software systems that solve real problems and create meaningful impact.",
  email: "hello@resolution.dev",
  sameAs: [
    "https://github.com/yourResolution-dev/ReSolution",
    "https://www.linkedin.com",
    "https://x.com",
    "https://www.instagram.com",
  ],
  knowsAbout: [
    "Web Development",
    "Mobile Development",
    "UI / UX Design",
    "Software Systems",
    "AI & Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <StartProjectProvider>{children}</StartProjectProvider>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
