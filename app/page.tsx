import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { TechStack } from "@/components/TechStack";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.main}>
        <div id="home" className={styles.topBand}>
          <div className={`${styles.glow} ${styles.glowA}`} aria-hidden="true" />
          <div className={`${styles.glow} ${styles.glowB}`} aria-hidden="true" />
          <Hero />
          <Stats />
        </div>

        <About />
        <Services />
        <Projects />
        <Process />
        <TechStack />
        <Team />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
