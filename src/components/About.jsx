import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A designer who codes</h2>
            <p className="mt-4 text-gray-600">I design with systems thinking, accessibility, and motion in mind. My toolkit spans Figma, Framer, and a healthy dose of front‑end to prototype fast and communicate clearly with engineers.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['UX Research','Wireframing','Visual Design','Prototyping','Design Systems','Usability Testing'].map((s) => (
                <div key={s} className="rounded-xl border border-gray-200 bg-white/70 px-4 py-3 shadow-sm">{s}</div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-200 via-violet-200 to-sky-200 p-1 shadow-xl">
              <div className="h-full w-full rounded-[14px] bg-white p-6">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-24 rounded-xl bg-gray-100" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
