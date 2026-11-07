import { Portrait } from "./Portrait";
import styles from "./Avatar.module.css";

export function Avatar({
  tone = 0,
  size = 36,
  label,
  name,
}: {
  tone?: number;
  size?: number;
  label?: string;
  name?: string;
}) {
  return (
    <span
      className={styles.avatar}
      style={{ width: size, height: size }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Portrait
        tone={tone}
        name={name ?? label ?? "client"}
        variant="avatar"
      />
      <span
        className={styles.avatarClr}
        aria-hidden="true"
        style={{
          inset: "-3px",
          filter: "drop-shadow(0 1px 0 var(--color-line-tint))",
          transform: "scale(1.02)",
        }}
      />
    </span>
  );
}
