import { usePaystackPayment } from 'react-paystack';

interface PaystackConfig {
  reference: string;
  email: string;
  amount: number; // in kobo (GHS * 100)
  publicKey: string;
  metadata?: {
    orderId: string;
    phone: string;
    custom_fields?: any[];
  };
}

interface PaystackResponse {
  reference: string;
  status: 'success' | 'failed';
  trans: string;
  transaction: string;
  trxref: string;
  message: string;
}

export function usePaystackCheckout() {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '';

  const initializePayment = (
    config: Omit<PaystackConfig, 'publicKey'>,
    onSuccess: (response: PaystackResponse) => void,
    onClose: () => void
  ) => {
    const paystackConfig: PaystackConfig = {
      ...config,
      publicKey,
    };

    const PaystackPop = (window as any).PaystackPop;
    if (!PaystackPop) {
      console.error('Paystack script not loaded');
      return;
    }

    const handler = PaystackPop.setup({
      key: paystackConfig.publicKey,
      email: paystackConfig.email,
      amount: paystackConfig.amount,
      ref: paystackConfig.reference,
      metadata: paystackConfig.metadata,
      onClose,
      callback: onSuccess,
    });

    handler.openIframe();
  };

  return { initializePayment };
}

// Helper to convert GHS to kobo (Paystack uses kobo)
export function ghsToKobo(amount: number): number {
  return Math.round(amount * 100);
}

// Generate unique payment reference
export function generatePaymentReference(orderId: string): string {
  return `JM-${orderId}-${Date.now()}`;
}
