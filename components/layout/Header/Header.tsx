'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { Button } from '@/components/core/Button';
import { useCartStore, useUIStore } from '@/lib/store';
import { useScrollPosition, useLockBodyScroll } from '@/lib/hooks';

interface HeaderProps {
    variant?: 'default' | 'light';
}

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
    const pathname = usePathname();
    const { scrollPosition, scrollDirection } = useScrollPosition();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const totalItems = useCartStore((state) => state.getTotalItems());
    const toggleCart = useUIStore((state) => state.toggleCart);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useLockBodyScroll(isMobileNavOpen);

    const isScrolled = scrollPosition > 50;
    const isHidden = scrollDirection === 'down' && scrollPosition > 200 && !isMobileNavOpen;

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/shop', label: 'Shop' },
        { href: '/about', label: 'About' },
    ];

    const headerClasses = [
        styles.header,
        isScrolled && styles.scrolled,
        variant === 'light' && !isScrolled && styles.light,
        isHidden && styles.hidden,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <>
            <header className={headerClasses}>
                <div className={styles.headerInner}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                                <path d="M12 10v4M10 12h4" />
                            </svg>
                        </div>
                        <span className={`${styles.logoText} ${variant === 'light' && !isScrolled ? styles.logoTextLight : ''}`}>
                            Freshway
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        <ul className={styles.navLinks}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Actions */}
                        <div className={styles.actions}>
                            <button
                                className={styles.cartButton}
                                onClick={toggleCart}
                                aria-label={`Shopping cart with ${totalItems} items`}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 01-8 0" />
                                </svg>
                                {hasMounted && totalItems > 0 && (
                                    <span className={styles.cartCount}>{totalItems > 99 ? '99+' : totalItems}</span>
                                )}
                            </button>

                            <Button variant={isScrolled ? 'primary' : 'glass'} size="sm" href="/shop">
                                Shop Now
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={`${styles.menuButton} ${isMobileNavOpen ? styles.menuButtonOpen : ''}`}
                        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                        aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* Mobile Navigation */}
            <nav className={`${styles.mobileNav} ${isMobileNavOpen ? styles.open : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMobileNavOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button variant="primary" size="lg" fullWidth href="/shop">
                    Shop Now
                </Button>
            </nav>
        </>
    );
};

export default Header;
