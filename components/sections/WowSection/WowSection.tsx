'use client';

import React, { Suspense, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './WowSection.module.css';
import { Button } from '@/components/core/Button';
import { useReducedMotion, useIntersectionObserver } from '@/lib/hooks';

// Dynamically import the 3D scene to reduce initial bundle
const ProductScene = dynamic(() => import('./ProductScene'), {
    ssr: false,
    loading: () => <LoadingState />,
});

const LoadingState = () => (
    <div className={styles.loading}>
        <div className={styles.loadingSpinner} />
        <span>Loading 3D Experience...</span>
    </div>
);

const WowSection: React.FC = () => {
    const reducedMotion = useReducedMotion();
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 });
    const [hasLoaded, setHasLoaded] = useState(false);

    // Only load 3D when section is visible
    const shouldLoad3D = isVisible || hasLoaded;

    if (isVisible && !hasLoaded) {
        setHasLoaded(true);
    }

    return (
        <section className={styles.section} ref={sectionRef as React.RefObject<HTMLElement>}>
            <div className={styles.container}>
                {/* 3D Canvas */}
                <div className={styles.canvasWrapper}>
                    <div className={styles.canvasGlow} />

                    {reducedMotion ? (
                        // Static fallback for reduced motion
                        <img
                            src="/optimized/images/orange.webp"
                            alt="Fresh produce tray"
                            className={styles.fallbackImage}
                        />
                    ) : (
                        <>
                            {shouldLoad3D && (
                                <div className={styles.canvas}>
                                    <Suspense fallback={<LoadingState />}>
                                        <ProductScene />
                                    </Suspense>
                                </div>
                            )}
                            <div className={styles.interactionHint}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 12h16M12 4v16" />
                                </svg>
                                Drag to rotate
                            </div>
                        </>
                    )}
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <div className={styles.eyebrow}>
                        <svg className={styles.eyebrowIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        Single Origin Spotlight
                    </div>

                    <h2 className={styles.title}>
                        Inspect Quality Like{' '}
                        <span className={styles.titleHighlight}>You're at the Market</span>
                    </h2>

                    <p className={styles.description}>
                        Every item tells a story. Rotate, examine, and discover the origin
                        of your food before it reaches your door. This is grocery shopping,
                        reimagined.
                    </p>

                    {/* Product Details */}
                    <div className={styles.details}>
                        <div className={styles.detailRow}>
                            <div className={styles.detailIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className={styles.detailText}>
                                <span className={styles.detailLabel}>Origin</span>
                                <span className={styles.detailValue}>Riverside, California</span>
                            </div>
                        </div>

                        <div className={styles.detailRow}>
                            <div className={styles.detailIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                            <div className={styles.detailText}>
                                <span className={styles.detailLabel}>Picked</span>
                                <span className={styles.detailValue}>January 24, 2026</span>
                            </div>
                        </div>

                        <div className={styles.detailRow}>
                            <div className={styles.detailIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className={styles.detailText}>
                                <span className={styles.detailLabel}>Freshness</span>
                                <span className={styles.detailValue}>Peak Quality Guaranteed</span>
                            </div>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className={styles.ctaGroup}>
                        <Button variant="accent" size="lg" href="/product/california-navel-orange">
                            View This Product
                        </Button>
                        <Button variant="glass" size="lg" href="/shop">
                            Explore All
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WowSection;
