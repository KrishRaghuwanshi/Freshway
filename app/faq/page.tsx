'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './faq.module.css';
import { Button } from '@/components/core/Button';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqs: FAQItem[] = [
    {
        category: 'Orders & Delivery',
        question: 'How do I place an order?',
        answer: 'Browse our products, add items to your cart, and proceed to checkout. You\'ll need to be a verified customer to complete your purchase. Contact us to get verified if you haven\'t already.',
    },
    {
        category: 'Orders & Delivery',
        question: 'What are your delivery hours?',
        answer: 'Deliveries are made Monday through Saturday, between 8am and 8pm in your local time zone. You can select your preferred delivery window at checkout.',
    },
    {
        category: 'Orders & Delivery',
        question: 'Do you deliver to my area?',
        answer: 'We currently deliver to the continental United States. Same-day delivery is available in select metropolitan areas. Enter your zip code during checkout to see available options.',
    },
    {
        category: 'Products & Quality',
        question: 'How do you ensure product freshness?',
        answer: 'Every product includes freshness information showing when it was picked or produced. We use cold chain logistics with temperature-controlled packaging to maintain optimal freshness during transit.',
    },
    {
        category: 'Products & Quality',
        question: 'Are your products organic?',
        answer: 'Many of our products are certified organic, which is clearly indicated on the product page. We also carry conventional produce from trusted farmers who follow sustainable practices.',
    },
    {
        category: 'Products & Quality',
        question: 'Where do your products come from?',
        answer: 'We partner with over 150 farms across the country. Each product page shows the exact origin, so you know exactly where your food comes from. We prioritize local sourcing within 200 miles when possible.',
    },
    {
        category: 'Account & Verification',
        question: 'Why do I need to be verified to checkout?',
        answer: 'Verification helps us maintain the quality of our service and prevents fraudulent orders. It also unlocks exclusive benefits like priority delivery and member discounts.',
    },
    {
        category: 'Account & Verification',
        question: 'How do I become a verified customer?',
        answer: 'Contact us with "Account Verification" as the subject. Our team will guide you through the simple verification process, which typically takes 24-48 hours.',
    },
    {
        category: 'Payments & Pricing',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. All transactions are secured with industry-standard encryption.',
    },
    {
        category: 'Payments & Pricing',
        question: 'Is there a minimum order amount?',
        answer: 'There is no minimum order, but we offer free shipping on orders over $50. This helps us ensure our products reach you as fresh as possible by consolidating deliveries.',
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];
    const filteredFaqs = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.eyebrow}>Help Center</span>
                    <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
                    <p className={styles.heroDescription}>
                        Find answers to common questions about orders, delivery, and more.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    {/* Category Filter */}
                    <div className={styles.categories}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.categoryButton} ${activeCategory === cat ? styles.active : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className={styles.faqList}>
                        {filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={styles.faqCategory}>{faq.category}</span>
                                    <span className={styles.faqQuestionText}>{faq.question}</span>
                                    <span className={styles.faqIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Still Have Questions?</h2>
                    <p className={styles.ctaDescription}>
                        Can&apos;t find what you&apos;re looking for? Our support team is here to help.
                    </p>
                    <Button variant="accent" size="lg" href="/contact">
                        Contact Support
                    </Button>
                </div>
            </section>
        </div>
    );
}
