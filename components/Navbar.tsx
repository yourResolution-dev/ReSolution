"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useStartProject } from "./StartProjectProvider";
import styles from "./Navbar.module.css";

// Listed in the same order the sections appear on the page.
const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Team", href: "#team", id: "team" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const { openInquiry } = useStartProject();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = NAV_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter((element): element is HTMLElement => Boolean(element));
    if (elements.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      // Read live document positions and sort, so the result depends on where
      // the sections actually are rather than the order of the nav links.
      const ordered = elements
        .map((element) => ({
          id: element.id,
          top: element.getBoundingClientRect().top + window.scrollY,
        }))
        .sort((a, b) => a.top - b.top);

      if (ordered.length === 0) return;

      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = ordered[0];

      for (const entry of ordered) {
        if (entry.top <= marker) current = entry;
      }

      // The final section can sit below the marker even at full scroll.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = ordered[ordered.length - 1];

      setActiveId(current.id);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 960) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand} aria-label="Resolution home">
          <Logo />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${
                    activeId === link.id ? styles.navLinkActive : ""
                  }`}
                  aria-current={activeId === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={`btn btnDark ${styles.cta}`}
            onClick={() => openInquiry()}
          >
            Start a Project
            <ArrowRight size={15} aria-hidden="true" />
          </button>

          <button
            ref={toggleRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <div
            className={styles.scrim}
            aria-hidden="true"
            onClick={closeMenu}
          />
          <div
            id="mobile-menu"
            className={styles.mobile}
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <nav aria-label="Mobile">
              <ul className={styles.mobileList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={styles.mobileLink}
                      aria-current={activeId === link.id ? "true" : undefined}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              type="button"
              className={`btn btnDark ${styles.mobileCta}`}
              onClick={() => {
                closeMenu();
                openInquiry();
              }}
            >
              Start a Project
              <ArrowRight size={15} aria-hidden="true" />
            </button>
            <a className={styles.mobileMail} href="mailto:hello@resolution.dev">
              hello@resolution.dev
            </a>
          </div>
        </>
      ) : null}
    </header>
  );
}
