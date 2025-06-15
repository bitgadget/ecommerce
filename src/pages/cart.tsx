// src/pages/cart.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="max-w-md mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Il tuo carrello</h2>
        <p>Il carrello è vuoto.</p>
      </div>
    );

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto py-8 px-2 sm:px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Il tuo carrello</h2>
        <ul className="divide-y divide-neutral-200">
          {cart.map(item => (
            <li key={item.id} className="flex flex-col sm:flex-row justify-between items-center py-3 gap-2">
              <span className="font-medium text-base text-center sm:text-left">{item.name} <span className="text-sm text-neutral-500">x {item.quantity}</span></span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm px-3 py-1 rounded hover:bg-red-50 transition"
              >
                Rimuovi
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={clearCart}
          className="mt-6 w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition"
        >
          Svuota carrello
        </button>
        <Link href="/checkout" className="w-full block text-center bg-orange-500 text-white py-2 rounded mt-2 hover:bg-orange-600 transition">
          Procedi al checkout
        </Link>
      </div>
      <Footer />
    </>
  );
}