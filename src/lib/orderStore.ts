// orderStore.ts — lightweight localStorage order store.
// Acts as the bridge between the checkout flow and the admin dashboard
// until a real backend (Firebase / Supabase) is wired in.

export type OrderStatus = 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Matcha' | 'Milk' | 'Sweetener' | 'Boost' | 'Packaging';
  stock: number;
  unit: string;
}

export interface StoredOrder {
  id: string;            // e.g. #JM-8823
  code: string;          // friendly pickup code e.g. "Matcha-Sunset-Breeze"
  timestamp: string;     // ISO string
  displayTime: string;   // e.g. "10:42 AM"
  customer: {
    name: string;
    email: string;
    phone: string;
    city: string;
    address: string;
  };
  drink: {
    id: string;
    name: string;
    price: number;
  };
  customizations: {
    milkType: string;
    sweetener: string | null;
    sweetnessLevel: number;
    matchaIntensity: number;
    boosts: Record<string, boolean>;
    cupMessage: string;
  };
  fulfillment: 'delivery' | 'pickup';
  quantity: number;
  boostTotal: number;
  totalAmount: number;  // drink.price * quantity + boostTotal
  paymentRef: string;
  status: OrderStatus;
}

const STORE_KEY = 'jm_orders';
const INVENTORY_KEY = 'jm_inventory';

// ── Word lists for generating friendly order codes ─────────────────────────
const ADJECTIVES = [
  'Silky', 'Mossy', 'Jade', 'Velvet', 'Dewy', 'Golden', 'Serene',
  'Misty', 'Earthy', 'Lush', 'Calm', 'Vivid', 'Breezy', 'Soft', 'Bold',
];
const NOUNS = [
  'Bloom', 'Grove', 'Sip', 'Dew', 'Cloud', 'Wave', 'Dawn', 'Leaf',
  'Stone', 'Vine', 'Frost', 'Glow', 'Mist', 'Rain', 'Petal',
];

function generateCode(): string {
  const adj1 = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const adj2 = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  return `${adj1}-${adj2}-${noun}`;
}

function generateOrderId(): string {
  const orders = getOrders();
  const lastNum = orders.length > 0
    ? parseInt(orders[orders.length - 1].id.replace('#JM-', ''), 10)
    : 8000;
  return `#JM-${lastNum + 1}`;
}

// ── Public API ─────────────────────────────────────────────────────────────

export function getOrders(): StoredOrder[] {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order: Omit<StoredOrder, 'id' | 'code' | 'timestamp' | 'displayTime'>): StoredOrder {
  const orders = getOrders();
  const now = new Date();
  const newOrder: StoredOrder = {
    ...order,
    id: generateOrderId(),
    code: generateCode(),
    timestamp: now.toISOString(),
    displayTime: now.toLocaleTimeString('en-GH', { hour: '2-digit', minute: '2-digit' }),
    status: 'Pending',
  };
  orders.push(newOrder);
  localStorage.setItem(STORE_KEY, JSON.stringify(orders));

  // Deduct from inventory (mock simple deduction)
  deductInventoryForOrder(newOrder);

  return newOrder;
}

export function updateOrderStatus(orderId: string, status: OrderStatus): void {
  const orders = getOrders();
  const idx = orders.findIndex((o) => o.id === orderId);
  if (idx !== -1) {
    orders[idx].status = status;
    localStorage.setItem(STORE_KEY, JSON.stringify(orders));
  }
}

export function clearOrders(): void {
  localStorage.removeItem(STORE_KEY);
}

// ── Seed demo data if store is empty (for admin preview) ───────────────────
export function seedDemoOrders(): void {
  if (getOrders().length > 0) return;
  const demos: StoredOrder[] = [
    {
      id: '#JM-8821', code: 'Velvet-Golden-Bloom',
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
      displayTime: '10:42 AM',
      customer: { name: 'Ama Osei', email: 'ama@example.com', phone: '+233 24 000 0001', city: 'East Legon', address: '14 Oxford St' },
      drink: { id: 'biscoff-behavior', name: 'Biscoff Behavior', price: 100 },
      customizations: { milkType: 'oat', sweetener: 'biscoff', sweetnessLevel: 75, matchaIntensity: 50, boosts: { collagen: true }, cupMessage: 'You got this!' },
      fulfillment: 'delivery', quantity: 1, boostTotal: 25, totalAmount: 125,
      paymentRef: 'demo_ref_001', status: 'Preparing',
    },
    {
      id: '#JM-8820', code: 'Misty-Jade-Wave',
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
      displayTime: '10:15 AM',
      customer: { name: 'Kofi Boateng', email: 'kofi@example.com', phone: '+233 20 000 0002', city: 'Labone', address: '7 Ring Road' },
      drink: { id: 'thirst-trap', name: 'Thirst Trap', price: 80 },
      customizations: { milkType: 'almond', sweetener: null, sweetnessLevel: 50, matchaIntensity: 50, boosts: {}, cupMessage: '' },
      fulfillment: 'pickup', quantity: 2, boostTotal: 0, totalAmount: 160,
      paymentRef: 'demo_ref_002', status: 'Pending',
    },
    {
      id: '#JM-8819', code: 'Dewy-Lush-Glow',
      timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
      displayTime: '09:35 AM',
      customer: { name: 'Efya Darko', email: 'efya@example.com', phone: '+233 50 000 0003', city: 'Airport Res.', address: '3 Liberation Rd' },
      drink: { id: 'matchatwi', name: 'Matchatwi', price: 120 },
      customizations: { milkType: 'coconut', sweetener: 'honey', sweetnessLevel: 50, matchaIntensity: 75, boosts: { collagen: true, maca: true }, cupMessage: 'Cheers!' },
      fulfillment: 'delivery', quantity: 1, boostTotal: 40, totalAmount: 160,
      paymentRef: 'demo_ref_003', status: 'Delivered',
    },
  ];
  localStorage.setItem(STORE_KEY, JSON.stringify(demos));
  seedDemoInventory();
}

// ── Inventory API ──────────────────────────────────────────────────────────

export function getInventory(): InventoryItem[] {
  try {
    const raw = localStorage.getItem(INVENTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function updateInventoryStock(id: string, newStock: number): void {
  const inv = getInventory();
  const idx = inv.findIndex((i) => i.id === id);
  if (idx !== -1) {
    inv[idx].stock = newStock;
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(inv));
  }
}

function deductInventoryForOrder(order: StoredOrder) {
  const inv = getInventory();
  const deduct = (id: string, amount: number) => {
    const item = inv.find((i) => i.id === id);
    if (item) item.stock = Math.max(0, item.stock - amount);
  };

  // Base matcha & cup
  deduct('matcha_ceremonial', order.quantity * 2); // 2 scoops per drink
  deduct('cup_standard', order.quantity);

  // Milk
  if (order.customizations.milkType) deduct(`milk_${order.customizations.milkType}`, order.quantity);

  // Boosts
  Object.entries(order.customizations.boosts).forEach(([boostId, active]) => {
    if (active) deduct(`boost_${boostId}`, order.quantity);
  });

  localStorage.setItem(INVENTORY_KEY, JSON.stringify(inv));
}

function seedDemoInventory(): void {
  if (getInventory().length > 0) return;
  const demos: InventoryItem[] = [
    { id: 'matcha_ceremonial', name: 'Ceremonial Matcha', category: 'Matcha', stock: 150, unit: 'scoops' },
    { id: 'milk_oat', name: 'Oat Milk', category: 'Milk', stock: 40, unit: 'liters' },
    { id: 'milk_almond', name: 'Almond Milk', category: 'Milk', stock: 25, unit: 'liters' },
    { id: 'milk_whole', name: 'Whole Milk', category: 'Milk', stock: 10, unit: 'liters' },
    { id: 'boost_collagen', name: 'Marine Collagen', category: 'Boost', stock: 80, unit: 'scoops' },
    { id: 'boost_maca', name: 'Maca Root', category: 'Boost', stock: 45, unit: 'scoops' },
    { id: 'boost_ashwagandha', name: 'Ashwagandha', category: 'Boost', stock: 12, unit: 'scoops' }, // low stock
    { id: 'cup_standard', name: 'Standard Cold Cup', category: 'Packaging', stock: 300, unit: 'cups' },
  ];
  localStorage.setItem(INVENTORY_KEY, JSON.stringify(demos));
}
