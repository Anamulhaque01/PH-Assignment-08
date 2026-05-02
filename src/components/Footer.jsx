import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-slate-900 select-none">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5 flex flex-col justify-between h-full">
          <div>
            <span className="text-2xl font-black tracking-tight flex items-center mb-4">
              <span className="bg-yellow-400 text-slate-900 px-2 py-0.5 rounded-l font-extrabold select-none">BENGAL</span>
              <span className="bg-slate-900 text-white px-2 py-0.5 rounded-r font-extrabold select-none">MEAT</span>
            </span>
            <p className="text-sm font-semibold text-gray-600 mb-6 max-w-sm uppercase tracking-wide">
              Bengal Meat Processing Industries Ltd. is a world-class meat industry, producing safe, wholesome products that are of the highest quality.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold border border-gray-200 px-3 py-1.5 rounded uppercase select-none">Halal Certified</span>
            <span className="text-xs font-bold border border-gray-200 px-3 py-1.5 rounded uppercase select-none">HACCP</span>
            <span className="text-xs font-bold border border-gray-200 px-3 py-1.5 rounded uppercase select-none">Safe Meat</span>
          </div>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs font-black uppercase text-slate-900 border-b-2 border-yellow-400 w-16 pb-1 mb-5 select-none">Useful Links</h4>
          <ul className="text-xs font-bold space-y-3 text-gray-600 uppercase tracking-wider">
            <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link href="/animals" className="hover:text-yellow-500">All Cattle</Link></li>
            <li><Link href="/terms" className="hover:text-yellow-500">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-yellow-500">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-xs font-black uppercase text-slate-900 border-b-2 border-yellow-400 w-12 pb-1 mb-5 select-none">Contacts</h4>
          <ul className="text-xs font-bold space-y-3 text-gray-600 uppercase tracking-wider">
            <li className="flex items-start gap-2">
              <span className="text-slate-900">📞</span>
              <span>Tel: +880 1313 401030</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-900">✉️</span>
              <span className="lowercase">contact@bengalmeat.com</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-900">📍</span>
              <span className="normal-case">181-182 Tejgaon I/A, Dhaka 1208, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 bg-gray-50 py-4 select-none">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] font-black text-gray-500 tracking-wider uppercase">
          <p>© 2026 Bengal Meat. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-yellow-500">Facebook</span>
            <span className="cursor-pointer hover:text-yellow-500">Youtube</span>
            <span className="cursor-pointer hover:text-yellow-500">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}