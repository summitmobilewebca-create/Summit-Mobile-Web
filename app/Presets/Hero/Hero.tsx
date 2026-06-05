"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        priority
        loading="eager"
        className={styles.heroImage}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}