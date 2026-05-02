import Hero from '@/components/Hero';
import AnimalCard from '@/components/AnimalCard';
import Link from 'next/link';
import animals from '../../public/data/animals.json';

export default function Home() {
  const featured = animals.slice(0, 4);

  return (
    <div className="bg-white">
      <Hero />
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 select-none">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase select-none">Featured Cattle</h2>
            <p className="text-xs md:text-sm font-bold text-gray-500 uppercase mt-1 select-none">Choose from our best cattle for your Qurbani</p>
          </div>
          <Link href="/animals" className="text-xs md:text-sm font-extrabold text-slate-900 border-b-2 border-yellow-400 hover:text-yellow-500 transition uppercase tracking-wider select-none">
            View All Cattle →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 select-none">
          {featured.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>
      <section className="bg-gray-50 border-t border-b border-gray-200 py-16 md:py-24 select-none">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-extrabold mb-4 uppercase text-slate-900 tracking-tight">Qurbani Tips</h3>
            <ul className="space-y-4 text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wide">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">✔</span>
                <span>Ensure the animal is completely healthy and free of any physical defects.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">✔</span>
                <span>Check the age criteria for livestock as required for proper sacrifice.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500">✔</span>
                <span>Keep the animal well hydrated and offer wholesome, natural feed.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-extrabold mb-4 uppercase text-slate-900 tracking-tight">Top Breeds</h3>
            <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
              We bring the most desired and historically safe breeds for your needs.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['Brahman Cross', 'Mirzapur Red', 'Shahiwal', 'Local Deshi', 'Black Bengal'].map(breed => (
                <span key={breed} className="px-3.5 py-2 bg-slate-900 text-white text-xs font-bold rounded uppercase select-none tracking-wide">
                  {breed}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}