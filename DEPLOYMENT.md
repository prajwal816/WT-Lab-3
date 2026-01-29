# GitHub Pages Deployment Guide

This project is now configured as a React SPA that automatically deploys to GitHub Pages using GitHub Actions.

## ✅ Fixed Issues

- **Converted to React SPA**: Removed conflicting static HTML files and converted to proper React components
- **Fixed Routing**: Changed from BrowserRouter to HashRouter for GitHub Pages compatibility
- **Removed Conflicts**: Eliminated static HTML files that were interfering with React routing
- **Simplified Base Path**: Set consistent base path configuration

## Setup Steps

1. **Push your code to GitHub:**

   ```bash
   git add .
   git commit -m "Fix GitHub Pages deployment - Convert to React SPA"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically run and deploy your site

3. **Access your deployed site:**
   - Your site will be available at: `https://[your-username].github.io/WT-Lab-3/`
   - The URL will be shown in the Actions tab after successful deployment

## How it works

- Uses HashRouter for client-side routing (GitHub Pages compatible)
- Routes: `/#/home`, `/#/about`, `/#/services`, `/#/contact`
- The workflow triggers on every push to `main` or `master` branch
- Builds the React app and deploys the `dist/` folder to GitHub Pages
- The site updates automatically with each push

## Local Development

- Run `npm install` to install dependencies
- Run `npm run dev` for development server
- Run `npm run build` to test the production build locally
- Run `npm run preview` to preview the production build

## Architecture

- **React SPA** with TypeScript and Tailwind CSS
- **HashRouter** for GitHub Pages compatibility
- **Shared Layout** component with navigation
- **Responsive Design** with mobile-first approach

## Troubleshooting

- Check the Actions tab in your GitHub repository for build logs
- Ensure your repository is public or you have GitHub Pro for private repo Pages
- The build process should complete successfully (as tested locally)
- All routes use hash-based routing (e.g., `/#/home`) which works on static hosting
