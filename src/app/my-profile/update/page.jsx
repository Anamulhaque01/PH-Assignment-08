"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onUpdate = async (data) => {
    const { error } = await authClient.user.update({
      name: data.name,
      image: data.image,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Profile updated!");
      router.push("/my-profile");
    }
  };

  return (
    <div className="container mx-auto pt-38 p-10 bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Update Your Info</h2>
        <form onSubmit={handleSubmit(onUpdate)} className="space-y-4">
          <input {...register("name")} placeholder="New Name" className="w-full border p-2 rounded" />
          <input {...register("image")} placeholder="New Image URL" className="w-full border p-2 rounded" />
          <button className="w-full bg-slate-800 text-white p-3 rounded font-bold">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
}