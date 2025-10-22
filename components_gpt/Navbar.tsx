"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl px-6 py-3 backdrop-blur-md ${scrolled ? "bg-black/40 border border-white/6 shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ajm-500 to-purple-600 flex items-center justify-center text-white font-bold">AJM</div>
          <div>
            <span className="block text-sm text-gray-300">The Assembly Of Jesus Messiah</span>
            <span className="block text-xs text-gray-400">Global Pilgrimage</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-white/90 hover:text-purple-300 transition">About</Link>
          <Link href="/ministries" className="text-white/90 hover:text-purple-300 transition">Ministries</Link>
          <Link href="/events" className="text-white/90 hover:text-purple-300 transition">Events</Link>
          <Link href="/sermons" className="text-white/90 hover:text-purple-300 transition">Sermons</Link>
          <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-ajm-500 to-purple-600 text-white">Connect</Link>
        </div>

        {/* mobile toggle - simple */}
        <div className="md:hidden text-white">
          <details className="relative">
            <summary className="cursor-pointer">☰</summary>
            <div className="absolute right-0 mt-2 w-44 bg-[#07102a] rounded-lg p-3 shadow-lg border border-white/6">
              <Link href="/about" className="block py-2">About</Link>
              <Link href="/ministries" className="block py-2">Ministries</Link>
              <Link href="/events" className="block py-2">Events</Link>
              <Link href="/sermons" className="block py-2">Sermons</Link>
              <Link href="/contact" className="block py-2">Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </motion.nav>
  );
}
