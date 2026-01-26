'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import styles from './ProductCard.module.css';
import { Button } from '../Button';
import { PeakQualityBadge, OrganicBadge } from '../Badge';
import { useCartStore, type Product } from '@/lib/store';

export interface ProductCardProps {
    product: Product;
    showDescription?: boolean;
    priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    showDescription = false,
    priority = false,
}) => {
    const [showAdded, setShowAdded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product);
            setShowAdded(true);
            setTimeout(() => setShowAdded(false), 1500);
        },
        [addItem, product]
    );

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    return (
        <article className={styles.card}>
            <Link href={`/product/${product.slug}`} className={styles.link}>
                {/* Image */}
                <div className={styles.imageWrapper}>
                    {!imageError && product.images?.[0] ? (
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className={styles.image}
                            loading={priority ? 'eager' : 'lazy'}
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 10H5V9h14v6z" />
                            </svg>
                        </div>
                    )}

                    {/* Badges */}
                    <div className={styles.badges}>
                        {product.freshness?.peakQuality && <PeakQualityBadge />}
                    </div>

                    {/* Quick Add Button */}
                    <div className={styles.quickAdd}>
                        <Button
                            variant="accent"
                            size="sm"
                            onClick={handleAddToCart}
                            aria-label={`Add ${product.name} to cart`}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            Add
                        </Button>
                    </div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    <span className={styles.origin}>{product.origin}</span>
                    <h3 className={styles.name}>{product.name}</h3>
                    {showDescription && product.description && (
                        <p className={styles.description}>{product.description}</p>
                    )}
                    <div className={styles.priceRow}>
                        <span className={styles.price}>{formatPrice(product.price)}</span>
                        <span className={styles.unit}>/ {product.unit}</span>
                    </div>
                </div>

                {/* Added to cart overlay */}
                {showAdded && (
                    <div className={styles.addedOverlay}>
                        <div className={styles.addedIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className={styles.addedText}>Added to cart</span>
                    </div>
                )}
            </Link>
        </article>
    );
};

// Skeleton loader for product cards
export const ProductCardSkeleton: React.FC = () => (
    <div className={styles.card}>
        <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
        <div className={styles.content}>
            <div className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonTextShort}`} />
            <div className={`${styles.skeleton} ${styles.skeletonText}`} />
            <div className={`${styles.skeleton} ${styles.skeletonPrice}`} />
        </div>
    </div>
);

export default ProductCard;
