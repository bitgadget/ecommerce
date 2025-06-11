// src/components/Header.tsx
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="bg-[var(--background)] text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-2xl font-extrabold tracking-widest font-headline">
          BITGADGET
        </div>
        {/* Menu desktop */}
        <nav className="hidden lg:flex gap-8">
          <a href="#gadget" className="hover:text-[var(--primary)]">GADGET</a>
          <a href="#wear" className="hover:text-[var(--primary)]">WEAR</a>
          <a href="#art" className="hover:text-[var(--primary)]">ART</a>
        </nav>
        {/* Menu mobile */}
        <MobileMenu />
      </div>
    </header>
  );
}