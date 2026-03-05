import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <main className="relative min-h-screen bg-premol-dark ">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <footer className='bg-premol-dark py-10 text-center border-t border-white/5'>
        <p className='text-white/80'> 
          &copy; {new Date().getFullYear()} Prémol Gesso. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}

export default App;
