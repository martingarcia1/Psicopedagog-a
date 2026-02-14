import Header from './app/components/Header'
import Hero from './app/components/Hero'
import About from './app/components/About'
import Experience from './app/components/Experience'
import Services from './app/components/Services'
import Contact from './app/components/Contact'
import Footer from './app/components/Footer'
import WhatsAppButton from './app/components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-purple-200 selection:text-purple-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
