'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const shopLinks = [
        { href: '/shop', label: 'All Products' },
        { href: '/shop?category=fruit', label: 'Fresh Fruit' },
        { href: '/shop?category=vegetable', label: 'Vegetables' },
        { href: '/shop?category=dairy', label: 'Dairy & Eggs' },
        { href: '/shop?category=bakery', label: 'Bakery' },
    ];

    const companyLinks = [
        { href: '/about', label: 'Our Story' },
        { href: '/about#sourcing', label: 'Sourcing' },
        { href: '/about#sustainability', label: 'Sustainability' },
        { href: '/about#careers', label: 'Careers' },
    ];

    const supportLinks = [
        { href: '/contact', label: 'Contact Us' },
        { href: '/faq', label: 'FAQ' },
        { href: '/shipping', label: 'Shipping Info' },
        { href: '/returns', label: 'Returns' },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                {/* Main Grid */}
                <div className={styles.footerGrid}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <div className={styles.logoWrapper}>
                            <div className={styles.logoIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                                    <path d="M12 10v4M10 12h4" />
                                </svg>
                            </div>
                            <span className={styles.logoText}>Freshway</span>
                        </div>
                        <p className={styles.tagline}>
                            The Modern Green Grocer. Efficient like Amazon, human like a farmers market.
                        </p>

                        {/* Newsletter */}
                        <div className={styles.newsletter}>
                            <span className={styles.newsletterTitle}>Stay Fresh</span>
                            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={styles.newsletterInput}
                                    aria-label="Email for newsletter"
                                />
                                <button type="submit" className={styles.newsletterButton}>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Shop</h4>
                        <ul className={styles.linkList}>
                            {shopLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className={styles.linkColumn}>
                        <h4 className={styles.columnTitle}>Support</h4>
                        <ul className={styles.linkList}>
                            {supportLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {currentYear} Freshway Market. Portfolio project by Krish Raghuwanshi.
                    </p>

                    {/* Social Links */}
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                        </a>
                    </div>

                    {/* Legal Links */}
                    <div className={styles.legalLinks}>
                        <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
                        <Link href="/terms" className={styles.legalLink}>Terms</Link>
                        <Link href="/accessibility" className={styles.legalLink}>Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
