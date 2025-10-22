// app/services/page.tsx
"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { MapPin, Clock, Users2, BookOpen, Star, User } from "lucide-react"

const services = [
  {
    title: "Main Service",
    time: "Saturdays 10:00 AM - 18:00 PM",
    description: "Join us for our service featuring powerful praise and worship, prayer, and an inspiring message from God's Word.",
    features: ["Live Worship Band", "Children's Church", "Youth Program", "Holy Communion", "Prayer Ministry"],
    icon: BookOpen,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Sunday Service",
    time: "Sundays 10:00 AM - 13:00 PM",
    description: "Deep dive into God's Word with our Sunday Service. A time for learning, discussion, and spiritual growth.",
    features: ["Verse-by-Verse Study", "Group Discussions", "Q&A Session", "Prayer Groups"],
    icon: BookOpen,
   gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Mid Week Service",
    time: "Mon-Fri 18:00 PM - 20:00 PM",
    description: "Corporate prayer gathering where we intercede for our church, community, nation, and personal needs.",
    features: ["Intercessory Prayer", "Prayer Walks", "Testimony Sharing", "Breakthrough Prayers"],
    icon: BookOpen,
    gradient: "from-purple-500 to-blue-600"
  },
  {
    title: "Morning Service",
    time: "Mon-Fri 09:00 AM",
    description: "Dynamic service designed for youth and young adults with contemporary worship and relevant biblical teaching.",
    features: ["Contemporary Worship", "Youth Band", "Games & Activities", "Mentorship Program"],
    icon: Star,
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Children's Bible Study",
    time: "Saturdays 10:30 AM- 13:00 PM",
    description: "Engaging and age-appropriate ministry for children to learn about Jesus in a fun, safe environment.",
    features: ["Bible Stories", "Worship & Dance", "Arts & Crafts", "Memory Verses"],
    icon: User,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Women's Fellowship",
    time: "Tuesdays 14:00 PM",
    description: "Weekly gathering for women to connect, encourage one another, and grow in their faith journey.",
    features: ["Guest Speakers", "Testimonies", "Prayer Circles", "Community Projects"],
    icon: Star,
    gradient: "from-indigo-500 to-purple-500"
  }
]

export default function Services() {
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
              Our Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            >
              Experience transformative worship, deep fellowship, and spiritual growth in our vibrant community
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const IconComponent = service.icon
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
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                    <div className="relative bg-white rounded-3xl p-8 border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl shadow-lg text-white`}
                        >
                          <IconComponent className="w-8 h-8" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{service.time}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Plan Your Visit Section */}
        <section className="py-20 relative bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent">
              Plan Your Visit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              We understand that visiting a new church can be intimidating. Let us help make your first visit comfortable and welcoming.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Find Us",
                  description: "7121 Glen View Way, Harare",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Clock,
                  title: "Attend Service",
                  description: "You are free to come and worship with us",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Users2,
                  title: "Get Welcome",
                  description: "Our greeters will welcome you warmly",
                  gradient: "from-green-500 to-emerald-500"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-100 group-hover:border-transparent transition-all duration-300 text-center">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
