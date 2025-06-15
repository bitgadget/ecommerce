import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Il tuo carrello</h2>
        <p>Il carrello è vuoto.</p>
      </div>
    );

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Il tuo carrello</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} x {item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Rimuovi</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart} className="mt-4 bg-bitcoin text-white px-4 py-2 rounded">Svuota carrello</button>
    </div>
  );
}