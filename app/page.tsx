"use client";

import { motion } from "framer-motion";
import { HandHelping, Users2, HeartHandshake, MapPin, ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const coreValues = [
    {
      Icon: HandHelping,
      title: "Worship",
      text: "Join us in heartfelt worship and praise to our Lord Jesus Messiah.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      Icon: Users2,
      title: "Fellowship",
      text: "Connect with other believers and grow together in faith and love.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      Icon: HeartHandshake,
      title: "Service",
      text: "Serve the community and be a vessel of compassion.",
      gradient: "from-purple-500 to-blue-600",
    },
  ];

  const serviceTimes = [
    { name: "Main Service", time: "Sat 10:00 AM - 18:00 PM", gradient: "from-pink-500 to-rose-500" },
    { name: "Morning Service", time: "Mon-Fri 9:00 AM", gradient: "from-green-500 to-teal-500" },
    { name: "Afternoon Prayer", time: "Mon-Fri 14:00 PM", gradient: "from-purple-500 to-blue-600" },
    { name: "Evening Service", time: "Mon-Fri 18:00 PM - 20:00 PM", gradient: "from-orange-500 to-rose-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-gray-900">
      <Header />

      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-gradient-to-br from-[#0B1F3B] via-[#142D56] to-[#1A3B6B] text-white">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
          >
            The Assembly Of Jesus Messiah{" "}
            <span className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent">
              Global Pilgrimage
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Jesus Messiah is God and He is &apos;The Way&apos;.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="/services"
      className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg flex items-center gap-2 text-sm sm:text-base hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      Join Our Services
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
    <Link
      href="/about"
      className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg flex items-center justify-center text-sm sm:text-base hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      Learn More
    </Link>
  </motion.div>
</div>

          </motion.div>
        </div>

        {/* Floating glow lights */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-16 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-white/40 rounded-full blur-md"
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-28 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-purple-300/40 rounded-full blur-md"
        />
      </section>

      {/* WELCOME SECTION */}
      <section className="py-16 sm:py-20 md:py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent"
          >
            Welcome to AJM 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16"
          >
            At The Assembly Of Jesus Messiah Global Pilgrimage, we are committed to
            preach the gospel to the poor, to proclaim release to the captives, to preach recovery of sight to the blind, and to set at liberty those that are bruised and oppressed.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map(({ Icon, title, text, gradient }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 group-hover:border-transparent transition-all duration-500 text-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
                    className={`w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE TIMES */}
      <section className="py-16 sm:py-20 md:py-24 relative bg-gradient-to-br from-[#0B1F3B] via-[#142D56] to-[#1A3B6B] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
          >
            Service Times
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-blue-100 mb-12"
          >
            Join us for worship and fellowship
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {serviceTimes.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md group-hover:bg-white/20 transition-all duration-300" />
                <div className="relative p-4 sm:p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 sm:w-14 h-12 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg text-white`}
                  >
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{service.name}</h3>
                  <p className="text-purple-100 text-sm sm:text-base">{service.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ x: ["-100%", "100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 sm:w-1/3 h-full bg-white/5 blur-2xl"
        />
      </section>

      {/* LOCATION SECTION */}
      <section className="py-16 sm:py-20 md:py-24 relative">
  <div className="max-w-3xl sm:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent"
    >
      Visit Us
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-base sm:text-lg md:text-xl text-gray-600 mb-12"
    >
      We&apos;d love to welcome you to our church
    </motion.p>

    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 group-hover:border-transparent transition-all duration-500">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg text-white"
        >
          <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Our Location</h3>
        <p className="text-gray-700 text-sm sm:text-base mb-1">7121 Glen View Way</p>
        <p className="text-gray-700 text-sm sm:text-base mb-2">Harare, Zimbabwe</p>
        <p className="text-gray-500 text-xs mb-6">Coordinates: -17.895803, 30.953747</p>

        {/* Interactive Map */}
        <div className="bg-gray-100 h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 sm:mb-8 group-hover:shadow-lg transition-all relative">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.123456789012!2d30.953747!3d-17.895803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDUzJzQ0LjkiUyAzMMKwNTcnMTMuNSJF!5e0!3m2!1sen!2szw!4v1234567890`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="AJM Global Pilgrimage Church Location"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=-17.895803,30.953747"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            Get Directions
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <button
            onClick={() => {
              navigator.clipboard.writeText('-17.895803, 30.953747')
              // You can add a toast notification here
              alert('Coordinates copied to clipboard!')
            }}
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300 text-sm sm:text-base"
          >
            Copy Coordinates
          </button>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  );
}
