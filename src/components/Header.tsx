// src/components/Header.tsx
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-neutral-900 text-white px-6 py-4 flex items-center justify-between relative z-20">
      <Link href="/" className="text-2xl font-extrabold tracking-tight text-orange-400">BITGADGET</Link>
      <div className="relative" ref={ref}>
        <button
          className="relative"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri carrello"
        >
          <ShoppingCart className="w-7 h-7" />
          {mounted && itemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full px-2 py-0.5">
              {itemsCount}
            </span>
          )}
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-80 max-w-[95vw] bg-neutral-800 rounded shadow-lg p-4 z-30">
            <h3 className="text-lg font-semibold mb-2">Il tuo carrello</h3>
            {cart.length === 0 ? (
              <p className="text-neutral-400 text-sm">Il carrello è vuoto.</p>
            ) : (
              <ul className="divide-y divide-neutral-700 max-h-60 overflow-y-auto">
                {cart.map(item => (
                  <li key={item.id} className="flex justify-between items-center py-2">
                    <span className="truncate">{item.name} x {item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 text-xs ml-2 hover:underline"
                    >
                      Rimuovi
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {cart.length > 0 && (
              <div className="mt-4 flex flex-col gap-2">
                <button
                  onClick={clearCart}
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                >
                  Svuota carrello
                </button>
                <Link
                  href="/cart"
                  className="w-full block text-center bg-neutral-700 text-white py-2 rounded hover:bg-neutral-600 transition"
                  onClick={() => setOpen(false)}
                >
                  Vai al carrello
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}