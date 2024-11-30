# FreePeriod Website Development Documentation

## Overview
This document provides development guidelines for additional pages of the FreePeriod website, building upon the existing homepage. The website aims to showcase menstrual product dispensing solutions while providing educational content and location services.

## Technical Stack
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- Animations: Framer Motion
- State Management: Zustand

## Pages to Develop

### 1. Products Page (`/products`)

#### Layout Structure
- Hero section featuring product categories
- Product showcase grid
- Detailed specifications section

#### Key Components
```typescript
// ProductCard.tsx
interface ProductCard {
  variant: 'roll' | 'single'
  data: {
    title: string
    description: string
    features: string[]
    specifications: {
      dimensions: string
      capacity: number
      materials: string[]
    }
  }
}

// ProductSpecifications.tsx
interface SpecTable {
  headers: string[]
  rows: Array<{
    label: string
    value: string
  }>
}
```

#### Design Elements
- Use primary color palette for CTAs
- Implement hover animations using Framer Motion
- Responsive grid layout (2 columns on mobile, 4 on desktop)

### 2. Locations Page (`/locations`)

#### Layout Structure
- Interactive map section
- Location list/grid
- Search and filter functionality

#### Key Components
```typescript
// LocationMap.tsx
interface MapConfig {
  center: {
    lat: number
    lng: number
  }
  zoom: number
  markers: Array<{
    position: { lat: number, lng: number }
    title: string
    status: 'active' | 'inactive'
  }>
}

// LocationCard.tsx
interface LocationDetails {
  name: string
  address: string
  type: 'school' | 'mall' | 'public'
  status: 'active' | 'inactive'
  operatingHours: string
}
```

#### Integration Points
- Google Maps JavaScript API
- Location data fetching placeholder
- Status indicators for vending machines

### 3. Impact Page (`/impact`)

#### Layout Structure
- Impact statistics dashboard
- Visual data representations
- Success stories section

#### Key Components
```typescript
// ImpactMetric.tsx
interface MetricCard {
  title: string
  value: number
  unit: string
  trend: 'up' | 'down' | 'stable'
  period: string
}

// ImpactChart.tsx
interface ChartData {
  labels: string[]
  datasets: Array<{
    label: string
    data: number[]
  }>
}
```

#### Design Elements
- Animated counters for statistics
- Interactive charts using Recharts
- Scrolling testimonials section

### 4. Education Page (`/education`)

#### Layout Structure
- Educational content grid
- Resource downloads section
- FAQ accordion

#### Key Components
```typescript
// ResourceCard.tsx
interface Resource {
  title: string
  description: string
  type: 'article' | 'video' | 'download'
  thumbnail: string
  link: string
}

// FAQSection.tsx
interface FAQItem {
  question: string
  answer: string
  category: string
}
```

#### Design Elements
- Card-based layout for resources
- Animated transitions for FAQ expansion
- Progress indicators for educational content

### 5. Authentication Pages (`/auth`)

#### Layout Structure
- Login form (`/auth/login`)
- Registration form (`/auth/register`)
- Password recovery (`/auth/reset`)

#### Key Components
```typescript
// AuthForm.tsx
interface AuthFormProps {
  type: 'login' | 'register' | 'reset'
  onSubmit: (data: FormData) => void
  loading: boolean
}

// FormField.tsx
interface FormField {
  label: string
  type: 'text' | 'email' | 'password'
  validation?: {
    required?: boolean
    pattern?: RegExp
    minLength?: number
  }
}
```

#### Design Elements
- Clean, minimalist form layout
- Visual feedback for form validation
- Loading states for submissions

## Shared Components

### Navigation
```typescript
interface NavigationItem {
  label: string
  path: string
  icon?: ReactNode
  children?: NavigationItem[]
}

const navigationConfig: NavigationItem[] = [
  {
    label: 'Products',
    path: '/products'
  },
  {
    label: 'Locations',
    path: '/locations'
  },
  {
    label: 'Impact',
    path: '/impact'
  },
  {
    label: 'Education',
    path: '/education'
  }
]
```

### Layout Components
```typescript
interface PageHeader {
  title: string
  subtitle?: string
  breadcrumbs?: Array<{
    label: string
    path: string
  }>
}

interface PageContainer {
  maxWidth: 'sm' | 'md' | 'lg' | 'xl'
  padding: 'none' | 'normal' | 'large'
}
```

## Styling Guidelines

### Color Usage
```typescript
const colors = {
  primary: {
    50: '#FFF1F2',
    500: '#F43F5E',
    900: '#881337'
  },
  secondary: {
    50: '#F0F9FF',
    500: '#0EA5E9',
    900: '#0C4A6E'
  }
}
```

### Typography
```typescript
const typography = {
  heading: {
    h1: 'text-4xl font-bold md:text-5xl',
    h2: 'text-3xl font-semibold md:text-4xl',
    h3: 'text-2xl font-medium md:text-3xl'
  },
  body: {
    default: 'text-base text-neutral-800',
    large: 'text-lg text-neutral-800'
  }
}
```

## Responsive Design

### Breakpoints
```typescript
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}
```

### Grid System
```typescript
const grid = {
  container: {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl'
  },
  columns: {
    mobile: 4,
    tablet: 8,
    desktop: 12
  }
}
```

## Animation Guidelines

### Page Transitions
```typescript
const pageTransitions = {
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { opacity: 0 }
  }
}
```

### Component Animations
```typescript
const componentAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 }
  }
}
```

## Development Process

1. Create page components following Next.js 14 App Router structure
2. Implement responsive layouts using Tailwind CSS
3. Add interactive elements with Framer Motion animations
4. Integrate shadcn/ui components where appropriate
5. Add proper TypeScript types and interfaces
6. Implement placeholder data structures
7. Add error boundaries and loading states
8. Ensure accessibility compliance
9. Test responsive behavior
10. Optimize performance

## Testing Guidelines

- Component testing with React Testing Library
- Responsive testing across breakpoints
- Accessibility testing with axe-core
- Performance testing with Lighthouse
- Cross-browser testing (Chrome, Firefox, Safari)