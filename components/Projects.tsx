"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { useStartProject } from "./StartProjectProvider";
import {
  AirplaneVisual,
  DashboardVisual,
  GymVisual,
} from "./ProjectVisuals";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    title: "SKYFLICK",
    subtitle: "Enterprise Airline Booking & Inventory Engine",
    tags: ["Next.js", "Python", "PostgreSQL", "AWS"],
    Visual: AirplaneVisual,
  },
  {
    title: "FINPULSE",
    subtitle: "Real-Time Cashflow & Spend Analytics Platform",
    tags: ["React", "Flask", "PostgreSQL", "Docker"],
    Visual: DashboardVisual,
  },
  {
    title: "KINETIX",
    subtitle: "Connected Fitness & Biometric Companion App",
    tags: ["Kotlin", "Flutter", "Android", "GraphQL"],
    Visual: GymVisual,
  },
];

export function Projects() {
  const { openInquiry } = useStartProject();

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHead
          eyebrow="Featured Projects"
          title="Our Latest Work"
          titleId="projects-title"
          copy="A few of the products we've built and delivered for our clients and our organisation."
          action={{ label: "View All Projects", href: "#projects" }}
        />

        <ul className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <li key={project.title} className={styles.cell}>
              <Reveal delay={index * 90}>
                <article className={styles.card}>
                  <div className={styles.head}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.subtitle}>{project.subtitle}</p>
                    <ul className={styles.tags}>
                      {project.tags.map((tag) => (
                        <li key={tag} className={styles.tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.media}>
                    <div className={styles.mediaInner}>
                      <project.Visual />
                    </div>
                    <button
                      type="button"
                      className={styles.open}
                      aria-label={`Start a project like ${project.title}`}
                      onClick={() => openInquiry(project.title)}
                    >
                      <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
