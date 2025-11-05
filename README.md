# Peter de Keijzer - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development skills and professional experience. Built with React and TypeScript, featuring a cohesive color-coordinated design system and smooth animations.

## 🌟 Features

### Design & User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS transitions and intersection observer animations
- **Color-Coordinated Theme**: Consistent color scheme throughout all sections
- **Modern Glassmorphism UI**: Semi-transparent elements with backdrop blur effects
- **Interactive Elements**: Hover effects, gradient text, and animated components

### Navigation
- **Color-Coded Navbar**: Each section has a unique color theme
  - Home: Blue (`#1e90ff`)
  - Skills: Purple (`#8b5cf6`) 
  - Projects: Red (`#ff4444`)
  - Experience: Green (`#22c55e`)
  - Contact: Blue (`#1e90ff`)
- **Smooth Scrolling**: Seamless navigation between sections
- **Active Section Highlighting**: Visual feedback for current section

### Sections

#### 🏠 Home/Hero
- Dynamic introduction with animated text
- Professional tagline and call-to-action
- Gradient background with modern styling

#### 🛠️ Skills
- Categorized skill display (Frontend, Backend, Tools & Technologies)
- Interactive skill cards with hover effects
- Technology icons and proficiency indicators
- Purple theme matching navbar color

#### 💼 Projects
- Project showcase with detailed descriptions
- **White-to-Red Gradient Links**: "View Project" links with custom styling
- Technology stack display for each project
- Responsive grid layout
- Red theme matching navbar color

#### 👨‍💼 Experience
- **Professional Timeline**: Visual journey through career progression
- **Color-Coordinated Timeline Elements**:
  - Vertical line with blue→red→green gradient
  - Individual ball markers: Blue (top), Red (middle), Green (bottom)
  - Job titles with matching gradients
  - Year periods with matching gradients
- **Testimonials Section**: Client/colleague recommendations
- **Color-Coded Testimonial Avatars**: Each avatar matches navbar colors
  - Sarah Chen: Blue (Home color)
  - Marcus Rodriguez: Purple (Skills color)
  - Lisa Thompson: Red (Projects color)
  - Alex Kim: Green (Experience color)
- Perfect timeline marker alignment on all devices
- Green theme matching navbar color

#### 📞 Contact
- Contact form with user-friendly placeholders
- Real email integration: `pjcr.dekeijzer@gmail.com`
- Social media links
- Contact information display
- Blue theme matching navbar color

### Technical Features
- **TypeScript**: Type-safe development
- **CSS Modules**: Scoped styling for each component
- **Intersection Observer**: Scroll-based animations
- **Responsive Grid Layouts**: CSS Grid and Flexbox
- **Gradient Text Effects**: Advanced CSS text styling
- **Mobile-First Design**: Optimized for mobile devices

## 🚀 Technologies Used

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Grid, Flexbox, Backdrop Filter)
- **Icons**: Custom SVG icons
- **Deployment**: Static site deployment ready

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints optimized for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Optimizations
- Timeline marker positioning: `left: 0.125rem` (fine-tuned for Pixel devices)
- Adjusted grid layouts for smaller screens
- Touch-friendly interactive elements
- Optimized text sizing with `clamp()` functions

## 🎨 Color System

### Primary Color Palette
```css
/* Navigation Colors */
--home-color: #1e90ff (Blue)
--skills-color: #8b5cf6 (Purple)
--projects-color: #ff4444 (Red)
--experience-color: #22c55e (Green)
--contact-color: #1e90ff (Blue)

/* Gradients */
--text-gradient: linear-gradient(135deg, #ffffff 0%, #ffffff 40%, [section-color] 100%)
--timeline-gradient: linear-gradient(180deg, #1e90ff 0%, #ff4444 50%, #22c55e 100%)
```

### Design Consistency
- Section titles use gradients matching their navbar button colors
- Timeline elements (markers, periods, titles) coordinate with position colors
- Testimonial avatars reflect the complete navbar color scheme
- Project links use white-to-red gradients
- Hover effects enhance the base colors with appropriate opacity

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd peterdekeijzer

# Install dependencies
npm install
```

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

### Project Structure
```
src/
├── components/           # React components
│   ├── Navbar/          # Navigation component
│   ├── Hero/            # Landing section
│   ├── Skills/          # Skills showcase
│   ├── Projects/        # Project portfolio
│   ├── Experience/      # Timeline & testimonials
│   ├── Contact/         # Contact form & info
│   └── Footer/          # Footer component
├── styles/              # Component-specific CSS
├── assets/              # Static assets
└── App.tsx              # Main application component
```

## 📧 Contact Information

- **Email**: [pjcr.dekeijzer@gmail.com](mailto:pjcr.dekeijzer@gmail.com)
- **Portfolio**: Live at deployed URL
- **GitHub**: Link in footer section

## 🔄 Recent Updates

### Latest Version (November 2025)
- ✅ Complete color coordination system implementation
- ✅ Timeline marker perfect alignment on all devices
- ✅ Individual testimonial avatar color matching
- ✅ White-to-red gradient project links
- ✅ Real email address integration
- ✅ Mobile-specific positioning optimizations

### Key Improvements
- **Timeline Enhancement**: Perfect marker alignment with mathematical positioning
- **Color Cohesion**: Every element follows the established color scheme
- **Mobile Optimization**: Pixel-perfect rendering on mobile devices
- **User Experience**: Improved visual hierarchy and interaction feedback

## 📄 License

This project is personal portfolio website. Please respect intellectual property rights.

---

*Built with ❤️ by Peter de Keijzer using React, TypeScript, and modern CSS*
