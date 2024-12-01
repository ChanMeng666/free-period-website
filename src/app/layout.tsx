import { Plus_Jakarta_Sans } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MainNav } from '@/components/navigation/MainNav';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-primary min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {/* Skip to main content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only">
              Skip to main content
            </a>
            
            <MainNav />
            
            <main id="main-content" className="flex-grow">
              {children}
            </main>

            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}