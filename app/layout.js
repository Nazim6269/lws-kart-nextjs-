import Copyright from "@/components/footer/Copyright";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/landing/navbar/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import SessionProvider from "@/providers/SessionProvider";
import { connectMongo } from "@/service/mongoConnection";
import Head from "next/head";
import Error from "./error";
import { roboto } from "./font";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "LWSkart - home",
  description: "A simple e-commerce app",
};

export default async function RootLayout({ children }) {
  await connectMongo();

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
          <Navbar />
          <main>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {children}
          </main>
          <Footer />
          <Copyright />
        </ErrorBoundary>
      </body>
    </html>
  );
}
