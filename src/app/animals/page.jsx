"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import AnimalCard from '@/components/AnimalCard';
import animalsData from '../../../public/data/animals.json';

// 1. Move the search params logic into a child component
function AnimalsContent() {
  const searchParams = useSearchParams();
  const typeFilter = searchParams.get('type');
  
  const [animals, setAnimals] = useState(animalsData);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    let filtered = [...animalsData];
    if (typeFilter) {
      filtered = filtered.filter(animal => animal.type.toLowerCase() === typeFilter.toLowerCase());
    }
    filtered.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
    setAnimals(filtered);
  }, [typeFilter, sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="pt-28 md:pt-40 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-200 pb-8 mb-12 select-none">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase select-none">
              Explore Our Cattle
            </h1>
            <p className="text-xs md:text-sm font-bold text-gray-500 uppercase mt-1 select-none">
              High quality premium livestock selection
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-xs font-black text-slate-700 tracking-wider uppercase select-none whitespace-nowrap">Sort By Price:</span>
            <select 
              onChange={handleSortChange}
              value={sortOrder}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-xs md:text-sm font-bold text-slate-800 outline-none hover:border-yellow-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition tracking-wide uppercase select-none flex-1 md:flex-initial"
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 select-none">
          {animals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
}

// 2. Wrap it with Suspense in the exported component
export default function AllAnimals() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-40 text-center uppercase font-bold text-slate-500">Loading animals...</div>}>
      <AnimalsContent />
    </Suspense>
  );
}