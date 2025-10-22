import Hero from "@/components/Hero";
import Ministries from "@/components/Ministries";
import EventsPreview from "@/components/EventsPreview";
import SermonsPreview from "@/components/SermonsPreview";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 -mt-28 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-transparent">
            <div className="card-glass p-8 rounded-3xl shadow-xl border border-white/6">
              <h2 className="font-display text-3xl md:text-4xl text-white">Welcome to AJM Global Pilgrimage</h2>
              <p className="mt-4 text-gray-200 leading-relaxed">
                We are The Assembly Of Jesus Messiah Global Pilgrimage — a family of believers in Harare, Zimbabwe
                committed to worship, discipleship and global outreach. Join us for spirit-filled services, life-changing ministries and community transformation.
              </p>

              <div className="mt-6 flex gap-4">
                <a href="/about" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-ajm-500 to-purple-600 shadow-lg hover:scale-[1.02] transition transform">
                  <span className="text-white font-semibold">Our Story</span>
                </a>
                <a href="/contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition">
                  Visit / Contact
                </a>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card-glass p-6 rounded-2xl">
                <h4 className="text-lg font-semibold">Service Times</h4>
                <p className="mt-2 text-sm text-gray-300">Sundays 9:00 AM • Midweek Prayer Wed 6:30 PM</p>
              </div>
              <div className="card-glass p-6 rounded-2xl">
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="mt-2 text-sm text-gray-300">7121 Glen View Way, Harare, Zimbabwe</p>
              </div>
            </div>
          </div>

          <aside className="md:col-span-5">
            <EventsPreview />
            <SermonsPreview />
          </aside>
        </div>

        <Ministries />
        <CTA />
      </section>
    </div>
  );
}
