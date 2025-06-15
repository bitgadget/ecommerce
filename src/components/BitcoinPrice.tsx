"use client";
import { useEffect, useState } from "react";

export default function BitcoinPrice() {
  const [price, setPrice] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch("https://api.kraken.com/0/public/Ticker?pair=XBTUSD");
        const data = await res.json();
        const priceStr = data.result.XXBTZUSD.c[0];
        setPrice(Number(priceStr).toLocaleString("en-US", { style: "currency", currency: "USD" }));
      } catch {
        setPrice(null);
      }
    }
    fetchPrice();
    const interval = setInterval(fetchPrice, 10000); // aggiorna ogni 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-bitcoin text-white text-center py-2 font-bold sticky top-0 z-50">
      {price ? `BTC/USD: ${price}` : "Caricamento prezzo BTC..."}
    </div>
  );
}