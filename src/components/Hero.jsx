import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur"
          >
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-fuchsia-500" />
            Open for freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
          >
            Designing playful, modern product experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 max-w-xl text-lg text-gray-600"
          >
            I'm Ava, a UI/UX designer crafting delightful interfaces with a tech-forward touch. I blend strategy, motion, and accessibility into every pixel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition hover:opacity-90">View Work</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50">Get in Touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
