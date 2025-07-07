// src/pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Space_Grotesk } from "next/font/google";
import "@/styles/swiper-custom.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", weight: ["400", "700"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <main className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </main>
      <style jsx global>{`
        .react-medium-image-zoom__close {
          top: 8px !important;
          right: 8px !important;
          color: #fff !important;
          background: #ff9900 !important;
          border: 3px solid #fff !important;
          width: 56px !important;
          height: 56px !important;
          font-size: 2.5rem !important;
          box-shadow: 0 0 16px #ff9900;
        }
      `}</style>
    </CartProvider>
  );
}
export default MyApp;