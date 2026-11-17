# Ankit Verma - Personal Portfolio Website

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive personal portfolio website engineered with **React.js, Vite, and Tailwind CSS**. Designed for showcasing software engineering projects, technical skillsets, academic credentials, and software quality assurance capabilities.

---

## 👨‍💻 About Me

- **Name**: Ankit Verma
- **Role**: Software Engineer | React Developer | QA Engineer
- **Institution**: GLA University, Mathura
- **Degree**: Bachelor of Technology (B.Tech) in Computer Science
- **Status**: Graduate
- **CGPA**: 7.03
- **GitHub**: [github.com/ankit151202](https://github.com/ankit151202)
- **LinkedIn**: [linkedin.com/in/ankit-verma-a107b7251](https://www.linkedin.com/in/ankit-verma-a107b7251)

---

## 🚀 Key Features

- **Premium Dark UI & Glassmorphism**: Tailored with custom radial glow meshes, modern typography (Inter & Fira Code), and sleek card styling.
- **Dynamic Hero Section**: Interactive typewriter effect rotating through roles, quick statistics, and an interactive developer code terminal.
- **Categorized Skills Matrix**: Interactive search and category filtering for Frontend, Backend, Databases, Programming Languages, QA/Testing, and Developer Tools with Lucide icons.
- **Featured Projects & Deep-Dive Modals**:
  1. **CryptEra**: Hierarchical Cloud Storage Platform with AES-256 Encryption.
  2. **Rajesh Jewellers**: Responsive jewellery business showcase & catalog.
  3. **News Aggregator**: React-based real-time news application.
  4. **Job Application Tracker**: React CRUD application for career pipeline management.
  5. **Blood Share & Care**: Community blood donation & emergency connect platform.
- **Academic Timeline**: Highlights GLA University B.Tech in Computer Science, 7.03 CGPA, and core coursework.
- **Configurable Contact Form**: Supports direct POST submission to Formspree, EmailJS, or custom API via `VITE_CONTACT_FORM_ENDPOINT`, with instant feedback and mailto fallback.
- **Dual Downloadable Resumes**: Integrated 1-click downloads for both **Software Developer Resume** and **QA & Testing Engineer Resume**.
- **Responsive Layout**: Mobile hamburger drawer, smooth scroll navigation, and active section tracking.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, JSX, JavaScript (ES6+)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Build Tool**: Vite 6
- **Icons**: Lucide React
- **Animations**: CSS transitions, keyframes, and Framer Motion support

---

## 📂 Project Structure

```
ankit-portfolio/
├── public/
│   └── resume.pdf                   # Downloadable resume placeholder
├── src/
│   ├── assets/                      # Static assets
│   ├── components/
│   │   ├── BackgroundGlow.jsx       # Glowing background effects
│   │   ├── Navbar.jsx               # Sticky glassmorphism header & mobile nav
│   │   ├── Hero.jsx                 # Hero section with role typewriter & terminal
│   │   ├── About.jsx                # Engineering narrative & 3 core pillars
│   │   ├── Skills.jsx               # Interactive skills matrix with search & tabs
│   │   ├── Projects.jsx             # Project showcase cards & filters
│   │   ├── ProjectModal.jsx         # Detailed architectural deep-dive modal
│   │   ├── Education.jsx            # GLA University timeline & coursework
│   │   ├── Contact.jsx              # Configurable contact form & social links
│   │   └── Footer.jsx               # Navigation shortcuts & copyright
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for portfolio info
│   ├── App.jsx                      # App root component
│   ├── index.css                    # Tailwind directives & glass utilities
│   └── main.jsx                     # Application entry point
├── index.html                       # HTML5 entry with fonts & meta tags
├── package.json                     # Dependencies & build scripts
├── tailwind.config.js               # Tailwind design tokens & themes
└── vite.config.js                   # Vite dev server & build settings
```

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js (v18.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ankit151202/ankit-portfolio.git
   cd ankit-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output will be generated in the `dist/` directory ready for deployment.

---

## ⚙️ Configuration

### Contact Form Endpoint (Optional)

To receive messages submitted via the contact form directly to your email without opening an email client:
1. Create a free account at [Formspree.io](https://formspree.io/) and create a new form.
2. Create a `.env` file in the root folder:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
3. Restart the dev server or re-build. The form will automatically POST submissions to your endpoint.

### Customizing Resume

Replace `public/resume.pdf` with your updated curriculum vitae PDF file using the same filename.

---

## 🌐 Deployment

This site can be deployed with zero configuration on:
- **Vercel**: Import your GitHub repository, choose framework preset *Vite*, and deploy.
- **Netlify**: Connect your repository, set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Use `gh-pages` or the GitHub Actions static site workflow.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
