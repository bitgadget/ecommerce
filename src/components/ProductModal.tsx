import { Product } from "@/data/products";
import { Bitcoin, Euro } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
  const [zoomedImg, setZoomedImg] = React.useState<string | null>(null);

  React.useEffect(() => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
          {/* Immagine */}
          <div className="flex items-center justify-center bg-transparent p-4 md:p-12 border-b md:border-b-0 md:border-r border-[var(--border)]">
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
                  margin: "0 auto"
                }}
              >
                {product.images.map((src, idx) => (
                  <SwiperSlide key={idx} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "100%", aspectRatio: "1/1", position: "relative" }}>
                      <Image
                        src={src}
                        alt={product.name}
                        width={400}
                        height={400}
                        style={{ objectFit: "contain", width: "100%", height: "auto", cursor: "zoom-in" }}
                        sizes="(max-width: 600px) 90vw, 400px"
                        priority={idx === 0}
                        onClick={() => setZoomedImg(src)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Dettagli */}
          <div className="flex flex-col justify-center px-4 py-6 md:px-12 md:py-8">
            <ReactMarkdown
              components={{
                p: ({node, ...props}) => (
                  <p className="mb-6 text-[var(--foreground)] text-base leading-relaxed break-words whitespace-pre-line text-justify" {...props} />
                ),
                ul: ({node, ...props}) => (
                  <ul className="list-disc pl-6 mb-6" {...props} />
                ),
                li: ({node, ...props}) => (
                  <li className="mb-1" {...props} />
                ),
              }}
            >
              {product.description}
            </ReactMarkdown>
            <div className="flex flex-col items-center gap-3 mb-6">
              <span className="text-xl md:text-2xl font-bold text-[var(--primary)] flex items-center">
                <Euro className="h-5 w-5 md:h-6 md:w-6 mr-2 text-[var(--primary)]" />
                {typeof product.priceEUR === "number" ? product.priceEUR.toFixed(2) : "--.--"} €
              </span>
              <span className="text-base text-[var(--primary)] flex items-center">
                <Bitcoin className="h-4 w-4 md:h-5 md:w-5 mr-2 text-[var(--primary)]" />
                {priceInBtc} BTC
              </span>
            </div>
            {/* Contatto venditore */}
            <button
              onClick={() =>
                window.open(
                  "https://t.me/bitgadgetstore",
                  "_blank"
                )
              }
              className="mt-4 w-full bg-transparent border border-[var(--primary)] text-[var(--primary)] font-bold py-3 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-[var(--card)] transition-all duration-200 flex items-center justify-center text-base md:text-lg gap-2"
            >
              <span>CONTACT</span>
            </button>
          </div>
        </div>
        {zoomedImg && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90">
            <button
              className="absolute top-6 right-6 text-white bg-[var(--primary)] rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg hover:bg-white hover:text-[var(--primary)] transition"
              onClick={() => setZoomedImg(null)}
              aria-label="Close zoom"
            >
              &times;
            </button>
            <Image
              src={zoomedImg}
              alt={product.name}
              width={800}
              height={800}
              style={{ objectFit: "contain", maxWidth: "90vw", maxHeight: "90vh" }}
              sizes="90vw"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
}