"use client";

import { ArrowRight, MoveRight, Play } from "lucide-react";
import { useStartProject } from "./StartProjectProvider";
import { HeroVisual } from "./HeroVisual";
import { Avatar } from "./Avatar";
import styles from "./Hero.module.css";

const FLOW = ["Ideas", "Design", "Develop", "Deploy"];

export function Hero() {
  const { openInquiry } = useStartProject();

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            {FLOW.map((step, index) => (
              <span key={step} className={styles.flowStep}>
                {step}
                {index < FLOW.length - 1 ? (
                  <MoveRight
                    className={styles.flowArrow}
                    size={14}
                    aria-hidden="true"
                  />
                ) : null}
              </span>
            ))}
          </p>

          <h1 id="hero-title" className={`display ${styles.title}`}>
            <span className={styles.line}>Turning Ideas</span>
            <span className={styles.line}>
              Into Digital <span className="gradientText">Reality.</span>
            </span>
          </h1>

          <p className={styles.lead}>
            We design and build modern websites, mobile apps and software
            systems that solve real problems and create meaningful impact.
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
            <a className="btn btnLight btnLarge" href="#projects">
              Our Work
              <span className={styles.play} aria-hidden="true">
                <Play size={9} strokeWidth={0} fill="currentColor" />
              </span>
            </a>
          </div>

          <div className={styles.proof}>
            <div
              className={styles.avatarStack}
              role="img"
              aria-label="Startup founders and product teams we work with"
            >
              <span className={styles.avatarClr} aria-hidden="true" />
              {[
                { tone: 0, name: "Client" },
                { tone: 1, name: "Client" },
                { tone: 2, name: "Client" },
              ].map(({ tone, name }) => (
                <Avatar key={tone} tone={tone} name={name} size={36} />
              ))}
            </div>
            <p className={styles.proofText}>
              Trusted by startups, businesses and creators worldwide.
            </p>
          </div>
        </div>

        <div className={styles.visual}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
