# Pierce Connaughton Portfolio

A modern, responsive personal portfolio website built with React and TypeScript to showcase my professional projects, technical skills, work experience, and contact information.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Material-UI components
- **Modern UI/UX**: Clean, professional interface with smooth navigation
- **TypeScript**: Full type safety and better development experience
- **Component-Based Architecture**: Modular, maintainable code structure
- **SEO Optimized**: Built with performance and accessibility in mind
- **Analytics Integration**: Vercel Analytics for visitor insights
- **Cross-Browser Compatible**: Works seamlessly across all modern browsers

## 🚀 Live Demo

[View Portfolio](https://www.pierce-connaughton-portfolio.ie) 

## 🛠️ Technologies Used

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Material-UI (MUI)** - Professional UI component library
- **React Router v7** - Client-side routing
- **SCSS/Sass** - Advanced CSS preprocessing
- **Tailwind CSS** - Utility-first CSS framework

### Build Tools & Development
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

### Deployment & Analytics
- **Vercel** - Hosting and deployment platform
- **Vercel Analytics** - Performance monitoring

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   └── Footer/         # Site footer
├── pages/              # Main application pages
│   ├── Home/           # Landing page
│   ├── About/          # About me section
│   ├── Projects/       # Portfolio projects
│   └── WorkExperience/ # Professional experience
├── data/               # Static data and interfaces
├── routes/             # Application routing
├── styles/             # Global styles and themes
└── assets/             # Images and static resources
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pierce-connaughton-portfolio-react.git
   cd pierce-connaughton-portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Adding New Projects
Update the projects data in `src/data/Projects/Projects.ts` to showcase your latest work.

### Modifying Skills
Edit `src/data/Skills/skills.ts` to reflect your current technical expertise.

### Styling Changes
- Global styles: `src/styles/`
- Component-specific styles: Individual component folders
- Theme configuration: `src/styles/theme.ts`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. Deploy automatically on every push to main branch

### Other Platforms
The app can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **LinkedIn**: https://www.linkedin.com/in/pierce-connaughton
- **GitHub**: https://github.com/PierceConnaughton
- **Email**: pierce.connaught@gmail.com

---

Built with ❤️ using React, TypeScript, and Material-UI
