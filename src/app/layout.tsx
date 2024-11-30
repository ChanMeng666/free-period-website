import { Inter } from 'next/font/google';
import { MainNav } from '@/components/navigation/MainNav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}