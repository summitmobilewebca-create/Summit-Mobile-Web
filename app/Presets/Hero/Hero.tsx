"use client";

import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  // Layer a 40% black overlay on top of the dynamic background image
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
  };

  return (
    <section className={styles.hero} style={heroStyle}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p> 
      </div>
    </section>
  );
}