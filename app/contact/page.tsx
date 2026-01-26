'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import styles from './contact.module.css';
import { Button } from '@/components/core/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Get in Touch</span>
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                    <p className={styles.heroDescription}>
                        Have questions about your order, our products, or want to become a verified customer?
                        We&apos;d love to hear from you.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            {submitted ? (
                                <div className={styles.successMessage}>
                                    <div className={styles.successIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                            <path d="M22 4L12 14.01l-3-3" />
                                        </svg>
                                    </div>
                                    <h2 className={styles.successTitle}>Message Sent!</h2>
                                    <p className={styles.successText}>
                                        Thank you for reaching out. Our team will get back to you within 24 hours.
                                    </p>
                                    <Button variant="primary" onClick={() => setSubmitted(false)}>
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    <h2 className={styles.formTitle}>Send us a Message</h2>
                                    <form className={styles.form} onSubmit={handleSubmit}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="name" className={styles.label}>Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="email" className={styles.label}>Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="subject" className={styles.label}>Subject</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className={styles.select}
                                                required
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="verification">Account Verification</option>
                                                <option value="order">Order Inquiry</option>
                                                <option value="products">Product Questions</option>
                                                <option value="partnership">Partnership Opportunities</option>
                                                <option value="feedback">Feedback</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="message" className={styles.label}>Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={styles.textarea}
                                                placeholder="Tell us how we can help..."
                                                rows={6}
                                                required
                                            />
                                        </div>
                                        <Button variant="accent" size="lg" type="submit">
                                            Send Message
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoSection}>
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>Contact Information</h3>
                                <div className={styles.infoItems}>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className={styles.infoLabel}>Email</span>
                                            <a href="mailto:hello@freshway.market" className={styles.infoValue}>
                                                hello@freshway.market
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className={styles.infoLabel}>Phone</span>
                                            <a href="tel:+1-800-FRESHWAY" className={styles.infoValue}>
                                                1-800-FRESHWAY
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 6v6l4 2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className={styles.infoLabel}>Hours</span>
                                            <span className={styles.infoValue}>
                                                Mon-Fri: 8am - 8pm EST<br />
                                                Sat-Sun: 9am - 6pm EST
                                            </span>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className={styles.infoLabel}>Address</span>
                                            <span className={styles.infoValue}>
                                                123 Fresh Market Lane<br />
                                                New York, NY 10001
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.verificationCard}>
                                <h3 className={styles.verificationTitle}>Become a Verified Customer</h3>
                                <p className={styles.verificationText}>
                                    Get access to exclusive products, priority delivery, and personalized recommendations.
                                    Select &quot;Account Verification&quot; as your subject to get started.
                                </p>
                                <ul className={styles.verificationList}>
                                    <li>Priority same-day delivery</li>
                                    <li>Access to rare seasonal items</li>
                                    <li>Personal shopping assistance</li>
                                    <li>Exclusive member discounts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
