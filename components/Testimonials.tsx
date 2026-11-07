"use client";

import type { CSSProperties } from "react";
import { Star } from "lucide-react";
import { CarouselControls } from "./CarouselControls";
import { useCarousel } from "./useCarousel";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    quote:
      "Great work and communication. Delivered exactly what I needed on time.",
    initials: "VM",
    name: "Vikram Mehta",
    role: "CTO, AeroVista Logistics",
    tone: 0,
  },
  {
    quote:
      "Very professional and skilled developer. Highly recommended for future projects.",
    initials: "ER",
    name: "Elena Rostova",
    role: "Founder, FinPulse",
    tone: 2,
  },
  {
    quote:
      "Amazing design sense and technical knowledge. Loved the final product!",
    initials: "MC",
    name: "Marcus Chen",
    role: "Head of Product, Apex Retail",
    tone: 3,
  },
  {
    quote:
      "Clear updates, thoughtful design and a launch that went smoothly from start to finish.",
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "Director of Operations, MedFlow",
    tone: 1,
  },
  {
    quote:
      "They understood the brief quickly and delivered beyond what we had imagined.",
    initials: "DK",
    name: "David Kaelen",
    role: "CEO, CloudScale SaaS",
    tone: 4,
  },
  {
    quote:
      "A reliable team to build with — practical, fast and genuinely easy to work with.",
    initials: "AK",
    name: "Aisha Karim",
    role: "VP Engineering, Northstar Commerce",
    tone: 5,
  },
];

const getPerView = (width: number) => {
  if (width <= 620) return 1;
  if (width <= 1000) return 2;
  return 3;
};

function Monogram({ initials, tone }: { initials: string; tone: number }) {
  return (
    <span
      className={styles.monogram}
      data-tone={tone}
      aria-hidden="true"
      style={{
        background: `var(--gradient-portrait-${tone % 6})`,
      }}
    >
      {initials}
    </span>
  );
}

export function Testimonials() {
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
  } = useCarousel(TESTIMONIALS.length, getPerView);

  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-title"
      id="testimonials"
    >
      <div className="container">
        <div className={`sectionHead ${styles.head}`}>
          <div className={styles.headline}>
            <p className={`eyebrow eyebrowPlain ${styles.eyebrow}`}>
              <span className={styles.diamond} aria-hidden="true" />
              Testimonials
            </p>
            <h2 id="testimonials-title" className="sectionTitle">
              What Our Clients Say
            </h2>
          </div>
          <div className="sectionHeadBody">
            <p className="sectionHeadCopy">
              Real feedback from clients and collaborators we&apos;ve worked
              with.
            </p>
            <div className={styles.headControls}>
              <CarouselControls
                label="testimonials"
                onPrevious={previous}
                onNext={next}
                disabledPrevious={prevDisabled}
                disabledNext={nextDisabled}
              />
            </div>
          </div>
        </div>

        <div className={styles.viewport}>
          <ul
            className={styles.track}
            ref={trackRef}
            tabIndex={0}
            aria-label="Client testimonials carousel (use Left and Right arrow keys to navigate)"
            style={
              {
                transform: `translate3d(-${index * step}px, 0, 0)`,
                "--per-view": perView,
              } as CSSProperties
            }
          >
            {TESTIMONIALS.map((testimonial, testimonialIndex) => (
              <li
                key={testimonial.name}
                className={styles.slide}
                ref={testimonialIndex === 0 ? slideRef : undefined}
              >
                <figure className={styles.card}>
                  <span className={styles.mark} aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className={styles.quote}>
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className={styles.footer}>
                    <span className={styles.person}>
                      <Monogram
                        initials={testimonial.initials}
                        tone={testimonial.tone}
                      />
                      <span className={styles.role}>
                        {testimonial.name} — {testimonial.role}
                      </span>
                    </span>
                    <span
                      className={styles.stars}
                      role="img"
                      aria-label="Rated 5 out of 5"
                    >
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          fill="currentColor"
                          strokeWidth={0}
                          aria-hidden="true"
                        />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <p className="srOnly" aria-live="polite">
          {`Showing testimonials ${index + 1} to ${Math.min(
            index + perView,
            TESTIMONIALS.length,
          )} of ${TESTIMONIALS.length}`}
        </p>
      </div>
    </section>
  );
}
