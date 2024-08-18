import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/landing/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LWS Cart',
  description: 'A simple e-commerce app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
