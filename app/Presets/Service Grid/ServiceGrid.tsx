"use client";

import React from "react";
import styles from "./ServiceGrid.module.css";
import { Gauge, Search, Smartphone } from "lucide-react";

// 1. Define the TypeScript type for a single Service Item
type ServiceItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode; // Allows you to pass Lucide icons, SVGs, or emojis
  link?: string;
};

// 2. The Isolated Sub-Component Function for individual customization
export function ServiceCard({ title, description, icon, link }: ServiceItemProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {/* {link && (
        <a href={link} className={styles.cardLink}>
          Learn more <span className={styles.arrow}>&rarr;</span>
        </a>
      )} */}
    </div>
  );
}

// 3. The Main Grid Component
export default function ServiceGrid() {
  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <span className={styles.tagline}>Our Expertise</span>
        <h2 className={styles.sectionTitle}>Services We Provide</h2>
      </div>

      {/* The 3-Column Layout Grid */}
      <div className={styles.grid}>
        
        {/* Column 1 */} 
        <ServiceCard 
          icon={<Smartphone color="#0f172a" size={40}></Smartphone>}
          title="Mobile-First Engineering" 
          description="Over 70% of local service searches happen on smartphones. We build custom-coded layouts optimized specifically to look stunning and catch leads on smaller mobile screens."          link="/services/web-dev"
        />

        {/* Column 2 */}
        <ServiceCard 
          icon={<Gauge color="#0f172a" size={40}></Gauge>}
          title="Lightning Fast Load Speeds" 
          description="Slow templates cost you money. Hosted on lightning-fast edge networks, our sites load in milliseconds, meaning frustrated homeowners don't click away to your competitors."        />

        {/* Column 3 */}
        <ServiceCard 
          icon={<Search color="#0f172a" size={40}></Search>} 
          title="Local SEO" 
          description="No overpriced monthly marketing fees. We engineer clean headings, custom metadata, and structural local schema code directly into your site so Google indexes your business accurately."        />

      </div>
    </section>
  );
}