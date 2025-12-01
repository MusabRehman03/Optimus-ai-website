# Optimus AI - Modern AI Automation Website

A modern, eye-catching website for Optimus AI, an automation company specializing in AI-powered solutions. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and a professional, futuristic UI.

## 🌟 Features

- **Modern Tech Stack**: Next.js 16 with JavaScript, Tailwind CSS 4, Framer Motion
- **Futuristic Design**: Dark theme with cyan/purple gradient accents
- **Smooth Animations**: Page transitions, hover effects, scroll animations
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **4 Complete Pages**: Home, About, Services, Contact
- **Service Showcase**: Voice Agents, Chat Agents, AI Website Development, Workflow Automation
- **Interactive Contact Form**: With validation and success feedback
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Static site generation for fast loading

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MusabRehman03/Optimus-ai-website.git
cd Optimus-ai-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
optimus-ai-website/
├── app/
│   ├── about/
│   │   └── page.js          # About page
│   ├── services/
│   │   └── page.js          # Services page
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.js            # Navigation component
│   └── Footer.js            # Footer component
├── public/                  # Static assets
└── package.json
```

## 🎨 Pages

### Home
- Hero section with call-to-action buttons
- Services overview with icons
- Features section highlighting benefits
- CTA section for conversions

### About
- Company story and mission
- Impact statistics
- Core values
- Rotating AI animation

### Services
- Detailed service descriptions
- Real business use cases
- Key features for each service
- Implementation process

### Contact
- Contact information
- Interactive contact form
- Office hours
- Location placeholder

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Customization

### Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --primary: #00d9ff;
  --secondary: #7c3aed;
  --accent: #f97316;
  --background: #0a0a0f;
  --foreground: #ffffff;
}
```

### Content
- Update page content in `app/**/page.js`
- Modify navigation links in `components/Navbar.js`
- Change footer information in `components/Footer.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Security

- No security vulnerabilities detected (CodeQL verified)
- All user inputs properly escaped in JSX
- Static site generation eliminates runtime security concerns

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MusabRehman03/Optimus-ai-website)

### Build for Production

```bash
npm run build
npm run start
```

## 📄 License

This project is created for Optimus AI.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any inquiries, please contact hello@optimusai.com

---

Made with ❤️ using Next.js and Tailwind CSS

