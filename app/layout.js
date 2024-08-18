import Copyright from '@/components/footer/Copyright';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/landing/navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

import Head from 'next/head';
import Error from './error';
import { afacad, roboto } from './font';
import './globals.css';

export const metadata = {
  title: 'LWS - home',
  description: 'A simple e-commerce app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={roboto.className}>
        <ErrorBoundary fallback={<Error />}>
          <Navbar
            style={{ fontFamily: 'var(--font-poppins)', fontStyle: 'italic' }}
          />
          <main>{children}</main>
          <Footer />
          <Copyright />
        </ErrorBoundary>
      </body>
    </html>
  );
}
