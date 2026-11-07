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

const STACK = [
  { name: "Java", Icon: FaJava, tone: "java" },
  { name: "Spring Boot", Icon: SiSpringboot, tone: "springboot" },
  { name: "React", Icon: SiReact, tone: "react" },
  { name: "Next.js", Icon: SiNextdotjs, tone: "next" },
  { name: "Python", Icon: SiPython, tone: "python" },
  { name: "Flask", Icon: SiFlask, tone: "flask" },
  { name: "Kotlin", Icon: SiKotlin, tone: "kotlin" },
  { name: "Flutter", Icon: SiFlutter, tone: "flutter" },
  { name: "HTML5", Icon: SiHtml5, tone: "html" },
  { name: "CSS3", Icon: SiCss, tone: "css" },
  { name: "JavaScript", Icon: SiJavascript, tone: "js" },
  { name: "TypeScript", Icon: SiTypescript, tone: "ts" },
  { name: "MySQL", Icon: SiMysql, tone: "mysql" },
  { name: "PostgreSQL", Icon: SiPostgresql, tone: "postgres" },
  { name: "Docker", Icon: SiDocker, tone: "docker" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, tone: "tailwind" },
];

export function TechStack() {
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

        <ul className={styles.grid}>
          {STACK.map((tech, index) => (
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
