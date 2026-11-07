import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Logo } from "./Logo";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: FaLinkedinIn },
  {
    label: "GitHub",
    href: "https://github.com/yourResolution-dev/ReSolution",
    Icon: FaGithub,
  },
  { label: "X", href: "https://x.com", Icon: FaXTwitter },
  { label: "Instagram", href: "https://www.instagram.com", Icon: FaInstagram },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#home" aria-label="Resolution home" className={styles.logoLink}>
              <Logo />
            </a>
            <p className={styles.tagline}>Turning Ideas Into Digital Reality.</p>
          </div>

          <nav aria-label="Footer">
            <ul className={styles.links}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a className={styles.link} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className={styles.socials}>
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  className={styles.social}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Resolution on ${label}`}
                >
                  <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; 2026 Resolution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
