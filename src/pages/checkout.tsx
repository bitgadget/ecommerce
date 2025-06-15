// src/pages/checkout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.priceEUR * (item.quantity || 1), 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui puoi inviare i dati a un backend/API
    setSubmitted(true);
    clearCart();
    setTimeout(() => router.push("/"), 2500);
  };

  if (cart.length === 0 && !submitted)
    return (
      <div className="max-w-md mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p>Il carrello è vuoto.</p>
      </div>
    );

  if (submitted)
    return (
      <div className="max-w-md mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Grazie per l’ordine!</h2>
        <p>Riceverai una conferma via email.</p>
      </div>
    );

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
        <ul className="mb-4 divide-y divide-neutral-200">
          {cart.map(item => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>{(item.priceEUR * (item.quantity || 1)).toFixed(2)} €</span>
            </li>
          ))}
        </ul>
        <div className="text-right font-semibold mb-6">Totale: {total.toFixed(2)} €</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            placeholder="Nome e Cognome"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            placeholder="Indirizzo di spedizione"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded font-semibold hover:bg-orange-600 transition"
          >
            Conferma ordine
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}