import { HeroSection } from '@/components/sections/HeroSection';
import { CuratedCollections } from '@/components/sections/CuratedCollections';
import { WowSection } from '@/components/sections/WowSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import products from '@/data/products.json';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <CuratedCollections products={products} />
            <WowSection />
            <FeaturesSection />
        </>
    );
}
