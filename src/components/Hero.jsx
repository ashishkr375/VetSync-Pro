import React from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Calendar } from 'lucide-react';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Background Grid Pattern */}
            <div className={styles.bgGrid}></div>
            <div className={styles.bgGlow}></div>

            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        New: AI-Powered Medical Records
                    </div>
                    
                    <h1 className={styles.title}>
                        Compete with Big Hospitals <br />
                        <span className={styles.highlight}>On Your Terms</span>
                    </h1>
                    
                    <p className={styles.subtitle}>
                        Boost productivity with the all-in-one operating system for independent veterinary clinics. 
                        <strong>Attract clients, manage pets, and grow revenue.</strong>
                    </p>
                    
                    <div className={styles.actions}>
                        <a href="#contact" className={styles.primaryBtn}>
                            Schedule Free Demo
                            <ArrowRight size={18} />
                        </a>
                        <a href="#features" className={styles.secondaryBtn}>
                            <div className={styles.playIcon}><Play size={12} fill="currentColor" /></div>
                            View All Features
                        </a>
                    </div>

                    <div className={styles.trustRow}>
                        <div className={styles.avatarGroup}>
                            <img src="https://i.pravatar.cc/100?img=1" alt="Vet" />
                            <img src="https://i.pravatar.cc/100?img=5" alt="Vet" />
                            <img src="https://i.pravatar.cc/100?img=8" alt="Vet" />
                        </div>
                        <div className={styles.trustText}>
                            <div className={styles.stars}>
                                <Star size={14} fill="#fbbf24" stroke="none"/>
                                <Star size={14} fill="#fbbf24" stroke="none"/>
                                <Star size={14} fill="#fbbf24" stroke="none"/>
                                <Star size={14} fill="#fbbf24" stroke="none"/>
                                <Star size={14} fill="#fbbf24" stroke="none"/>
                            </div>
                            <span>Trusted by <strong>100+</strong> Clinics</span>
                        </div>
                    </div>
                    
                    <div className={styles.benefits}>
                        <span className={styles.benefitItem}><CheckCircle size={16} /> Come Live in 2 Weeks</span>
                        <span className={styles.benefitItem}><CheckCircle size={16} /> Book Appointments Easily</span>
                    </div>
                </div>

                {/* Right Visuals - Layered Composition */}
                <div className={styles.visualWrapper}>
                    <div className={styles.mainScreen}>
                        <img 
                            src="https://i.postimg.cc/vHr6Pz2f/image.png" 
                            alt="VetSync Pro Dashboard" 
                            className={styles.dashboardImg} 
                        />
                        {/* Reflection Overlay */}
                        <div className={styles.reflection}></div>
                    </div>

                    {/* Floating Element 1: Mobile App */}
                    <div className={styles.floatingPhone}>
                        <div className={styles.phoneNotch}></div>
                        <div className={styles.phoneContent}>
                            <div className={styles.phoneHeader}>Upcoming</div>
                            <div className={styles.phoneCard}>
                                <div className={styles.petIcon}>🐶</div>
                                <div>
                                    <div className={styles.cardTitle}>Max - Vaccine</div>
                                    <div className={styles.cardSub}>10:00 AM Today</div>
                                </div>
                            </div>
                            <div className={styles.phoneCard}>
                                <div className={styles.petIcon}>🐱</div>
                                <div>
                                    <div className={styles.cardTitle}>Luna - Checkup</div>
                                    <div className={styles.cardSub}>11:30 AM Today</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Element 2: Stats Card */}
                    <div className={styles.floatingStats}>
                        <div className={styles.statsIcon}><TrendingUp size={20} /></div>
                        <div>
                            <span className={styles.statsLabel}>Monthly Revenue</span>
                            <span className={styles.statsValue}>$42,500 <span className={styles.greenText}>+12%</span></span>
                        </div>
                    </div>

                    {/* Floating Element 3: Booking Notification */}
                    <div className={styles.floatingNotif}>
                        <div className={styles.notifIcon}><Calendar size={18} /></div>
                        <div className={styles.notifText}>
                            <strong>New Booking</strong>
                            <span>Dr. Sarah • Tomorrow 9AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;