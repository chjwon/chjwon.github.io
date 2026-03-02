import NavBar from '../../components/NavBar'
import Home from '../../components/Home'
import Education from '../../components/Education'
import Research from '../../components/Research'
import Others from '../../components/Others'
import WhereAmINow from '../../components/WhereAmINow'
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <NavBar />
      <Home />
      <Education />
      <Research />
      <Others />
      <WhereAmINow />
      <Footer />
    </main>
  )
}
