import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ava Sparks — Designed with love and a bit of motion</p>
        </div>
      </footer>
    </div>
  )
}

export default App
