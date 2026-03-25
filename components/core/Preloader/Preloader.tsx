'use client';

import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export const Preloader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsLoading(false);
            // Restore scroll slightly after fade out animation begins
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 800);
        }, 1500); // 1.5 seconds loading time

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (!isLoading) {
        // Add a class to body when loaded so other animations can start
        if (typeof document !== 'undefined') {
            document.body.classList.add('app-loaded');
        }
        return null;
    }

    return (
        <div className={`${styles.preloader} ${!isLoading ? styles.hidden : ''}`}>
            <div className={styles.content}>
                <div className={styles.sproutContainer}>
                    {/* Animated leaf/sprout icon */}
                    <svg className={styles.leaf} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 21A11 11 0 012 10C5 10 9 10.5 12 13M11 21C11 10.5 13 3 22 2C22 5.5 20.5 15.5 12 17" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17C12 17 11 18.5 11 21" />
                    </svg>
                </div>
                
                <div className={styles.textWrapper}>
                    <h2 className={styles.title}>Loading Market</h2>
                    <div className={styles.dots}>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                    </div>
                </div>
                
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar}></div>
                </div>
            </div>
        </div>
    );
};
