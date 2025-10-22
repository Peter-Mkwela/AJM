// app/sermons/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Play, Headphones, User, Calendar, ArrowRight } from 'lucide-react'

// Sample Sermons Data
const sampleSermons = [
  {
    id: '1',
    title: 'The Power of Faith',
    description: 'Exploring how faith moves mountains and transforms lives in our daily walk with Messiah.',
    preacher: 'ArchPriest Ncube',
    date: '2024-03-15',
    audioUrl: '/sermons/faith-power.mp3',
    videoUrl: 'https://youtube.com/embed/example1',
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: '2',
    title: 'Walking in Love',
    description: "Understanding God's love and how to demonstrate it in our relationships and community.",
    preacher: 'Saxton Manyere',
    date: '2024-03-08',
    audioUrl: '/sermons/walking-love.mp3',
    videoUrl: 'https://youtube.com/embed/example2',
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: '3',
    title: 'The Holy Spirit Our Helper',
    description: 'Discovering the role and power of the Holy Spirit in guiding and empowering believers.',
    preacher: 'Aunty Mugariri',
    date: '2024-03-01',
    audioUrl: '/sermons/holy-spirit-helper.mp3',
    videoUrl: null,
    gradient: "from-purple-500 to-blue-600"
  },
  {
    id: '4',
    title: 'Overcoming Fear and Anxiety',
    description: 'Biblical principles for finding peace and courage in challenging times.',
    preacher: 'Overseer Johns',
    date: '2024-02-25',
    audioUrl: '/sermons/overcoming-fear.mp3',
    videoUrl: 'https://youtube.com/embed/example3',
    gradient: "from-indigo-500 to-purple-500"
  },
]

// Helper to format dates
function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
}

export default function Sermons() {
  const [sermons, setSermons] = useState<typeof sampleSermons>([])

  useEffect(() => {
    async function fetchSermons() {
      try {
        const res = await fetch('/api/sermons') // Replace with your API route if using Prisma
        if (!res.ok) throw new Error('Failed to fetch sermons')
        const data = await res.json()
        setSermons(data)
      } catch (err) {
        console.log('Using sample sermons data:', err)
        setSermons(sampleSermons)
      }
    }
    fetchSermons()
  }, [])

  const sermonSeries = [
    {
      title: 'The Fruit of the Spirit',
      description: 'Exploring the nine-fold fruit of the Spirit in Galatians 5',
      count: '8 sermons',
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "The Lord's Prayer",
      description: 'Deep dive into the model prayer Jesus taught his disciples',
      count: '6 sermons',
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: 'Walking in Victory',
      description: 'Understanding our identity and victory in Messiah',
      count: '10 sermons',
      gradient: "from-purple-500 to-blue-600"
    },
  ]

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
              Sermons
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            >
              Listen to messages of hope, faith, and transformation
            </motion.p>
          </div>
        </section>

        {/* Sermons Grid */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sermons.map((sermon, index) => (
                <motion.div
                  key={sermon.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${sermon.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                  <div className="relative bg-white rounded-3xl p-6 border border-gray-100 group-hover:border-transparent transition-all duration-500">
                    
                    {/* Featured Badge */}
                    {index === 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="absolute -top-3 left-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg z-10"
                      >
                        Featured Sermon
                      </motion.div>
                    )}

                    {/* Sermon Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${sermon.gradient} flex items-center justify-center shadow-lg text-white`}
                        >
                          <Play className="w-6 h-6" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{sermon.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(sermon.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {sermon.preacher}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sermon Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {sermon.description}
                    </p>

                    {/* Media */}
                    <div className="space-y-4">
                      {sermon.videoUrl && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="group/video"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Play className="w-5 h-5 text-red-500" />
                            <h4 className="font-semibold text-gray-700">Watch Video</h4>
                          </div>
                          <div className="bg-gray-100 rounded-2xl p-4 aspect-video flex items-center justify-center group-hover/video:shadow-lg transition-all">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                              <div className="text-center">
                                <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                                <p className="text-gray-500 text-sm">Video Player</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {sermon.audioUrl && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="group/audio"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Headphones className="w-5 h-5 text-blue-500" />
                            <h4 className="font-semibold text-gray-700">Listen to Audio</h4>
                          </div>
                          <div className="bg-gray-100 rounded-2xl p-4 group-hover/audio:shadow-lg transition-all">
                            <audio controls className="w-full rounded-xl">
                              <source src={sermon.audioUrl} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Load More Sermons
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Sermon Series */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent">
                Sermon Series
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our curated sermon series for deeper spiritual growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sermonSeries.map((series, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${series.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                  <div className="relative bg-white rounded-3xl p-6 border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full text-center">
                    
                    {/* Series Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${series.gradient} flex items-center justify-center shadow-lg text-white`}
                    >
                      <Play className="w-8 h-8" />
                    </motion.div>

                    {/* Series Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{series.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {series.description}
                    </p>

                    {/* Sermon Count */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r ${series.gradient} text-white text-sm font-semibold mb-6 shadow-lg`}>
                      <Headphones className="w-4 h-4" />
                      {series.count}
                    </div>

                    {/* Explore Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-medium hover:border-transparent hover:text-white hover:shadow-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-800"
                    >
                      Explore Series
                    </motion.button>
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