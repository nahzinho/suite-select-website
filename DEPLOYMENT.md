# SuiteSelect Website - Cloudflare Workers Deployment Guide

This guide explains how to deploy the SuiteSelect website to Cloudflare Workers with static assets using Wrangler.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI**: Already included in devDependencies
3. **Bun Runtime**: Make sure Bun is installed locally

## Quick Deployment

### 1. Login to Cloudflare

```bash
bun run wrangler login
```

### 2. Deploy to Production

```bash
bun run deploy
```

### 3. Deploy Preview (dry run)

```bash
bun run deploy:preview
```

## Manual Setup Steps

### 1. Create Cloudflare Worker (Automatic)

The Worker will be created automatically when you run your first deployment. No manual setup needed.

### 2. Configure Custom Domain

1. Go to Cloudflare Workers dashboard
2. Select your `suiteselect-website` worker
3. Go to "Settings" tab → "Triggers"
4. Add your custom domain or route (e.g., `suiteselect.com/*`)

## Environment Variables

Set these in the Cloudflare Workers dashboard under "Settings" → "Variables":

- `NODE_ENV`: `production`
- `CONTACT_EMAIL`: `jakob.petersdorff@suiteselect.de`

## Build Settings

The `wrangler.toml` file is already configured with:

- **Static assets directory**: `./dist`
- **SPA routing**: Enabled with `not_found_handling = "single-page-application"`
- **Build output directory**: `dist`
- **Node.js version**: Compatible with latest

## Security Features

The deployment includes:

- Static asset serving with global CDN caching
- Single Page Application (SPA) routing support
- Automatic cache optimization
- Global edge deployment

## Available Commands

```bash
# Local development
bun run dev

# Build for production
bun run build

# Deploy to production
bun run deploy

# Deploy preview (dry run)
bun run deploy:preview

# Wrangler commands
bun run wrangler --help
```

## Monitoring

After deployment, monitor your site:

1. **Cloudflare Analytics**: Built-in analytics in Cloudflare dashboard
2. **Performance**: Check Core Web Vitals
3. **Uptime**: Cloudflare provides 99.9%+ uptime

## Troubleshooting

### Build Issues

```bash
# Check build locally first
bun run build

# View deployment logs
bun run wrangler deploy --verbose
```

### DNS Issues

Make sure your domain's nameservers point to Cloudflare if using a custom domain.

### Cache Issues

Use Cloudflare's "Purge Cache" feature if you need to clear cached content immediately.

## Support

For SuiteSelect website issues, contact: jakob.petersdorff@suiteselect.de
For Cloudflare Workers support, visit: [Cloudflare Docs](https://developers.cloudflare.com/workers/)
