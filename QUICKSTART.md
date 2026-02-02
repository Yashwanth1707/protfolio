# Quick Start Guide

Get your portfolio website up and running in minutes!

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A code editor (VS Code recommended)

## Installation

```bash
# Clone or download the repository
git clone <repository-url>
cd yashwanth-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Quick Customization

### 1. Update Personal Information (5 minutes)

**Hero Section** - `src/components/Hero.jsx`
- Line 75: Change name
- Line 80: Update title
- Line 86: Modify tagline

**Contact Section** - `src/components/Contact.jsx`
- Lines 12-28: Update email, phone, WhatsApp

### 2. Add Your Projects (10 minutes)

**Projects Section** - `src/components/Projects.jsx`
- Lines 10-59: Replace with your projects
- Add live links
- Update technologies used

### 3. Update Skills (5 minutes)

**Skills Section** - `src/components/Skills.jsx`
- Lines 15-61: Add/remove skills
- Organize by category

### 4. Customize Colors (2 minutes)

**Tailwind Config** - `tailwind.config.js`
- Lines 11-30: Change primary and secondary colors

### 5. Update About Section (5 minutes)

**About Component** - `src/components/About.jsx`
- Lines 68-78: Edit professional introduction

## Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The build will be in the `dist` folder.

## Deploy in 1 Minute

### Vercel (Easiest)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to netlify.com
```

## Common Issues

### Port Already in Use
```bash
# Kill the process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Applied
```bash
# Make sure Tailwind is configured correctly
# Check that index.css is imported in main.jsx
```

## Development Tips

### Hot Reload
Changes are automatically reflected - just save and see updates instantly!

### Component Structure
```
src/
├── components/       # All UI components
│   ├── Navbar.jsx   # Navigation
│   ├── Hero.jsx     # Hero section
│   ├── About.jsx    # About section
│   ├── Skills.jsx   # Skills grid
│   ├── Services.jsx # Services cards
│   ├── Projects.jsx # Portfolio items
│   ├── Contact.jsx  # Contact info
│   └── Footer.jsx   # Footer
├── App.jsx          # Main component
└── main.jsx         # Entry point
```

### Adding a New Section

1. Create new component in `src/components/`
```jsx
// src/components/NewSection.jsx
import { motion } from 'framer-motion'

const NewSection = () => {
  return (
    <section id="newsection" className="py-20 bg-white">
      {/* Your content */}
    </section>
  )
}

export default NewSection
```

2. Import in `App.jsx`
```jsx
import NewSection from './components/NewSection'
// Add <NewSection /> in the return statement
```

3. Add to navigation in `Navbar.jsx`
```jsx
{ name: 'New Section', href: '#newsection' }
```

## Next Steps

1. ✅ Customize content with your information
2. ✅ Add your own projects and descriptions
3. ✅ Update social media links
4. ✅ Change color scheme to match your brand
5. ✅ Test on mobile devices
6. ✅ Deploy to Vercel or Netlify
7. ✅ Share your portfolio URL!

## Getting Help

- Check `CUSTOMIZATION.md` for detailed customization options
- Review `DEPLOYMENT.md` for deployment instructions
- Read component files - they're well commented!

## Performance Checklist

Before deploying:
- [ ] All images optimized
- [ ] No console errors or warnings
- [ ] Tested on mobile devices
- [ ] All links working
- [ ] Meta tags updated
- [ ] Favicon added
- [ ] Analytics configured (optional)

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel Deployment](https://vercel.com/docs)

---

**Time to first deployment: ~30 minutes**

Happy coding! 🚀
