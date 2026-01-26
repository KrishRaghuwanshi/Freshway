'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '@/lib/hooks';

interface LenisProviderProps {
    children: React.ReactNode;
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        // Don't initialize Lenis if user prefers reduced motion
        if (reducedMotion) return;

        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
        };
    }, [reducedMotion]);

    return <>{children}</>;
};

export default LenisProvider;
