# Finančný Poradca Website

A modern, responsive website for a Slovak financial advisor built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern Tech Stack** - Next.js 15, React 19, TypeScript, Tailwind CSS
- **Professional Design** - Clean, modern interface with brand colors
- **Contact Integration** - Connected contact forms and buttons
- **SEO Optimized** - Proper meta tags and structure
- **Fast Performance** - Optimized for speed and user experience

## 📱 Pages

- **Home** (`/domov`) - Hero banner, achievements, testimonials, investment partners
- **About** (`/o-mne`) - Personal story, benefits, achievements, partners, certificates
- **Services** (`/sluzby`) - Available financial services
- **Partnership** (`/spoluprace`) - Partnership opportunities
- **References** (`/referencie`) - Client testimonials
- **Blog** (`/blog`) - Financial advice and insights
- **Contact** (`/kontakt`) - Contact form, hours, location, social media

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: React 19
- **Deployment**: Ready for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/financny-poradca.git
   cd financny-poradca
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
financny_page/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── domov/          # Home page
│   │   ├── o-mne/          # About page
│   │   ├── sluzby/         # Services page
│   │   ├── spoluprace/     # Partnership page
│   │   ├── referencie/     # References page
│   │   ├── blog/           # Blog page
│   │   ├── kontakt/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   └── components/         # Reusable components
│       ├── Navbar.tsx      # Navigation component
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#5ECAD5` (Cyan)
- **Dark**: `#202325` (Dark Gray)
- **Light**: `#EBEBEB` (Light Gray)
- **White**: `#FFFFFF`

### Typography
- **Font**: Geist Sans (Google Fonts)
- **Weights**: Light, Regular, Medium, Semibold, Bold

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Peter Šefčík**
- Email: sefcikpeter66@gmail.com
- Website: [Your Website]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters

---

Made with ❤️ for financial advisors in Slovakia
