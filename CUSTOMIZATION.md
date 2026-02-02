# Customization Guide

This guide will help you customize the portfolio website to match your personal branding and preferences.

## Color Scheme

The website uses a custom color palette defined in `tailwind.config.js`. You can modify the colors to match your brand:

```javascript
colors: {
  primary: {
    // Change these hex values
    500: '#3b82f6',  // Main primary color
    600: '#2563eb',  // Darker shade
  },
  secondary: {
    500: '#8b5cf6',  // Main secondary color
    600: '#7c3aed',  // Darker shade
  },
}
```

## Personal Information

### Hero Section (`src/components/Hero.jsx`)
- Update your name, title, and tagline
- Modify the experience years
- Change call-to-action button text and links

### About Section (`src/components/About.jsx`)
- Edit the professional introduction
- Update the description paragraphs
- Modify the highlight cards

### Skills Section (`src/components/Skills.jsx`)
- Add or remove skill categories
- Update individual skills
- Change skill icons from `react-icons`

### Services Section (`src/components/Services.jsx`)
- Customize service offerings
- Update service descriptions
- Modify feature lists

### Projects Section (`src/components/Projects.jsx`)
- Add your own projects
- Update project descriptions
- Add live links and GitHub repos
- Change technologies used

### Contact Section (`src/components/Contact.jsx`)
- Update email address
- Change phone number
- Modify WhatsApp link
- Add social media links

## Animations

All animations are powered by Framer Motion. To customize:

### Speed
```javascript
transition={{ duration: 0.6 }}  // Change 0.6 to your preferred speed
```

### Animation Type
```javascript
initial={{ opacity: 0, y: 50 }}  // Starting state
animate={{ opacity: 1, y: 0 }}   // Ending state
```

### Hover Effects
```javascript
whileHover={{ scale: 1.05 }}  // Scale up on hover
whileTap={{ scale: 0.95 }}    // Scale down on tap
```

## Typography

The website uses system fonts by default. To use Google Fonts:

1. Add to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

2. Update `src/index.css`:
```css
font-family: 'Inter', sans-serif;
```

## Navigation

Modify the navigation items in `src/components/Navbar.jsx`:

```javascript
const navItems = [
  { name: 'Home', href: '#home' },
  // Add more items
]
```

## Social Media Links

Update social media links in `src/components/Footer.jsx`:

```javascript
const socialLinks = [
  { icon: <FaGithub />, href: "your-github-url" },
  { icon: <FaLinkedin />, href: "your-linkedin-url" },
  // Add more
]
```

## Background Effects

The animated background in the Hero section can be customized:

```javascript
// Number of floating elements
{[...Array(20)].map(...)}  // Change 20 to more or fewer

// Size range
width: Math.random() * 300 + 50,  // Adjust 300 and 50

// Animation speed
duration: Math.random() * 10 + 10,  // Adjust timing
```

## Responsive Breakpoints

Tailwind uses these breakpoints by default:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use them in classes:
```jsx
<div className="text-sm md:text-lg lg:text-xl">
```

## Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `src/App.jsx`
3. Add it to the navigation in `Navbar.jsx`
4. Use the same animation patterns as other sections

## Icons

The project uses `react-icons`. Browse available icons at [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)

Import and use:
```javascript
import { FaYourIcon } from 'react-icons/fa'
<FaYourIcon size={24} />
```

## Forms

To add a contact form, consider using:
- Formspree
- Netlify Forms
- EmailJS
- Your own backend API

Example with EmailJS:
```bash
npm install @emailjs/browser
```

## SEO Optimization

Update meta tags in `index.html`:
```html
<meta name="description" content="Your description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-image-url">
```

## Analytics

Add Google Analytics by adding to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## Performance Tips

1. Optimize images before adding them
2. Use lazy loading for images
3. Minimize custom JavaScript
4. Use Vite's code splitting features
5. Enable caching on your hosting platform

## Testing

Before deploying:
1. Test on multiple devices and browsers
2. Check all links work correctly
3. Verify forms submit properly
4. Test animations on low-end devices
5. Check mobile responsiveness
6. Run Lighthouse audit in Chrome DevTools

## Support

For issues or questions:
1. Check the documentation
2. Review component code comments
3. Test in a clean browser session
4. Check browser console for errors
