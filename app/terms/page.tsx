import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/legal.module.css';

export const metadata: Metadata = {
    title: 'Terms of Service | Freshway Market',
    description: 'Read the terms and conditions for using Freshway Market services.',
};

export default function TermsPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Terms of Service</h1>
                    <p className={styles.heroDescription}>
                        Please read these terms carefully before using our services.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.lastUpdated}>Last updated: January 26, 2026</p>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
                        <p className={styles.text}>
                            By accessing or using Freshway Market, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Account Registration</h2>
                        <p className={styles.text}>
                            To make purchases, you must complete our verification process. You agree to:
                        </p>
                        <ul className={styles.list}>
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Notify us immediately of any unauthorized access</li>
                            <li>Accept responsibility for all activities under your account</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Orders and Payments</h2>
                        <p className={styles.text}>
                            All orders are subject to product availability and acceptance by Freshway Market.
                            We reserve the right to refuse or cancel any order. Prices are subject to change
                            without notice. Payment must be received before orders are processed.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Delivery</h2>
                        <p className={styles.text}>
                            We strive to deliver orders within the estimated timeframes, but these are not guaranteed.
                            Risk of loss transfers to you upon delivery. You must ensure someone is available to
                            receive perishable items.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Product Information</h2>
                        <p className={styles.text}>
                            We make every effort to display products accurately. However, actual colors and
                            appearances may vary. Product weights are approximate. Nutritional information
                            is provided for reference only.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Returns and Refunds</h2>
                        <p className={styles.text}>
                            Our freshness guarantee allows returns within 24 hours of delivery for items that
                            don&apos;t meet our quality standards. See our{' '}
                            <Link href="/returns" className={styles.contactLink}>Returns Policy</Link> for details.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Intellectual Property</h2>
                        <p className={styles.text}>
                            All content on Freshway Market, including text, graphics, logos, and images, is our
                            property or licensed to us. You may not use, copy, or distribute this content without
                            our written permission.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
                        <p className={styles.text}>
                            To the fullest extent permitted by law, Freshway Market shall not be liable for any
                            indirect, incidental, special, or consequential damages arising from your use of our
                            services.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Changes to Terms</h2>
                        <p className={styles.text}>
                            We may update these terms from time to time. Continued use of our services after
                            changes constitutes acceptance of the new terms.
                        </p>
                    </div>

                    <div className={styles.contactBox}>
                        <h3 className={styles.contactTitle}>Questions?</h3>
                        <p className={styles.contactText}>
                            If you have questions about these terms, please{' '}
                            <Link href="/contact" className={styles.contactLink}>contact us</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
