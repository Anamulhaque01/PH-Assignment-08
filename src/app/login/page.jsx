"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 animate__animated animate__fadeInUp">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Welcome Back</h1>
          <p className="text-xs font-bold text-gray-500 uppercase mt-2">Log in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
            <input 
              type="email" 
              name="email"
              required 
              placeholder="email@example.com"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition tracking-wide"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1.5 ml-1">Password</label>
            <input 
              type="password" 
              name="password"
              required 
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition tracking-wide"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold text-sm rounded-xl transition shadow-md hover:shadow-lg uppercase tracking-wider mt-4"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <span className="relative px-4 bg-white text-[10px] font-black text-gray-400 uppercase tracking-widest">Or continue with</span>
          </div>
          
          <button className="w-full py-3.5 border border-gray-300 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.94 0 3.68.67 5.05 1.97l3.77-3.77C18.46 1.18 15.46 0 12 0 7.31 0 3.25 2.69 1.25 6.63l4.33 3.36C6.59 7.02 9.06 5.04 12 5.04z"/>
              <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.7 2.88c2.16-1.99 3.42-4.93 3.42-8.7z"/>
              <path fill="#FBBC05" d="M5.58 14.71c-.24-.72-.37-1.49-.37-2.29s.13-1.57.37-2.29L1.25 6.63C.45 8.23 0 10.06 0 12c0 1.94.45 3.77 1.25 5.37l4.33-3.36z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.7-2.88c-1.06.71-2.42 1.16-4.23 1.16-3.25 0-6-2.2-6.99-5.14l-4.33 3.36C3.25 21.31 7.31 24 12 24z"/>
            </svg>
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Google</span>
          </button>
        </div>

        <p className="text-center mt-10 text-xs font-bold text-gray-500 uppercase tracking-wide">
          New here? <Link href="/register" className="text-slate-900 border-b-2 border-yellow-400 hover:text-yellow-500 transition ml-1">Create an account</Link>
        </p>
      </div>
    </div>
  );
}