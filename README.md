# Just Matcha - Digital Flagship & Order Management System

> **Unapologetic flavors. Built your way.**

A luxury matcha ordering platform combining Ghanaian aesthetics with Apple-level minimalism. Features a physics-based drink builder, guest checkout, and real-time kitchen display system.

![Just Matcha](https://img.shields.io/badge/Status-Ready%20for%20Testing-success)
![Next.js](https://img.shields.io/badge/Next.js-15+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## ✨ Features

### Customer Experience
- 🎨 **Liquid Layering Engine** - Interactive drink builder with physics-based animations
- 🍵 **5 Sweetness Levels** - 0%, 25%, 50%, 75%, 100% milk customization
- 📏 **Size Options** - Small (8oz), Medium (12oz), Large (16oz)
- ✨ **Collagen Boost** - Premium add-on for wellness
- 💳 **Flexible Payment** - Mobile Money (MoMo) or Cash on Pickup
- 🎫 **Unique Order Codes** - Memorable format: MATCHA-GLOW-482
- 📱 **No Signup Required** - Track orders with phone number only

### Admin Features
- 📊 **Kitchen Display System** - Kanban board (Pending/Mixing/Ready)
- 🔄 **Real-time Updates** - Supabase subscriptions (ready to implement)
- 👁️ **Visual Order Cards** - Drink layering visualization
- ⏱️ **Time Tracking** - Order age display

## 🎨 Design Philosophy

**Tactile, Unapologetic, Soft, Editorial**

- **Color Palette**: Cream canvas (#F8F1E7), Matcha green (#E3F4D8), Deep olive (#0D270C)
- **Typography**: Playfair Display (serif) + Inter (grotesque sans)
- **Animations**: Spring physics with Framer Motion
- **Spacing**: Generous negative space, 24px+ border radius
- **Shadows**: Soft, diffuse, colored ambient occlusion

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account (for production)

### Installation

```bash
# Navigate to project directory
cd "c:\Users\naeemaziz\Desktop\matcha\just matcha\just-matcha"

# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000**

### Environment Setup (Optional for Production)

```bash
# Copy environment template
cp .env.local.example .env.local

# Add your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero animation |
| `/build` | Liquid Layering Engine (drink builder) |
| `/menu` | Menu grid with 6 curated drinks |
| `/checkout` | Guest checkout with phone & payment |
| `/order/[id]` | Order confirmation & tracking |
| `/admin` | Kitchen Display System (KDS) |

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State**: Zustand
- **Database**: Supabase (PostgreSQL)
- **Smooth Scroll**: Lenis
- **Fonts**: Playfair Display + Inter (Google Fonts)

## 📂 Project Structure

```
just-matcha/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── build/             # Drink builder
│   ├── menu/              # Menu grid
│   ├── checkout/          # Checkout flow
│   ├── order/[id]/        # Order confirmation
│   └── admin/             # Kitchen Display System
├── components/
│   ├── ui/                # Reusable UI components
│   ├── LiquidGlass.tsx    # Animated drink visualization
│   └── SmoothScroll.tsx   # Lenis wrapper
├── lib/
│   ├── fonts.ts           # Font configuration
│   ├── utils.ts           # Utilities
│   ├── animations.ts      # Framer Motion presets
│   └── order-id.ts        # Order ID generator
├── store/
│   ├── drink-builder.ts   # Drink customization state
│   └── cart.ts            # Cart management
├── supabase/
│   └── schema.sql         # Database schema
└── tailwind.config.ts     # Design tokens
```

## 🎯 Testing Checklist

### Design Validation
- [ ] Cream background (#F8F1E7) used throughout
- [ ] No pure white backgrounds
- [ ] All borders rounded 24px+
- [ ] Serif headings, sans body text
- [ ] Smooth 60fps animations
- [ ] Lenis smooth scroll active

### Functional Testing
- [ ] Landing page animations play smoothly
- [ ] Liquid Layering Engine slider responds with spring physics
- [ ] Size selection updates price correctly
- [ ] Collagen toggle adds GH₵3 to total
- [ ] Checkout validates phone number
- [ ] Order confirmation displays unique ID
- [ ] Admin KDS shows orders in correct columns

## 🔄 Next Steps for Production

### 1. Supabase Integration
1. Create Supabase project at [supabase.com](https://supabase.com)
2. Run `supabase/schema.sql` in SQL Editor
3. Enable real-time for `orders` table
4. Add credentials to `.env.local`
5. Create `lib/supabase.ts` client
6. Implement real-time subscriptions in KDS

### 2. Payment Integration (Paystack)

**Paystack** is integrated for online payments, supporting:
- Mobile Money (MTN, Vodafone, AirtelTigo)
- Card payments (Visa, Mastercard)
- Bank transfers

**Setup:**
1. Create account at [paystack.com](https://paystack.com)
2. Get API keys from [Dashboard → Settings → API Keys](https://dashboard.paystack.com/#/settings/developers)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
   PAYSTACK_SECRET_KEY=sk_test_xxxxx
   ```
4. Test with Paystack test cards
5. Switch to live keys for production

**Features:**
- Popup checkout (no redirect)
- Automatic currency conversion (GHS to kobo)
- Payment verification callbacks
- Custom metadata (order ID, phone number)

### 3. Order Management
- Create API routes for order CRUD
- Implement order status updates
- Add admin authentication
- Build order history view

### 4. Polish & Deploy
- Mobile responsiveness testing
- Performance optimization (Lighthouse 90+)
- Deploy to Vercel/Netlify
- Set up custom domain

## 🎨 Customization Options

### Sweetness Levels
- **0% Milk** - Pure Matcha Energy
- **25% Milk** - Light Sweet, Balanced
- **50% Milk** - Just Right
- **75% Milk** - Creamy & Comforting
- **100% Milk** - Full Sweet Indulgence

### Sizes & Pricing
- **Small (8oz)** - GH₵10
- **Medium (12oz)** - GH₵12
- **Large (16oz)** - GH₵15

### Add-ons
- **Collagen Boost** - +GH₵3

## 📄 License

Proprietary - Just Matcha Ghana

## 🙏 Credits

Built with ❤️ for Just Matcha Ghana
Design inspired by Ghanaian luxury × Apple minimalism
