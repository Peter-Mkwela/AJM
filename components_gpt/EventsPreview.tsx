"use client";
import { motion } from "framer-motion";

const sampleEvents = [
  { id:1, title: "Sunday Celebration", date: "2025-10-26", desc: "Praise and prophetic word. Fellowship after service."},
  { id:2, title: "Youth Night", date: "2025-11-02", desc: "Worship + practical life sessions for youth."},
];

export default function EventsPreview(){
  return (
    <div className="mt-6">
      <h3 className="text-white/90 font-semibold">Upcoming Events</h3>
      <div className="mt-4 grid gap-4">
        {sampleEvents.map((e, i) => (
          <motion.article
            key={e.id}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="card-glass p-4 rounded-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-lg">{e.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{e.desc}</p>
              </div>
              <time className="text-sm px-3 py-1 text-gray-200 border border-white/6 rounded-md">{new Date(e.date).toLocaleDateString()}</time>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
