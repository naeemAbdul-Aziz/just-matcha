-- Just Matcha Database Schema
-- PostgreSQL / Supabase

-- Drinks table (pre-configured menu items)
CREATE TABLE drinks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  flavor_profile TEXT,
  base_price_small DECIMAL(10, 2) NOT NULL DEFAULT 10.00,
  base_price_medium DECIMAL(10, 2) NOT NULL DEFAULT 12.00,
  base_price_large DECIMAL(10, 2) NOT NULL DEFAULT 15.00,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id TEXT UNIQUE NOT NULL, -- WORD-WORD-NUMBER format (e.g., MATCHA-GLOW-482)
  customer_phone TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, mixing, ready, completed, cancelled
  payment_method TEXT NOT NULL, -- momo, cash
  payment_status TEXT DEFAULT 'pending', -- pending, paid, failed
  total_amount DECIMAL(10, 2) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items table
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  drink_name TEXT NOT NULL,
  matcha_level INTEGER NOT NULL CHECK (matcha_level >= 0 AND matcha_level <= 100), -- 0-100 (milk percentage)
  size TEXT NOT NULL CHECK (size IN ('small', 'medium', 'large')),
  has_collagen BOOLEAN DEFAULT FALSE,
  extras JSONB DEFAULT '[]'::jsonb, -- Array of add-on names
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  unit_price DECIMAL(10, 2) NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add-ons/extras table (for future extensibility)
CREATE TABLE add_ons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX idx_orders_order_id ON orders(order_id);
CREATE INDEX idx_orders_customer_phone ON orders(customer_phone);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- Enable real-time for orders table
ALTER PUBLICATION supabase_realtime ADD TABLE orders;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at on orders
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Seed drinks with size-based pricing
INSERT INTO drinks (name, description, flavor_profile, base_price_small, base_price_medium, base_price_large) VALUES
  ('Classic Matcha Latte', 'Our signature blend with your choice of milk', 'Smooth, Balanced, Traditional', 10.00, 12.00, 15.00),
  ('Citrus Matcha Sparkle', 'Matcha meets yuzu and sparkling water', 'Bright, Citrus, Clean', 12.00, 14.00, 17.00),
  ('Berry Matcha Cloud', 'Strawberry-infused matcha with vanilla foam', 'Sweet, Fruity, Creamy', 13.00, 15.00, 18.00),
  ('Pure Ceremonial', 'Traditional whisked matcha, nothing else', 'Bold, Earthy, Authentic', 8.00, 10.00, 13.00),
  ('Iced Matcha Tonic', 'Matcha with tonic water and fresh mint', 'Refreshing, Herbal, Crisp', 11.00, 13.00, 16.00),
  ('Coconut Matcha Dream', 'Matcha with coconut milk and toasted coconut', 'Tropical, Rich, Indulgent', 14.00, 16.00, 19.00);

-- Seed add-ons
INSERT INTO add_ons (name, description, price) VALUES
  ('Collagen Boost', 'Premium collagen for skin & wellness', 40.00),
  ('Extra Shot', 'Double the matcha intensity', 2.00),
  ('Oat Milk Upgrade', 'Premium oat milk substitute', 1.50),
  ('Honey Drizzle', 'Natural sweetness', 1.00);

-- Example query to get order with items
-- SELECT 
--   o.order_id,
--   o.customer_phone,
--   o.status,
--   o.total_amount,
--   json_agg(
--     json_build_object(
--       'drink_name', oi.drink_name,
--       'matcha_level', oi.matcha_level,
--       'size', oi.size,
--       'has_collagen', oi.has_collagen,
--       'quantity', oi.quantity,
--       'total_price', oi.total_price
--     )
--   ) as items
-- FROM orders o
-- LEFT JOIN order_items oi ON o.id = oi.order_id
-- WHERE o.status = 'pending'
-- GROUP BY o.id;
