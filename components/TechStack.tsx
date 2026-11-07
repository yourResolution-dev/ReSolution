"use client";

import { useState } from "react";
import {
  SiCss,
  SiDocker,
  SiFlask,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import styles from "./TechStack.module.css";

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "backend", label: "Backend & Systems" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "cloud", label: "Cloud & Databases" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const STACK = [
  { name: "Java", Icon: FaJava, tone: "java", category: "backend" },
  { name: "Spring Boot", Icon: SiSpringboot, tone: "springboot", category: "backend" },
  { name: "React", Icon: SiReact, tone: "react", category: "frontend" },
  { name: "Next.js", Icon: SiNextdotjs, tone: "next", category: "frontend" },
  { name: "Python", Icon: SiPython, tone: "python", category: "backend" },
  { name: "Flask", Icon: SiFlask, tone: "flask", category: "backend" },
  { name: "Kotlin", Icon: SiKotlin, tone: "kotlin", category: "mobile" },
  { name: "Flutter", Icon: SiFlutter, tone: "flutter", category: "mobile" },
  { name: "HTML5", Icon: SiHtml5, tone: "html", category: "frontend" },
  { name: "CSS3", Icon: SiCss, tone: "css", category: "frontend" },
  { name: "JavaScript", Icon: SiJavascript, tone: "js", category: "frontend" },
  { name: "TypeScript", Icon: SiTypescript, tone: "ts", category: "frontend" },
  { name: "MySQL", Icon: SiMysql, tone: "mysql", category: "cloud" },
  { name: "PostgreSQL", Icon: SiPostgresql, tone: "postgres", category: "cloud" },
  { name: "Docker", Icon: SiDocker, tone: "docker", category: "cloud" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, tone: "tailwind", category: "frontend" },
] as const;

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filteredStack =
    activeCategory === "all"
      ? STACK
      : STACK.filter((item) => item.category === activeCategory);

  return (
    <section
      className={styles.tech}
      aria-labelledby="tech-title"
      id="technology"
    >
      <div className="container">
        <SectionHead
          eyebrow="Technology"
          title="Our Tech Stack"
          titleId="tech-title"
          copy="We work with modern tools and technologies to build fast, scalable and future-ready products."
        />

        <p className={styles.support}>
          From enterprise backends and cross-platform mobile apps to cloud-native tooling and intelligent
          automation — we pick the right stack for the problem and ship with the same production standards everywhere.
        </p>

        <div
          className={styles.filters}
          role="tablist"
          aria-label="Filter technologies by category"
        >
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeCategory === id}
              className={styles.filterBtn}
              data-active={activeCategory === id || undefined}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className={styles.grid}>
          {filteredStack.map((tech, index) => (
            <li key={tech.name} className={styles.cell}>
              <Reveal delay={(index % 6) * 50}>
                <div className={styles.badge}>
                  <span className={styles.icon} data-tone={tech.tone} aria-hidden="true">
                    <tech.Icon size={18} />
                  </span>
                  <span className={styles.name}>{tech.name}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
