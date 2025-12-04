import React, { useRef, useState } from 'react';
import styles from './Features.module.css';
import { 
    Smartphone, Calendar, FileText, Bell, CreditCard, Globe, TrendingUp, 
    Check, Star, MessageCircle, Clock, ShieldCheck, Zap, User
} from 'lucide-react';

const FeatureCard = ({ feature, className }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            className={`${styles.card} ${className || ''}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
        >
            {/* Mouse Follow Spotlight */}
            <div 
                className={styles.spotlight}
                style={{
                    opacity: opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`
                }}
            />

            <div className={styles.cardContent}>
                <div className={`${styles.iconWrapper} ${styles[feature.colorClass]}`}>
                    {feature.icon}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
                
                {/* Interactive Elements for Small Cards */}
                {feature.extraVisual && <div className={styles.miniVisual}>{feature.extraVisual}</div>}
            </div>

            {/* Large Visuals for Bento Cards */}
            {feature.visual && <div className={styles.cardVisual}>{feature.visual}</div>}
        </div>
    );
};

const features = [
    {
        icon: <Globe size={28} />,
        title: "Professional Website",
        description: "A conversion-focused website that makes booking appointments effortless for pet owners.",
        colorClass: "blue",
        visual: (
            <div className={styles.browserVisual}>
                <div className={styles.browserHeader}>
                    <div className={styles.dots}><span/><span/><span/></div>
                    <div className={styles.addressBar}>vet-clinic.com</div>
                </div>
                <div className={styles.browserBody}>
                    <div className={styles.heroSection}>
                        <div className={styles.heroText}>
                            <div className={styles.heroTitle}></div>
                            <div className={styles.heroSubtitle}></div>
                            <div className={styles.heroBtn}>Book Now</div>
                        </div>
                        <div className={styles.heroImage}>
                            <div className={styles.floatingReview}>
                                <div className={styles.stars}><Star size={10} fill="#fbbf24" stroke="none"/><Star size={10} fill="#fbbf24" stroke="none"/><Star size={10} fill="#fbbf24" stroke="none"/><Star size={10} fill="#fbbf24" stroke="none"/><Star size={10} fill="#fbbf24" stroke="none"/></div>
                                <span>Top Rated</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bookingModal}>
                        <div className={styles.modalHeader}>Select Time</div>
                        <div className={styles.timeSlots}>
                            <span className={styles.slot}>9:00 AM</span>
                            <span className={styles.slotActive}>10:30 AM</span>
                            <span className={styles.slot}>2:00 PM</span>
                        </div>
                        <div className={styles.confirmBtn}>Confirm Booking</div>
                    </div>
                </div>
            </div>
        )
    },
    {
        icon: <Smartphone size={28} />,
        title: "Client App",
        description: "Your branded app for easy pet management and seamless communication with clients.",
        colorClass: "indigo",
        visual: (
            <div className={styles.phoneVisual}>
                <div className={styles.notch}></div>
                <div className={styles.phoneScreen}>
                    <div className={styles.appHeader}>
                        <div className={styles.userAvatar}><User size={14} /></div>
                        <div className={styles.greeting}>
                            <span>Hello, Sarah!</span>
                            <small>2 Pets registered</small>
                        </div>
                    </div>
                    
                    {/* App Card: Pet Profile */}
                    <div className={styles.petCard}>
                        <div className={styles.petAvatar}>🐕</div>
                        <div className={styles.petInfo}>
                            <span className={styles.petName}>Max</span>
                            <span className={styles.petStatus}>Healthy • 3 yrs</span>
                        </div>
                        <div className={styles.statusPill}>Vaccinated</div>
                    </div>

                    {/* App Card: Appointment */}
                    <div className={styles.appointCard}>
                        <div className={styles.cardIcon}><Clock size={14}/></div>
                        <div>
                            <span className={styles.appointTitle}>Tomorrow, 10:00 AM</span>
                            <span className={styles.appointSub}>Dr. Smith • Checkup</span>
                        </div>
                    </div>

                    <div className={styles.fabButton}>+</div>
                </div>
            </div>
        )
    },
    {
        icon: <Calendar size={28} />,
        title: "Online Booking",
        description: "Real-time calendar sync with automated scheduling and conflict prevention.",
        colorClass: "green",
        extraVisual: (
            <div className={styles.calendarWidget}>
                <div className={styles.calHeader}>DEC</div>
                <div className={styles.calBody}>12</div>
                <div className={styles.checkIcon}><Check size={16}/></div>
            </div>
        )
    },
    {
        icon: <FileText size={28} />,
        title: "Digital Records",
        description: "Secure cloud-based medical history with instant access and backup protection.",
        colorClass: "orange",
        extraVisual: (
            <div className={styles.fileWidget}>
                <div className={styles.fileFolder}></div>
                <div className={styles.filePaper}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
                <div className={styles.shieldIcon}><ShieldCheck size={20}/></div>
            </div>
        )
    },
    {
        icon: <Bell size={28} />,
        title: "Smart Reminders",
        description: "Automated SMS and email reminders that reduce no-shows and improve client compliance.",
        colorClass: "rose",
        extraVisual: (
            <div className={styles.bellWidget}>
                <div className={styles.notificationBubble}>
                    <MessageCircle size={14} />
                    <span>Hi! Reminder for...</span>
                </div>
            </div>
        )
    },
    {
        icon: <CreditCard size={28} />,
        title: "Easy Payments",
        description: "Integrated secure payment processing with automated invoicing and detailed reporting.",
        colorClass: "purple",
        extraVisual: (
            <div className={styles.cardWidget}>
                <div className={styles.creditCard}>
                    <div className={styles.chip}></div>
                    <div className={styles.dots}>••••</div>
                </div>
            </div>
        )
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Growth Analytics",
        description: "Comprehensive analytics dashboard to track revenue, client retention, and practice growth metrics.",
        colorClass: "cyan",
        extraVisual: (
            <div className={styles.graphWidget}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
                <div className={styles.trendLine}><Zap size={16} fill="currentColor"/></div>
            </div>
        )
    }
];

const Features = () => {
    return (
        <section id="features" className={styles.features}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>Features</span>
                    <h2 className={styles.title}>All-in-one Platform</h2>
                    <p className={styles.subtitle}>Powerful tools to run your veterinary practice efficiently.</p>
                </div>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            feature={feature} 
                            className={index === 0 ? styles.spanTwo : index === 1 ? styles.spanRow : ''}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;