# Rayora Website

Modern, responsive website for Rayora UG built with Next.js and Tailwind CSS.

## 🚀 Live Site
- **Production**: `https://rayora.de`
- **Staging**: TBD

## 🛠 Tech Stack
- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **Email**: Resend API
- **Deployment**: Netlify
- **Version Control**: Git

## 📋 Features
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Modern UI with smooth animations
- ✅ Contact form with email integration
- ✅ SEO optimized
- ✅ Active navigation highlighting
- ✅ Error boundaries and 404 handling
- ✅ TypeScript for type safety
- ✅ ESLint for code quality

## 🏗 Project Structure
```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/          # About page
│   │   ├── consulting/     # Consulting page
│   │   ├── contact/        # Contact page
│   │   ├── solutions/      # Solutions page
│   │   ├── api/           # API routes
│   │   └── layout.tsx     # Root layout
│   ├── components/        # Reusable components
│   └── styles/           # Global styles
├── public/               # Static assets
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/rayora-ug/official-website.git
cd official-website

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Netlify (Recommended)
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set environment variables
4. Deploy automatically on push to main

### Manual Deployment
```bash
npm run build
npm run start
```

## 📧 Contact Form Setup
The contact form uses Resend API. Configure:
1. Sign up at [resend.com](https://resend.com)
2. Add your API key to `.env.local`
3. Verify your domain for email sending

## 🔧 Configuration Files
- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `netlify.toml` - Netlify deployment settings
- `tsconfig.json` - TypeScript configuration

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License
© 2025 Rayora UG. All rights reserved.

## 🐛 Issues & Support
For issues or questions, please contact the development team.

---

**Built with ❤️ by the Rayora team**
