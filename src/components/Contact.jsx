import { motion } from 'framer-motion'
import { Mail, Download } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-xl backdrop-blur">
          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Let’s build something great</h3>
              <p className="mt-2 text-gray-600">Available for freelance and collaborations. I reply within 24 hours.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@avasparks.design" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"><Mail size={16}/> Email me</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"><Download size={16}/> Download resume</a>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={(e)=>e.preventDefault()}
              className="grid gap-3"
            >
              <div className="grid gap-1">
                <label className="text-sm text-gray-700">Name</label>
                <input className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Your name"/>
              </div>
              <div className="grid gap-1">
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="you@domain.com"/>
              </div>
              <div className="grid gap-1">
                <label className="text-sm text-gray-700">Message</label>
                <textarea rows="4" className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Tell me about your project"/>
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20">Send</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
