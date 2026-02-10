# Vercel Deployment Guide - Just Matcha

## 🚀 Quick Deploy Checklist

### Before You Deploy

- [ ] ✅ Supabase project created and schema deployed
- [ ] ✅ Paystack account set up with API keys
- [ ] ✅ All environment variables ready
- [ ] ✅ Code pushed to GitHub/GitLab/Bitbucket

---

## Step 1: Push to Git

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit - Just Matcha app"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: Vercel CLI (Recommended)
```bash
npm i -g vercel
vercel
```

### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js

---

## Step 3: Configure Environment Variables

In your Vercel project settings, add these environment variables:

### Supabase
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

### Paystack
```
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_xxxxx
PAYSTACK_SECRET_KEY=sk_live_xxxxx
```

### App
```
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

> **⚠️ Important**: Use **LIVE** keys for production, not test keys!

---

## Step 4: Deploy

Vercel will automatically:
- ✅ Install dependencies
- ✅ Build your Next.js app
- ✅ Deploy to production
- ✅ Provide you with a URL

---

## Post-Deployment

### 1. Test Your Deployment
- [ ] Visit your Vercel URL
- [ ] Test the drink builder
- [ ] Place a test order (use cash payment first)
- [ ] Test mobile money payment with Paystack

### 2. Update Paystack Webhook (Optional)
If you plan to use webhooks for payment verification:
1. Go to Paystack Dashboard → Settings → Webhooks
2. Add your webhook URL: `https://your-app.vercel.app/api/paystack/webhook`

### 3. Custom Domain (Optional)
1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## Environment Variables Reference

| Variable | Required | Where to Get It |
|----------|----------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ Yes | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ Yes | Supabase Dashboard → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ Yes | Supabase Dashboard → Settings → API (Keep secret!) |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | ✅ Yes | Paystack Dashboard → Settings → API Keys |
| `PAYSTACK_SECRET_KEY` | ✅ Yes | Paystack Dashboard → Settings → API Keys (Keep secret!) |
| `NEXT_PUBLIC_APP_URL` | ✅ Yes | Your Vercel deployment URL |

---

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript has no errors: `npm run build` locally

### Environment Variables Not Working
- Make sure they're added in Vercel dashboard
- Redeploy after adding new variables
- Check variable names match exactly (case-sensitive)

### Payments Not Working
- Verify you're using **live** Paystack keys, not test keys
- Check Paystack dashboard for transaction logs
- Ensure `NEXT_PUBLIC_APP_URL` is set to your production URL

### Database Connection Issues
- Verify Supabase URL and keys are correct
- Check RLS policies in Supabase dashboard
- Ensure schema was deployed successfully

---

## Continuous Deployment

Once set up, every push to your main branch will automatically:
1. Trigger a new build
2. Run tests (if configured)
3. Deploy to production

---

## Production Checklist

Before going live:
- [ ] Switch to Paystack **live** keys
- [ ] Test all payment flows
- [ ] Test order creation and tracking
- [ ] Verify admin panel access
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (optional)
- [ ] Test on mobile devices
- [ ] Set up error monitoring (Sentry, etc.)

---

## Need Help?

- **Vercel Docs**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Paystack Docs**: [paystack.com/docs](https://paystack.com/docs)
