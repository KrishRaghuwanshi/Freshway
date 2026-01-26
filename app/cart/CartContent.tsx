'use client';

import React from 'react';
import Link from 'next/link';
import styles from './cart.module.css';
import { Button } from '@/components/core/Button';
import { useCartStore } from '@/lib/store';

const CartContent: React.FC = () => {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    const subtotal = getTotalPrice();
    const tax = subtotal * 0.08; // 8% tax estimate
    const total = subtotal + tax;

    if (items.length === 0) {
        return (
            <div className={styles.page}>
                <div className={styles.empty}>
                    <div className={styles.emptyIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                    </div>
                    <h1 className={styles.emptyTitle}>Your Cart is Empty</h1>
                    <p className={styles.emptyText}>
                        Looks like you haven't added any fresh picks yet. Start shopping to fill your cart!
                    </p>
                    <Button variant="primary" size="lg" href="/shop">
                        Browse Products
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <h1 className={styles.title}>Your Cart</h1>
                    <button className={styles.clearButton} onClick={clearCart}>
                        Clear All
                    </button>
                </header>

                <div className={styles.content}>
                    {/* Items */}
                    <div className={styles.items}>
                        {items.map((item) => (
                            <article key={item.product.id} className={styles.item}>
                                <div className={styles.itemImage}>
                                    {item.product.images?.[0] ? (
                                        <img
                                            src={item.product.images[0]}
                                            alt={item.product.name}
                                            className={styles.itemImg}
                                        />
                                    ) : (
                                        <div className={styles.itemImagePlaceholder}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                <div className={styles.itemInfo}>
                                    <Link href={`/product/${item.product.slug}`} className={styles.itemName}>
                                        {item.product.name}
                                    </Link>
                                    <span className={styles.itemOrigin}>{item.product.origin}</span>
                                    <span className={styles.itemUnitPrice}>
                                        {formatPrice(item.product.price)} / {item.product.unit}
                                    </span>
                                </div>

                                <div className={styles.itemQuantity}>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                        aria-label="Decrease quantity"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14" />
                                        </svg>
                                    </button>
                                    <span className={styles.quantity}>{item.quantity}</span>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                        aria-label="Increase quantity"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </button>
                                </div>

                                <div className={styles.itemPrice}>
                                    {formatPrice(item.product.price * item.quantity)}
                                </div>

                                <button
                                    className={styles.removeButton}
                                    onClick={() => removeItem(item.product.id)}
                                    aria-label="Remove item"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </article>
                        ))}
                    </div>

                    {/* Summary */}
                    <aside className={styles.summary}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>

                        <div className={styles.summaryRows}>
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Estimated Tax</span>
                                <span>{formatPrice(tax)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Shipping</span>
                                <span className={styles.free}>Free</span>
                            </div>
                        </div>

                        <div className={styles.totalRow}>
                            <span>Total</span>
                            <span className={styles.totalPrice}>{formatPrice(total)}</span>
                        </div>

                        <Button variant="accent" size="lg" fullWidth href="/contact">
                            Proceed to Checkout
                        </Button>

                        <p className={styles.note}>
                            Ready to order? <Link href="/contact" className={styles.contactLink}>Contact us</Link> to get verified and complete your purchase.
                        </p>

                        <Link href="/shop" className={styles.continueShopping}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Continue Shopping
                        </Link>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CartContent;
