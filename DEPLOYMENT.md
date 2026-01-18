# 🚀 Deployment Guide - Sweetys Bakery

Complete guide for deploying your static Next.js site to Hostinger using automated GitHub Actions.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [One-Time Setup](#one-time-setup)
3. [Daily Workflow](#daily-workflow)
4. [Troubleshooting](#troubleshooting)
5. [Advanced Configuration](#advanced-configuration)

---

## 🎯 Overview

Your site uses **automated deployment**:

```
Edit Code → Commit → Push to GitHub → Auto-Deploy to Hostinger → Live! 🎉
```

**Deployment Time:** 2-3 minutes from push to live

**How it works:**
1. You push code to GitHub `main` branch
2. GitHub Actions automatically runs
3. Builds your static site (`npm run build`)
4. Uploads `/out` folder to Hostinger via FTP
5. Your site is live!

---

## 🔧 One-Time Setup

### Step 1: Get Hostinger FTP Credentials

1. **Log in to Hostinger**
2. Go to **Hosting → Manage**
3. Find **FTP Accounts** section
4. Note down:
   - **FTP Hostname** (e.g., `ftp.sweetysbakery.com`)
   - **FTP Username** (e.g., `u123456789`)
   - **FTP Password**
   - **FTP Directory** (usually `/public_html/` or `/domains/yourdomain.com/public_html/`)

> [!TIP]
> If you don't have FTP credentials, create a new FTP account in Hostinger's control panel.

---

### Step 2: Add GitHub Secrets

These credentials are stored **securely** and never visible in your code.

1. **Go to:** https://github.com/aitbensekko/Sweetys-bakery-Final/settings/secrets/actions
2. Click **New repository secret** button
3. Add these **3 secrets**:

#### Secret 1: FTP_SERVER
- **Name:** `FTP_SERVER`
- **Value:** Your FTP hostname (e.g., `ftp.sweetysbakery.com`)

#### Secret 2: FTP_USERNAME
- **Name:** `FTP_USERNAME`
- **Value:** Your FTP username (e.g., `u123456789`)

#### Secret 3: FTP_PASSWORD
- **Name:** `FTP_PASSWORD`
- **Value:** Your FTP password

#### Secret 4: NEXT_PUBLIC_SUPABASE_URL
- **Name:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** Your Supabase Project URL (from Settings > API)

#### Secret 5: NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** Your Supabase Anon Key (from Settings > API)

> [!IMPORTANT]
> Make sure the secret names are EXACTLY as shown above (all caps, with underscores).

---

### Step 3: Configure FTP Directory Path

1. **Open** `.github/workflows/deploy.yml`
2. **Find** the line: `server-dir: /public_html/`
3. **Update** if your Hostinger path is different:
   - For main domain: `/public_html/`
   - For subdomain: `/public_html/subdomain/`
   - For addon domain: `/domains/yourdomain.com/public_html/`

Example:
```yaml
server-dir: /public_html/  # ← Update this if needed
```

---

### Step 4: Initial Deployment

1. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Setup automated deployment"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Watch the deployment:**
   - Go to: https://github.com/aitbensekko/Sweetys-bakery-Final/actions
   - You'll see "Deploy to Hostinger" running
   - Click on it to see live progress

4. **Verify it worked:**
   - Wait for green checkmark ✅
   - Visit your domain
   - Your site should be live!

---

## 📝 Daily Workflow

### Adding a New Blog Post

1. **Edit** `data/blogPosts.tsx`

2. **Add your new post:**
   ```typescript
   export const blogPosts = [
     {
       id: 'my-new-recipe',
       title: 'Amazing Chocolate Cake',
       excerpt: 'The best chocolate cake recipe...',
       content: '...',
       author: 'Sara',
       date: '2025-12-30',
       category: 'Recipes',
       image: '/images/chocolate-cake.jpg',
       readTime: '5 min read',
     },
     // ... existing posts
   ];
   ```

3. **Commit and push:**
   ```bash
   git add data/blogPosts.tsx
   git commit -m "Add new blog post: Amazing Chocolate Cake"
   git push
   ```

4. **Wait 2-3 minutes** → Your post is live! 🎉

---

### Updating Existing Content

Same process for any changes:

```bash
# Make your changes to any file
git add .
git commit -m "Update homepage content"
git push
```

GitHub Actions deploys automatically!

---

### Checking Deployment Status

**Method 1: GitHub Actions Tab**
- Go to: https://github.com/aitbensekko/Sweetys-bakery-Final/actions
- See all deployments and their status

**Method 2: Email Notifications**
- GitHub sends emails if deployment fails
- Configure in: Settings → Notifications

---

## 🔍 Troubleshooting

### ❌ Deployment Failed

**Check the error:**
1. Go to: https://github.com/aitbensekko/Sweetys-bakery-Final/actions
2. Click the failed deployment
3. Expand the failed step to see error message

**Common issues:**

#### 1. FTP Connection Failed
```
Error: Cannot connect to FTP server
```

**Solution:**
- Verify FTP credentials in GitHub Secrets
- Check if Hostinger FTP service is running
- Try connecting with FileZilla to test credentials

---

#### 2. Build Failed
```
Error: Build failed with exit code 1
```

**Solution:**
- Test build locally: `npm run build`
- Fix any TypeScript errors
- Check for missing dependencies

---

#### 3. Wrong Directory
```
Error: 550 No such file or directory
```

**Solution:**
- Update `server-dir` in `.github/workflows/deploy.yml`
- Common paths:
  - `/public_html/`
  - `/domains/yourdomain.com/public_html/`
  - `/public_html/subdomain/`

---

#### 4. Permission Denied
```
Error: 550 Permission denied
```

**Solution:**
- Check FTP user has write permissions
- In Hostinger, verify FTP account permissions
- Try creating a test file via FTP client

---

### 🧪 Testing Locally Before Deploy

Always test your build locally:

```bash
# Build the site
npm run build

# Check the /out folder
# Open out/index.html in browser
```

If local build works, deployment should work too!

---

### 📊 Manual Deployment (Backup Method)

If GitHub Actions is down, deploy manually:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload via FTP:**
   - Use FileZilla or any FTP client
   - Connect to Hostinger FTP
   - Upload contents of `/out` folder to `/public_html/`

---

## ⚙️ Advanced Configuration

### Deploying to Staging First

Create a staging environment:

1. **Create new branch:**
   ```bash
   git checkout -b staging
   ```

2. **Update workflow** to deploy staging branch to subdomain:
   ```yaml
   on:
     push:
       branches:
         - staging
   ```

3. **Use different FTP path:**
   ```yaml
   server-dir: /public_html/staging/
   ```

---

### Custom Domain Setup

1. **In Hostinger:**
   - Add your domain
   - Point DNS to Hostinger nameservers

2. **SSL Certificate:**
   - Hostinger provides free SSL
   - Enable in: Hosting → SSL

3. **Update site URL:**
   - No code changes needed!
   - Static site works with any domain

---

### Performance Optimization

**Already configured:**
- ✅ Static export (fastest possible)
- ✅ Image optimization
- ✅ Only changed files uploaded

**Additional optimizations:**
- Add CDN (Cloudflare free tier)
- Enable Gzip compression in Hostinger
- Optimize images before adding

---

### Monitoring Deployments

**GitHub Actions Badge:**

Add to your `README.md`:

```markdown
![Deploy Status](https://github.com/aitbensekko/Sweetys-bakery-Final/actions/workflows/deploy.yml/badge.svg)
```

Shows deployment status on your repo!

---

## 💰 Monetization Checklist

Now that deployment is automated, focus on revenue:

- [ ] Set up Google AdSense
- [ ] Add affiliate links to recipes
- [ ] Configure Lemon Squeezy for ebook sales
- [ ] Add Google Analytics
- [ ] Optimize for SEO
- [ ] Create more content!

---

## 📞 Support

**Deployment Issues:**
- Check GitHub Actions logs
- Test FTP credentials with FileZilla
- Verify Hostinger service status

**Content Issues:**
- Test local build: `npm run build`
- Check browser console for errors
- Verify all images exist

**Need Help?**
- GitHub Actions documentation: https://docs.github.com/actions
- Hostinger support: https://www.hostinger.com/support

---

## 🎉 You're All Set!

Your deployment is now fully automated. Just:

1. **Write content**
2. **Push to GitHub**
3. **Make money!** 💰

Happy baking! 🧁

