'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './product.module.css';
import { Button } from '@/components/core/Button';
import { PeakQualityBadge } from '@/components/core/Badge';
import { useCartStore, type Product } from '@/lib/store';

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [showAdded, setShowAdded] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem(product, quantity);
        setShowAdded(true);
        setTimeout(() => setShowAdded(false), 2000);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <div className={styles.page}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
                <Link href="/">Home</Link>
                <span className={styles.breadcrumbSeparator}>/</span>
                <Link href="/shop">Shop</Link>
                <span className={styles.breadcrumbSeparator}>/</span>
                <Link href={`/shop?category=${product.category}`} className={styles.capitalize}>
                    {product.category}
                </Link>
                <span className={styles.breadcrumbSeparator}>/</span>
                <span className={styles.breadcrumbCurrent}>{product.name}</span>
            </nav>

            <div className={styles.container}>
                {/* Image Gallery */}
                <div className={styles.gallery}>
                    <div className={styles.mainImage}>
                        {product.images?.[0] ? (
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className={styles.productImage}
                            />
                        ) : (
                            <div className={styles.imagePlaceholder}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{product.name}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Product Info */}
                <div className={styles.info}>
                    {/* Badges */}
                    <div className={styles.badges}>
                        {product.freshness?.peakQuality && <PeakQualityBadge size="md" />}
                    </div>

                    {/* Origin */}
                    <span className={styles.origin}>{product.origin}</span>

                    {/* Name */}
                    <h1 className={styles.name}>{product.name}</h1>

                    {/* Price */}
                    <div className={styles.priceRow}>
                        <span className={styles.price}>{formatPrice(product.price)}</span>
                        <span className={styles.unit}>/ {product.unit}</span>
                    </div>

                    {/* Description */}
                    <p className={styles.description}>{product.description}</p>

                    {/* Freshness Info */}
                    <div className={styles.freshnessCard}>
                        <div className={styles.freshnessRow}>
                            <span className={styles.freshnessLabel}>Picked</span>
                            <span className={styles.freshnessValue}>
                                {formatDate(product.freshness?.picked || product.freshness?.baked || product.freshness?.harvested || '')}
                            </span>
                        </div>
                        <div className={styles.freshnessRow}>
                            <span className={styles.freshnessLabel}>Freshness Guarantee</span>
                            <span className={styles.freshnessValue}>{product.freshness?.guaranteedDays} days</span>
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className={styles.actions}>
                        <div className={styles.quantitySelector}>
                            <button
                                className={styles.quantityButton}
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                aria-label="Decrease quantity"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14" />
                                </svg>
                            </button>
                            <span className={styles.quantity}>{quantity}</span>
                            <button
                                className={styles.quantityButton}
                                onClick={() => setQuantity(quantity + 1)}
                                aria-label="Increase quantity"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </button>
                        </div>

                        <Button
                            variant="accent"
                            size="lg"
                            fullWidth
                            onClick={handleAddToCart}
                            className={showAdded ? styles.addedButton : ''}
                        >
                            {showAdded ? (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    Added to Cart
                                </>
                            ) : (
                                <>
                                    Add to Cart — {formatPrice(product.price * quantity)}
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Nutrition */}
                    <div className={styles.nutritionSection}>
                        <h3 className={styles.nutritionTitle}>Nutrition Facts</h3>
                        <div className={styles.nutritionGrid}>
                            {Object.entries(product.nutrition).map(([key, value]) => (
                                <div key={key} className={styles.nutritionItem}>
                                    <span className={styles.nutritionLabel}>{key}</span>
                                    <span className={styles.nutritionValue}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
