# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Steps

1. **Push your code to GitHub:**

   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
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

- The workflow triggers on every push to `main` or `master` branch
- It installs dependencies, builds the project, and deploys to GitHub Pages
- The build output from `dist/` folder is deployed
- The site updates automatically with each push

## Local Development

- Run `npm run dev` for development server
- Run `npm run build` to test the production build locally
- Run `npm run preview` to preview the production build

## Troubleshooting

- Check the Actions tab in your GitHub repository for build logs
- Ensure your repository is public or you have GitHub Pro for private repo Pages
- Make sure the base path in vite.config.ts matches your repository name
