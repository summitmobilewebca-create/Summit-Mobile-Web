"use client";

import React from "react";
import styles from "./SplitSection.module.css";

type SplitSectionProps = {
  tagline?: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  // Customization Props
  reverse?: boolean;       // If true, image moves to the left, text to the right
  altBackground?: boolean; // If true, applies a subtle background tint
  // Optional Button Props
  buttonText?: string;
  buttonLink?: string;
};

export default function SplitSection({
  tagline,
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
  altBackground = false,
  buttonText,
  buttonLink,
}: SplitSectionProps) {
  
  // Combine dynamic classes for layout switching
  const sectionClasses = `${styles.section} ${altBackground ? styles.altBg : ""}`;
  const containerClasses = `${styles.container} ${reverse ? styles.reversed : ""}`;

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        
        {/* Text Side */}
        <div className={styles.textSide}>
          <span className={styles.tagline}>{tagline}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          
          {/* Conditional Button Rendering */}
          {buttonText && buttonLink && (
            <div className={styles.btnWrapper}>
              <a href={buttonLink} className={styles.button}>
                {buttonText}
              </a>
            </div>
          )}
        </div>

        {/* Image Side */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt={imageAlt} className={styles.image} />
          </div>
        </div>

      </div>
    </section>
  );
}