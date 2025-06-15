"use client";
import { Product } from "@/data/products";
import { useRef } from "react";
import { useBtcEur } from "@/hooks/useBtcEur";
import ProductCard from "@/components/ProductCard";

export default function ProductSlider({
  products,
  onProductClick,
}: {
  products: Product[];
  onProductClick: (product: Product) => void;
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
      {/* Mobile arrows with background and clickable */}
      <button
        aria-label="Previous"
        onClick={() => scroll("left")}
        className="lg:hidden flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[var(--card)] text-[var(--primary)] rounded-full w-10 h-10 shadow-md active:scale-90 transition p-0"
        style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        aria-label="Next"
        onClick={() => scroll("right")}
        className="lg:hidden flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[var(--card)] text-[var(--primary)] rounded-full w-10 h-10 shadow-md active:scale-90 transition p-0"
        style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      <div className="flex items-center justify-center">
        {/* Desktop arrows */}
        <button
          aria-label="Previous"
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
              />
            </div>
          ))}
        </div>
        {/* Desktop arrows */}
        <button
          aria-label="Next"
          onClick={() => scroll("right")}
          className="hidden lg:flex z-10 bg-[var(--card)] text-[var(--primary)] rounded-full w-10 h-10 items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--card)] transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

// Aggiungi queste animazioni in tailwind.config.js se vuoi l'effetto bounce-x:
/*
theme: {
  extend: {
    keyframes: {
      'bounce-x': {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(-8px)' },
      },
      'bounce-x-reverse': {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(8px)' },
      },
    },
    animation: {
      'bounce-x': 'bounce-x 1s infinite',
      'bounce-x-reverse': 'bounce-x-reverse 1s infinite',
    },
  },
}
*/

// Usage example (this part is not in the component file, just an illustration)
// <ProductSlider
//   products={products}
//   onProductClick={setModalProduct}
//   onAddToCart={handleAddToCart}
// />