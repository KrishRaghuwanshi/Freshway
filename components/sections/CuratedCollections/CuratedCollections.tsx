'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './CuratedCollections.module.css';
import { ProductCard } from '@/components/core/ProductCard';
import type { Product } from '@/lib/store';

interface CuratedCollectionsProps {
    products: Product[];
}

const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'fruit', label: 'Fresh Fruit' },
    { id: 'vegetable', label: 'Vegetables' },
    { id: 'dairy', label: 'Dairy' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'pantry', label: 'Pantry' },
];

const CuratedCollections: React.FC<CuratedCollectionsProps> = ({ products }) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products.filter(p => p.featured).slice(0, 8)
        : products.filter(p => p.category === activeCategory).slice(0, 8);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <span className={styles.eyebrow}>Peak Quality Today</span>
                        <h2 className={styles.title}>Handpicked for You</h2>
                        <p className={styles.description}>
                            Fresh arrivals curated by our team. Every item guaranteed at peak quality.
                        </p>
                    </div>
                    <Link href="/shop" className={styles.viewAll}>
                        View All Products
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Category filters */}
                <div className={styles.categories}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`${styles.categoryButton} ${activeCategory === cat.id ? styles.categoryButtonActive : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className={styles.grid}>
                    {filteredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            priority={index < 4}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuratedCollections;
