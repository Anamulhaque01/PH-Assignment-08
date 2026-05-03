"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  if (!session) return null;

  return (
    <div className="pt-40 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 mx-auto mb-6 shadow-lg">
            <img 
              src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`} 
              alt={session.user.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{session.user.name}</h1>
          <p className="text-sm font-bold text-gray-500 mb-8 lowercase">{session.user.email}</p>
          
          <div className="border-t border-gray-100 pt-6">
            <Link 
              href="/my-profile/update" 
              className="inline-block w-full py-3 bg-yellow-400 text-slate-900 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-yellow-500 transition shadow-md"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}