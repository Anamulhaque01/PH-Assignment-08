"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const handleRegister = async (data) => {
    const { error } = await authClient.signUp.email({
      email: data.email,
      password: data.password,
      name: data.name,
      image: data.photoUrl,
      callbackURL: "/login", // Requirement: Navigate to login after success [cite: 76]
    });

    if (error) {
      alert(error.message); // Requirement: Show error message [cite: 77]
    } else {
      alert("Registration successful! Please login.");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", // Requirement: Navigate to home after social login [cite: 82]
    });
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen bg-slate-100">
      <div className="p-8 rounded-xl bg-white w-full max-w-md shadow-lg">
        <h2 className="font-bold text-3xl text-center mb-6">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          <input {...register("name", { required: true })} placeholder="Full Name" className="input w-full border p-2 rounded" />
          <input {...register("email", { required: true })} placeholder="Email" className="input w-full border p-2 rounded" />
          <input {...register("photoUrl", { required: true })} placeholder="Photo URL" className="input w-full border p-2 rounded" />
          <input type="password" {...register("password", { required: true })} placeholder="Password" className="input w-full border p-2 rounded" />
          
          <button className="btn w-full bg-slate-800 text-white p-2 rounded font-bold">Register</button>
        </form>

        <button onClick={handleGoogleLogin} className="btn w-full mt-4 bg-red-500 text-white p-2 rounded font-bold">
          Login with Google
        </button>

        <p className="mt-4 text-center">
          Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;