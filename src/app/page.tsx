import Description from './components/Description'
import FrecuentlyQuestions from './components/FrecuentlyQuestions'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Services } from './components/ServicesElement'
import { Videos } from './components/Videos'

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <Hero />
      </header>
      <main>
        <Services />
        <Description/> 
        <Videos />
        <FrecuentlyQuestions />
      </main>
      <footer>
        {/*         <Resume /> */}
      </footer>
    </>
  )
}