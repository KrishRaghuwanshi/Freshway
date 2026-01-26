import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/legal.module.css';

export const metadata: Metadata = {
    title: 'Accessibility | Freshway Market',
    description: 'Learn about our commitment to accessibility and how we make Freshway Market usable for everyone.',
};

export default function AccessibilityPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Accessibility</h1>
                    <p className={styles.heroDescription}>
                        We&apos;re committed to making Freshway Market accessible to everyone.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.lastUpdated}>Last updated: January 26, 2026</p>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Our Commitment</h2>
                        <p className={styles.text}>
                            Freshway Market is committed to ensuring digital accessibility for people with
                            disabilities. We are continually improving the user experience for everyone and
                            applying the relevant accessibility standards.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Accessibility Features</h2>
                        <p className={styles.text}>
                            We have implemented the following features to enhance accessibility:
                        </p>
                        <ul className={styles.list}>
                            <li>Semantic HTML structure for screen reader compatibility</li>
                            <li>Keyboard navigation support throughout the site</li>
                            <li>Alt text for all meaningful images</li>
                            <li>Sufficient color contrast for text readability</li>
                            <li>Scalable text that adjusts to browser settings</li>
                            <li>Focus indicators for interactive elements</li>
                            <li>ARIA labels for complex interface components</li>
                            <li>Skip navigation links for screen reader users</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Standards</h2>
                        <p className={styles.text}>
                            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
                            These guidelines explain how to make web content more accessible for people with
                            disabilities and more user-friendly for everyone.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Assistive Technologies</h2>
                        <p className={styles.text}>
                            Our website is designed to be compatible with:
                        </p>
                        <ul className={styles.list}>
                            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                            <li>Screen magnification software</li>
                            <li>Speech recognition software</li>
                            <li>Keyboard-only navigation</li>
                            <li>Browser accessibility settings</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Known Issues</h2>
                        <p className={styles.text}>
                            We are aware that some parts of our website may not be fully accessible. We are
                            actively working to identify and fix these issues. If you encounter any barriers,
                            please let us know.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Feedback</h2>
                        <p className={styles.text}>
                            We welcome your feedback on the accessibility of Freshway Market. If you encounter
                            accessibility barriers or have suggestions for improvement, please contact us. We
                            take accessibility feedback seriously and will respond within 2 business days.
                        </p>
                    </div>

                    <div className={styles.contactBox}>
                        <h3 className={styles.contactTitle}>Need Assistance?</h3>
                        <p className={styles.contactText}>
                            If you need help with accessibility or have feedback, please{' '}
                            <Link href="/contact" className={styles.contactLink}>contact us</Link>.
                            You can also call us at 1-800-FRESHWAY for phone ordering assistance.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
