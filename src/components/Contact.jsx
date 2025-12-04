import React from 'react';
import styles from './Contact.module.css';
import { 
    Monitor, Smartphone, Wrench, ArrowRight, CheckCircle2, 
    MessageSquare, ShieldCheck 
} from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                
                {/* Section Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Your Clinic's <span className={styles.highlight}>Digital Department</span>
                    </h2>
                    <p className={styles.subtitle}>
                        We don't just sell software. We build and manage your entire digital presence 
                        so you can focus on medicine.
                    </p>
                </div>

                <div className={styles.wrapper}>
                    
                    {/* Left: What We Build For You */}
                    <div className={styles.servicesColumn}>
                        <h3 className={styles.columnTitle}>What We Build For You</h3>
                        
                        <div className={styles.serviceCard}>
                            <div className={styles.iconBox}>
                                <Monitor size={24} />
                            </div>
                            <div className={styles.serviceContent}>
                                <h4>Custom Veterinary Website</h4>
                                <p>A beautiful, high-speed website optimized for Google. We handle the design, hosting, and SEO.</p>
                                <div className={styles.tagRow}>
                                    <span>Online Booking</span>
                                    <span>Mobile Friendly</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={styles.iconBox}>
                                <Smartphone size={24} />
                            </div>
                            <div className={styles.serviceContent}>
                                <h4>Branded Client App</h4>
                                <p>Your own app in the App Store. Clients can view vaccines, book appointments, and pay bills.</p>
                                <div className={styles.tagRow}>
                                    <span>Push Reminders</span>
                                    <span>Pet Profiles</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={styles.iconBox}>
                                <Wrench size={24} />
                            </div>
                            <div className={styles.serviceContent}>
                                <h4>Maintenance & Support</h4>
                                <p>Never worry about updates. We manage security, backups, and content changes for you.</p>
                                <div className={styles.tagRow}>
                                    <span>24/7 Monitoring</span>
                                    <span>Free Updates</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Consultation Form */}
                    <div className={styles.formColumn}>
                        <div className={styles.formCard}>
                            <div className={styles.formHeader}>
                                <h3>Book a Consultation</h3>
                                <p>Let's discuss your clinic's needs. No pressure, just a chat.</p>
                            </div>

                            <form className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label>Clinic Name</label>
                                    <input type="text" placeholder="e.g. City Vet Hospital" />
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.inputGroup}>
                                        <label>Contact Name</label>
                                        <input type="text" placeholder="Dr. Jane Doe" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Phone Number</label>
                                        <input type="tel" placeholder="0400 000 000" />
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Email Address</label>
                                    <input type="email" placeholder="jane@clinic.com" />
                                </div>

                                <div className={styles.interestSection}>
                                    <label>I'm interested in:</label>
                                    <div className={styles.checkboxGrid}>
                                        <label className={styles.checkboxItem}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.checkmark}></span>
                                            <div>
                                                <strong>New Website</strong>
                                                <small>Design + SEO</small>
                                            </div>
                                        </label>
                                        <label className={styles.checkboxItem}>
                                            <input type="checkbox" defaultChecked />
                                            <span className={styles.checkmark}></span>
                                            <div>
                                                <strong>Mobile App</strong>
                                                <small>iOS + Android</small>
                                            </div>
                                        </label>
                                        <label className={styles.checkboxItem}>
                                            <input type="checkbox" />
                                            <span className={styles.checkmark}></span>
                                            <div>
                                                <strong>Booking System</strong>
                                                <small>Online Scheduling</small>
                                            </div>
                                        </label>
                                        <label className={styles.checkboxItem}>
                                            <input type="checkbox" />
                                            <span className={styles.checkmark}></span>
                                            <div>
                                                <strong>Automation & Reminders</strong>
                                                <small>SMS + Email Workflows</small>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Request Call Back
                                    <ArrowRight size={18} />
                                </button>
                                
                                <div className={styles.trustFooter}>
                                    <ShieldCheck size={14} />
                                    <span>Your data is secure. We reply within 24 hours.</span>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;