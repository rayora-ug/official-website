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
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `.next`
- **Node Version**: 18.x (specified in `netlify.toml`)
- **Redirects**: Configured for SPA routing

## 🚨 Troubleshooting Common Issues

### **404 "Page not found" Error**
If you see a 404 error after deployment:

1. **Check Netlify Build Logs**:
   - Go to your Netlify dashboard
   - Click on your site
   - Go to "Deploys" tab
   - Check the latest build log for errors

2. **Verify Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Functions directory: `netlify/functions` (auto-detected)

3. **Redeploy After Configuration Update**:
   - The `netlify.toml` file has been updated for proper Next.js support
   - Push the latest changes and redeploy
   - Or trigger a manual redeploy in Netlify dashboard

4. **Check Environment Variables**:
   - Ensure `RESEND_API_KEY` is set in Netlify
   - Verify no typos in variable names

### **Contact Form Not Working**
If the contact form doesn't send emails:
1. Verify `RESEND_API_KEY` is correctly set
2. Check Netlify Functions are enabled
3. Verify domain is authorized in Resend dashboard

### **Build Failures (Exit Code 2)**
If you see "Build script returned non-zero exit code: 2":

1. **npm ci Error - package-lock.json missing**:
   - Error: "The `npm ci` command can only install with an existing package-lock.json"
   - **Solution**: Build command changed to `npm install && npm run build`
   - This is more reliable for Netlify deployments

2. **Check Node.js Version**:
   - Netlify should use Node.js 18.x (specified in `netlify.toml`)
   - If using a different version, update the `NODE_VERSION` in build environment

3. **Clear Netlify Cache**:
   - Go to Netlify dashboard → Site settings → Build & deploy
   - Click "Clear cache and deploy site"

4. **Verify Package Dependencies**:
   - Ensure all dependencies are properly listed in `package.json`
   - Check for any missing peer dependencies

5. **Check Build Environment Variables**:
   - Environment variables might be missing or incorrectly set
   - Verify `RESEND_API_KEY` is set (even if not used during build)

6. **Try Manual Deploy with Debug**:
   ```bash
   # In Netlify build settings, the build command should be:
   npm install && npm run build
   ```

7. **Branch Issues**:
   - Ensure you're deploying from the correct branch (`main`)
   - Check that the latest commits are pushed to the repository

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
