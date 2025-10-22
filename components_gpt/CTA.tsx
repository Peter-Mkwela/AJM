"use client";
import { motion } from "framer-motion";

export default function CTA(){
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y:0, opacity:1 }}
      transition={{ duration: 0.6 }}
      className="mt-12 bg-gradient-to-r from-ajm-500/10 to-purple/8 border border-white/6 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div>
        <h3 className="text-2xl font-display">Come Worship With Us</h3>
        <p className="text-gray-300 mt-2">7121 Glen View Way, Harare • Sundays 9AM</p>
      </div>

      <div className="flex gap-4">
        <a href="/visit" className="px-6 py-3 rounded-full bg-white text-[#14142b] font-semibold shadow">Plan a Visit</a>
        <a href="/give" className="px-6 py-3 rounded-full border border-white/10">Give Online</a>
      </div>
    </motion.section>
  );
}
