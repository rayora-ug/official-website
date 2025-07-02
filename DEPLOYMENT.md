# Rayora Website Deployment Guide

## 🚀 Netlify Deployment Instructions

### Prerequisites
- GitHub repository access to `rayora-ug/official-website`
- Netlify account
- Domain `rayora.de` with DNS access

### Step 1: Repository Setup
Once you have access to the `rayora-ug/official-website` repository:
```bash
git push origin main
```

### Step 2: Netlify Deployment

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "Add new site" → "Import an existing project"**
3. **Connect GitHub** and select `rayora-ug/official-website`
4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next` (auto-detected)
   - Base directory: (leave empty)

### Step 3: Environment Variables
Add these environment variables in Netlify:
- `RESEND_API_KEY` = `your-resend-api-key`

### Step 4: Custom Domain Setup
1. Go to **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter: `rayora.de`
4. Configure DNS records as instructed by Netlify

### Step 5: DNS Configuration
Point your domain DNS to Netlify:
- **A Record**: `75.2.60.5` (for rayora.de)
- **AAAA Record**: `2600:1f14:bab:c400::5` (for rayora.de)
- **CNAME**: `www.rayora.de` → `your-site-name.netlify.app`

**Note**: Both `rayora.de` and `www.rayora.de` will work. Netlify automatically handles redirects between them. You can choose which one to use as primary in Netlify's domain settings.

### Step 6: Domain Redirect Configuration (Optional)
In Netlify's domain settings, you can choose:
- **Primary domain**: `rayora.de` (recommended - shorter, cleaner)
- **Automatic redirect**: `www.rayora.de` → `rayora.de`

This ensures visitors reach your site whether they type:
- `rayora.de` ✅
- `www.rayora.de` ✅ (redirects to rayora.de)
- `https://rayora.de` ✅
- `https://www.rayora.de` ✅ (redirects to https://rayora.de)

## 🔧 Build Configuration

The site is configured with:
- **Framework**: Next.js 15.3.4
- **Build Command**: `npm run build`
- **Node Version**: 18.x (specified in `netlify.toml`)
- **Redirects**: Configured for SPA routing

## 📊 Site Features
- ✅ Responsive design
- ✅ Contact form with Resend integration
- ✅ SEO optimized
- ✅ Modern UI/UX
- ✅ Active navigation highlighting
- ✅ Error boundaries
- ✅ Fast loading times

## 🔍 Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check navigation highlighting
- [ ] Test mobile responsiveness
- [ ] Verify domain pointing
- [ ] Test SSL certificate

## 📞 Support
For deployment issues, check:
1. Netlify build logs
2. DNS propagation status
3. Environment variable configuration
4. Build command configuration
