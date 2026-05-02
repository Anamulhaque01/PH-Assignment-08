    import Link from 'next/link';
    import Image from 'next/image';

    export default function AnimalCard({ animal }) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition duration-300">
        <div>
            <div className="relative aspect-[4/3] w-full bg-gray-50 select-none">
            <Image 
                src={animal.image} 
                alt={animal.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={animal.id <= 4}
                className="object-cover object-center"
            />
            <span className="absolute top-4 left-4 bg-yellow-400 text-slate-900 text-xs font-black px-2.5 py-1 rounded select-none z-10">
                {animal.name}
            </span>
            <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-black px-3 py-1 rounded-full border border-green-200 select-none uppercase z-10">
                Available
            </span>
            </div>
            <div className="p-4 md:p-6 border-b border-gray-100">
            <div className="flex justify-between items-start mb-3 select-none">
                <div>
                <h3 className="text-base font-extrabold text-slate-900 uppercase">
                    {animal.type} - {animal.breed}
                </h3>
                <p className="text-xs font-bold text-gray-500 uppercase mt-0.5">
                    {animal.location}
                </p>
                </div>
                <span className="bg-gray-100 text-slate-800 text-xs font-bold px-2 py-0.5 rounded select-none uppercase">
                {animal.category}
                </span>
            </div>
            <p className="text-xl md:text-2xl font-black text-slate-900 mb-4 select-none">
                ৳ {animal.price.toLocaleString()}
            </p>
            <div className="grid grid-cols-2 gap-y-2 text-xs font-bold text-gray-600 mb-2 uppercase select-none">
                <p>Weight: <span className="text-slate-800">{animal.weight} KG</span></p>
                <p>Age: <span className="text-slate-800">{animal.age} Years</span></p>
            </div>
            </div>
        </div>
        <div className="p-4 md:p-6 bg-gray-50/50">
            <Link 
            href={`/animals/${animal.id}`} 
            className="block text-center w-full py-3.5 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold text-sm rounded-xl transition shadow hover:shadow-md uppercase tracking-wider select-none"
            >
            See Details
            </Link>
        </div>
        </div>
    );
    }