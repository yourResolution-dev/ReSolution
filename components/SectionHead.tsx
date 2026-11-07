import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./SectionHead.module.css";

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  titleId?: string;
  copy?: string;
  action?: { label: string; href: string };
  eyebrowBoth?: boolean;
};

export function SectionHead({
  eyebrow,
  title,
  titleId,
  copy,
  action,
  eyebrowBoth = false,
}: SectionHeadProps) {
  return (
    <Reveal className="sectionHead">
      <div className={styles.headline}>
        <p className={`eyebrow ${eyebrowBoth ? "eyebrowBoth" : ""}`.trim()}>
          {eyebrow}
        </p>
        <h2 id={titleId} className={`sectionTitle ${styles.title}`}>
          {title}
        </h2>
      </div>
      <div className="sectionHeadBody">
        {copy ? <p className="sectionHeadCopy">{copy}</p> : null}
        {action ? (
          <a className="linkArrow" href={action.href}>
            {action.label}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </Reveal>
  );
}
