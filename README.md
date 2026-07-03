# Portfolio Website

A clean and modern portfolio website built with React and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern gradient backgrounds and smooth animations
- Clean, professional layout
- Easy to customize

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GitHub Pages** - Deployment

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bushan1891/gh-react-portfolio.git
cd gh-react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

1. **Personal Information**: Edit `src/App.jsx` to update your name, description, and contact links.

2. **Projects**: Modify the `projects` array in `App.jsx` to showcase your own projects.

3. **Skills**: Update the `skills` array to reflect your technical expertise.

4. **Colors**: Tailwind classes can be easily modified in the JSX to change the color scheme.

## Deployment to GitHub Pages

### Option 1: Automatic (GitHub Actions)

1. Push your code to the `main` branch
2. Go to your repository Settings > Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The site will automatically deploy on every push to main

### Option 2: Manual

Deploy manually using:
```bash
npm run deploy
```

Then configure GitHub Pages:
1. Go to repository Settings > Pages
2. Under "Build and deployment", select "Deploy from a branch"
3. Select the `gh-pages` branch

Your site will be live at: `https://bushan1891.github.io/gh-react-portfolio/`

## Project Structure

```
gh-react-portfolio/
├── src/
│   ├── App.jsx          # Main component with all sections
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind directives
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

Built with React, Vite, and Tailwind CSS
