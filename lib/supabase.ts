import { createClient } from '@supabase/supabase-js';

// Supabase client for public operations (customer-facing)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Supabase admin client for server-side operations (admin panel)
// Only use this in API routes or server components
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Database types for TypeScript
export type Database = {
  public: {
    Tables: {
      drinks: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          flavor_profile: string | null;
          base_price_small: number;
          base_price_medium: number;
          base_price_large: number;
          available: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['drinks']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['drinks']['Insert']>;
      };
      add_ons: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price: number;
          available: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['add_ons']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['add_ons']['Insert']>;
      };
      orders: {
        Row: {
          id: string;
          order_id: string;
          customer_phone: string;
          customer_email: string | null;
          status: 'pending' | 'mixing' | 'ready' | 'completed' | 'cancelled';
          payment_method: 'momo' | 'cash';
          payment_status: 'pending' | 'paid' | 'failed';
          payment_reference: string | null;
          total_amount: number;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['orders']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['orders']['Insert']>;
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          drink_name: string;
          matcha_level: number;
          size: 'small' | 'medium' | 'large';
          has_collagen: boolean;
          extras: string[];
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['order_items']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['order_items']['Insert']>;
      };
    };
  };
};
