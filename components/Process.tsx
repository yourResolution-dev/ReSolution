import {
  ClipboardList,
  Code2,
  LayoutTemplate,
  Rocket,
  Search,
} from "lucide-react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import styles from "./Process.module.css";

const STEPS = [
  {
    icon: Search,
    title: "Discover",
    description: "Understand the problem and your goals.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    description: "Create a strategy and roadmap.",
  },
  {
    icon: LayoutTemplate,
    title: "Design",
    description: "Design intuitive and engaging interfaces.",
  },
  {
    icon: Code2,
    title: "Develop",
    description: "Build and test the solution.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Launch and support for real impact.",
  },
];

export function Process() {
  return (
    <section
      className={styles.process}
      aria-labelledby="process-title"
      id="process"
    >
      <div className="container">
        <SectionHead
          eyebrow="Our Process"
          title="From Idea to Impact"
          titleId="process-title"
          copy="A clear and collaborative process to turn your vision into a successful product."
          action={{ label: "Learn More", href: "#about" }}
        />

        <ol className={styles.timeline}>
          {STEPS.map((step, index) => (
            <li key={step.title} className={styles.item}>
              <Reveal delay={index * 80}>
                <span className={styles.node} aria-hidden="true">
                  <step.icon size={19} strokeWidth={1.6} />
                </span>
                <p className={styles.meta}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.name}>{step.title}</span>
                </p>
                <p className={styles.description}>{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
