"use client";

import { useState } from "react";
import styles from "./Header.module.css"

type HeaderProps = {
  logoSrc: string;
  phoneNumber: string;
};

function ExtraNavButtons() {
    return (
        <> 
        <a href="#">Home</a>
        <a href="#service">Services</a>
        <a href="#contact">Contact</a>
        </>
    )
}

export default function Header({ logoSrc, phoneNumber }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header className={styles.header}>
        <div className={styles.headerLeft}>
            <a href="#">
                <img className={styles.logo} src={logoSrc} alt="Logo"/>
            </a>
        </div>

        <nav className={styles.headerNav}>
            {ExtraNavButtons()}
        </nav>

        <div className={styles.headerRight}>
            <a className={styles.phone} href={`mailto:${phoneNumber}`}>
            {phoneNumber}
            </a>

            <button 
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
            >☰</button>
        </div>
        </header>

        {menuOpen && (
            <nav className={styles.mobileMenu}>
                {ExtraNavButtons()}
            </nav>
        )}
        </>
    );
}