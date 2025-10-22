// app/events/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, Clock, MapPin, ArrowRight, Download, Play, Image as ImageIcon, Video } from 'lucide-react'

// Sample events data
const sampleEvents = [
  {
    id: '1',
    title: 'Passover Celebration',
    description: 'Join us for our annual Passover celebration from Good Friday to Easter Monday. A time of reflection, worship, and celebration of Messiah\'s resurrection.',
    date: '2024-03-29T18:00:00',
    endDate: '2024-04-01T20:00:00',
    location: 'Main Sanctuary & Church Grounds',
    category: 'PASSOVER',
    gradient: "from-red-500 to-orange-500",
    isMainEvent: true
  },
  {
    id: '2',
    title: 'Feast of Tabernacles',
    description: 'Annual Feast of Tabernacles celebration. A week of worship, teaching, and fellowship as we remember God\'s provision and dwelling with His people.',
    date: '2024-10-16T18:00:00',
    endDate: '2024-10-23T20:00:00',
    location: 'Church Camp Ground & Main Sanctuary',
    category: 'TABERNACLES',
    gradient: "from-green-500 to-emerald-500",
    isMainEvent: true
  },
  {
    id: '3',
    title: "Men's Breakfast & Bible Study",
    description: "Monthly gathering for men to fellowship, enjoy breakfast, and study God's Word together.",
    date: '2024-04-06T08:00:00',
    location: 'Fellowship Hall',
    category: 'BIBLE_STUDY',
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: '4',
    title: 'Youth Camp 2024',
    description: 'Annual youth camp featuring worship, teaching, games, and spiritual growth activities.',
    date: '2024-04-12T15:00:00',
    location: 'Church Camp Ground',
    category: 'YOUTH',
    gradient: "from-purple-500 to-pink-500"
  },
]

// Sample gallery data
const galleryItems = [
  {
    id: '1',
    type: 'image',
    title: 'Passover Worship 2023',
    description: 'Congregation worship during last year\'s Passover celebration',
    url: '/gallery/passover-worship.jpg',
    thumbnail: '/gallery/passover-worship-thumb.jpg',
    event: 'Passover 2023',
    downloadUrl: '/downloads/passover-worship.jpg'
  },
  {
    id: '2',
    type: 'video',
    title: 'Easter Sunday Sermon',
    description: 'Full Easter Sunday service and message',
    url: 'https://youtube.com/embed/easter2023',
    thumbnail: '/gallery/easter-sermon-thumb.jpg',
    event: 'Passover 2023',
    downloadUrl: '/downloads/easter-sermon.mp4'
  },
  {
    id: '3',
    type: 'image',
    title: 'Feast of Tabernacles Setup',
    description: 'Beautiful tabernacle decorations and setup',
    url: '/gallery/tabernacles-setup.jpg',
    thumbnail: '/gallery/tabernacles-setup-thumb.jpg',
    event: 'Tabernacles 2023',
    downloadUrl: '/downloads/tabernacles-setup.jpg'
  },
  {
    id: '4',
    type: 'video',
    title: 'Tabernacles Worship Night',
    description: 'Powerful worship during Feast of Tabernacles',
    url: 'https://youtube.com/embed/tabernacles-worship',
    thumbnail: '/gallery/tabernacles-worship-thumb.jpg',
    event: 'Tabernacles 2023',
    downloadUrl: '/downloads/tabernacles-worship.mp4'
  },
  {
    id: '5',
    type: 'image',
    title: 'Children\'s Passover Activity',
    description: 'Children engaged in Passover learning activities',
    url: '/gallery/children-passover.jpg',
    thumbnail: '/gallery/children-passover-thumb.jpg',
    event: 'Passover 2023',
    downloadUrl: '/downloads/children-passover.jpg'
  },
  {
    id: '6',
    type: 'image',
    title: 'Community Feast',
    description: 'Community meal during Feast of Tabernacles',
    url: '/gallery/community-feast.jpg',
    thumbnail: '/gallery/community-feast-thumb.jpg',
    event: 'Tabernacles 2023',
    downloadUrl: '/downloads/community-feast.jpg'
  }
]

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

function formatDateRange(startStr: string, endStr: string) {
  const start = new Date(startStr)
  const end = new Date(endStr)
  return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`
}

export default function Events() {
  const [events, setEvents] = useState<typeof sampleEvents>([])
  const [gallery, setGallery] = useState<typeof galleryItems>([])
  const [selectedEvent, setSelectedEvent] = useState<string>('all')

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/events')
        if (!res.ok) throw new Error('Failed to fetch events')
        const data = await res.json()
        setEvents(data)
      } catch (err) {
        console.log('Using sample events data:', err)
        setEvents(sampleEvents)
        setGallery(galleryItems)
      }
    }
    fetchEvents()
  }, [])

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      SERVICE: 'bg-blue-100 text-blue-800',
      BIBLE_STUDY: 'bg-purple-100 text-purple-800',
      PRAYER_MEETING: 'bg-indigo-100 text-indigo-800',
      YOUTH: 'bg-pink-100 text-pink-800',
      OUTREACH: 'bg-green-100 text-green-800',
      SPECIAL: 'bg-red-100 text-red-800',
      PASSOVER: 'bg-orange-100 text-orange-800',
      TABERNACLES: 'bg-emerald-100 text-emerald-800',
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const filteredGallery = selectedEvent === 'all' 
    ? gallery 
    : gallery.filter(item => item.event.includes(selectedEvent))

  const mainEvents = events.filter(event => event.isMainEvent)
  const regularEvents = events.filter(event => !event.isMainEvent)

  const handleDownload = (item: typeof galleryItems[0]) => {
    // Create a temporary link to trigger download
    const link = document.createElement('a')
    link.href = item.downloadUrl
    link.download = item.title.toLowerCase().replace(/\s+/g, '-') + (item.type === 'image' ? '.jpg' : '.mp4')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
              Events & Gallery
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
            >
              Join our celebrations and relive precious moments through our gallery
            </motion.p>
          </div>
        </section>

        {/* Main Events */}
        {mainEvents.length > 0 && (
          <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent">
                  Major Celebrations
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Join us for our annual feasts and special celebrations
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {mainEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                    <div className="relative bg-white rounded-3xl p-6 border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full">
                      {/* Event Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${event.gradient} flex items-center justify-center shadow-lg text-white`}
                          >
                            <Calendar className="w-6 h-6" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                              Annual Celebration
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Event Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <Clock className="w-4 h-4 text-blue-500 mr-3" />
                          {event.endDate ? formatDateRange(event.date, event.endDate) : formatDate(event.date)}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <MapPin className="w-4 h-4 text-green-500 mr-3" />
                          {event.location}
                        </motion.div>
                      </div>

                      {/* Date Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                        className={`absolute top-6 right-6 text-center p-3 rounded-2xl bg-gradient-to-r ${event.gradient} text-white shadow-lg`}
                      >
                        <div className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</div>
                        <div className="text-xs font-medium uppercase">
                          {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Events */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent">
                Regular Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Weekly and monthly activities for spiritual growth and fellowship
              </p>
            </motion.div>

            {regularEvents.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">No Upcoming Events</h3>
                <p className="text-gray-500">Check back later for upcoming events and activities.</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {regularEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${event.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                    <div className="relative bg-white rounded-3xl p-6 border border-gray-100 group-hover:border-transparent transition-all duration-500 h-full">
                      {/* Event Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${event.gradient} flex items-center justify-center shadow-lg text-white`}
                          >
                            <Calendar className="w-6 h-6" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                              {event.category.replace('_', ' ')}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Event Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <Clock className="w-4 h-4 text-blue-500 mr-3" />
                          {formatDate(event.date)}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <MapPin className="w-4 h-4 text-green-500 mr-3" />
                          {event.location}
                        </motion.div>
                      </div>

                      {/* Date Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                        className={`absolute top-6 right-6 text-center p-3 rounded-2xl bg-gradient-to-r ${event.gradient} text-white shadow-lg`}
                      >
                        <div className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</div>
                        <div className="text-xs font-medium uppercase">
                          {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 relative bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent">
                Event Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Relive precious moments from our celebrations. Download your favorite memories!
              </p>
            </motion.div>

            {/* Event Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {['all', 'Passover', 'Tabernacles'].map((eventType) => (
                <motion.button
                  key={eventType}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedEvent(eventType)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedEvent === eventType
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {eventType === 'all' ? 'All Events' : eventType}
                </motion.button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div className="relative bg-white rounded-3xl p-4 border border-gray-100 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                    
                    {/* Media Thumbnail */}
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      {item.type === 'image' ? (
                        <>
                          <ImageIcon className="w-12 h-12 text-gray-400" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDownload(item)}
                              className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
                            >
                              <Download className="w-5 h-5" />
                            </motion.button>
                          </div>
                        </>
                      ) : (
                        <>
                          <Video className="w-12 h-12 text-gray-400" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-2">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="opacity-0 group-hover:opacity-100 bg-red-500 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                              >
                                <Play className="w-5 h-5" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleDownload(item)}
                                className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300"
                              >
                                <Download className="w-5 h-5" />
                              </motion.button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === 'image' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {item.type.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {item.event}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      
                      {/* Download Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDownload(item)}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download {item.type === 'image' ? 'Image' : 'Video'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredGallery.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">No Media Found</h3>
                <p className="text-gray-500">No gallery items found for the selected event.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0B1F3B] to-[#4B6BFF] bg-clip-text text-transparent">
                Monthly Calendar
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                View our full calendar of events and activities for the month
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 group-hover:border-transparent transition-all duration-500">
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">Monthly calendar view would be embedded here</p>
                  <p className="text-sm text-gray-400">(Google Calendar or custom calendar component)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Event Updates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}