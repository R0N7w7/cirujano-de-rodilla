import Description from './components/Description'
import FrecuentlyQuestions from './components/FrecuentlyQuestions'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Resume } from './components/Resume'
import { Services } from './components/ServicesElement'
import { Videos } from './components/Videos'

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <Hero />
      </header>
      <main className='grid grid-cols-1 w-full justify-items-center z-20'>
        <Services />
        <Description />
        <div className='flex flex-col items-center justify-center w-full final-section'>  
          <Videos />
          <FrecuentlyQuestions />
        </div>
      </main>
      <footer className='z-0'>
        <Resume />
      </footer>
      <script src="/Js/index.js" defer></script>
    </>
  )
}