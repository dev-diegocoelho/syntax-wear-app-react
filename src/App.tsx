import { Categories } from './components/Categories'
import { Galery } from './components/Galery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {


  return (
    <>
      <Header />
      <main className='py-10'>
        <Hero />
        <Categories/>
        <Galery/>
      </main>

    </>
  )
}

export default App
