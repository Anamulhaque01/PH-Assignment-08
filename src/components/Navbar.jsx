"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    router.push("/login");
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-slate-900">
          Qurbani<span className="text-yellow-500">Hat</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[12px] font-black uppercase tracking-widest">
          <Link
            href="/"
            className={`transition ${isActive("/") ? "text-yellow-500" : "text-slate-600 hover:text-yellow-500"}`}
          >
            Home
          </Link>
          <Link
            href="/animals"
            className={`transition ${isActive("/animals") ? "text-yellow-500" : "text-slate-600 hover:text-yellow-500"}`}
          >
            All Animals
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {!isPending && (
            <>
              {session ? (
                <div className="flex items-center gap-4">
                  <Link href="/my-profile">
                    <div className={`w-10 h-10 rounded-full overflow-hidden border-2 hover:scale-110 transition cursor-pointer ${isActive("/my-profile") ? "border-slate-900" : "border-yellow-400"}`}>
                      <img
                        src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-[12px] text-white  bg-slate-900  uppercase tracking-widest px-4 py-2  rounded-lg hover:bg-red-50 hover:cursor-pointer hover:text-red-600 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    href="/login"
                    className={`text-[12px] uppercase tracking-widest px-4 py-2 transition ${isActive("/login") ? "text-yellow-500 font-black" : "text-black hover:text-yellow-500"}`}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className={`text-[12px] font-black uppercase tracking-widest px-4 py-2 rounded-lg transition shadow-md ${isActive("/register") ? "bg-yellow-500 text-slate-900" : "bg-slate-900 text-white hover:bg-yellow-500"}`}
                  >
                    Register
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;