# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Vite.

## Features

- ✨ **Clean, modern design** with smooth animations
- 🌓 **Dark/Light theme toggle** with system preference detection
- 📱 **Fully responsive** design for all devices
- 🚀 **Fast performance** with Vite bundler
- 📄 **Multi-page routing** using React Router
- 🎨 **Tailwind CSS** for utility-first styling
- 📧 **Contact form** with state management
- 🧩 **Reusable components** for easy customization

## Pages

- **Home**: Hero section with photo, bio, and skills showcase
- **Projects**: Grid of project cards with filtering capability
- **Contact**: Contact form with social links and contact information

## Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization Guide

### Personal Information

Update the following files with your information:

#### `src/components/Header.jsx`
- Change "Your Name" to your actual name

#### `src/pages/Home.jsx`
- Replace profile image URL with your photo
- Update name and title
- Customize bio text
- Update skills array with your technologies

#### `src/pages/Contact.jsx`
- Update contact information (email, location, phone)
- Replace social media links with your profiles
- Modify contact form submission logic

#### `src/pages/Projects.jsx`
- Replace sample projects with your actual projects
- Update project images, descriptions, and links
- Customize filter categories

#### `index.html`
- Update title, description, and meta tags
- Replace favicon if desired

### Styling

The website uses Tailwind CSS for styling. You can:
- Modify colors in `tailwind.config.js`
- Customize animations and extend the theme
- Add new utility classes

### Form Handling

The contact form currently simulates submission. To make it functional:
1. Set up a backend API endpoint
2. Use a service like Netlify Forms, Formspree, or EmailJS
3. Update the `handleSubmit` function in `src/pages/Contact.jsx`

### Deployment

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or need help customizing the website, feel free to open an issue or reach out!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
