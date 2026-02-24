import { Categories } from './components/Categories'
import { Galery } from './components/Galery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
      <Header />
      <main className='py-10'>
        <Hero />
        <Categories />
        <Galery />
      </main>
      <Footer />
    </>
  )
}

export default App
