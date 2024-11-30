import { Plus_Jakarta_Sans } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { MainNav } from '@/components/navigation/MainNav';
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
      <body className={`${plusJakartaSans.variable} font-primary min-h-screen flex flex-col`}>
        <LanguageProvider>
          <MainNav />
          <main className="flex-grow">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}