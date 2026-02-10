-- Just Matcha Database Schema - Production Ready
-- PostgreSQL / Supabase
-- Run this in your Supabase SQL Editor

-- ============================================
-- TABLES
-- ============================================

-- Drinks table (pre-configured menu items)
CREATE TABLE IF NOT EXISTS drinks (
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
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id TEXT UNIQUE NOT NULL, -- WORD-WORD-NUMBER format (e.g., MATCHA-GLOW-482)
  customer_phone TEXT NOT NULL,
  customer_email TEXT, -- Optional, for mobile money payments
  status TEXT NOT NULL DEFAULT 'pending', -- pending, mixing, ready, completed, cancelled
  payment_method TEXT NOT NULL, -- momo, cash
  payment_status TEXT DEFAULT 'pending', -- pending, paid, failed
  payment_reference TEXT, -- Paystack reference for momo payments
  total_amount DECIMAL(10, 2) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
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

-- Add-ons/extras table
CREATE TABLE IF NOT EXISTS add_ons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_order_id ON orders(order_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer_phone ON orders(customer_phone);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE drinks ENABLE ROW LEVEL SECURITY;
ALTER TABLE add_ons ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Drinks: Public can view available drinks
CREATE POLICY "Public can view available drinks" 
  ON drinks FOR SELECT 
  TO anon, authenticated 
  USING (available = true);

-- Drinks: Admins can do everything (using service role)
CREATE POLICY "Service role can manage drinks" 
  ON drinks FOR ALL 
  TO service_role 
  USING (true) 
  WITH CHECK (true);

-- Add-ons: Public can view available add-ons
CREATE POLICY "Public can view available add-ons" 
  ON add_ons FOR SELECT 
  TO anon, authenticated 
  USING (available = true);

-- Add-ons: Admins can do everything (using service role)
CREATE POLICY "Service role can manage add-ons" 
  ON add_ons FOR ALL 
  TO service_role 
  USING (true) 
  WITH CHECK (true);

-- Orders: Anyone can create orders
CREATE POLICY "Anyone can create orders" 
  ON orders FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- Orders: Customers can view their own orders by phone number
CREATE POLICY "Customers can view own orders" 
  ON orders FOR SELECT 
  TO anon, authenticated 
  USING (customer_phone = current_setting('request.headers', true)::json->>'x-customer-phone');

-- Orders: Service role can manage all orders (for admin panel)
CREATE POLICY "Service role can manage all orders" 
  ON orders FOR ALL 
  TO service_role 
  USING (true) 
  WITH CHECK (true);

-- Order Items: Anyone can create order items
CREATE POLICY "Anyone can create order items" 
  ON order_items FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- Order Items: Customers can view items from their orders
CREATE POLICY "Customers can view own order items" 
  ON order_items FOR SELECT 
  TO anon, authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM orders 
      WHERE orders.id = order_items.order_id 
      AND orders.customer_phone = current_setting('request.headers', true)::json->>'x-customer-phone'
    )
  );

-- Order Items: Service role can manage all order items
CREATE POLICY "Service role can manage all order items" 
  ON order_items FOR ALL 
  TO service_role 
  USING (true) 
  WITH CHECK (true);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at on orders
DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger to auto-update updated_at on drinks
DROP TRIGGER IF EXISTS update_drinks_updated_at ON drinks;
CREATE TRIGGER update_drinks_updated_at
  BEFORE UPDATE ON drinks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- REALTIME SUBSCRIPTIONS
-- ============================================

-- Enable real-time for orders table (for admin dashboard)
ALTER PUBLICATION supabase_realtime ADD TABLE orders;

-- ============================================
-- SEED DATA
-- ============================================

-- Seed drinks with size-based pricing
INSERT INTO drinks (name, description, flavor_profile, base_price_small, base_price_medium, base_price_large) VALUES
  ('Classic Matcha Latte', 'Our signature blend with your choice of milk', 'Smooth, Balanced, Traditional', 10.00, 12.00, 15.00),
  ('Citrus Matcha Sparkle', 'Matcha meets yuzu and sparkling water', 'Bright, Citrus, Clean', 12.00, 14.00, 17.00),
  ('Berry Matcha Cloud', 'Strawberry-infused matcha with vanilla foam', 'Sweet, Fruity, Creamy', 13.00, 15.00, 18.00),
  ('Pure Ceremonial', 'Traditional whisked matcha, nothing else', 'Bold, Earthy, Authentic', 8.00, 10.00, 13.00),
  ('Iced Matcha Tonic', 'Matcha with tonic water and fresh mint', 'Refreshing, Herbal, Crisp', 11.00, 13.00, 16.00),
  ('Coconut Matcha Dream', 'Matcha with coconut milk and toasted coconut', 'Tropical, Rich, Indulgent', 14.00, 16.00, 19.00)
ON CONFLICT (id) DO NOTHING;

-- Seed add-ons (updated collagen price to GH₵40)
INSERT INTO add_ons (name, description, price) VALUES
  ('Collagen Boost', 'Premium collagen for skin & wellness', 40.00),
  ('Extra Shot', 'Double the matcha intensity', 2.00),
  ('Oat Milk Upgrade', 'Premium oat milk substitute', 1.50),
  ('Honey Drizzle', 'Natural sweetness', 1.00)
ON CONFLICT (name) DO NOTHING;

-- ============================================
-- HELPFUL QUERIES (commented out)
-- ============================================

-- Get order with items:
-- SELECT 
--   o.order_id,
--   o.customer_phone,
--   o.status,
--   o.payment_method,
--   o.payment_status,
--   o.total_amount,
--   o.created_at,
--   json_agg(
--     json_build_object(
--       'drink_name', oi.drink_name,
--       'matcha_level', oi.matcha_level,
--       'size', oi.size,
--       'has_collagen', oi.has_collagen,
--       'extras', oi.extras,
--       'quantity', oi.quantity,
--       'total_price', oi.total_price
--     )
--   ) as items
-- FROM orders o
-- LEFT JOIN order_items oi ON o.id = oi.order_id
-- WHERE o.status = 'pending'
-- GROUP BY o.id
-- ORDER BY o.created_at DESC;

-- Get today's orders:
-- SELECT COUNT(*) as total_orders, SUM(total_amount) as total_revenue
-- FROM orders
-- WHERE DATE(created_at) = CURRENT_DATE;
