import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="./logo.png" alt="VetSync Pro Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>VetSync Pro</span>
                </div>
                <nav className={styles.nav}>
                    <a href="#features">Features</a>
                    <a href="#stats">Impacts we make</a>
                    <a href="#contact" className={styles.cta}>Book Demo</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
