/* eslint-disable react/no-unescaped-entities */
// app/about/page.tsx
"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Globe, HeartHandshake, BookOpenText, Cross, Target, Crown, Star, Church } from "lucide-react"

const beliefs = [
  {
    icon: Crown,
    title: "Jesus Messiah is God",
    description: "We believe that Jesus Messiah is the one true living God, who created everything ever known and unknown to man.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: BookOpenText,
    title: "The Holy Scriptures",
    description: "We believe in the divine authority and infallibility of the Holy Scriptures as God's Word.",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Cross,
    title: "Salvation Through Jesus",
    description: "We believe in the death and resurrection of Jesus Messiah as the only way to salvation.",
    gradient: "from-purple-500 to-blue-600"
  },
  {
    icon: Church,
    title: "The Church",
    description: "We believe the Church is the body of Messiah, called to continue His work on earth.",
    gradient: "from-indigo-500 to-purple-500"
  }
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0B1F3B] via-[#142D56] to-[#1A3B6B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
            >
              About AJM
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            >
              Our Origin, Mission, and Beliefs
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Heavenly Origin */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 group-hover:border-transparent transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg text-white"
                  >
                    <Star className="w-8 h-8" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-900">Heavenly Origin</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  The Assembly of Jesus Messiah Global Pilgrimage originated in heaven. It is an extension of the Lord's community in heaven and is governed and closely controlled by Jesus Messiah through the Holy Ghost persona of God.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  The Assembly of Jesus Messiah Global Pilgrimage has been in existence from the Old Testament and was transformed at Pentecost in the New Testament. The first Overseer was Simon Peter, "the Rock". It was also administered and identified under the name called "THE WAY".
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The Assembly was founded by God in Zimbabwe through a messenger He sent to us commonly known as Brother of Faith by congregants. He was a Major Prophet who started his preaching mission from the early seventies to AD 1992 at the time of his passing on.
                </p>
              </div>
            </motion.div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full">
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center shadow-lg text-white"
                    >
                      <Target className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-center mb-4">
                    <strong>Our Motto:</strong> Seek, find, and share
                  </p>
                  <p className="text-gray-600 leading-relaxed text-center">
                    <strong>Chief Aims:</strong> To preach the gospel to the poor, to proclaim release to the captives, to preach recovery of sight to the blind, and to set at liberty those that are bruised and oppressed. (Luke 4:17, Isaiah 62:1-3)
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full">
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center shadow-lg text-white"
                    >
                      <Globe className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-center">
                    To be a beacon of hope and light in our community, transforming lives through the power of Jesus Messiah and the truth of God's Word. We envision a global pilgrimage of believers united in worship, fellowship, and service to our Lord Jesus Messiah.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Acknowledgments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 group-hover:border-transparent transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg text-white"
                  >
                    <HeartHandshake className="w-8 h-8" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-900">Acknowledgments</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
      We extend our heartfelt gratitude to all the faithful servants, leaders, and contributors who have been instrumental in building and nurturing The Assembly of Jesus Messiah Global Pilgrimage. Their dedication and Holy Ghost-inspired works have been essential in spreading the gospel and strengthening our community.
    </p>
    
    <p className="text-gray-600 leading-relaxed text-lg">
      We especially acknowledge and give thanks for Overseer ISAAc TSIGA and Overseer REWARD JOHN, the predecessors of P.Mudonhi (Brother of Faith) who faithfully guided and directed the church according to God's instructions and expectations. Their leadership laid the foundation for the continued growth and spiritual development of our assembly.
    </p>
              </div>
            </motion.div>

            {/* Beliefs Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent mb-4">
                What We Believe
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our foundational beliefs centered on Jesus Messiah as the one true God
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beliefs.map((belief, i) => {
                const IconComponent = belief.icon
                return (
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
                    <div className={`absolute inset-0 bg-gradient-to-r ${belief.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                    <div className="relative bg-white rounded-3xl p-6 border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${belief.gradient} flex items-center justify-center shadow-lg text-white`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{belief.title}</h3>
                      <p className="text-gray-600 text-sm">{belief.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}