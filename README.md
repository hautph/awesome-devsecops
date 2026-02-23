# Awesome DevSecOps

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![License](https://img.shields.io/github/license/hautph/awesome-devsecops)
![Stars](https://img.shields.io/github/stars/hautph/awesome-devsecops)
![Issues](https://img.shields.io/github/issues/hautph/awesome-devsecops)
![Link Check](https://img.shields.io/github/actions/workflow/status/hautph/awesome-devsecops/link-checker.yml?label=link-checker)
![Security](https://img.shields.io/github/actions/workflow/status/hautph/awesome-devsecops/snyk-security.yml?label=security)

> A curated list of awesome DevSecOps tools and resources.

A comprehensive guide to DevSecOps practices and implementation, designed to help development teams integrate security at every stage of the software development lifecycle.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with React 18, TypeScript, and Tailwind CSS
- **Security-First**: Built-in security linting and audit tools
- **Responsive Design**: Mobile-first approach with dark theme optimization
- **SEO Optimized**: Proper metadata and social sharing capabilities
- **Static Export Ready**: Optimized for deployment to Cloudflare Pages
- **Component Architecture**: Reusable, well-structured components
- **Comprehensive CI/CD**: Automated testing, security scanning, and link validation

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

First, install the dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Export static files for deployment

# Code Quality
npm run lint         # Run ESLint
npm run lint:security # Run security-focused ESLint
npm run type-check   # Run TypeScript type checking
npm run validate-data # Validate JSON data files

# Security
npm run security-audit # Run npm audit with moderate level
```

## 🏗️ Building for Production

### Standard Build

To build the application for production:

```bash
npm run build
```

### Static Export

To export as static files (compatible with Cloudflare Pages, Vercel, or GitHub Pages):

```bash
npm run export
```

This generates a static site in the `out` directory that can be deployed to any static hosting service.

### Production Server

To run the production build locally:

```bash
npm run start
```

## ☁️ Deployment

### Cloudflare Pages (Recommended)

This application is optimized for Cloudflare Pages deployment:

1. Connect your GitHub repository to Cloudflare Pages
2. Set the build command to: `npm run export`
3. Set the build output directory to: `out`
4. Deploy!

### Vercel

For Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages

For GitHub Pages deployment:

1. Build the static site: `npm run export`
2. Commit the `out` directory to a `gh-pages` branch
3. Configure GitHub Pages to use the `gh-pages` branch

### Other Static Hosts

The static export works with any hosting provider that serves static files:
- Netlify
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps

## 📁 Project Structure

```
awesome-devsecops/
├── .github/workflows/     # GitHub Actions workflows
│   ├── codeql-analysis.yml # CodeQL security scanning
│   ├── gitleaks.yml       # Secret scanning
│   ├── link-checker.yml   # Broken link checking
│   ├── sast.yml          # Static application security testing
│   └── snyk-security.yml  # Snyk security scanning
├── data/                 # JSON data files
│   ├── categories.json    # Tool categories
│   ├── examples.json      # Code examples
│   ├── resources.json     # Learning resources
│   ├── roadmap.json       # Learning roadmap
│   └── tools.json         # DevSecOps tools
├── public/               # Static assets
├── scripts/              # Utility scripts
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── code-examples/ # Code examples page
│   │   ├── community/     # Community page
│   │   ├── learning-resources/ # Resources page
│   │   ├── learning-roadmap/   # Roadmap page
│   │   ├── roadmap/       # DevSecOps roadmap
│   │   ├── tools-directory/    # Tools directory
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable React components
│   ├── data/             # TypeScript data files
│   ├── lib/              # Utility libraries
│   ├── schemas/          # JSON schema definitions
│   └── types/            # TypeScript types
├── .eslintrc.json        # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔒 Security

This project includes built-in security measures:

### Security Tools
- **ESLint Security Plugin**: Static code analysis for security issues
- **Snyk Security Scanning**: Dependency vulnerability scanning
- **CodeQL Analysis**: GitHub's semantic code analysis
- **GitLeaks**: Secret scanning in code commits
- **SAST**: Static Application Security Testing

### Security Commands
```bash
npm run lint:security     # Run security-focused ESLint rules
npm run security-audit    # Check for vulnerable dependencies
```

### Security Best Practices
- Regular dependency updates
- Automated security scanning in CI/CD
- Secret detection in commits
- Type-safe development with TypeScript

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute
1. **Add new tools** to the tools directory
2. **Submit code examples** for DevSecOps practices
3. **Improve documentation** and resources
4. **Fix bugs** or suggest enhancements
5. **Review pull requests**

### Contribution Guidelines
- Follow the existing code style and structure
- Ensure all tests pass before submitting
- Update documentation when adding new features
- Use descriptive commit messages following Conventional Commits

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `npm run lint && npm run type-check`
5. Commit your changes: `git commit -m "feat: add your feature"`
6. Push to your fork: `git push origin feature/your-feature`
7. Create a Pull Request

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/hautph/awesome-devsecops)
![GitHub issues](https://img.shields.io/github/issues/hautph/awesome-devsecops)
![GitHub pull requests](https://img.shields.io/github/issues-pr/hautph/awesome-devsecops)
![GitHub last commit](https://img.shields.io/github/last-commit/hautph/awesome-devsecops)
![GitHub contributors](https://img.shields.io/github/contributors/hautph/awesome-devsecops)

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=hautph/awesome-devsecops&type=date&legend=top-left)](https://www.star-history.com/#hautph/awesome-devsecops&type=date&legend=top-left)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ for the DevSecOps community
</p>