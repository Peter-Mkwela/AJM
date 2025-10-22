'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const serviceTimes = [
    { service: "Main Service", time: "Sat 10:00 AM - 18:00 PM", gradient: "from-pink-500 to-rose-500" },
    { service: "Morning Service", time: "Mon-Fri 9:00 AM", gradient: "from-green-500 to-teal-500" },
    { service: "Afternoon Prayer", time: "Mon-Fri 14:00 PM", gradient: "from-purple-500 to-blue-600" },
    { service: "Evening Service", time: "Mon-Fri 18:00 PM - 20:00 PM", gradient: "from-orange-500 to-rose-500" },
  ]

  const quickLinks = [
    ['Home', '/'],
    ['About', '/about'],
    ['Services', '/services'],
    ['Events', '/events'],
    ['Sermons', '/sermons'],
    ['Contact', '/contact'],
  ]

  return (
    <footer className="relative bg-gradient-to-br from-[#0B1F3B] via-[#142D56] to-[#1A3B6B] text-white overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        animate={{ x: ['0%', '100%', '0%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Church Info with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 10 }}
                className="relative w-16 h-16 rounded-full overflow-hidden shadow-xl border-2 border-white"
              >
                <Image
                  src="/images/logo.png"
                  alt="AJM Global Pilgrimage Church Logo"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  AJM 
                </h3>
                <p className="text-blue-100 text-sm">Global Pilgrimage</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
             Seek, Find and Share.
            </p>
            <div className="flex items-start space-x-3 text-blue-100 pt-4">
              <motion.div whileHover={{ scale: 1.1 }} className="flex-shrink-0">
                <MapPin className="w-5 h-5 mt-1 text-blue-300" />
              </motion.div>
              <span className="leading-relaxed">7121 Glen View Way, Harare, Zimbabwe</span>
            </div>
          </motion.div>

          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Service Times
            </h3>
            <div className="space-y-4">
              {serviceTimes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <Clock className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-white font-medium text-sm">{item.service}</p>
                    <p className="text-blue-200 text-sm">{item.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map(([label, href], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={href}
                    className="group flex items-center space-x-2 text-blue-100 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                    <span className="group-hover:font-medium">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Phone className="w-4 h-4 text-white" />
                </motion.div>
                <div>
                  <p className="text-white font-medium text-sm">Phone</p>
                  <p className="text-blue-200 text-sm">+263 123 456 789</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Mail className="w-4 h-4 text-white" />
                </motion.div>
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <p className="text-blue-200 text-sm">info@ajmglobal.org</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Users className="w-4 h-4 text-white" />
                </motion.div>
                <div>
                  <p className="text-white font-medium text-sm">Connect</p>
                  <p className="text-blue-200 text-sm">Join our community</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-12"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} The Assembly Of Jesus Messiah Global Pilgrimage.
            {' '}All rights reserved.
          </p>
          <a 
  href="https://mkwelatech.vercel.app" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-blue-300 text-xs mt-2 hover:text-blue-400 transition-colors"
>
  Website Developed by MkwelaTech Solutions
</a>

        </motion.div>
      </div>

      {/* Floating glowing orbs */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-10 w-6 h-6 bg-white/30 rounded-full blur-lg"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-10 right-20 w-8 h-8 bg-purple-400/20 rounded-full blur-lg"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full blur-md"
      />
    </footer>
  )
}