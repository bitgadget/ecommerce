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
    </CartProvider>
  );
}
export default MyApp;