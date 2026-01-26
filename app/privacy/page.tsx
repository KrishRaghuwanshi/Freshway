import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/legal.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy | Freshway Market',
    description: 'Learn how Freshway Market collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Privacy Policy</h1>
                    <p className={styles.heroDescription}>
                        Your privacy matters to us. Here&apos;s how we handle your data.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <p className={styles.lastUpdated}>Last updated: January 26, 2026</p>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Information We Collect</h2>
                        <p className={styles.text}>
                            When you use Freshway Market, we may collect the following types of information:
                        </p>
                        <ul className={styles.list}>
                            <li>Personal identification information (name, email address, phone number)</li>
                            <li>Delivery address and billing information</li>
                            <li>Order history and preferences</li>
                            <li>Communication records when you contact our support team</li>
                            <li>Device and browser information for website optimization</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
                        <p className={styles.text}>
                            We use your information to:
                        </p>
                        <ul className={styles.list}>
                            <li>Process and deliver your orders</li>
                            <li>Communicate about your orders and account</li>
                            <li>Improve our products and services</li>
                            <li>Personalize your shopping experience</li>
                            <li>Send promotional communications (with your consent)</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Information Sharing</h2>
                        <p className={styles.text}>
                            We do not sell your personal information. We may share your information with:
                        </p>
                        <ul className={styles.list}>
                            <li>Delivery partners to fulfill your orders</li>
                            <li>Payment processors for secure transactions</li>
                            <li>Service providers who help operate our business</li>
                            <li>Legal authorities when required by law</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Data Security</h2>
                        <p className={styles.text}>
                            We implement industry-standard security measures to protect your personal information.
                            This includes encryption, secure servers, and regular security audits. However, no
                            method of transmission over the internet is 100% secure.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Your Rights</h2>
                        <p className={styles.text}>
                            You have the right to:
                        </p>
                        <ul className={styles.list}>
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt out of marketing communications</li>
                            <li>Data portability in certain circumstances</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Cookies</h2>
                        <p className={styles.text}>
                            We use cookies to improve your browsing experience and analyze website traffic.
                            You can control cookie preferences through your browser settings. Essential cookies
                            are required for the website to function properly.
                        </p>
                    </div>

                    <div className={styles.contactBox}>
                        <h3 className={styles.contactTitle}>Questions About Privacy?</h3>
                        <p className={styles.contactText}>
                            If you have questions about our privacy practices, please{' '}
                            <Link href="/contact" className={styles.contactLink}>contact us</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
