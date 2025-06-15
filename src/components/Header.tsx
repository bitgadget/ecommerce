// src/components/Header.tsx
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-neutral-900 text-white px-6 py-4 flex items-center justify-between relative z-40 sticky top-[40px]">
      <Link href="/" className="text-2xl font-extrabold tracking-tight text-orange-400">
        BITGADGET
      </Link>
      <div className="relative" ref={ref}>
        <button
          className="flex flex-col justify-center items-center w-10 h-10 bg-orange-500 rounded hover:bg-orange-600 transition focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu categorie"
        >
          {/* Hamburger icon */}
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-neutral-800 rounded shadow-lg p-2 z-30">
            <Link
              href="#gadget"
              className="block px-4 py-2 hover:bg-neutral-700 rounded transition"
              onClick={() => setOpen(false)}
            >
              Gadget
            </Link>
            <Link
              href="#wear"
              className="block px-4 py-2 hover:bg-neutral-700 rounded transition"
              onClick={() => setOpen(false)}
            >
              Wear
            </Link>
            <Link
              href="#art"
              className="block px-4 py-2 hover:bg-neutral-700 rounded transition"
              onClick={() => setOpen(false)}
            >
              Art
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

