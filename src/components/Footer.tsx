import { FaTwitter, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-8 pb-4 mt-12 border-t border-neutral-800">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        {/* Branding & Social */}
        <div className="flex flex-col items-center text-center">
          <span className="text-2xl font-bold tracking-tight mb-1 text-orange-400">BITGADGET</span>
          <span className="text-sm text-neutral-400 mb-3 max-w-xs">
            Bitcoin-inspired gadgets, art & wear.<br />
            Showcase only – sales by request.
          </span>
          <div className="flex space-x-4 mt-1">
            <a href="https://x.com/bitgadgetstore" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-orange-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="https://t.me/bitgadgetstore" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-orange-400 transition text-2xl">
              <FaTelegram />
            </a>
          </div>
        </div>
        {/* Links & Contact */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="flex space-x-4 mb-1">
            <a href="/" className="hover:text-orange-400 transition text-sm">Home</a>
            <a href="/about" className="hover:text-orange-400 transition text-sm">About</a>
            <a href="/privacy" className="hover:text-orange-400 transition text-sm">Privacy</a>
          </div>
          <span className="text-neutral-400 text-sm">info@bitgadget.store</span>
          <span className="text-neutral-400 text-xs mt-1">For requests or info, reach out by email or social.</span>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-neutral-500 border-t border-neutral-800 pt-3">
        © {new Date().getFullYear()} BITGADGET. All rights reserved.
      </div>
    </footer>
  );
}