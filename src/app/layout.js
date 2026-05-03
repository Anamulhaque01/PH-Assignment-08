
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

export const metadata = {
  title: "QurbaniHat - Livestock Booking Platform",
  description: "A modern livestock marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-slate-50 antialiased min-h-screen text-slate-800">
        <Navbar></Navbar>
        {children}
        <Toaster />
        <Footer></Footer>
      </body>
    </html>
  );
}