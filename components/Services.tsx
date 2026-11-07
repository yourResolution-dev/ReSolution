"use client";

import {
  ArrowUpRight,
  Globe,
  Layers,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { useStartProject } from "./StartProjectProvider";
import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance websites and web applications.",
    tone: "accent",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native & cross-platform mobile experiences.",
    tone: "accent",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Modern and intuitive designs focused on users.",
    tone: "teal",
  },
  {
    icon: Layers,
    title: "Software Systems",
    description: "Scalable backend and business platforms.",
    tone: "violet",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Intelligent solutions that reduce manual work.",
    tone: "violet",
  },
];

export function Services() {
  const { openInquiry } = useStartProject();

  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionHead
          eyebrow="Our Services"
          title="What We Do"
          titleId="services-title"
          copy="End-to-end development services to bring your ideas to life."
          action={{ label: "Start a Project", href: "#contact" }}
        />

        <ul className={styles.grid}>
          {SERVICES.map((service, index) => (
            <li key={service.title} className={styles.card} data-tone={service.tone}>
              <Reveal delay={index * 70}>
                <span className={styles.icon} aria-hidden="true">
                  <service.icon size={20} strokeWidth={1.6} />
                </span>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowUpRight size={15} strokeWidth={1.8} />
                </span>
                <button
                  type="button"
                  className={styles.hit}
                  aria-label={`Start a project: ${service.title}`}
                  onClick={() => openInquiry(service.title)}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
