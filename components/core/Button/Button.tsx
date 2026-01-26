'use client';

import React, { forwardRef } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    isLoading?: boolean;
    isIcon?: boolean;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
    children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            isLoading = false,
            isIcon = false,
            fullWidth = false,
            leftIcon,
            rightIcon,
            href,
            children,
            className = '',
            disabled,
            ...props
        },
        ref
    ) => {
        const classNames = [
            styles.button,
            styles[variant],
            styles[size],
            isIcon && styles.icon,
            fullWidth && styles.fullWidth,
            isLoading && styles.loading,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const content = (
            <>
                {isLoading && <span className={styles.spinner} />}
                {leftIcon && (
                    <span className={`${styles.buttonIcon} ${styles.iconLeft}`}>
                        {leftIcon}
                    </span>
                )}
                {children}
                {rightIcon && (
                    <span className={`${styles.buttonIcon} ${styles.iconRight}`}>
                        {rightIcon}
                    </span>
                )}
            </>
        );

        if (href && !disabled) {
            return (
                <a href={href} className={classNames}>
                    {content}
                </a>
            );
        }

        return (
            <button
                ref={ref}
                className={classNames}
                disabled={disabled || isLoading}
                {...props}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
