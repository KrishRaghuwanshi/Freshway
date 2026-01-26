'use client';

import React, { useState, useEffect } from 'react';
import styles from './CartDrawer.module.css';
import { Button } from '@/components/core/Button';
import { useCartStore, useUIStore } from '@/lib/store';
import { useClickOutside, useLockBodyScroll } from '@/lib/hooks';

const CartDrawer: React.FC = () => {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
    const { isCartOpen, setCartOpen } = useUIStore();
    const drawerRef = useClickOutside<HTMLDivElement>(() => setCartOpen(false));
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useLockBodyScroll(isCartOpen);

    if (!hasMounted) {
        return null;
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`${styles.backdrop} ${isCartOpen ? styles.backdropOpen : ''}`}
                onClick={() => setCartOpen(false)}
            />

            {/* Drawer */}
            <div
                ref={drawerRef}
                className={`${styles.drawer} ${isCartOpen ? styles.drawerOpen : ''}`}
            >
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Your Cart</h2>
                    <button
                        className={styles.closeButton}
                        onClick={() => setCartOpen(false)}
                        aria-label="Close cart"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            <div className={styles.emptyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 01-8 0" />
                                </svg>
                            </div>
                            <p className={styles.emptyText}>Your cart is empty</p>
                            <Button variant="primary" onClick={() => setCartOpen(false)} href="/shop">
                                Start Shopping
                            </Button>
                        </div>
                    ) : (
                        <>
                            {/* Items list */}
                            <ul className={styles.items}>
                                {items.map((item) => (
                                    <li key={item.product.id} className={styles.item}>
                                        <div className={styles.itemImage}>
                                            {item.product.images?.[0] ? (
                                                <img src={item.product.images[0]} alt={item.product.name} />
                                            ) : (
                                                <div className={styles.itemImagePlaceholder} />
                                            )}
                                        </div>
                                        <div className={styles.itemDetails}>
                                            <h4 className={styles.itemName}>{item.product.name}</h4>
                                            <p className={styles.itemOrigin}>{item.product.origin}</p>
                                            <p className={styles.itemPrice}>
                                                {formatPrice(item.product.price)} / {item.product.unit}
                                            </p>
                                        </div>
                                        <div className={styles.itemActions}>
                                            <div className={styles.quantityControl}>
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
                                            <button
                                                className={styles.removeButton}
                                                onClick={() => removeItem(item.product.id)}
                                                aria-label="Remove item"
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Clear cart */}
                            {items.length > 0 && (
                                <button className={styles.clearButton} onClick={clearCart}>
                                    Clear Cart
                                </button>
                            )}
                        </>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.subtotal}>
                            <span>Subtotal</span>
                            <span className={styles.subtotalPrice}>{formatPrice(getTotalPrice())}</span>
                        </div>
                        <p className={styles.shipping}>Shipping calculated at checkout</p>
                        <Button variant="accent" size="lg" fullWidth href="/cart">
                            Proceed to Checkout
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
