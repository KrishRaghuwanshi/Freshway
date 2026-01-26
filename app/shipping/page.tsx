import { Metadata } from 'next';
import Link from 'next/link';
import styles from './shipping.module.css';
import { Button } from '@/components/core/Button';

export const metadata: Metadata = {
    title: 'Shipping Info | Freshway Market',
    description: 'Learn about our shipping options, delivery times, and free shipping policy.',
};

export default function ShippingPage() {
    const shippingOptions = [
        {
            name: 'Standard Delivery',
            time: '2-3 Business Days',
            price: '$5.99',
            description: 'Perfect for pantry items and non-perishables.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16,8 20,8 23,11 23,16 16,16 16,8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
            ),
        },
        {
            name: 'Express Delivery',
            time: 'Next Business Day',
            price: '$12.99',
            description: 'Fast delivery for fresh produce and perishables.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
                </svg>
            ),
            featured: true,
        },
        {
            name: 'Same-Day Delivery',
            time: 'Within 4-6 Hours',
            price: '$19.99',
            description: 'Order by 12pm for same-day delivery. Available in select areas.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
        },
    ];

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Fast & Fresh</span>
                    <h1 className={styles.heroTitle}>Shipping Info</h1>
                    <p className={styles.heroDescription}>
                        From our farms to your door. Fresh, fast, and handled with care.
                    </p>
                </div>
            </section>

            {/* Shipping Options */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Delivery Options</h2>
                    <div className={styles.optionsGrid}>
                        {shippingOptions.map((option, index) => (
                            <div
                                key={index}
                                className={`${styles.optionCard} ${option.featured ? styles.optionCardFeatured : ''}`}
                            >
                                {option.featured && <span className={styles.popularBadge}>Most Popular</span>}
                                <div className={styles.optionIcon}>{option.icon}</div>
                                <h3 className={styles.optionName}>{option.name}</h3>
                                <p className={styles.optionTime}>{option.time}</p>
                                <p className={styles.optionPrice}>{option.price}</p>
                                <p className={styles.optionDescription}>{option.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Shipping Banner */}
            <section className={styles.freeShipping}>
                <div className={styles.container}>
                    <div className={styles.freeShippingContent}>
                        <div className={styles.freeShippingIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 8V21H3V8" />
                                <path d="M1 3h22v5H1z" />
                                <path d="M10 12h4" />
                            </svg>
                        </div>
                        <div>
                            <h3 className={styles.freeShippingTitle}>Free Shipping on Orders Over $50</h3>
                            <p className={styles.freeShippingText}>
                                Enjoy complimentary standard delivery when you spend $50 or more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>How is fresh produce shipped?</h4>
                            <p className={styles.faqAnswer}>
                                All perishable items are packed with insulated liners and ice packs to maintain
                                optimal temperature throughout transit. Our cold chain process ensures your produce
                                arrives fresh.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>What areas do you deliver to?</h4>
                            <p className={styles.faqAnswer}>
                                We currently deliver to the continental United States. Same-day delivery is
                                available in select metropolitan areas. Enter your zip code at checkout to see
                                available options.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>Can I track my order?</h4>
                            <p className={styles.faqAnswer}>
                                Yes! Once your order ships, you&apos;ll receive a confirmation email with a tracking
                                number. You can monitor your delivery in real-time through our website or the
                                carrier&apos;s tracking page.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h4 className={styles.faqQuestion}>What if I&apos;m not home for delivery?</h4>
                            <p className={styles.faqAnswer}>
                                Our packages are designed to keep items fresh for up to 12 hours after delivery.
                                We recommend providing delivery instructions at checkout for a safe drop-off location.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Have More Questions?</h2>
                    <p className={styles.ctaDescription}>
                        Our customer service team is here to help with any shipping inquiries.
                    </p>
                    <Button variant="accent" size="lg" href="/contact">
                        Contact Us
                    </Button>
                </div>
            </section>
        </div>
    );
}
