export type Category = "gadget" | "wear" | "art";

export interface Product {
  id: string;
  name: string;
  description: string;
  priceEUR: number;
  images: string[];
  category: Category;
}

export const products: Product[] = [
  // Gadget
  {
    id: "g1",
    name: "BitSIGN RGB LED",
    description: `
Illuminate your crypto setup with the ultimate Bitcoin LED sign!

The BitSIGN RGB LED is a premium led sign designed for Bitcoiners, crypto traders, and blockchain enthusiasts. Whether you’re decorating your home office, gaming room, or crypto cave, this high-quality Bitcoin sign adds a unique touch.

✔ Vibrant RGB LED colors  
✔ Remote control to change the colors of the led  
✔ Perfect for Bitcoin lovers & crypto influencers  

**Limited stock available – order now!**  
BITGADGET
    `,
    priceEUR: 120.00,
    images: ["/images/bitsign.webp"],
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
    priceEUR: 80.00,
    images: ["/images/ticker1.webp", "/images/ticker2.webp", "/images/ticker3.webp"],
    category: "gadget"
  },
  {
    id: "g3",
    name: "BITRocket – Bitcoin Rocket",
    description: `
Bitcoin is going to the moon, and so is your desk setup!

The BITRocket is a sleek, Bitcoin-themed rocket toy designed for traders and crypto lovers who believe in the future of BTC. Whether you keep it on your desk or gift it to a fellow HODLer, it’s a fun and symbolic addition to any Bitcoin setup.

**Why choose the BITRocket?**
✔ Premium quality design – A true statement piece  
✔ Perfect for Bitcoin traders, miners, and HODLers  
✔ Great conversation starter for your workspace  

BITGADGET
    `,
    priceEUR: 30.00,
    images: ["/images/bitrocketred.webp", "/images/bitrocketorange.webp"],
    category: "gadget"
  },
  {
    id: "g4",
    name: "TO THE MOON ₿ SIGN",
    description: `
Bitcoin is blasting off, and so is your desk setup!

TO THE MOON SIGN is a bold, high-quality piece made from durable PLA. Designed for crypto enthusiasts, traders, miners, and HODLers, this iconic desk decor piece proudly declares your commitment to the “to the moon” spirit.

**Why choose the Bitcoin 3D Rocket Copy – TO THE MOON SIGN?**
✔ Premium PLA construction  
✔ Ideal for Bitcoin traders, miners, and HODLers  
✔ A striking desk decor piece that symbolizes the unstoppable rise of BTC  

BITGADGET
    `,
    priceEUR: 25.00,
    images: ["/images/tothemoon.webp"],
    category: "gadget"
  },
  {
    id: "g5",
    name: "EmergencyPILL ₿ – Bitcoin Orange Pill Art",
    description: `
Bitcoin is the escape. Take the Orange Pill!

The EmergencyPILL ₿ is a limited-edition Bitcoin wall frame featuring mini-pill visuals and a bold statement about inflation:

> "In case of uncontrolled inflation, break the glass and take the orange pill."

**Why choose the EmergencyPILL ₿?**
✔ Bitcoin-inspired message on monetary policy & inflation  
✔ Premium frame with a sleek, clean finish  
✔ Unique design – A true Bitcoin collector’s piece  

BITGADGET
    `,
    priceEUR: 50.00,
    images: ["/images/emergency1.webp", "/images/emergency2.webp"],
    category: "gadget"
  },

  // Wear
  {
    id: "w1",
    name: "BitTRUST Bitcoin HODL T-Shirt",
    description: `
HODL in style with the BitTRUST Bitcoin T-Shirt!

If you believe in Bitcoin’s future, this premium-quality t-shirt is for you. Featuring the iconic “BitTRUST” design, it’s perfect for BTC enthusiasts, crypto traders, and hodlers.

✔ High-quality cotton blend for comfort  
✔ Bold Bitcoin design for true crypto believers  
✔ Available in multiple sizes – unisex fit  

BITGADGET
    `,
    priceEUR: 30.00,
    images: ["/images/dont1.webp", "/images/retrot.webp"],
    category: "wear"
  },
  {
    id: "w2",
    name: "₿ BLACK Bitcoin T-Shirt",
    description: `
₿ BITCOIN T-Shirt. The minimalistic Bitcoin wear, now on a hoodie! Ideal for crypto traders, Bitcoin maximalists, and blockchain enthusiasts.

**Why buy the ₿ BLACK Bitcoin T-Shirt?**
✔ Premium cotton blend for maximum comfort  
✔ Minimalist design with a strong Bitcoin message  
✔ Perfect for meetups, trading sessions & everyday wear  

BITGADGET
    `,
    priceEUR: 30.00,
    images: ["/images/black0.webp", "/images/black2.webp"],
    category: "wear"
  },
  {
    id: "w3",
    name: "NOTYOURS T-Shirt – Bitcoin Self-Custody",
    description: `
“Not Your Keys, Not Your Coins” – Wear the Crypto Truth!

The NOTYOURS Bitcoin T-Shirt is for those who understand the importance of self-custody and financial freedom. Designed for Bitcoiners who value decentralization and security.

✔ Bold “Not Yours” Bitcoin design  
✔ Premium cotton blend – soft & durable  
✔ Essential crypto merch for Bitcoin maxis  
✔ Limited edition  

BITGADGET
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
The Genesis Block is where it all started.

The GenesisAnon ₿lock artwork pays tribute to the very first block ever mined on the Bitcoin network. Featuring the original block hash and timestamp, this piece is a must-have for Bitcoin purists and decentralization advocates.

**Why buy the GenesisAnon ₿lock?**
✔ Accurate representation of the Bitcoin Genesis Block  
✔ Minimalist, modern design for any space  
✔ Perfect for Bitcoin educators & blockchain enthusiasts  
✔ A conversation starter for your crypto-friendly workspace  

BITGADGET
    `,
    priceEUR: 35.00,
    images: ["/images/genesis.webp"],
    category: "art"
  },
  {
    id: "a2",
    name: "Bitcoin Whitepaper Wall Art",
    description: `
The Bitcoin Whitepaper changed finance forever. Now, you can own a high-quality print of the original document that started the decentralized revolution on 1cm PVC panel.

**Why choose this Bitcoin Whitepaper print?**
✔ Official Bitcoin Whitepaper text with a clean, readable layout  
✔ High-quality print material – long-lasting durability  
✔ Great for offices, trading rooms, and crypto meetups  
✔ The ultimate gift for any Bitcoin enthusiast  

BITGADGET
    `,
    priceEUR: 35.00,
    images: ["/images/whitepaper.webp"],
    category: "art"
  },
  {
    id: "a3",
    name: "₿itBailout Panel Bitcoin Art",
    description: `
Show your Bitcoin mindset with the ₿itBailout Panel!

Inspired by the flaws of traditional finance and economic bailouts, this high-quality art panel makes a powerful statement in your home or office.

**Why choose the ₿itBailout Panel?**
✔ Premium print quality on durable material  
✔ Minimalist yet thought-provoking design  
✔ Perfect for Bitcoiners & decentralization advocates  
✔ Available in multiple sizes  

BITGADGET
    `,
    priceEUR: 35.00,
    images: ["/images/times.webp"],
    category: "art"
  },
];

