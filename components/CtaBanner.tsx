"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useStartProject } from "./StartProjectProvider";
import styles from "./CtaBanner.module.css";

export function CtaBanner() {
  const { openInquiry } = useStartProject();

  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="cta-title"
    >
      <div className="container">
        <Reveal variant="scale">
          <div className={styles.banner}>
            <div
              className={`${styles.art} ${styles.artLeft}`}
              aria-hidden="true"
            />
            <div
              className={`${styles.art} ${styles.artRight}`}
              aria-hidden="true"
            />

            <div className={styles.content}>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>Let&apos;s build together</p>
                <h2 id="cta-title" className={styles.title}>
                  <span>Have an Idea?</span>
                  <span className="gradientText">Let&apos;s Make It Real.</span>
                </h2>
              </div>

              <div className={styles.aside}>
                <p className={styles.text}>
                  Whether it&apos;s a website, mobile app, AI system or a custom
                  solution, we&apos;re here to help you build it.
                </p>
                <div className={styles.actions}>
                  <button
                    type="button"
                    className="btn btnDark btnLarge"
                    onClick={() => openInquiry()}
                  >
                    Start a Project
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                  <a
                    className="btn btnLight btnLarge"
                    href="mailto:hello@resolution.dev"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
