"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        
        <h1 className="text-9xl font-black tracking-tight text-slate-200 select-none">
          404
        </h1>
        
        <div className="mt-4">
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight sm:text-2xl">
            Page Not Found
          </h2>
          <p className="mt-2 text-xs font-bold text-gray-500 uppercase tracking-wide leading-relaxed">
            The livestock listing or profile page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-slate-900 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-slate-900 transition duration-300 shadow-lg"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}