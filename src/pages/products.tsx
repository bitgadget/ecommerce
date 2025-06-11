// src/pages/products.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Bitcoin T-Shirt",
    description: "T-shirt premium con logo Bitcoin.",
    price: 0.0005,
    image: "/images/bitcoin-tshirt.jpg",
  },
  {
    id: "2",
    name: "Bitcoin Mug",
    description: "Tazza in ceramica a tema Bitcoin.",
    price: 0.0002,
    image: "/images/bitcoin-mug.jpg",
  },
  {
    id: "3",
    name: "Bitcoin Art Print",
    description: "Stampa artistica esclusiva.",
    price: 0.001,
    image: "/images/bitcoin-art.jpg",
  },
];

export default function Products() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">I nostri prodotti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}