'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import { Button } from '@/components/core/Button';
import { useReducedMotion } from '@/lib/hooks';

const HeroSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // Slow, calm playback
        }
    }, []);

    return (
        <section className={`${styles.hero} ${!videoLoaded ? styles.heroFallback : ''}`}>
            {/* Video Background */}
            {!reducedMotion && (
                <div className={styles.videoWrapper}>
                    <video
                        ref={videoRef}
                        className={styles.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onLoadedData={() => setVideoLoaded(true)}
                        poster="/optimized/images/freshway.webp"
                    >
                        <source src="/optimized/videos/hero.mp4" type="video/mp4" />
                    </video>
                </div>
            )}

            {/* Gradient Overlay */}
            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    Fresh Picks Available Now
                </div>

                <h1 className={styles.title}>
                    Farm-Fresh Groceries,{' '}
                    <span className={styles.titleHighlight}>Delivered</span>
                </h1>

                <p className={styles.subtitle}>
                    Experience the quality of a farmers market with the convenience of modern delivery.
                    Handpicked produce, curated with care.
                </p>

                <div className={styles.ctaGroup}>
                    <Button variant="accent" size="lg" href="/shop">
                        Shop Fresh Today
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Button>
                    <Button variant="glass" size="lg" href="/about">
                        Our Story
                    </Button>
                </div>
            </div>

            {/* Stats Bar */}
            <div className={styles.statsBar}>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>60+</span>
                    <span className={styles.statLabel}>Local Farms</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>2 Days</span>
                    <span className={styles.statLabel}>Farm to Door</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Fresh Guarantee</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
