// app/components/PageLayout.tsx
"use client"

import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { motion } from "framer-motion"

interface PageLayoutProps {
  children: ReactNode
  heroTitle?: string
  heroSubtitle?: string
  heroGradient?: string
}

export default function PageLayout({ children, heroTitle, heroSubtitle, heroGradient }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />

      <main className="flex-grow">
        {heroTitle && (
          <section className={`relative py-24 overflow-hidden text-white ${heroGradient ?? 'bg-gradient-to-br from-[#0B1F3B] via-[#142D56] to-[#1A3B6B]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
              >
                {heroTitle}
              </motion.h1>
              
              {heroSubtitle && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
                >
                  {heroSubtitle}
                </motion.p>
              )}
            </div>
          </section>
        )}

        {children}
      </main>

      <Footer />
    </div>
  )
}
