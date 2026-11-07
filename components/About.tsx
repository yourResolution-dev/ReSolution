import { BookOpen, Check } from "lucide-react";
import { OfficeScene } from "./OfficeScene";
import { Reveal } from "./Reveal";
import styles from "./About.module.css";

const CAPABILITIES = [
  "Web & mobile products",
  "Custom software systems",
  "AI-assisted automation",
];

export function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy} variant="left">
          <p className="eyebrow eyebrowBoth">About Resolution</p>
          <h2 id="about-title" className={`sectionTitle ${styles.title}`}>
            <span>A Team That</span>
            <span>
              Builds <span className="gradientText">Solutions.</span>
            </span>
          </h2>
          <div className={styles.body}>
            <p>
              Resolution is a digital product development organisation focused
              on creating modern, scalable and user-friendly websites, mobile
              applications and custom software systems.
            </p>
            <p>
              We combine creativity, clean design and robust technology to turn
              your ideas into working products — built to be used, maintained
              and grown.
            </p>
          </div>
          <ul className={styles.points}>
            {CAPABILITIES.map((item) => (
              <li key={item} className={styles.point}>
                <span className={styles.pointIcon} aria-hidden="true">
                  <Check size={12} strokeWidth={2.6} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={styles.media} variant="scale" delay={120}>
          <div className={styles.frame}>
            <OfficeScene />
            <div className={styles.vision}>
              <span className={styles.visionIcon} aria-hidden="true">
                <BookOpen size={17} strokeWidth={1.7} />
              </span>
              <div>
                <p className={styles.visionTitle}>Our Vision</p>
                <p className={styles.visionText}>
                  To make technology simple, impactful and accessible for every
                  business.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
