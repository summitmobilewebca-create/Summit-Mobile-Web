"use client";

import React from "react";
import styles from "./Testimonials.module.css";

// 1. Define the TypeScript type for a single Testimonial Item
type TestimonialItemProps = {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number; // Supports 1-5 stars
  avatarUrl?: string; // Optional image URL
};

// 2. The Isolated Sub-Component Function for easy customization
export function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company, 
  rating = 5, 
  avatarUrl 
}: TestimonialItemProps) {
  return (
    <div className={styles.card}>
      {/* Dynamic Star Rating */}
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className={styles.star}>★</span>
        ))}
      </div>

      <blockquote className={styles.quote}>
        “{quote}”
      </blockquote>

      <div className={styles.authorSection}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={author} className={styles.avatar} />
        ) : (
          /* Fallback generic avatar icon if no image provided */
          <div className={styles.avatarFallback}>
            {author.charAt(0)}
          </div>
        )}
        <div className={styles.meta}>
          <cite className={styles.authorName}>{author}</cite>
          <span className={styles.authorRole}>
            {role}{company ? ` at ${company}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

// 3. The Main Layout Grid Component
export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tagline}>Success Stories</span>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      </div>

      {/* The Responsive Grid Layout */}
      <div className={styles.grid}>
        
        {/* Column 1 */}
        <TestimonialCard 
          rating={5}
          quote="The web development team blew past our expectations. Our site loading speed dropped by 60%, and our customer conversion rates are already climbing."
          author="Sarah Jenkins"
          role="Director of Product"
          company="Innovate Corp"
          avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
        />

        {/* Column 2 */}
        <TestimonialCard 
          rating={5}
          quote="Their UI/UX design process completely transformed our platform. It went from a clunky dashboard to an interface that our users genuinely enjoy using daily."
          author="Michael Chang"
          role="Founder"
          company="SaaSFlow"
          avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        />

        {/* Column 3 */}
        <TestimonialCard 
          rating={5}
          quote="An absolute pleasure to work with. The SEO strategy they mapped out got us onto the first page of Google for our top three target keywords within just months."
          author="Amanda Ross"
          role="Head of Growth"
          company="Apex Digital"
          avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        />

      </div>
    </section>
  );
}