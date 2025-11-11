import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Dashboard',
    tag: 'Product Design',
    image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjI4ODQ1NDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Travel App',
    tag: 'UX Case Study',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Flow',
    tag: 'Interaction',
    image: 'https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLWNvbW1lcmNlJTIwRmxvd3xlbnwwfDB8fHwxNzYyODg0NTQ4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function WorkGrid() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-gray-600">A few favorites from recent projects</p>
          </div>
          <a href="#" className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline">See all projects</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg"
            >
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="inline-flex rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 backdrop-blur">{p.tag}</div>
                <h3 className="mt-2 text-lg font-semibold text-white drop-shadow">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
