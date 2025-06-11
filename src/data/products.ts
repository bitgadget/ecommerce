export type Category = "gadget" | "wear" | "art";

export interface Product {
  id: string;
  name: string;
  description: string;
  priceEUR: number;
  image: string;
  category: Category;
}

export const products: Product[] = [
  // Gadget
  { id: "g1", name: "Bitcoin Keychain", description: "Portachiavi in metallo.", priceEUR: 9.99, image: "/images/keychain.jpg", category: "gadget" },
  { id: "g2", name: "Bitcoin Mug", description: "Tazza con logo Bitcoin.", priceEUR: 14.99, image: "/images/mug.jpg", category: "gadget" },
  { id: "g3", name: "Bitcoin Mousepad", description: "Mousepad a tema.", priceEUR: 12.99, image: "/images/mousepad.jpg", category: "gadget" },
  { id: "g4", name: "Bitcoin Pen", description: "Penna elegante.", priceEUR: 7.99, image: "/images/pen.jpg", category: "gadget" },
  { id: "g5", name: "Bitcoin Sticker", description: "Set di adesivi.", priceEUR: 4.99, image: "/images/sticker.jpg", category: "gadget" },
  { id: "g6", name: "Bitcoin Bottle", description: "Borraccia termica.", priceEUR: 19.99, image: "/images/bottle.jpg", category: "gadget" },
  // Wear
  { id: "w1", name: "Bitcoin T-Shirt", description: "T-shirt premium.", priceEUR: 24.99, image: "/images/tshirt.jpg", category: "wear" },
  { id: "w2", name: "Bitcoin Hoodie", description: "Felpa con cappuccio.", priceEUR: 39.99, image: "/images/hoodie.jpg", category: "wear" },
  { id: "w3", name: "Bitcoin Cap", description: "Cappellino sportivo.", priceEUR: 17.99, image: "/images/cap.jpg", category: "wear" },
  { id: "w4", name: "Bitcoin Socks", description: "Calzini colorati.", priceEUR: 8.99, image: "/images/socks.jpg", category: "wear" },
  { id: "w5", name: "Bitcoin Jacket", description: "Giacca antivento.", priceEUR: 59.99, image: "/images/jacket.jpg", category: "wear" },
  { id: "w6", name: "Bitcoin Scarf", description: "Sciarpa invernale.", priceEUR: 14.99, image: "/images/scarf.jpg", category: "wear" },
  // Art
  { id: "a1", name: "Bitcoin Canvas", description: "Stampa su tela.", priceEUR: 49.99, image: "/images/canvas.jpg", category: "art" },
  { id: "a2", name: "Bitcoin Poster", description: "Poster artistico.", priceEUR: 19.99, image: "/images/poster.jpg", category: "art" },
  { id: "a3", name: "Bitcoin Sculpture", description: "Scultura moderna.", priceEUR: 129.99, image: "/images/sculpture.jpg", category: "art" },
  { id: "a4", name: "Bitcoin NFT", description: "Arte digitale NFT.", priceEUR: 199.99, image: "/images/nft.jpg", category: "art" },
  { id: "a5", name: "Bitcoin Painting", description: "Quadro dipinto a mano.", priceEUR: 89.99, image: "/images/painting.jpg", category: "art" },
  { id: "a6", name: "Bitcoin Print", description: "Stampa artistica.", priceEUR: 29.99, image: "/images/print.jpg", category: "art" },
];