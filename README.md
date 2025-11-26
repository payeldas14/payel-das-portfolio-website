# Payel Das Portfolio Website

A modern, responsive personal portfolio website for Payel Das - Software Development Engineer. Built with React and Vite, featuring a clean, professional dark theme with smooth animations and intuitive navigation.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Professional sections: Home, About, Experience, Projects, Resume, Contact
- 📧 Contact form with validation
- 🎭 Beautiful animations and transitions
- 🔗 Social media integration

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Custom styling with modern features
- **Google Fonts** - Inter & Poppins fonts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**Hero Section** (`src/components/Hero.jsx`):
- Replace "Your Name" with your actual name
- Update social media links (GitHub, LinkedIn, Email)
- Customize the introduction text

**About Section** (`src/components/About.jsx`):
- Update the about paragraphs with your background
- Modify the skills array with your technical skills
- Adjust the "What I Do" cards to match your expertise

**Experience Section** (`src/components/Experience.jsx`):
- Replace the experiences array with your actual work experience
- Update job titles, companies, dates, responsibilities, and technologies

**Projects Section** (`src/components/Projects.jsx`):
- Update the projects array with your actual projects
- Replace image URLs with your project screenshots
- Add your GitHub and demo links

**Contact Section** (`src/components/Contact.jsx`):
- Replace email, LinkedIn, GitHub links with yours
- Update location information
- Configure form submission (currently shows success message only)

**Footer** (`src/components/Footer.jsx`):
- Update "Your Name" with your actual name
- Update social media links

### 2. Colors and Theme

Modify CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #0066ff;
  --secondary-color: #00d4ff;
  --accent: #00ff88;
  /* ... more colors */
}
```

### 3. Resume

Replace the placeholder PDF in `public/resume.pdf` with your actual resume file.

### 4. Images

For project images, you can either:
- Use your own hosted images
- Place images in the `public` folder and reference them
- Keep using external URLs (Unsplash, etc.)

### 5. Contact Form

The contact form currently shows a success message. To make it functional:
- Integrate with a backend API
- Use services like FormSpree, EmailJS, or Netlify Forms
- Add proper form validation and error handling

## Project Structure

```
portfolio-website/
├── public/
│   └── resume.pdf          # Your resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About me section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Resume.jsx      # Resume download
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Footer.jsx      # Footer
│   │   └── *.css          # Component styles
│   ├── App.jsx            # Main app component
│   ├── App.css            # App styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Deployment

You can deploy this portfolio to various platforms:

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. It will auto-detect Vite configuration

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Update vite.config.js with base path
4. Run: `npm run build && npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your personal portfolio. No attribution required.

## Support

If you have any questions or run into issues, feel free to reach out!

---

Built with ❤️ using React and Vite

