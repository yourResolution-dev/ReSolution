import styles from "./Logo.module.css";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`${styles.logo} ${className}`.trim()}>
      <svg
        className={styles.mark}
        viewBox="0 0 34 34"
        role="img"
        aria-label="Resolution"
      >
        <defs>
          <linearGradient
            id="resolution-mark-header"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0" stopColor="var(--color-accent)" />
            <stop offset="1" stopColor="var(--color-violet)" />
          </linearGradient>
        </defs>
        <path
          d="M4 2h11.4c6.5 0 10.9 3.9 10.9 9.8 0 4.3-2.1 7.3-5.9 8.8L28 32h-8l-6.1-9.6h-2.8V32H4V2Zm7 6v8h4.2c2.6 0 4.2-1.5 4.2-4s-1.6-4-4.2-4H11Z"
          fill="url(#resolution-mark-header)"
        />
      </svg>
      <span className={styles.wordmark}>Resolution</span>
    </span>
  );
}
