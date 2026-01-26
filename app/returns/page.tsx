import { Metadata } from 'next';
import Link from 'next/link';
import styles from './returns.module.css';
import { Button } from '@/components/core/Button';

export const metadata: Metadata = {
    title: 'Returns & Refunds | Freshway Market',
    description: 'Learn about our satisfaction guarantee, return policy, and how to request a refund.',
};

export default function ReturnsPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Customer Satisfaction</span>
                    <h1 className={styles.heroTitle}>Returns & Refunds</h1>
                    <p className={styles.heroDescription}>
                        Your satisfaction is our priority. If something isn&apos;t right, we&apos;ll make it right.
                    </p>
                </div>
            </section>

            {/* Guarantee Section */}
            <section className={styles.guarantee}>
                <div className={styles.container}>
                    <div className={styles.guaranteeCard}>
                        <div className={styles.guaranteeIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                        </div>
                        <h2 className={styles.guaranteeTitle}>100% Freshness Guarantee</h2>
                        <p className={styles.guaranteeText}>
                            If any product doesn&apos;t meet our freshness standards upon delivery,
                            we&apos;ll replace it or give you a full refund. No questions asked.
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.policyGrid}>
                        <div className={styles.policyCard}>
                            <div className={styles.policyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3 className={styles.policyTitle}>Report Within 24 Hours</h3>
                            <p className={styles.policyText}>
                                Contact us within 24 hours of delivery if you have any issues with your order.
                                Include photos of the affected items for faster resolution.
                            </p>
                        </div>
                        <div className={styles.policyCard}>
                            <div className={styles.policyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <path d="M22 6l-10 7L2 6" />
                                </svg>
                            </div>
                            <h3 className={styles.policyTitle}>Easy Online Requests</h3>
                            <p className={styles.policyText}>
                                Submit a return or refund request through our contact page. Our team
                                responds within 24 hours to resolve your issue.
                            </p>
                        </div>
                        <div className={styles.policyCard}>
                            <div className={styles.policyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                </svg>
                            </div>
                            <h3 className={styles.policyTitle}>Fast Refunds</h3>
                            <p className={styles.policyText}>
                                Once approved, refunds are processed within 3-5 business days. Credits
                                for replacement items are applied immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={styles.section} style={{ background: 'white' }}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>How to Request a Return</h2>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>1</span>
                            <h4 className={styles.stepTitle}>Contact Us</h4>
                            <p className={styles.stepText}>
                                Reach out through our contact page within 24 hours of receiving your order.
                            </p>
                        </div>
                        <div className={styles.stepArrow}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>2</span>
                            <h4 className={styles.stepTitle}>Share Details</h4>
                            <p className={styles.stepText}>
                                Describe the issue and include photos of the affected items.
                            </p>
                        </div>
                        <div className={styles.stepArrow}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>3</span>
                            <h4 className={styles.stepTitle}>Get Resolved</h4>
                            <p className={styles.stepText}>
                                Choose a replacement, store credit, or refund to your original payment method.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Need to Report an Issue?</h2>
                    <p className={styles.ctaDescription}>
                        We&apos;re here to help. Contact our team and we&apos;ll resolve it quickly.
                    </p>
                    <Button variant="accent" size="lg" href="/contact">
                        Contact Support
                    </Button>
                </div>
            </section>
        </div>
    );
}
