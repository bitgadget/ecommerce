import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Chiudi il menu cliccando fuori
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="lg:hidden relative">
      <button
        className="p-2 text-[var(--primary)]"
        onClick={() => setOpen((v) => !v)}
        aria-label="Apri menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 top-12 w-56 bg-gradient-to-br from-[var(--card)] to-[var(--background)] rounded-xl shadow-2xl border border-[var(--border)] z-50 animate-slide-down"
        >
          <nav className="flex flex-col py-4">
            <a
              href="#gadget"
              className="px-8 py-4 text-lg text-white font-semibold hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] rounded-t-xl transition"
              onClick={() => setOpen(false)}
            >
              GADGET
            </a>
            <a
              href="#wear"
              className="px-8 py-4 text-lg text-white font-semibold hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition"
              onClick={() => setOpen(false)}
            >
              WEAR
            </a>
            <a
              href="#art"
              className="px-8 py-4 text-lg text-white font-semibold hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition"
              onClick={() => setOpen(false)}
            >
              ART
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-lg text-white font-semibold hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] rounded-b-xl transition"
              onClick={() => setOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}