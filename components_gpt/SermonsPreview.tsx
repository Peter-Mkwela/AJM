"use client";
import { motion } from "framer-motion";

const sampleSermons = [
  { id:1, title: "Walking in Faith", preacher: "Pastor John", date: "2025-10-12" },
  { id:2, title: "Power of Prayer", preacher: "Elder Mary", date: "2025-09-28" },
];

export default function SermonsPreview(){
  return (
    <div className="mt-6">
      <h3 className="text-white/90 font-semibold">Latest Sermons</h3>
      <div className="mt-4 grid gap-3">
        {sampleSermons.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ x: 12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-3 card-glass p-3 rounded-xl"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-ajm-500 to-purple-600 font-semibold">▶</div>
            <div className="flex-1">
              <div className="font-medium">{s.title}</div>
              <div className="text-xs text-gray-300">{s.preacher} • {new Date(s.date).toLocaleDateString()}</div>
            </div>
            <a href="/sermons" className="text-sm text-gray-200">View</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
