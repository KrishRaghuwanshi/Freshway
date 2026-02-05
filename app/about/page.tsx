import { Metadata } from 'next';
import styles from './about.module.css';
import { Button } from '@/components/core/Button';

export const metadata: Metadata = {
    title: 'About | Freshway Market',
    description: 'Our story: How we became the modern green grocer. Learn about our mission, sourcing philosophy, and commitment to quality.',
};

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Our Story</span>
                    <h1 className={styles.heroTitle}>The Modern<br />Green Grocer</h1>
                    <p className={styles.heroDescription}>
                        Efficient like Amazon. Human like a farmers market.
                        We&apos;re reimagining what grocery shopping can be.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionContent}>
                            <span className={styles.sectionEyebrow}>Our Mission</span>
                            <h2 className={styles.sectionTitle}>Fresh Food Should Be Simple</h2>
                            <p className={styles.text}>
                                We started Freshway with a simple belief: everyone deserves access
                                to truly fresh, high-quality food without the complexity. No more
                                wondering if your produce is actually fresh. No more mystery about
                                where your food comes from.
                            </p>
                            <p className={styles.text}>
                                Every product on Freshway tells a story. From the farm it was grown
                                on, to the day it was picked, to the moment it arrives at your door.
                                This is grocery shopping with full transparency.
                            </p>
                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>150+</span>
                                    <span className={styles.statLabel}>Partner Farms</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>24hr</span>
                                    <span className={styles.statLabel}>Farm to Door</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>100%</span>
                                    <span className={styles.statLabel}>Traceable</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.missionImage}>
                            <img
                                src="/optimized/images/freshway.webp"
                                alt="Freshway Farm Partnership"
                                className={styles.missionImagePhoto}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={`${styles.section} ${styles.sectionDark}`}>
                <div className={styles.container}>
                    <div className={styles.valuesHeader}>
                        <span className={styles.sectionEyebrowLight}>Our Values</span>
                        <h2 className={styles.sectionTitleLight}>What We Stand For</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {[
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                ),
                                title: 'Uncompromising Quality',
                                description: "Every product is inspected. Every source is verified. Quality isn't negotiable.",
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                ),
                                title: 'Radical Transparency',
                                description: 'Know where your food comes from. Every product, every farm, every detail.',
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
                                title: 'Community First',
                                description: 'We partner with local farms. Your purchase supports real people.',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                ),
                                title: 'Local Sourcing',
                                description: "Within 200 miles when possible. Fresh food shouldn't travel far.",
                            },
                        ].map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey */}
            <section className={styles.section} id="sourcing">
                <div className={styles.container}>
                    <div className={styles.journeyHeader}>
                        <span className={styles.sectionEyebrow}>The Journey</span>
                        <h2 className={styles.sectionTitle}>From Farm to Your Door</h2>
                        <p className={styles.sectionDescription}>
                            Every step of the journey is designed to preserve peak freshness.
                        </p>
                    </div>
                    <div className={styles.timeline}>
                        {[
                            { step: '01', title: 'Harvested', description: 'Picked at peak ripeness by our partner farms' },
                            { step: '02', title: 'Inspected', description: 'Quality checked within hours of harvest' },
                            { step: '03', title: 'Packed', description: 'Carefully packed for optimal freshness' },
                            { step: '04', title: 'Delivered', description: 'At your door within 24 hours' },
                        ].map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <span className={styles.timelineStep}>{item.step}</span>
                                <div className={styles.timelineContent}>
                                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                                    <p className={styles.timelineDescription}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Taste the Difference?</h2>
                    <p className={styles.ctaDescription}>
                        Join thousands of food lovers who&apos;ve made the switch to truly fresh groceries.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Button variant="accent" size="lg" href="/shop">
                            Shop Now
                        </Button>
                        <Button variant="glass" size="lg" href="/">
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
