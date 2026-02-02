# Deployment Guide

This portfolio website can be easily deployed to Vercel, Netlify, or any other static hosting service.

## Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Follow the prompts to complete the deployment

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Sign in with your Git provider
4. Click "New Project"
5. Import your repository
6. Vercel will automatically detect the settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click "Deploy"

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder onto the Netlify dashboard

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Deploy to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Environment Variables

No environment variables are required for this project. All content is static.

## Custom Domain

### Vercel
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Netlify
1. Go to "Domain Settings" in your Netlify dashboard
2. Add a custom domain
3. Follow the DNS configuration instructions

## Performance Optimization

The build is already optimized with:
- Code splitting
- Asset minification
- Gzip compression
- Lazy loading for images
- Tree shaking

## Monitoring

After deployment, you can monitor your site's performance using:
- Vercel Analytics (built-in)
- Google Analytics (add your tracking ID)
- Lighthouse scores in Chrome DevTools

## Troubleshooting

### Build Fails
- Check Node version (should be 14+)
- Clear `node_modules` and `package-lock.json`, then reinstall
- Check for any TypeScript or linting errors

### Routes Don't Work
- Make sure `vercel.json` is present for Vercel
- For Netlify, create a `_redirects` file in the `public` folder:
```
/* /index.html 200
```

### Slow Loading
- Enable caching headers
- Use Vercel/Netlify CDN features
- Optimize images further if needed
