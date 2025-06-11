// src/pages/checkout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Checkout() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p>Funzionalità di pagamento in Bitcoin in arrivo!</p>
      </main>
      <Footer />
    </>
  );
}