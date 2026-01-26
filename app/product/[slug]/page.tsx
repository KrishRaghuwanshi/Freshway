import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductDetail from './ProductDetail';
import products from '@/data/products.json';

interface ProductPageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        return {
            title: 'Product Not Found | Freshway Market',
        };
    }

    return {
        title: `${product.name} | Freshway Market`,
        description: product.description,
    };
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return <ProductDetail product={product} />;
}
