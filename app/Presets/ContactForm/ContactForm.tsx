"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.infoSide}>
          <span className={styles.tagline}>Get In Touch</span>
          <h2 className={styles.title}>Let’s start build a website together</h2>
          <p className={styles.description}>
            Fill out the form and our team will get back to you within 48 hours (even on weekends).
          </p>
        </div>

        <div className={styles.formSide}>
          {status === "success" ? (
            <div className={styles.successMessage}>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. We will respond shortly.</p>
              <button onClick={() => setStatus("idle")} className={styles.resetButton}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={styles.input}
                  disabled={status === "loading"}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={styles.input}
                  disabled={status === "loading"}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your website..."
                  className={styles.textarea}
                  disabled={status === "loading"}
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" && (
                <p className={styles.errorMessage}>
                  Something went wrong. Please try again or email us directly at <a href="mailto:summitmobileweb.ca@gmail.com">summitmobileweb.ca@gmail.com.</a>
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}