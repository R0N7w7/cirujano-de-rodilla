import { FaWhatsapp } from 'react-icons/fa6'
import Description from '../components/Description'
import FrecuentlyQuestions from '../components/FrecuentlyQuestions'
import { Hero } from '../components/Hero'
import { Navigation } from '../components/Navigation'
import { Resume } from '../components/Resume'
import { Services } from '../components/ServicesElement'
import { Videos } from '../components/Videos'

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
        <div className="fixed left-4 bottom-4 z-10">
          <a
            href="https://api.whatsapp.com/send/?phone=5217715552268&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="must-be-shadowed flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
        <Resume />
      </footer>
      <script src="/Js/index.js" defer></script>
    </>
  )
}