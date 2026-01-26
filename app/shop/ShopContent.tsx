'use client';

import React, { useState, useMemo } from 'react';
import styles from './shop.module.css';
import { ProductCard } from '@/components/core/ProductCard';
import type { Product } from '@/lib/store';

interface ShopContentProps {
    products: Product[];
}

const categories = [
    { id: 'fruit', label: 'Fresh Fruit', count: 3 },
    { id: 'vegetable', label: 'Vegetables', count: 2 },
    { id: 'dairy', label: 'Dairy', count: 1 },
    { id: 'bakery', label: 'Bakery', count: 1 },
    { id: 'pantry', label: 'Pantry', count: 1 },
];

const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A to Z' },
];

const ShopContent: React.FC<ShopContentProps> = ({ products }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState('featured');
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const toggleCategory = (categoryId: string) => {
        setSelectedCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((c) => c !== categoryId)
                : [...prev, categoryId]
        );
    };

    const clearFilters = () => {
        setSelectedCategories([]);
    };

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by category
        if (selectedCategories.length > 0) {
            result = result.filter((p) => selectedCategories.includes(p.category));
        }

        // Sort
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'featured':
            default:
                result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }

        return result;
    }, [products, selectedCategories, sortBy]);

    return (
        <div className={styles.main}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarSection}>
                    <h3 className={styles.sidebarTitle}>Categories</h3>
                    <ul className={styles.filterList}>
                        {categories.map((cat) => (
                            <li key={cat.id} className={styles.filterItem}>
                                <input
                                    type="checkbox"
                                    id={`cat-${cat.id}`}
                                    className={styles.filterCheckbox}
                                    checked={selectedCategories.includes(cat.id)}
                                    onChange={() => toggleCategory(cat.id)}
                                />
                                <label htmlFor={`cat-${cat.id}`} className={styles.filterLabel}>
                                    {cat.label}
                                </label>
                                <span className={styles.filterCount}>{cat.count}</span>
                            </li>
                        ))}
                    </ul>

                    {selectedCategories.length > 0 && (
                        <button className={styles.clearFilters} onClick={clearFilters}>
                            Clear Filters
                        </button>
                    )}
                </div>
            </aside>

            {/* Content */}
            <div className={styles.content}>
                {/* Mobile filter toggle */}
                <button
                    className={styles.mobileFilterToggle}
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="4" y1="21" x2="4" y2="14" />
                        <line x1="4" y1="10" x2="4" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="3" />
                        <line x1="20" y1="21" x2="20" y2="16" />
                        <line x1="20" y1="12" x2="20" y2="3" />
                        <line x1="1" y1="14" x2="7" y2="14" />
                        <line x1="9" y1="8" x2="15" y2="8" />
                        <line x1="17" y1="16" x2="23" y2="16" />
                    </svg>
                    Filters {selectedCategories.length > 0 && `(${selectedCategories.length})`}
                </button>

                {/* Toolbar */}
                <div className={styles.toolbar}>
                    <p className={styles.resultCount}>
                        Showing <strong>{filteredProducts.length}</strong> products
                    </p>
                    <select
                        className={styles.sortSelect}
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        {sortOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                    <div className={styles.grid}>
                        {filteredProducts.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                priority={index < 8}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.noResults}>
                        <div className={styles.noResultsIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                        </div>
                        <h3 className={styles.noResultsTitle}>No products found</h3>
                        <p className={styles.noResultsText}>
                            Try adjusting your filters or browse all products.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopContent;
