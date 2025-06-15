import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import { Product } from "@/data/products";
import BitcoinPrice from "@/components/BitcoinPrice";
import ProductModal from "@/components/ProductModal";
import { useBtcEur } from "@/hooks/useBtcEur";
import { products as localProducts } from "@/data/products";

export default function Home() {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const btcEur = useBtcEur();

  // Usa direttamente i prodotti locali
  const safeProducts = localProducts;

  return (
    <>
      <BitcoinPrice />
      <Header />
      {/* Banner video con titolo in alto e bottone in basso */}
      <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Titolo in alto */}
        <div className="absolute top-0 left-0 w-full flex justify-center pt-16 z-10">
          <h1 className="text-6xl font-extrabold text-white drop-shadow font-headline">BITGADGET</h1>
        </div>
        {/* Bottone in basso */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-16 z-10">
          <a
            href="#gadget"
            className="bg-bitcoin text-white px-8 py-4 rounded text-xl font-bold hover:bg-bitcoin-dark transition shadow-lg"
          >
            Explore Products &rarr;
          </a>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12">
        {/* Scritta centrale */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">
            DISCOVER OUR COLLECTION
          </h2>
          <p className="text-lg text-white uppercase">
            All products are available, but sales are by request only.
          </p>
        </div>

        {/* Sezione Gadget */}
        <section id="gadget" className="mb-16 scroll-mt-28">
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] animate-neon-glow-blink text-center uppercase font-headline">
            GADGET
          </h2>
          <ProductSlider
            products={safeProducts.filter(p => p.category === "gadget").slice(0, 6)}
            onProductClick={setModalProduct}
          />
        </section>

        {/* Sezione Wear */}
        <section id="wear" className="mb-16 scroll-mt-28">
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] animate-neon-glow-blink text-center uppercase">
            WEAR
          </h2>
          <ProductSlider
            products={safeProducts.filter(p => p.category === "wear").slice(0, 6)}
            onProductClick={setModalProduct}
          />
        </section>

        {/* Sezione Art */}
        <section id="art" className="mb-16 scroll-mt-28">
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] animate-neon-glow-blink text-center uppercase">
            ART
          </h2>
          <ProductSlider
            products={safeProducts.filter(p => p.category === "art").slice(0, 6)}
            onProductClick={setModalProduct}
          />
        </section>

        {/* List of all products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">
            ALL PRODUCTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safeProducts.map((product: any) => (
              <div
                key={product.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-gray-400">
                  Price: {product.priceEUR} €
                </p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setModalProduct(product)}
                    className="text-bitcoin font-semibold"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bitcoin Section */}
        <section className="flex flex-col items-center justify-center my-6">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mb-4 animate-bounce shadow-lg">
            {/* Bitcoin SVG icon */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="white" />
              <text x="50%" y="55%" textAnchor="middle" fill="#f7931a" fontSize="22" fontWeight="bold" fontFamily="Arial" dy=".3em">₿</text>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            Bitcoin is not just a currency, it’s a revolution.
          </h3>
          <p className="text-lg text-gray-200 text-center max-w-xl">
            Join the orange future. Every product here is a statement of freedom and innovation.
            <br />
            <span className="block mt-4 font-extrabold text-2xl uppercase text-orange-400 neon-flash">
              STACK SATS, STAY SOVEREIGN!
            </span>
          </p>
        </section>

        {/* Motivational Section */}
        <section className="flex flex-col items-center justify-center pb-2">
          {/* ...bitcoin content... */}
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 opacity-60 rounded-full" />
        </div>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center pt-2 pb-0 scroll-mt-[100px]"
        >
          <h3 className="text-2xl font-bold text-white mb-3 text-center">
            Contact Us
          </h3>
          <p className="text-base text-gray-300 mb-4 text-center">
            For requests, info, or custom orders, reach out on social or by Telegram.
          </p>
          <div className="flex space-x-6 mb-2">
            <a
              href="https://x.com/bitgadgetstore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-orange-500 transition text-2xl text-white border-2 border-orange-500"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.962-2.475 8.94 8.94 0 0 1-2.828 1.08A4.466 4.466 0 0 0 11.07 9.03c0 .35.04.69.116 1.016-3.713-.186-7.008-1.964-9.207-4.667a4.48 4.48 0 0 0-.604 2.247c0 1.55.79 2.918 2.002 3.722a4.44 4.44 0 0 1-2.022-.56v.057a4.47 4.47 0 0 0 3.58 4.382c-.193.053-.397.082-.607.082-.148 0-.292-.014-.432-.04.293.915 1.144 1.58 2.152 1.597A8.96 8.96 0 0 1 2 19.54a12.66 12.66 0 0 0 6.84 2.006c8.206 0 12.7-6.797 12.7-12.692 0-.193-.004-.385-.013-.576a9.07 9.07 0 0 0 2.235-2.312z"/>
              </svg>
            </a>
            <a
              href="https://t.me/bitgadgetstore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 hover:bg-orange-500 transition text-2xl text-white border-2 border-orange-500"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.954 4.569c-.197-.149-.453-.149-.65 0L2.05 12.924c-.197.149-.197.391 0 .54l2.197 1.664c.197.149.453.149.65 0l1.64-1.242 2.197 1.664c.197.149.453.149.65 0l1.64-1.242 2.197 1.664c.197.149.453.149.65 0l1.64-1.242 2.197 1.664c.197.149.453.149.65 0l2.197-1.664c.197-.149.197-.391 0-.54L21.954 4.569z"/>
              </svg>
            </a>
          </div>
          <span className="text-gray-400 text-sm">info@bitgadget.store</span>
        </section>
      </main>
      <Footer />
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        btcEur={btcEur}
      />
      <style>
        {`
        .neon-flash {
          text-shadow:
            0 0 8px #ff9900,
            0 0 16px #ff9900,
            0 0 24px #ff9900,
            0 0 32px #ff9900;
          animation: neon-flash 1s infinite alternate;
        }
        @keyframes neon-flash {
          from { opacity: 1; text-shadow: 0 0 8px #ff9900, 0 0 16px #ff9900, 0 0 24px #ff9900, 0 0 32px #ff9900; }
          to   { opacity: 0.6; text-shadow: 0 0 2px #ff9900, 0 0 4px #ff9900; }
        }
        `}
      </style>
    </>
  );
}