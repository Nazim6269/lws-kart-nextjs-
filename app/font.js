import { Inter, Poppins, Roboto, Afacad } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
});

const afacad = Afacad({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export { inter, poppins, roboto, afacad };
