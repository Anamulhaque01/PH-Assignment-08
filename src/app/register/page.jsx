"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const handleRegister = async (data) => {

    const { data: res, error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      image: data.photoUrl, 
      callbackURL: "/login", 
    });

    if (error) {
      toast.error(error.message || "Registration failed");
    } else {
      toast.success("Account successfully created!");
      router.push("/login"); 
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center bg-slate-50 px-4 py-12">
      <div className="p-8 rounded-2xl bg-white w-full max-w-md shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="font-black text-3xl tracking-tight text-slate-900 uppercase">Create Account</h2>
          <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wide">Join QurbaniHat</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          <div>
            <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1 ml-1">Full Name</label>
            <input 
              {...register("name", { required: "Name field is required" })} 
              placeholder="John Doe" 
              className="w-full border p-3.5 rounded-xl text-gray-700 bg-slate-50 text-xs font-bold outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 uppercase tracking-wide transition" 
            />
            {errors.name && <p className="text-red-500 text-[11px] mt-1 ml-1 font-bold">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1 ml-1">Email</label>
            <input 
              {...register("email", { required: "Email field is required" })} 
              placeholder="email@example.com" 
              type="email"
              className="w-full border p-3.5 rounded-xl text-gray-700 bg-slate-50 text-xs font-bold outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 tracking-wide transition" 
            />
            {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1 ml-1">Photo URL</label>
            <input 
              {...register("photoUrl", { required: "Photo URL is required" })} 
              placeholder="https://images.com/avatar.png" 
              type="url"
              className="w-full border p-3.5 rounded-xl text-gray-700 bg-slate-50 text-xs font-bold outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 tracking-wide transition" 
            />
            {errors.photoUrl && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.photoUrl.message}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1 ml-1">Password</label>
            <input 
              {...register("password", { required: "Password field is required" })} 
              type="password" 
              placeholder="••••••••" 
              className="w-full border p-3.5 rounded-xl text-gray-700 bg-slate-50 text-xs font-bold outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 tracking-wide transition" 
            />
            {errors.password && <p className="text-red-500 text-[11px] mt-1 ml-1 font-bold">{errors.password.message}</p>}
          </div>

          <button className="w-full bg-slate-900 text-white p-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider hover:bg-slate-800 transition shadow-md mt-6">
            Register Now
          </button>
        </form>

        <p className="mt-6 text-center text-xs font-bold text-gray-500 uppercase tracking-wide">
          Have an account? <Link href="/login" className="text-slate-900 border-b border-yellow-400 hover:text-yellow-500 ml-1 transition">Sign In</Link>
        </p>
      </div>
    </div>
  );
}