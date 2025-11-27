import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/pomeg-logo.png"
                alt="Pomeg Ai Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg text-white">
              Pomeg <span className="text-neonPink">Ai</span>
            </span>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="#" className="hover:text-neonPink transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-neonPink transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-neonPink transition-colors">Contact</Link>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pomeg Ai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
