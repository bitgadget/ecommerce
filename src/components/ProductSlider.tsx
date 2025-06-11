"use client";
import { Product } from "@/data/products";
import { useRef } from "react";
import { useBtcEur } from "@/hooks/useBtcEur";
import ProductCard from "@/components/ProductCard";

export default function ProductSlider({
  products,
  onProductClick,
  onAddToCart,
}: {
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const btcEur = useBtcEur();

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector("div[data-card]");
      if (!card) return;
      const cardWidth = (card as HTMLElement).offsetWidth + 24; // 24px = gap-6
      scrollRef.current.scrollBy({
        left: dir === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center">
        {/* Freccia sinistra */}
        <button
          aria-label="Precedente"
          onClick={() => scroll("left")}
          className="hidden lg:flex z-10 bg-[var(--card)] text-[var(--primary)] rounded-full w-10 h-10 items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--card)] transition"
        >
          &#8592;
        </button>
        {/* Slider */}
        <div
          ref={scrollRef}
          className="
            flex overflow-x-auto gap-6 scrollbar-hide py-4
            snap-x snap-mandatory
            mx-4
            max-w-[1098px]
          "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              data-card
              className="
                flex-shrink-0
                w-[350px]
                snap-start
              "
            >
              <ProductCard
                product={product}
                btcEur={btcEur}
                onView={onProductClick}
                onAdd={onAddToCart}
              />
            </div>
          ))}
        </div>
        {/* Freccia destra */}
        <button
          aria-label="Successivo"
          onClick={() => scroll("right")}
          className="hidden lg:flex z-10 bg-[var(--card)] text-[var(--primary)] rounded-full w-10 h-10 items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--card)] transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

// Usage example (this part is not in the component file, just an illustration)
// <ProductSlider
//   products={products}
//   onProductClick={setModalProduct}
//   onAddToCart={handleAddToCart}
// />