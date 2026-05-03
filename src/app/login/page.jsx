"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const router = useRouter();


  const handleLoginFunc = async (data) => {
    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/", 
      });

      if (error) {
        toast.error(error.message || "Failed to log in. Please try again.");
      } else if (res) {
        toast.success("Logged in successfully!");
        router.push("/");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    }
  };


  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/", 
      });
    } catch (err) {
      toast.error("Google sign-in failed.");
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center bg-slate-50 px-4 py-12">
      <div className="p-8 rounded-2xl bg-white w-full max-w-md shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="font-black text-3xl tracking-tight text-slate-900 uppercase">Login</h2>
          <p className="text-xs font-bold text-gray-500 uppercase mt-1 tracking-wide">Access QurbaniHat</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <div>
            <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full border p-3.5 rounded-xl bg-slate-50 text-xs font-bold outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 tracking-wide transition"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1 ml-1">
              Password
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full border p-3.5 rounded-xl bg-slate-50 text-xs font-bold outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 tracking-wide transition"
              {...register("password", { required: "Password field is required" })}
            />
            <button
              type="button"
              className="absolute right-4 top-9 text-gray-400 hover:text-slate-600 transition"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 text-white p-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider hover:bg-slate-800 transition shadow-md mt-6"
          >
            Sign In
          </button>
        </form>

        
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-black">
            <span className="bg-white px-2 text-gray-400">Or continue with</span>
          </div>
        </div>

        
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full border border-gray-200 p-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition mb-6"
        >
          <FaGoogle className="text-red-500" /> Google Login
        </button>

        <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-wide">
          New here?{" "}
          <Link
            href="/register"
            className="text-slate-900 border-b border-yellow-400 hover:text-yellow-500 ml-1 transition"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}