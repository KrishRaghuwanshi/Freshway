import { Metadata } from 'next';
import ShopContent from './ShopContent';
import products from '@/data/products.json';
import styles from './shop.module.css';

export const metadata: Metadata = {
    title: 'Shop | Freshway Market',
    description: 'Browse our curated selection of farm-fresh produce, dairy, bakery, and pantry essentials.',
};

export default function ShopPage() {
    return (
        <div className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Fresh Picks</h1>
                    <p className={styles.heroDescription}>
                        Every item handpicked for peak quality. Browse by category or discover something new.
                    </p>
                </div>
            </section>

            {/* Shop Content */}
            <ShopContent products={products} />
        </div>
    );
}
