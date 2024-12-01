// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Brand colors
//         brand: {
//           // Primary palette
//           primary: {
//             50: '#FFF1F2',
//             100: '#FFE4E6',
//             200: '#FECDD3',
//             300: '#FDA4AF',
//             400: '#FB7185',
//             500: '#F43F5E',
//             600: '#E11D48',
//             700: '#BE123C',
//             800: '#9F1239',
//             900: '#881337'
//           },
//           // Secondary palette
//           secondary: {
//             50: '#F0F9FF',
//             100: '#E0F2FE',
//             500: '#0EA5E9',
//             900: '#0C4A6E'
//           },
//           // Neutral palette
//           neutral: {
//             50: '#F8FAFC',
//             100: '#F1F5F9',
//             500: '#64748B',
//             900: '#0F172A'
//           },
//         },
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))'
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))'
//         },
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))'
//         },
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))'
//         },
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))'
//         },
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))'
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))'
//         },
//         border: 'hsl(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)'
//       },
//       fontFamily: {
//         primary: ['var(--font-plus-jakarta)', 'sans-serif'],
//         secondary: ['Inter', 'sans-serif'],
//         mono: ['JetBrains Mono', 'monospace']
//       },
//       fontSize: {
//         // Mobile sizes
//         'mobile-h1': '1.875rem',
//         'mobile-h2': '1.5rem',
//         'mobile-body': '1rem',
//         // Desktop sizes
//         'desktop-h1': '2.25rem',
//         'desktop-h2': '1.875rem',
//         'desktop-body': '1.125rem'
//       },
//       screens: {
//         'xs': '320px',
//         'sm': '640px',
//         'md': '768px',
//         'lg': '1024px',
//         'xl': '1280px'
//       },
//       container: {
//         center: true,
//         padding: '1rem',
//         screens: {
//           'sm': '640px',
//           'md': '768px',
//           'lg': '1024px',
//           'xl': '1280px'
//         }
//       }
//     }
//   },
//   plugins: [require("tailwindcss-animate")],
// }; 

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          // Primary palette
          primary: {
            50: '#FFF1F2',
            100: '#FFE4E6',
            200: '#FECDD3',
            300: '#FDA4AF',
            400: '#FB7185',
            500: '#F43F5E',
            600: '#E11D48',
            700: '#BE123C',
            800: '#9F1239',
            900: '#881337'
          },
          // Secondary palette
          secondary: {
            50: '#F0F9FF',
            100: '#E0F2FE',
            500: '#0EA5E9',
            900: '#0C4A6E'
          },
          // Neutral palette
          neutral: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            500: '#64748B',
            900: '#0F172A'
          },
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        primary: ['var(--font-plus-jakarta)', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        // Mobile sizes
        'mobile-h1': '1.875rem',
        'mobile-h2': '1.5rem',
        'mobile-body': '1rem',
        // Desktop sizes
        'desktop-h1': '2.25rem',
        'desktop-h2': '1.875rem',
        'desktop-body': '1.125rem'
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px'
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};