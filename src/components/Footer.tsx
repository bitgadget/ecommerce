import { FaTwitter, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-10 pb-6 mt-12 border-t border-neutral-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding & Slogan */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold tracking-tight mb-2 text-orange-400">Bitcoin Vetrina</span>
          <span className="text-sm text-neutral-400 mb-4">Solo esposizione, nessuna vendita diretta.</span>
          <div className="flex space-x-4 mt-2">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-orange-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-orange-400 transition text-2xl">
              <FaTelegram />
            </a>
          </div>
        </div>
        {/* Link utili */}
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-3 text-lg text-orange-400">Link utili</span>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a href="/" className="hover:text-orange-400 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition">Chi siamo</a>
            </li>
            <li>
              <a href="/contatti" className="hover:text-orange-400 transition">Contatti</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-orange-400 transition">Privacy</a>
            </li>
          </ul>
        </div>
        {/* Contatti */}
        <div className="flex flex-col items-center md:items-end">
          <span className="font-semibold mb-3 text-lg text-orange-400">Contatti</span>
          <span className="text-neutral-400 text-sm">info@bitcoinvetrina.it</span>
          <span className="text-neutral-400 text-sm">Via Bitcoin, 21 - 00100 Roma</span>
          <span className="text-neutral-400 text-sm mt-2">P.IVA 12345678901</span>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-neutral-500 border-t border-neutral-800 pt-4">
        © {new Date().getFullYear()} Bitcoin Vetrina. Tutti i diritti riservati.
      </div>
    </footer>
  );
}