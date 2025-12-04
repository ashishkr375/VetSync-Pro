import React from 'react';
import styles from './Footer.module.css';
import { Stethoscope, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* --- Animated Scene Layer --- */}
            <div className={styles.animationScene}>
                <div className={styles.paradeWrapper}>
                    {/* The Vet Doctor */}
                    <div className={`${styles.walker} ${styles.doctor}`}>
                        <svg viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="20" r="15" fill="#f1c40f" /> {/* Head */}
                            <path d="M10 40 Q30 110 50 40 L50 100 L40 100 L40 70 L20 70 L20 100 L10 100 Z" fill="#ffffff"/> {/* Coat */}
                            <path d="M10 40 L5 60" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/> {/* Arm L */}
                            <path d="M50 40 L55 60" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/> {/* Arm R */}
                            <path d="M20 40 Q30 55 40 40" stroke="#3b82f6" strokeWidth="2" fill="none"/> {/* Stethoscope */}
                        </svg>
                    </div>

                    {/* The Dog */}
                    <div className={`${styles.walker} ${styles.dog}`}>
                        <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 30 Q25 15 45 15 L60 15 Q70 15 70 25 L70 40" stroke="#3b82f6" strokeWidth="22" strokeLinecap="round"/>
                            <circle cx="70" cy="20" r="8" fill="#3b82f6"/>
                            <path d="M15 30 L10 50 M25 30 L25 50 M55 30 L55 50 M65 30 L70 50" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M70 15 L65 5" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>
                            <circle cx="72" cy="18" r="1.5" fill="white"/>
                        </svg>
                    </div>

                    {/* The Cat */}
                    <div className={`${styles.walker} ${styles.cat}`}>
                        <svg viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 25 Q25 15 40 15 L50 15 Q55 15 55 20" stroke="#0ea5e9" strokeWidth="16" strokeLinecap="round"/>
                            <path d="M15 25 L12 40 M25 25 L25 40 M45 20 L45 40 M55 20 L55 40" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M50 10 L48 2 M54 10 L56 2" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M10 20 Q5 10 10 5" stroke="#0ea5e9" strokeWidth="2" fill="none"/> {/* Tail */}
                        </svg>
                    </div>
                </div>
                
                {/* Floor Line */}
                <div className={styles.floor}></div>
            </div>

            {/* --- Main Content --- */}
            <div className={styles.container}>
                <div className={styles.topSection}>
                    
                    {/* Col 1: Brand */}
                    <div className={styles.colBrand}>
                        <div className={styles.logo}>
                            <div className={styles.logoIcon}>
                               <img src="logo.png" alt="VetSync Pro Logo" className={styles.logoImage} />
                            </div>
                            <h3>VetSync Pro</h3>
                        </div>
                        <p className={styles.tagline}>
                            Modern practice management software built for independent clinics. We take care of the tech, so you can take care of the pets.
                        </p>
                        
                    </div>

                    {/* Col 2: Product */}
                    <div className={styles.colLinks}>
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#features">Features & Tools</a></li>
                            <li><a href="#features">Online Booking</a></li>
                            <li><a href="#features">Digital Records</a></li>
                            <li><a href="#features">Tele-health App</a></li>
                            <li><a href="#features">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Company */}
                    <div className={styles.colLinks}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Success Stories</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Support</a></li>
                            <li><a href="#">Partner Program</a></li>
                        </ul>
                    </div>

                    {/* Col 4: Newsletter/Contact */}
                    <div className={styles.colContact}>
                        <h4>Stay Updated</h4>
                        <p>Join 2,000+ vets getting weekly tips.</p>
                        <div className={styles.subscribeForm}>
                            <input type="email" placeholder="Enter email address" />
                            <button><ArrowRight size={18}/></button>
                        </div>
                        <div className={styles.contactInfo}>
                            <div className={styles.cItem}>
                                <Mail size={14} /> <span>kumarashish98526@gmail.com</span>
                            </div>
                            <div className={styles.cItem}>
                                <Phone size={14} /> <span>+91 80832-56661</span>
                            </div>
                            <div className={styles.cItem}>
                                <MapPin size={14} /> <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottomSection}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} VetSync Pro. Made with <Heart size={14} className={styles.heartIcon}/> for animals.
                    </div>
                    <div className={styles.legalLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;