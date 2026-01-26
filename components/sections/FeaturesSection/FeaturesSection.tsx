import React from 'react';
import styles from './FeaturesSection.module.css';

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
        title: 'Quality Guaranteed',
        description:
            'Every product is inspected for peak freshness. If it\'s not perfect, we\'ll make it right.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: 'Local First',
        description:
            'We partner with 150+ local farms within 200 miles. Supporting communities, reducing miles.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: '24-Hour Delivery',
        description:
            'From farm to your door in under 24 hours. Freshness isn\'t negotiable.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Transparent Sourcing',
        description:
            'Know exactly where your food comes from. Every product, every farm, traceable.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: 'Expert Curation',
        description:
            'Our team of food experts handpick every selection. Curated, not just collected.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        title: 'Stay Updated',
        description:
            'Weekly harvest reports, seasonal recipes, and exclusive offers. Never miss peak season.',
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Why Freshway</span>
                    <h2 className={styles.title}>The Freshway Difference</h2>
                    <p className={styles.description}>
                        We're not just another grocery delivery. We're your connection to real food,
                        real farmers, and real freshness.
                    </p>
                </div>

                {/* Features Grid */}
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <article key={index} className={styles.card}>
                            <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
                            <div className={styles.cardContent}>
                                <div className={styles.cardIcon}>{feature.icon}</div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>{feature.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
