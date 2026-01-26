import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import LenisProvider from '@/components/providers/LenisProvider';
import CartDrawer from '@/components/layout/CartDrawer';

export const metadata: Metadata = {
    title: 'Freshway Market | Farm-Fresh Groceries Delivered',
    description: 'Experience the quality of a farmers market with the convenience of modern delivery. Handpicked produce, curated with care.',
    keywords: ['grocery', 'fresh produce', 'farmers market', 'organic', 'delivery'],
    authors: [{ name: 'Krish Raghuwanshi' }],
    openGraph: {
        title: 'Freshway Market | Farm-Fresh Groceries Delivered',
        description: 'Experience the quality of a farmers market with the convenience of modern delivery.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Freshway Market',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Freshway Market',
        description: 'Farm-Fresh Groceries Delivered',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#1B4332',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <LenisProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <CartDrawer />
                </LenisProvider>
            </body>
        </html>
    );
}
