import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="bg-gray-50 border-b border-gray-100 hidden sm:block">
        <div className="container mx-auto px-4 md:px-6 h-10 flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
              Authentic Cattle
            </span>
            <span>📞 +880 1313 401030</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-green-700">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-green-700">Contact</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-8 md:gap-12">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black tracking-tight flex items-center">
              <span className="bg-yellow-400 text-slate-900 px-2 py-0.5 rounded-l font-extrabold select-none">BENGAL</span>
              <span className="bg-slate-900 text-white px-2 py-0.5 rounded-r font-extrabold select-none">MEAT</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-gray-800 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 pb-1 transition">Home</Link>
            <Link href="/animals" className="text-sm font-bold text-gray-800 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 pb-1 transition">All Cattle</Link>
            <Link href="/animals?type=Goat" className="text-sm font-bold text-gray-800 hover:text-yellow-500 border-b-2 border-transparent hover:border-yellow-500 pb-1 transition">Goat & Sheep</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="/login" className="text-xs md:text-sm font-bold px-4 py-2 border border-gray-300 rounded-full text-slate-800 hover:bg-gray-50 transition">
            Sign In
          </Link>
          <Link href="/register" className="text-xs md:text-sm font-bold px-4 py-2 bg-yellow-400 text-slate-900 rounded-full hover:bg-yellow-500 transition">
            Register
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden justify-around bg-gray-50 border-t border-gray-100 py-2.5 text-xs font-bold text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/animals">All Cattle</Link>
        <Link href="/animals?type=Goat">Goat & Sheep</Link>
      </div>
    </header>
  );
}