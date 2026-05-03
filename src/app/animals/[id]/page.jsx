    "use client";
    import { useState, useEffect, React } from 'react';
    import animals from '../../../../public/data/animals.json';
    export const dynamic = 'force-dynamic';

    export default function Details({ params }) {
    const [animal, setAnimal] = useState(null);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        async function resolveParams() {
        const resolvedParams = await params;
        const foundAnimal = animals.find(a => a.id === parseInt(resolvedParams.id));
        setAnimal(foundAnimal);
        }
        resolveParams();
    }, [params]);

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);
        e.target.reset();
        setTimeout(() => {
        setShowToast(false);
        }, 4000);
    };

    if (!animal) {
        return (
        <div className="pt-40 pb-20 container mx-auto px-6 text-center min-h-screen flex items-center justify-center">
            <div>
            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Animal Not Found</h1>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mt-2">The livestock doesn't exist.</p>
            </div>
        </div>
        );
    }

    return (
        <div className="pt-28 md:pt-40 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 flex flex-col">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 mb-6 md:mb-8">
                <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition duration-500"
                />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-400 text-slate-900 text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
                    {animal.name}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-black px-3 py-1 rounded uppercase tracking-wider border border-green-200">
                    In Stock
                </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase leading-none mb-2">
                {animal.type} - {animal.breed}
                </h1>
                <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-5">
                Location: {animal.location}
                </p>
                <p className="text-2xl md:text-3xl font-black text-slate-900 border-b border-gray-100 pb-6 mb-6">
                ৳ {animal.price.toLocaleString()}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-xs font-bold text-gray-600 mb-6 uppercase">
                <div>Weight: <span className="text-slate-800">{animal.weight} KG</span></div>
                <div>Age: <span className="text-slate-800">{animal.age} Years</span></div>
                <div>Category: <span className="text-slate-800">{animal.category}</span></div>
                </div>
                <p className="text-sm font-bold text-gray-600 border-t border-gray-200 pt-6 leading-relaxed uppercase tracking-wide">
                {animal.description}
                </p>
            </div>
            <div className="lg:col-span-5">
                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-xl md:text-2xl font-black mb-1 uppercase tracking-tight text-slate-900">
                    Reserve Cattle
                </h3>
                <p className="text-xs font-bold text-gray-500 uppercase mb-6">
                    Submit booking details for confirmation
                </p>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full p-3.5 border border-gray-300 text-gray-600 bg-white rounded-lg text-xs font-bold outline-none uppercase tracking-wide focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                    />
                    <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className="w-full p-3.5 border border-gray-300 text-gray-600 bg-white rounded-lg text-xs font-bold outline-none tracking-wide focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                    />
                    <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full p-3.5 border border-gray-300 text-gray-600 bg-white rounded-lg text-xs font-bold outline-none uppercase tracking-wide focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                    />
                    <textarea 
                    placeholder="Delivery Address" 
                    required 
                    rows="4" 
                    className="w-full p-3.5 border border-gray-300 text-gray-600 bg-white rounded-lg text-xs font-bold outline-none uppercase tracking-wide focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                    ></textarea>
                    <button 
                    type="submit" 
                    className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold text-sm md:text-base rounded-xl transition shadow-md hover:shadow-lg uppercase tracking-wider"
                    >
                    Confirm Booking
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        {showToast && (
            <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 bg-slate-900 border border-slate-800 text-white p-4 md:p-5 rounded-2xl shadow-2xl flex items-center gap-3 z-50 transform animate-bounce">
            <span className="text-xl">✔</span>
            <div>
                <p className="text-xs md:text-sm font-black uppercase tracking-wide">Success</p>
                <p className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-wider mt-0.5">Booking Placed Successfully</p>
            </div>
            </div>
        )}
        </div>
    );
    }