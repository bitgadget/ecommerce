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
  {
    id: "g1",
    name: "BitSIGN RGB LED",
    description: `
Bitcoin-themed RGB LED sign.

**Features:**
- Customizable RGB lighting
- Modern design
- Perfect for your setup or store
    `,
    priceEUR: 120.00,
    images: ["/images/bitsign.webp", "/images/bitsign2.webp"],
    category: "gadget"
  },
  {
    id: "g2",
    name: "BIT TICKER – Bitcoin and Crypto TICKER PRICE",
    description: `
Real-time Crypto Stats Display — Always On, Always With You.

Turn your desk into a live crypto dashboard with **BIT TRACKER**, the Wi-Fi display for Bitcoin and crypto enthusiasts.

- No app required
- Everything at a glance
- Real-time updates
    `,
    priceEUR: 69.99,
    images: ["/images/ticker1.webp", "/images/ticker2.webp", "/images/ticker3.webp"],
    category: "gadget"
  },
  {
    id: "g3",
    name: "BITRocket – Bitcoin Rocket",
    description: `
Bitcoin rocket-shaped decoration.

**Details:**
- Material: PLA
- Available colors: Orange, Red
- Height: 15cm

Perfect for your desk or as an original gift!
    `,
    priceEUR: 39.99,
    images: ["/images/bitrocketred.webp", "/images/bitrocketorange.webp"],
    category: "gadget"
  },
  {
    id: "g4",
    name: "TO THE MOON ₿ SIGN",
    description: `
"To The Moon" decorative sign with Bitcoin symbol.

- Ideal for modern spaces
- Iconic symbol for every Bitcoiner
    `,
    priceEUR: 29.99,
    images: ["/images/tothemoon.webp"],
    category: "gadget"
  },
  {
    id: "g5",
    name: "EmergencyPILL ₿ – Bitcoin Orange Pill Art",
    description: `
**Orange Pill** Bitcoin-themed artwork.

- High-quality print
- Vibrant colors
- A must-have for every collector
    `,
    priceEUR: 24.99,
    images: ["/images/emergency1.webp", "/images/emergency2.webp"],
    category: "gadget"
  },

  // Wear
  {
    id: "w1",
    name: "BitTRUST Bitcoin HODL T-Shirt",
    description: `
HODL T-shirt for true Bitcoiners.

- 100% cotton
- Durable print
- Comfortable fit
    `,
    priceEUR: 30.00,
    images: ["/images/dont1.webp", "/images/retrot.webp"],
    category: "wear"
  },
  {
    id: "w2",
    name: "₿ BLACK Bitcoin T-Shirt",
    description: `
Black T-shirt with Bitcoin symbol.

- Minimal look
- Perfect for any occasion
    `,
    priceEUR: 30.00,
    images: ["/images/black0.webp", "/images/black2.webp"],
    category: "wear"
  },
  {
    id: "w3",
    name: "NOTYOURS T-Shirt – Bitcoin Self-Custody",
    description: `
T-shirt dedicated to Bitcoin self-custody.

- Clear message: Not your keys, not your coins!
- Ideal for those who believe in true ownership
    `,
    priceEUR: 30.00,
    images: ["/images/notyour1.webp", "/images/retrot.webp"],
    category: "wear"
  },

  // Art
  {
    id: "a1",
    name: "Genesis₿lock – Bitcoin Genesis Block Art",
    description: `
Artwork dedicated to the **Genesis Block** of Bitcoin.

- Printed on high-quality material
- Size: 30x40cm
- Limited edition
    `,
    priceEUR: 35.00,
    images: ["/images/genesis.webp"],
    category: "art"
  },
  {
    id: "a2",
    name: "Bitcoin Whitepaper Wall Art",
    description: `
Wall decoration with the **Bitcoin whitepaper**.

- Elegant design
- Perfect for office or home
    `,
    priceEUR: 35.00,
    images: ["/images/whitepaper.webp"],
    category: "art"
  },
  {
    id: "a3",
    name: "₿itBailout Panel Bitcoin Art",
    description: `
*BitBailout* Bitcoin art panel.

- Printed on high-quality material
- Size: 30x40cm
- Limited edition

Add a Bitcoin touch to your wall!
    `,
    priceEUR: 35.00,
    images: ["/images/times.webp"],
    category: "art"
  },
];

