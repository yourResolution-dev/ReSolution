"use client";

import type { CSSProperties } from "react";
import { Globe } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SectionHead } from "./SectionHead";
import { Portrait } from "./Portrait";
import { CarouselControls } from "./CarouselControls";
import { useCarousel } from "./useCarousel";
import styles from "./Team.module.css";

const TEAM = [
  { name: "Ranajit Gupta", role: "Full Stack Developer", tone: 0 },
  { name: "Priya Sharma", role: "Frontend Specialist", tone: 1 },
  { name: "Arjun Verma", role: "Backend Specialist", tone: 2 },
  { name: "Neha Kapoor", role: "UI / UX Designer", tone: 3 },
  { name: "Rohan Das", role: "Mobile Developer", tone: 4 },
  { name: "Sneha Iyer", role: "QA & Automation", tone: 5 },
];

const getPerView = (width: number) => {
  if (width <= 560) return 1;
  if (width <= 820) return 2;
  if (width <= 1080) return 3;
  return 4;
};

export function Team() {
  const {
    index,
    perView,
    step,
    trackRef,
    slideRef,
    next,
    previous,
    prevDisabled,
    nextDisabled,
  } = useCarousel(TEAM.length, getPerView);

  return (
    <section id="team" className={styles.team} aria-labelledby="team-title">
      <div className="container">
        <SectionHead
          eyebrow="Our Team"
          eyebrowBoth
          title="People Behind Resolution"
          titleId="team-title"
          copy="Engineers, designers, and product specialists shipping production-ready software systems."
          action={{ label: "Work with Us", href: "#contact" }}
        />

        <div className={styles.carousel}>
          <div className={styles.viewport}>
            <ul
              className={styles.track}
              ref={trackRef}
              tabIndex={0}
              aria-label="Team members carousel (use Left and Right arrow keys to navigate)"
              style={
                {
                  transform: `translate3d(-${index * step}px, 0, 0)`,
                  "--per-view": perView,
                } as CSSProperties
              }
            >
              {TEAM.map((member, memberIndex) => (
                <li
                  key={member.name}
                  className={styles.slide}
                  ref={memberIndex === 0 ? slideRef : undefined}
                >
                  <article className={styles.card}>
                    <div className={styles.portraitWrap}>
                      <Portrait tone={member.tone} name={member.name} />
                    </div>
                    <div className={styles.body}>
                      <h3 className={styles.name}>{member.name}</h3>
                      <p className={styles.role}>{member.role}</p>
                      <ul className={styles.socials}>
                        <li>
                          <a
                            className={styles.social}
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <FaLinkedinIn size={13} aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            className={styles.social}
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${member.name} on GitHub`}
                          >
                            <FaGithub size={13} aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            className={styles.social}
                            href="#projects"
                            aria-label={`${member.name}'s featured projects`}
                          >
                            <Globe size={14} strokeWidth={1.7} aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <CarouselControls
            className={styles.controls}
            label="team members"
            onPrevious={previous}
            onNext={next}
            disabledPrevious={prevDisabled}
            disabledNext={nextDisabled}
          />
        </div>

        <p className="srOnly" aria-live="polite">
          {`Showing team members ${index + 1} to ${Math.min(
            index + perView,
            TEAM.length,
          )} of ${TEAM.length}`}
        </p>
      </div>
    </section>
  );
}
