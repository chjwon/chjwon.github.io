import Hero from '../../components/Hero'
import About from '../../components/About'
import Education from '../../components/Education'
import Experience from '../../components/Experience'
import Publications from '../../components/Publications'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Publications />
      <Footer />
    </main>
  )
}