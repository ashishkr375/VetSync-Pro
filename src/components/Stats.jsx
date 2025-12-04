import React, { useEffect, useState, useRef } from 'react';
import styles from './Stats.module.css';
import { ArrowUpRight, Heart, Calendar, Users, Star } from 'lucide-react';

// Counter Hook
const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return <span ref={countRef}>{count}{suffix}</span>;
};

const Stats = () => {
    return (
        <section id="stats" className={styles.stats}>
            <div className={styles.container}>
                
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.badge}>Why Vets Love Us</div>
                    <h2 className={styles.title}>
                        Built for Happy Clinics <br />
                        <span className={styles.highlight}>& Healthy Pets</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Join 500+ independent clinics turning chaos into calm.
                    </p>
                </div>

                <div className={styles.grid}>
                    
                    {/* Card 1: Revenue (The "Graph" Look) */}
                    <div className={`${styles.card} ${styles.cardRevenue}`}>
                        <div className={styles.cardContent}>
                            <div className={styles.iconCircle} style={{background: '#dcfce7', color: '#16a34a'}}>
                                <ArrowUpRight size={24} />
                            </div>
                            <div className={styles.statNumber}>
                                <Counter end={30} suffix="%" />
                            </div>
                            <h3 className={styles.statLabel}>Revenue Increase</h3>
                            <p className={styles.statDesc}>Average growth in first 6 months.</p>
                        </div>
                        {/* Decorative Graph Line */}
                        <div className={styles.graphDecor}>
                            <div className={styles.graphLine}></div>
                            <div className={styles.graphDot}></div>
                        </div>
                    </div>

                    {/* Card 2: Time Saved (The "Cute" Look) */}
                    <div className={`${styles.card} ${styles.cardTime}`}>
                        <div className={styles.floatImage}>
                            <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Happy Cat" />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.iconCircle} style={{background: '#e0e7ff', color: '#4f46e5'}}>
                                <Calendar size={24} />
                            </div>
                            <div className={styles.statNumber}>
                                <Counter end={15} suffix="hrs" />
                            </div>
                            <h3 className={styles.statLabel}>Admin Time Saved</h3>
                            <p className={styles.statDesc}>Per week, automating reminders.</p>
                        </div>
                    </div>

                    {/* Card 3: Community (The "Social" Look) */}
                    <div className={`${styles.card} ${styles.cardCommunity}`}>
                        <div className={styles.cardContent}>
                            <div className={styles.iconCircle} style={{background: '#fee2e2', color: '#e11d48'}}>
                                <Heart size={24} fill="currentColor" />
                            </div>
                            <div className={styles.statNumber}>
                                <Counter end={10} suffix="k+" />
                            </div>
                            <h3 className={styles.statLabel}>Happy Pets Managed</h3>
                            <p className={styles.statDesc}>Trusted by top local veterinarians.</p>
                            
                            {/* Avatar Group */}
                            <div className={styles.avatarRow}>
                                {[1,2,3,4].map((i) => (
                                    <div key={i} className={styles.avatar} style={{backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`}}></div>
                                ))}
                                <div className={styles.avatarPlus}>+</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;