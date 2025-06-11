import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import { products, Product } from "@/data/products";
import BitcoinPrice from "@/components/BitcoinPrice";
import ProductModal from "@/components/ProductModal";
import { useBtcEur } from "@/hooks/useBtcEur";

export default function Home() {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const btcEur = useBtcEur();

  const handleAddToCart = (product: Product) => {
    alert(`Aggiunto ${product.name} al carrello!`);
  };

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
          <h2 className="text-4xl font-bold text-white">DISCOVER OUR COLLECTION</h2>
        </div>

        {/* Sezione Gadget */}
        <section id="gadget" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] text-center uppercase font-headline">
            GADGET
          </h2>
          <ProductSlider
            products={products.filter(p => p.category === "gadget").slice(0, 6)}
            onProductClick={setModalProduct}
            onAddToCart={handleAddToCart}
          />
        </section>

        {/* Sezione Wear */}
        <section id="wear" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] animate-neon-glow-blink text-center uppercase">
            WEAR
          </h2>
          <ProductSlider
            products={products.filter(p => p.category === "wear").slice(0, 6)}
            onProductClick={setModalProduct}
            onAddToCart={handleAddToCart}
          />
        </section>

        {/* Sezione Art */}
        <section id="art" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] animate-neon-glow-blink text-center uppercase">
            ART
          </h2>
          <ProductSlider
            products={products.filter(p => p.category === "art").slice(0, 6)}
            onProductClick={setModalProduct}
            onAddToCart={handleAddToCart}
          />
        </section>
      </main>
      <Footer />
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        btcEur={btcEur}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}