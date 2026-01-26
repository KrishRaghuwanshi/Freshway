import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
    variant?: 'peakQuality' | 'origin' | 'seasonal' | 'new' | 'sale' | 'organic' | 'default';
    size?: 'sm' | 'md' | 'lg';
    pill?: boolean;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    variant = 'default',
    size = 'md',
    pill = false,
    icon,
    children,
    className = '',
}) => {
    const classNames = [
        styles.badge,
        styles[variant],
        styles[size],
        pill && styles.pill,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <span className={classNames}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </span>
    );
};

// Preset badges for common use cases
export const PeakQualityBadge: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'sm' }) => (
    <Badge
        variant="peakQuality"
        size={size}
        icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
        }
    >
        Peak Quality
    </Badge>
);

export const OrganicBadge: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'sm' }) => (
    <Badge
        variant="organic"
        size={size}
        icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
        }
    >
        Organic
    </Badge>
);

export default Badge;
