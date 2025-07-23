# Portfolio Website

A modern, high-performance portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Optimized for performance, SEO, and accessibility.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4
- **Smooth Animations**: Framer Motion for beautiful page transitions and scroll-triggered animations
- **Dark Mode**: Seamless theme switching with next-themes
- **Performance Optimized**: Lighthouse score 90+ for Performance, SEO, Accessibility, and Best Practices
- **Responsive Design**: Mobile-first approach with perfect responsiveness across all devices
- **SEO Optimized**: Complete metadata management, sitemap generation, and structured data
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes and keyboard navigation
- **Type Safe**: Full TypeScript implementation with strict type checking

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [Heroicons](https://heroicons.com/) & [Lucide React](https://lucide.dev/)
- **SEO**: [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
- **Utilities**: [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Customize your data

Edit the following files to add your personal information:

- `src/data/index.ts` - Update personal info, projects, skills, experience, education
- `src/app/layout.tsx` - Update metadata and SEO information
- `public/` - Replace with your images (avatar, project images, resume)

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 5. Build for production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Base UI components
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── data/                   # Static data
│   │   └── index.ts
│   ├── lib/                    # Utility functions
│   │   └── utils.ts
│   └── types/                  # TypeScript type definitions
│       └── index.ts
├── public/                     # Static assets
│   ├── images/
│   └── resume.pdf
├── .github/
│   └── copilot-instructions.md
├── next-sitemap.config.js
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/data/index.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  email: "your.email@example.com",
  // ... other fields
}
```

### Projects

Add your projects to the `projects` array in `src/data/index.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "your-project",
    title: "Project Title",
    description: "Project description...",
    technologies: ["Next.js", "TypeScript"],
    // ... other fields
  }
]
```

### Theme Colors

Customize colors in `src/app/globals.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  /* ... other custom properties */
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

You can deploy to any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic code splitting and dynamic imports
- **Bundle Analysis**: Optimized bundle size with tree shaking
- **Font Optimization**: Self-hosted fonts with optimal loading
- **Caching**: Optimized caching strategies for static assets

## 🔍 SEO Features

- **Metadata API**: Complete metadata management
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: SEO-friendly robots.txt
- **Structured Data**: JSON-LD schema markup
- **Open Graph**: Social media sharing optimization

## ♿ Accessibility Features

- **Semantic HTML**: Proper HTML structure
- **ARIA Attributes**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant colors
- **Focus Management**: Proper focus indicators

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading on mobile networks

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Heroicons](https://heroicons.com/) for beautiful icons

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

⭐ Star this repository if you found it helpful!
