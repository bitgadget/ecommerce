import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import { Product } from "@/data/products";
import BitcoinPrice from "@/components/BitcoinPrice";
import ProductModal from "@/components/ProductModal";
import { useBtcEur } from "@/hooks/useBtcEur";

export default function Home() {
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const btcEur = useBtcEur();

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        const mapped = Array.isArray(data)
          ? data.map((p: any) => ({
              ...p,
              priceEUR: Number(p.price_eur),
              images: p.images,
              category: p.category,
              description: p.description,
              name: p.name,
              id: p.id,
            }))
          : [];
        setProducts(mapped);
      });
  }, []);

  const safeProducts = Array.isArray(products) ? products : [];

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

        {/* Lista di tutti i prodotti */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">
            TUTTI I PRODOTTI
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
                  Prezzo: {product.priceEUR} €
                </p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setModalProduct(product)}
                    className="text-bitcoin font-semibold"
                  >
                    Visualizza
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        btcEur={btcEur}
      />
    </>
  );
}