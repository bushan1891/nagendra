# Deployment Instructions

## Quick Start

Your portfolio is ready to deploy to GitHub Pages! Follow these steps:

## Step 1: Create GitHub Repository

If you haven't already:

```bash
git add .
git commit -m "Initial portfolio setup"
git remote add origin https://github.com/bushan1891/gh-react-portfolio.git
git push -u origin main
```

## Step 2: Enable GitHub Pages

### Method A: Using GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Push any commit to the `main` branch to trigger automatic deployment
5. Your site will be live at: `https://bushan1891.github.io/gh-react-portfolio/`

### Method B: Manual Deployment

1. Run the deployment command:
```bash
npm run deploy
```

2. Go to your repository on GitHub
3. Click on **Settings** → **Pages**
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** and **/ (root)**
5. Click Save
6. Your site will be live at: `https://bushan1891.github.io/gh-react-portfolio/`

## Customization Before Deploying

Edit `src/App.jsx` to personalize:

1. **Your Name**: Change "Your Name" in the hero section
2. **Title/Bio**: Update the subtitle and about section
3. **Projects**: Replace placeholder projects with your actual work
4. **Skills**: Update the skills array with your technologies
5. **Contact Links**: 
   - Update GitHub link: `https://github.com/yourusername`
   - Update LinkedIn link: `https://linkedin.com/in/yourusername`
   - Update email: `your.email@example.com`

## Testing Locally

Before deploying, test your site locally:

```bash
npm run dev
```

Visit `http://localhost:5173/gh-react-portfolio/` in your browser.

## Building for Production

To test the production build locally:

```bash
npm run build
npm run preview
```

## Troubleshooting

### Site shows blank page
- Make sure the `base` in `vite.config.js` matches your repository name
- Current setting: `base: '/gh-react-portfolio/'`
- If your repo name is different, update this value

### GitHub Actions fails
- Check that GitHub Pages is enabled in repository settings
- Ensure the workflow has proper permissions (Settings → Actions → General → Workflow permissions → Read and write permissions)

### CSS not loading
- Run `npm run build` to check for any errors
- Ensure Tailwind CSS is properly configured in `tailwind.config.js`

## Updating Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

The site will automatically rebuild and redeploy (if using GitHub Actions).

## Need Help?

Check the [README.md](README.md) for more details about the project structure and customization options.
