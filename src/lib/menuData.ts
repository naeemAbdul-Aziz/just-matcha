// Central menu data — single source of truth for the Just Matcha menu.
// All drink names & prices are derived from the physical wall + printed menus.

export interface MenuItem {
  id: string;
  name: string;
  price: number; // in GH₵
  category: MenuCategory;
  description: string;
  tag?: string;
  tagColor?: string;
  tagTextColor?: string;
}

export type MenuCategory =
  | 'fruity'
  | 'lattes'
  | 'citrus'
  | 'chocolate'
  | 'after_dark'
  | 'wild'
  | 'signature';

export interface MenuCategoryInfo {
  id: MenuCategory;
  label: string;
  emoji?: string;
}

export const MENU_CATEGORIES: MenuCategoryInfo[] = [
  { id: 'signature', label: 'Signature', emoji: '⭐' },
  { id: 'fruity', label: 'Fruity Series', emoji: '🍓' },
  { id: 'lattes', label: 'Lattes', emoji: '🥛' },
  { id: 'citrus', label: 'Citrus Drinks', emoji: '🍋' },
  { id: 'chocolate', label: 'Chocolate Moments', emoji: '🍫' },
  { id: 'after_dark', label: 'After Dark', emoji: '🌙' },
  { id: 'wild', label: 'Wild Series', emoji: '🔥' },
];

export const MENU_ITEMS: MenuItem[] = [
  // ── Signature / Featured ──────────────────────────────────────
  {
    id: 'maple-moments',
    name: 'Maple Moments',
    price: 90,
    category: 'signature',
    description: 'Rich maple syrup swirled into velvety matcha.',
    tag: 'Bestseller',
    tagColor: 'bg-white',
    tagTextColor: 'text-text-dark',
  },
  {
    id: 'honey-please-be-still',
    name: 'Honey, Please Be Still!',
    price: 90,
    category: 'signature',
    description: 'Raw honey meets smooth ceremonial matcha.',
    tag: 'Fan Fave',
    tagColor: 'bg-amber-800',
    tagTextColor: 'text-white',
  },
  {
    id: 'biscoff-behavior',
    name: 'Biscoff Behavior',
    price: 100,
    category: 'signature',
    description: 'Biscoff-infused matcha latte with caramelised notes.',
    tag: 'Trending',
    tagColor: 'bg-amber-800',
    tagTextColor: 'text-white',
  },

  // ── Fruity Series ─────────────────────────────────────────────
  {
    id: 'thirst-trap',
    name: 'Thirst Trap',
    price: 80,
    category: 'fruity',
    description: 'A fruity, refreshing matcha blend to quench your cravings.',
  },
  {
    id: 'indulge-me',
    name: 'Indulge Me',
    price: 80,
    category: 'fruity',
    description: 'Berry indulgence layered with matcha goodness.',
  },
  {
    id: 'friends-with-berry-fits',
    name: 'Friends With Berry Fits',
    price: 80,
    category: 'fruity',
    description: 'Mixed berries paired with matcha — no strings attached.',
  },
  {
    id: 'split-the-berry',
    name: 'Split The Berry',
    price: 80,
    category: 'fruity',
    description: 'A split shot of berries and matcha.',
  },

  // ── Lattes ────────────────────────────────────────────────────
  {
    id: 'spectakulaa',
    name: 'Spectakulaa',
    price: 80,
    category: 'lattes',
    description: 'A spectacular matcha latte experience.',
  },
  {
    id: 'trendin-with-berry-fits',
    name: "Trendin' With Berry Fits",
    price: 80,
    category: 'lattes',
    description: 'Trending berry flavours in a creamy matcha latte.',
  },

  // ── Citrus Drinks ─────────────────────────────────────────────
  {
    id: 'zesty-entanglement',
    name: 'Zesty Entanglement',
    price: 80,
    category: 'citrus',
    description: 'Citrus-kissed matcha with a zesty twist.',
  },

  // ── Chocolate Moments ─────────────────────────────────────────
  {
    id: 'cocoa-confessions',
    name: 'Cocoa Confessions',
    price: 80,
    category: 'chocolate',
    description: 'Cocoa and matcha come together in a rich confession.',
  },
  {
    id: 'white-lies',
    name: 'White Lies',
    price: 80,
    category: 'chocolate',
    description: 'White chocolate and matcha — a sweet deception.',
  },

  // ── After Dark 🌙 ─────────────────────────────────────────────
  {
    id: 'matchatwi',
    name: 'Matchatwi',
    price: 120,
    category: 'after_dark',
    description: 'A twilight matcha cocktail — smooth and bold.',
    tag: 'Premium',
    tagColor: 'bg-primary-dark',
    tagTextColor: 'text-white',
  },
  {
    id: 'boozy-cream',
    name: 'Boozy Cream',
    price: 120,
    category: 'after_dark',
    description: 'Creamy matcha meets a splash of indulgence.',
    tag: 'Premium',
    tagColor: 'bg-primary-dark',
    tagTextColor: 'text-white',
  },

  // ── Wild Series (NEW) ─────────────────────────────────────────
  {
    id: 'sweet-talker',
    name: 'Sweet Talker',
    price: 80,
    category: 'wild',
    description: 'Sweet, smooth, and impossible to resist.',
    tag: 'New',
    tagColor: 'bg-red-600',
    tagTextColor: 'text-white',
  },
  {
    id: 'no-whey-bae',
    name: 'No Whey Bae',
    price: 80,
    category: 'wild',
    description: 'A dairy-free matcha favourite — no whey, all vibe.',
    tag: 'New',
    tagColor: 'bg-red-600',
    tagTextColor: 'text-white',
  },
];

// ── Helper utilities ──────────────────────────────────────────────

/** Look up a menu item by its id. */
export const getMenuItemById = (id: string): MenuItem | undefined =>
  MENU_ITEMS.find((item) => item.id === id);

/** Get all items in a category. */
export const getItemsByCategory = (category: MenuCategory): MenuItem[] =>
  MENU_ITEMS.filter((item) => item.category === category);

/** Featured / landing-page items (the three signature drinks). */
export const FEATURED_ITEMS: MenuItem[] = [
  MENU_ITEMS.find((i) => i.id === 'thirst-trap')!,
  MENU_ITEMS.find((i) => i.id === 'biscoff-behavior')!,
  MENU_ITEMS.find((i) => i.id === 'matchatwi')!,
];

/** Format a price value as a GH₵ string. */
export const formatPrice = (amount: number): string =>
  `GH₵ ${amount.toFixed(2)}`;
