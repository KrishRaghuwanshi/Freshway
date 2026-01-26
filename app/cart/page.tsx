import { Metadata } from 'next';
import CartContent from './CartContent';

export const metadata: Metadata = {
    title: 'Cart | Freshway Market',
    description: 'Review your cart and proceed to checkout.',
};

export default function CartPage() {
    return <CartContent />;
}
