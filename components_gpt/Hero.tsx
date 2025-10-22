"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[84vh] flex items-center justify-center overflow-hidden">
      {/* layered animated gradient / shapes */}
      <div className="absolute inset-0 -z-10 hero-gradient" style={{background: 'radial-gradient(circle at 20% 20%, rgba(106,75,214,0.18), transparent 8%), radial-gradient(circle at 85% 60%, rgba(75,107,255,0.14), transparent 12%), linear-gradient(180deg, rgba(10,13,30,0.8), rgba(6,6,20,0.9))'}} />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h1 className="font-display text-5xl md:text-7xl leading-tight">
          <span className="block text-white">The Assembly Of</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ajm-500 to-purple-600">Jesus Messiah</span>
          <span className="block text-gray-200 text-xl md:text-2xl mt-3">Global Pilgrimage</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
          Worship • Discipleship • Outreach — join us for spirit-filled services and community transformation in Harare.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/events" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-ajm-500 to-purple-600 shadow-lg hover:scale-[1.03] transition transform">
            Upcoming Events
          </a>
          <a href="/sermons" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition">
            Latest Sermons
          </a>
        </div>

        {/* wave SVG decorative */}
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: -6 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="mt-12"
        >
          <svg width="900" height="120" viewBox="0 0 900 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto opacity-40">
            <path d="M0 60 C150 10 350 110 500 60 C650 10 850 110 900 60 L900 120 L0 120Z" fill="url(#g)"/>
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#6a4bd6" stopOpacity="0.9" />
                <stop offset="1" stopColor="#4b6bff" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      {/* faint background cross icon */}
      <div className="pointer-events-none absolute right-6 bottom-8 opacity-8 -z-20">
        <svg width="220" height="220" viewBox="0 0 100 100" className="opacity-10">
          <rect x="46" y="10" width="8" height="80" rx="2" fill="#6a4bd6"/>
          <rect x="10" y="46" width="80" height="8" rx="2" fill="#4b6bff"/>
        </svg>
      </div>
    </section>
  );
}
