import { Afacad, Inter, Poppins, Roboto } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export { inter, poppins, roboto };
