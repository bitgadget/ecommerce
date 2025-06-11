import { useEffect, useState } from "react";

export function useBtcEur() {
  const [btcEur, setBtcEur] = useState<number | null>(null);

  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await fetch("https://api.kraken.com/0/public/Ticker?pair=BTCEUR");
        const data = await res.json();
        const priceStr = data.result.XXBTZEUR.c[0];
        setBtcEur(Number(priceStr));
      } catch {
        setBtcEur(null);
      }
    }
    fetchRate();
    const interval = setInterval(fetchRate, 30000); // aggiorna ogni 30s
    return () => clearInterval(interval);
  }, []);

  return btcEur;
}