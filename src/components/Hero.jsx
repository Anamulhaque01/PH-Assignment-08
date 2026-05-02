import Image from 'next/image';
import Link from 'next/link';



export default function Hero() {
  return (
    <section className="relative bg-[#f3f4f6] min-h-[500px] md:min-h-[600px] lg:min-h-[650px] flex items-center overflow-hidden pt-24 md:pt-28">
      <div className="container mx-auto px-4 md:px-6 h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0 w-full h-full">
          <div className="lg:col-span-6 flex flex-col justify-center text-left max-w-xl lg:max-w-none">
            <span className="text-xs md:text-sm font-bold text-gray-600 tracking-wider mb-2 uppercase select-none">
              Naturally Grown with Love and Compassion
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-4 select-none">
              Halal & Safe <br />
              <span className="text-yellow-500">Qurbani</span>
            </h1>
            <p className="text-sm md:text-base font-semibold text-gray-500 mb-8 max-w-md uppercase tracking-wide select-none">
              Celebrating EID UL AZHA Responsibly
            </p>
            <div>
              <Link href="/animals" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold text-sm md:text-base px-6 md:px-10 py-3.5 md:py-4 rounded-full transition shadow-md hover:shadow-lg uppercase tracking-wider select-none">
                Explore All Cattle
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}