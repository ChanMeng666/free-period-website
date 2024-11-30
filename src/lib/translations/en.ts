export const en = {
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    notFound: 'Page not found'
  },
  navigation: {
    home: 'Home',
    products: 'Products',
    locations: 'Locations',
    impact: 'Impact',
    education: 'Education',
    login: 'Sign in',
    register: 'Get Started'
  },
  hero: {
    headline: 'Revolutionizing Menstrual Care',
    subheadline: 'Innovative, sustainable, and accessible solutions for everyone',
    cta: {
      primary: 'Explore Products',
      secondary: 'Learn More',
      register: 'Create Free Account',
      products: 'Explore Products'
    }
  },
  // products: {
  //   title: 'Our Products',
  //   subtitle: 'Discover our innovative solutions for modern menstrual care',
  //   description: 'A revolutionary menstrual care product that combines comfort, sustainability, and innovation.',
  //   tabs: {
  //     features: 'Features',
  //     specifications: 'Specifications',
  //     impact: 'Environmental Impact'
  //   },
  //   features: {
  //     eco: {
  //       title: 'Eco-Friendly Material',
  //       description: 'Made from 100% biodegradable materials, reducing environmental impact.'
  //     },
  //     smart: {
  //       title: 'Smart Absorption',
  //       description: 'Advanced technology for optimal comfort and protection.'
  //     },
  //     easy: {
  //       title: 'Easy Installation',
  //       description: 'Simple and intuitive design for hassle-free use.'
  //     }
  //   },
  //   specifications: {
  //     material: 'Material',
  //     duration: 'Duration',
  //     'size-options': 'Size Options',
  //     packaging: 'Packaging'
  //   },
  //   impact: {
  //     title: 'Environmental Impact',
  //     co2: 'CO2 Saved',
  //     waste: 'Waste Prevented',
  //     water: 'Water Saved'
  //   },
  //   grid: {
  //     title: 'Our Products',
  //     subtitle: 'Discover our complete range of menstrual care solutions',
  //     categories: {
  //       all: 'All Products',
  //       dispenser: 'Dispensers',
  //       refill: 'Refills'
  //     }
  //   }
  // },

  products: {
    evolution: {
      title: "Product Evolution",
      subtitle: "Our journey towards zero environmental impact",
      v1: {
        title: "FreePeriod 1.0",
        subtitle: "Revolutionary Sustainable Dispenser",
        description: "Our first-generation smart dispenser achieved a breakthrough 98.5% reduction in carbon emissions compared to traditional vending machines."
      },
      v2: {
        title: "FreePeriod 2.0",
        subtitle: "The Next Evolution",
        description: "Setting new standards in sustainable dispensing with enhanced efficiency.",
        comingSoon: "Coming Soon"
      }
    },
    specifications: {
      title: "Technical Specifications",
      power: "Power Rating",
      energy: "Annual Energy Consumption",
      emissions: "Carbon Emissions",
      type: "Product Type"
    }
  },
  
  impact: {
    chart: {
      title: "Carbon Emission Comparison",
      v2note: "FreePeriod 2.0 will achieve even lower emissions - Coming Soon",
      traditional: "Traditional Vending Machine",
      freePeriod: "FreePeriod Smart Dispenser",
      power: "Power Consumption",
      energy: "Annual Energy Use",
      emissions: "Carbon Emissions"
    }
  },
  
  locations: {
    title: 'Find Our Locations',
    subtitle: 'Discover FreePeriod dispensers near you',
    search: {
      placeholder: 'Search by location or address...'
    },
    type: {
      hospital: 'Hospital',
      mall: 'Shopping Mall',
      school: 'Educational Institution'
    },
    status: {
      active: 'Available',
      coming: 'Coming Soon'
    }
  },
  impact: {
    title: 'Our Impact',
    subtitle: 'Making a difference in menstrual care accessibility',
    metrics: {
      users: 'Active Users',
      waste: 'Waste Reduced',
      satisfaction: 'User Satisfaction'
    },
    trends: {
      up: '↑ Increasing',
      down: '↓ Decreasing'
    },
    chart: {
      title: 'Impact Growth Over Time',
      placeholder: 'Chart visualization coming soon'
    },
    stories: {
      title: 'Impact Stories',
      school: {
        location: 'Hong Kong University',
        quote: 'The installation of FreePeriod dispensers has made a significant difference in our campus community.'
      },
      hospital: {
        location: 'Central Hospital',
        quote: 'FreePeriod has helped us provide better care and support for our patients and staff.'
      }
    }
  },
  education: {
    title: 'Education & Resources',
    subtitle: 'Learn more about menstrual health and our solutions',
    resources: {
      guide: {
        title: 'User Guide',
        description: 'Comprehensive guide on using FreePeriod products'
      },
      tutorial: {
        title: 'Video Tutorial',
        description: 'Step-by-step video instructions for installation and use'
      },
      workshop: {
        title: 'Online Workshop',
        description: 'Interactive sessions on menstrual health education'
      }
    },
    downloads: {
      title: 'Downloadable Resources',
      brochure: {
        title: 'Product Brochure'
      },
      manual: {
        title: 'User Manual'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      usage: {
        question: 'How do I use FreePeriod products?',
        answer: 'Our products are designed to be intuitive and easy to use. Simply follow the instructions on the dispenser.'
      },
      maintenance: {
        question: 'How often should the dispenser be maintained?',
        answer: 'We recommend monthly maintenance checks to ensure optimal performance.'
      },
      availability: {
        question: 'Where can I find FreePeriod dispensers?',
        answer: 'Our dispensers are available in various locations including schools, hospitals, and public facilities.'
      }
    }
  },
  auth: {
    fields: {
      email: 'Email',
      password: 'Password',
      firstName: 'First Name',
      lastName: 'Last Name'
    },
    login: {
      title: 'Sign in to your account',
      subtitle: 'Welcome back',
      remember: 'Remember me',
      forgot: 'Forgot password?',
      submit: 'Sign in',
      loading: 'Signing in...',
      register: 'Don\'t have an account? Sign up'
    },
    register: {
      title: 'Create your account',
      subtitle: 'Join FreePeriod today',
      submit: 'Sign up',
      loading: 'Creating account...',
      login: 'Already have an account? Sign in'
    },
    reset: {
      title: 'Reset your password',
      subtitle: 'We\'ll send you instructions via email',
      submit: 'Send instructions',
      loading: 'Sending...',
      success: 'Check your email for reset instructions',
      back: 'Back to sign in'
    }
  }
} as const; 