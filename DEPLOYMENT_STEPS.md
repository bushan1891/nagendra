# GitHub Pages Deployment Guide

## ✅ Your Site is Live!

**Live URL:** https://bushan1891.github.io/gh-react-portfolio/

---

## 🚀 Deployment Steps (For Future Updates)

### Step 1: Make Your Changes
Edit your files as needed (update content in `src/assets/background.json`, modify components, etc.)

### Step 2: Commit Your Changes
```bash
git add .
git commit -m "Your commit message here"
```

### Step 3: Push to GitHub
```bash
git push origin main
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

That's it! Your site will be live in 1-2 minutes.

---

## 📝 Quick Update Commands

For quick updates, run all commands at once:
```bash
git add . && \
git commit -m "Update portfolio content" && \
git push origin main && \
npm run deploy
```

---

## ⚙️ Configuration Files

### `vite.config.js`
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/gh-react-portfolio/',  // Must match your repo name
})
```

### `package.json` - Deploy Scripts
```json
{
  "homepage": "https://bushan1891.github.io/gh-react-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

## 🔧 GitHub Pages Settings

1. Go to your repository: https://github.com/bushan1891/gh-react-portfolio
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `root`
4. Click **Save**

---

## 📂 Project Structure

```
gh-react-portfolio/
├── src/
│   ├── App.jsx                    # Main application with routing
│   ├── components/
│   │   └── CaseStudyDetail.jsx   # Individual case study pages
│   ├── assets/
│   │   ├── background.json       # Your professional data
│   │   └── certifications.json   # All 30 certifications
│   ├── index.css                 # Tailwind + animations
│   └── main.jsx                  # Entry point
├── public/
├── dist/                         # Build output (auto-generated)
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🎨 Updating Content

### Update Your Info
Edit `src/assets/background.json`:
- Profile information (name, email, phone, title)
- Professional summary
- Experience
- Case studies
- Skills/competencies
- Education

### Update Certifications
Edit `src/assets/certifications.json`:
- Add new certifications as you earn them
- Include name, date, and status

### Update Styling
- Colors: Search and replace Tailwind color classes (e.g., `blue-500` → `purple-500`)
- Fonts: Update in `tailwind.config.js`
- Animations: Modify in `src/index.css`

---

## 🐛 Troubleshooting

### Site shows blank page
- Check that `base` in `vite.config.js` matches your repo name
- Verify GitHub Pages is enabled in repository settings
- Check browser console for errors

### Changes not appearing
- Wait 1-2 minutes after deployment
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache

### Deploy command fails
- Make sure you've committed all changes first
- Check that `gh-pages` package is installed: `npm install`
- Verify you have write access to the repository

---

## 📱 Testing Locally

Before deploying, test locally:
```bash
npm run dev
```
Visit: http://localhost:5173/gh-react-portfolio/

To test production build locally:
```bash
npm run build
npm run preview
```

---

## 🔗 Useful Links

- **Live Site**: https://bushan1891.github.io/gh-react-portfolio/
- **Repository**: https://github.com/bushan1891/gh-react-portfolio
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

## 🎯 Features

✅ Clean, modern UI with light/dark mode toggle
✅ Smooth scrolling navigation
✅ Individual case study detail pages
✅ Animated transitions and effects
✅ Fully responsive design
✅ 30 Salesforce certifications displayed
✅ Professional experience timeline
✅ Skills & competencies showcase
✅ Contact information and CTAs

---

## 📊 Performance

- Fast load times with Vite bundling
- Optimized images and assets
- Minimal CSS with Tailwind purging
- Code splitting with React Router

---

**Last Updated**: July 10, 2026
**Status**: ✅ Live and deployed
