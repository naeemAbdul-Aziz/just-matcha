# Just Matcha - Supabase Setup Guide

## Quick Start

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the database to be provisioned

### 2. Run the Schema
1. Open the SQL Editor in your Supabase dashboard
2. Copy the contents of `schema.sql`
3. Paste and run it in the SQL Editor

### 3. Get Your API Keys
1. Go to Project Settings → API
2. Copy your:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **Anon/Public Key** (starts with `eyJ...`)
   - **Service Role Key** (starts with `eyJ...`) - **Keep this secret!**

### 4. Update Environment Variables
Update your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-anon-key
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your-service-role-key
```

## Database Schema Overview

### Tables

#### `drinks`
Pre-configured menu items with size-based pricing.
- **Public Access**: Can view available drinks
- **Admin Access**: Full CRUD via service role

#### `add_ons`
Extra items customers can add to their drinks (collagen, extra shot, etc.)
- **Public Access**: Can view available add-ons
- **Admin Access**: Full CRUD via service role

#### `orders`
Customer orders with payment tracking.
- **Public Access**: Can create orders, view own orders by phone number
- **Admin Access**: Full CRUD via service role

#### `order_items`
Individual items within an order.
- **Public Access**: Can create items, view items from own orders
- **Admin Access**: Full CRUD via service role

## Security (RLS Policies)

### For Customers (using anon key)
- ✅ View available drinks and add-ons
- ✅ Create new orders
- ✅ View their own orders (by phone number)
- ❌ Cannot view other customers' orders
- ❌ Cannot modify or delete orders

### For Admins (using service role key)
- ✅ Full access to all tables
- ✅ Manage drinks and add-ons
- ✅ View and update all orders
- ✅ Change order status

## Realtime Subscriptions

The `orders` table has realtime enabled for the admin dashboard to receive live updates when:
- New orders are created
- Order status changes
- Orders are updated

## Seed Data

The schema includes seed data for:
- **6 signature drinks** with size-based pricing
- **4 add-ons** including the Collagen Boost (GH₵40)

## Next Steps

1. ✅ Run the schema in Supabase SQL Editor
2. ✅ Update your `.env.local` with the API keys
3. ✅ Create a Supabase client in your app (see below)
4. ✅ Test the connection

## Creating the Supabase Client

Create `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// For admin operations (server-side only)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
```

## Troubleshooting

### RLS Blocking Queries?
If you're getting permission errors:
1. Make sure you're using the correct key (anon for public, service role for admin)
2. Check the RLS policies in the Supabase dashboard
3. Verify your phone number is being passed correctly for customer queries

### Can't See Seed Data?
Run this query to check:
```sql
SELECT * FROM drinks;
SELECT * FROM add_ons;
```

If empty, re-run the INSERT statements from `schema.sql`.
