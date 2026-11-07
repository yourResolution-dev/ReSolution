import { Package, ShieldCheck, Trophy, Users } from "lucide-react";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import styles from "./Stats.module.css";

const STATS = [
  { icon: Package, value: 25, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 15, suffix: "+", label: "Happy Clients" },
  { icon: Trophy, value: 3, suffix: "+", label: "Years in Practice" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Commitment" },
];

export function Stats() {
  return (
    <section className={styles.stats} aria-label="Resolution in numbers">
      <div className="container">
        <Reveal>
          <ul className={styles.card}>
            {STATS.map((stat) => (
              <li key={stat.label} className={styles.item}>
                <span className={styles.icon} aria-hidden="true">
                  <stat.icon size={18} strokeWidth={1.7} />
                </span>
                <div className={styles.copy}>
                  <p className={styles.value}>
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className={styles.label}>{stat.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
