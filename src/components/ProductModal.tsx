import { Product } from "@/data/products";
import { Bitcoin, ShoppingCart, Euro } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";


interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  btcEur?: number | null;
}

export default function ProductModal({
  product,
  onClose,
  btcEur,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Blocca lo scroll del body quando il modal è aperto
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  const priceInBtc = btcEur ? (product.priceEUR / btcEur).toFixed(5) : "--.-----";
  const totalEur = (product.priceEUR * quantity).toFixed(2);
  const totalBtc = btcEur ? ((product.priceEUR * quantity) / btcEur).toFixed(5) : "--.-----";

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success("Prodotto aggiunto al carrello!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-0 py-0">
      <div className="relative bg-[var(--card)] text-[var(--foreground)] rounded-[var(--radius)] shadow-2xl w-full max-w-3xl mx-2 my-4 overflow-y-auto max-h-[95vh]">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 md:px-8 md:py-6 border-b border-[var(--border)]">
          <h3 className="text-xl md:text-2xl font-extrabold text-[var(--primary)]">{product.name}</h3>
          <button
            onClick={onClose}
            className="text-3xl font-bold text-[var(--primary)] hover:text-[var(--foreground)] transition"
            aria-label="Chiudi"
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Immagine */}
          <div className="flex items-center justify-center bg-[var(--background)] p-4 md:p-8">
            <div className="w-full flex flex-col items-center justify-center px-2">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                modules={[Pagination, Navigation]}
                style={{
                  width: "100%",
                  maxWidth: 400,
                  height: "auto",
                  margin: "0 auto",
                  borderRadius: "1rem",
                  background: "white"
                }}
              >
                {product.images.map((src, idx) => (
                  <SwiperSlide key={idx} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "100%", aspectRatio: "1/1", position: "relative" }}>
                      <Image
                        src={src}
                        alt={product.name}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 600px) 90vw, 400px"
                        priority={idx === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Dettagli */}
          <div className="flex flex-col px-4 py-6 md:px-8 md:py-12">
            <p className="mb-6 text-[var(--foreground)] text-base leading-relaxed">{product.description}</p>
            <div className="flex flex-col items-center gap-3 mb-6">
              <span className="text-xl md:text-2xl font-bold text-[var(--primary)] flex items-center">
                <Euro className="h-5 w-5 md:h-6 md:w-6 mr-2 text-[var(--primary)]" />
                {typeof product.priceEUR === "number" ? product.priceEUR.toFixed(2) : "--.--"} €
              </span>
              <span className="text-base text-[var(--primary)] flex items-center">
                <Bitcoin className="h-4 w-4 md:h-5 md:w-5 mr-2 text-[var(--primary)]" />
                {priceInBtc} BTC
              </span>
              <span className={`text-sm mt-2 ${product.stock > 0 ? "text-[var(--muted)]" : "text-red-500 font-semibold"}`}>
                {product.stock > 0 ? `${product.stock} disponibili` : "Non disponibile"}
              </span>
            </div>
            {/* Quantità */}
            {product.stock > 0 && (
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  className="bg-[var(--card)] border border-[var(--primary)] text-[var(--primary)] rounded w-9 h-9 text-xl font-bold hover:bg-[var(--primary)] hover:text-[var(--card)] transition"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >-</button>
                <span className="text-lg font-medium w-10 text-center text-[var(--foreground)]">{quantity}</span>
                <button
                  className="bg-[var(--card)] border border-[var(--primary)] text-[var(--primary)] rounded w-9 h-9 text-xl font-bold hover:bg-[var(--primary)] hover:text-[var(--card)] transition"
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  disabled={quantity >= product.stock}
                >+</button>
              </div>
            )}
            {/* Bottone aggiungi al carrello */}
            <button
              className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] font-bold py-3 rounded-[var(--radius)] hover:bg-white hover:text-[var(--primary)] transition-all duration-200 flex flex-col items-center justify-center text-base md:text-lg gap-1"
              onClick={handleAdd}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5 inline" /> ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}