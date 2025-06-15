export type Category = "gadget" | "wear" | "art";

export interface Product {
  id: string;
  name: string;
  description: string;
  priceEUR: number;
  images: string[]; // Cambiato qui
  category: Category;
}

export const products: Product[] = [
  // Gadget
  { id: "g1", name: "BitSIGN RGB LED", description: "Insegna LED RGB a tema Bitcoin.", priceEUR: 120.00, images: ["/images/bitsign.webp", "/images/bitsign2.webp"], category: "gadget" },
  { id: "g2", name: "BIT TICKER – Bitcoin and Crypto TICKER PRICE", description: "Real-time Crypto Stats Display — Always On, Always With You. Transform your desk into a live crypto dashboard with BIT TRACKER, the sleek Wi-Fi connected display built for Bitcoin and cryptocurrency enthusiasts. No app required—see everything at a glance.", priceEUR: 69.99, images: ["/images/ticker1.webp", "/images/ticker2.webp", "/images/ticker3.webp"], category: "gadget" },
  { id: "g3", name: "BITRocket – Bitcoin Rocket", description: "Decorazione a forma di razzo Bitcoin.", priceEUR: 39.99, images: ["/images/bitrocketred.webp", "/images/bitrocketorange.webp"], category: "gadget" },
  { id: "g4", name: "TO THE MOON ₿ SIGN", description: "Insegna decorativa 'To The Moon' con simbolo Bitcoin.", priceEUR: 29.99, images: ["/images/tothemoon.webp"], category: "gadget" },
  { id: "g5", name: "EmergencyPILL ₿ – Bitcoin Orange Pill Art", description: "Opera d'arte Orange Pill a tema Bitcoin.", priceEUR: 24.99, images: ["/images/emergency1.webp", "/images/emergency2.webp"], category: "gadget" },

  // Wear
  { id: "w1", name: "BitTRUST Bitcoin HODL T-Shirt", description: "T-shirt HODL per veri Bitcoiner.", priceEUR: 30.00, images: ["/images/dont1.webp", "/images/retrot.webp"], category: "wear" },
  { id: "w2", name: "₿ BLACK Bitcoin T-Shirt", description: "T-shirt nera con simbolo Bitcoin.", priceEUR: 30.00, images: ["/images/black0.webp", "/images/black2.webp"], category: "wear" },
  { id: "w3", name: "NOTYOURS T-Shirt – Bitcoin Self-Custody", description: "T-shirt dedicata all'auto-custodia Bitcoin.", priceEUR: 30.00, images: ["/images/notyour.webp", "/images/retrot.webp"], category: "wear" },

  // Art (solo i nuovi prodotti richiesti)
  { id: "a1", name: "Genesis₿lock – Bitcoin Genesis Block Art", description: "Opera d'arte dedicata al Genesis Block di Bitcoin.", priceEUR: 35.00, images: ["/images/genesis.webp"], category: "art" },
  { id: "a2", name: "Bitcoin Whitepaper Wall Art", description: "Decorazione da parete con il whitepaper di Bitcoin.", priceEUR: 35.00, images: ["/images/whitepaper.webp"], category: "art" },
  { id: "a3", name: "₿itBailout Panel Bitcoin Art", description: "Pannello artistico Bitcoin BitBailout.", priceEUR: 35.00, images: ["/images/times.webp"], category: "art" },
];