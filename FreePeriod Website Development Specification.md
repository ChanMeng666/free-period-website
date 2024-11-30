# FreePeriod Website Development Specification

## 1. Project Overview

### 1.1 Introduction
FreePeriod is a social enterprise project aimed at providing menstrual product dispensing solutions through innovative vending machines and roll-form sanitary pads. The website serves as both an informational platform and a showcase for our products and locations.

### 1.2 Project Goals
- Create a user-friendly, accessible website
- Showcase product features and locations
- Provide educational content about menstrual health
- Demonstrate environmental impact
- Support multiple languages (English and Chinese)

### 1.3 Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Maps**: Google Maps JavaScript API
- **State Management**: Zustand
- **Deployment**: Vercel

## 2. Brand Design System

### 2.1 Color Palette

```typescript
const brandColors = {
  // Primary palette - Soft, calming pink tones
  primary: {
    50: '#FFF1F2',   // Lightest pink - backgrounds
    100: '#FFE4E6',  // Light pink - hover states
    200: '#FECDD3',  // Soft pink - borders
    300: '#FDA4AF',  // Medium pink - secondary elements
    400: '#FB7185',  // Bright pink - accents
    500: '#F43F5E',  // Core brand pink - primary buttons
    600: '#E11D48',  // Deep pink - hover states
    700: '#BE123C',  // Rich pink - text emphasis
    800: '#9F1239',  // Dark pink - headers
    900: '#881337'   // Darkest pink - special emphasis
  },

  // Secondary palette - Clean, professional blues
  secondary: {
    50: '#F0F9FF',   // Lightest blue
    100: '#E0F2FE',  // Light blue
    500: '#0EA5E9',  // Core blue
    900: '#0C4A6E'   // Darkest blue
  },

  // Neutral palette
  neutral: {
    50: '#F8FAFC',   // Background white
    100: '#F1F5F9',  // Light gray
    500: '#64748B',  // Medium gray
    900: '#0F172A'   // Dark gray
  }
}
```

### 2.2 Typography

```typescript
const typography = {
  fonts: {
    primary: 'Plus Jakarta Sans, sans-serif',
    secondary: 'Inter, sans-serif',
    mono: 'JetBrains Mono, monospace'
  },
  
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  sizes: {
    mobile: {
      h1: '1.875rem',
      h2: '1.5rem',
      body: '1rem'
    },
    desktop: {
      h1: '2.25rem',
      h2: '1.875rem',
      body: '1.125rem'
    }
  }
}
```

## 3. Layout System

### 3.1 Responsive Breakpoints

```typescript
const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}

const containers = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}
```

### 3.2 Grid System

```typescript
const grid = {
  columns: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16
  },
  gap: {
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem'
  }
}
```

## 4. Component Library

### 4.1 Navigation Component

```typescript
interface Navigation {
  type: 'desktop' | 'mobile'
  items: Array<{
    label: string
    href: string
    icon?: ReactNode
  }>
  animation: {
    menuOpen: MotionVariant
    menuItems: MotionVariant
  }
}
```

### 4.2 Product Card

```typescript
interface ProductCard {
  variant: 'compact' | 'full'
  data: {
    title: string
    description: string
    image: string
    features: string[]
    status: 'available' | 'coming-soon'
  }
  animation: {
    hover: MotionVariant
    tap: MotionVariant
  }
}
```

### 4.3 Location Map Component

```typescript
interface MapComponent {
  config: {
    center: { lat: number; lng: number }
    zoom: number
    options: google.maps.MapOptions
  }
  markers?: Array<{
    position: { lat: number; lng: number }
    title: string
    status: 'active' | 'inactive'
  }>
}
```

## 5. Animation System

### 5.1 Page Transitions

```typescript
const pageTransitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: { opacity: 0 }
  }
}
```

### 5.2 Scroll Animations

```typescript
const scrollAnimations = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }
}
```

## 6. Page Structure

### 6.1 Homepage
- Hero section with primary message
- Product showcase
- Impact statistics
- Location map preview
- Call-to-action sections

### 6.2 Product Page
- Product details
- Feature comparison
- Environmental impact
- Installation process
- FAQ section

### 6.3 Locations Page
- Interactive map
- Location list
- Status indicators
- Search functionality

### 6.4 About Page
- Mission statement
- Impact metrics
- Team information
- Partner organizations

## 7. Mobile Optimization

### 7.1 Touch Targets

```typescript
const touchTargets = {
  minimum: '44px',
  comfortable: '48px',
  spacing: '8px'
}
```

### 7.2 Mobile Navigation

```typescript
interface MobileNav {
  type: 'hamburger' | 'bottom-tabs'
  animation: {
    open: MotionVariant
    close: MotionVariant
  }
}
```

## 8. Performance Guidelines

### 8.1 Image Optimization
- Use Next.js Image component
- Implement responsive images
- Lazy loading for off-screen images
- WebP format with fallbacks

### 8.2 Animation Performance
- Use CSS transforms
- Implement opacity and transform animations
- Debounce scroll events
- Use will-change hints sparingly

## 9. Accessibility Requirements

### 9.1 Core Requirements
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels
- Focus management

### 9.2 Color Contrast
- Minimum contrast ratio of 4.5:1 for normal text
- Minimum contrast ratio of 3:1 for large text
- Visual indicators for interactive elements

## 10. Development Workflow

### 10.1 Version Control
- Feature branch workflow
- Conventional commits
- Pull request reviews
- Regular deployments to staging

### 10.2 Quality Assurance
- Cross-browser testing
- Mobile device testing
- Accessibility audits
- Performance monitoring

## 11. Deployment

### 11.1 Deployment Platform
- Vercel for hosting
- Automated deployments
- Preview deployments for PRs
- Custom domain configuration

### 11.2 Build Process
```bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Build
pnpm build

# Start
pnpm start
```

## 12. Future Considerations

### 12.1 Planned Features
- Multi-language support
- Dark mode
- Progressive Web App capabilities
- Enhanced analytics

### 12.2 Scalability
- Component modularity
- Performance optimization
- Code splitting
- Cache management

This specification serves as the definitive guide for the FreePeriod website development. All development work should adhere to these guidelines to maintain consistency and quality across the project.