"use client";
import { motion } from "framer-motion";

const ministries = [
  { id:1, name: "Worship & Arts", desc: "Lead worship and creative expression." },
  { id:2, name: "Youth & Children", desc: "Mentoring the next generation." },
  { id:3, name: "Outreach", desc: "Community transformation initiatives." },
  { id:4, name: "Prayer Ministry", desc: "Nightly prayer & intercession." },
];

export default function Ministries(){
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-display text-white">Our Ministries</h3>
      <p className="text-gray-300 mt-2 max-w-2xl">Serving in diverse ways to build the body and reach our community.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ministries.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="p-5 rounded-2xl card-glass"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-ajm-500 to-purple-600 font-semibold mb-3">
              {m.name.split(' ').slice(0,1)[0]}
            </div>
            <h4 className="font-semibold">{m.name}</h4>
            <p className="text-sm text-gray-300 mt-2">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
