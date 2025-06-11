// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-bitcoin text-white py-6 text-center mt-12">
      © {new Date().getFullYear()} BITGADGET - Powered by Bitcoin
    </footer>
  );
}