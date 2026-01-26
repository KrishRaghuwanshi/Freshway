import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    subcategory: string;
    price: number;
    unit: string;
    origin: string;
    freshness: {
        picked?: string;
        baked?: string;
        harvested?: string;
        churned?: string;
        peakQuality: boolean;
        guaranteedDays: number;
    };
    nutrition: Record<string, string | number>;
    images: string[];
    description: string;
    featured: boolean;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

// Cart Store
interface CartStore {
    items: CartItem[];
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product, quantity = 1) => {
                const items = get().items;
                const existingItem = items.find(item => item.product.id === product.id);

                if (existingItem) {
                    set({
                        items: items.map(item =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                    });
                } else {
                    set({ items: [...items, { product, quantity }] });
                }
            },

            removeItem: (productId) => {
                set({ items: get().items.filter(item => item.product.id !== productId) });
            },

            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }

                set({
                    items: get().items.map(item =>
                        item.product.id === productId
                            ? { ...item, quantity }
                            : item
                    ),
                });
            },

            clearCart: () => set({ items: [] }),

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getTotalPrice: () => {
                return get().items.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                );
            },
        }),
        {
            name: 'freshway-cart',
        }
    )
);

// Filter Store
interface FilterStore {
    category: string | null;
    origin: string | null;
    priceRange: [number, number];
    dietary: string[];
    searchQuery: string;
    setCategory: (category: string | null) => void;
    setOrigin: (origin: string | null) => void;
    setPriceRange: (range: [number, number]) => void;
    setDietary: (dietary: string[]) => void;
    setSearchQuery: (query: string) => void;
    clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
    category: null,
    origin: null,
    priceRange: [0, 100],
    dietary: [],
    searchQuery: '',

    setCategory: (category) => set({ category }),
    setOrigin: (origin) => set({ origin }),
    setPriceRange: (priceRange) => set({ priceRange }),
    setDietary: (dietary) => set({ dietary }),
    setSearchQuery: (searchQuery) => set({ searchQuery }),

    clearFilters: () => set({
        category: null,
        origin: null,
        priceRange: [0, 100],
        dietary: [],
        searchQuery: '',
    }),
}));

// UI Store (for modals, mobile nav, etc.)
interface UIStore {
    isMobileNavOpen: boolean;
    isCartOpen: boolean;
    setMobileNavOpen: (open: boolean) => void;
    setCartOpen: (open: boolean) => void;
    toggleMobileNav: () => void;
    toggleCart: () => void;
}

export const useUIStore = create<UIStore>((set, get) => ({
    isMobileNavOpen: false,
    isCartOpen: false,

    setMobileNavOpen: (open) => set({ isMobileNavOpen: open }),
    setCartOpen: (open) => set({ isCartOpen: open }),
    toggleMobileNav: () => set({ isMobileNavOpen: !get().isMobileNavOpen }),
    toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
}));
