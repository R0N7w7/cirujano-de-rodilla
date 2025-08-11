import { GrBusinessService, GrCircleQuestion, GrHelpBook, GrHome, GrUserManager } from "react-icons/gr"
import { MobileMenu } from "./MobileMenu"


const Navigation = () => {
    return (
        <nav className="flex w-screen h-24 justify-between items-center max-w-full z-50">

            <div className="h-full ml-5 pt-2 pb-2">
                <a href="/">
                    <picture className="h-full w-full flex items-center justify-center">
                        <img src="/designs/mainLogo.png" alt="Logo Doctor Marco Jardinez" className="h-20" />
                    </picture>
                </a>
            </div>
            <div className="w-auto  mr-5 lg:hidden">
                <MobileMenu />
            </div>
            {/*             <div className="w-auto  mr-5 lg:hidden">
                <BiMenu className="h-10 w-10" />
            </div> */}
            <ul className="hidden lg:flex justify-evenly w-2/3 xl:text-lg  text-gray-500">
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrHome /><a href="#hero" className="font-medium text-md transition-all">Inicio</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrBusinessService /><a href="#services" className="font-medium text-md transition-all">Servicios</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrUserManager /><a href="#about" className="font-medium text-md transition-all">Acerca de</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrCircleQuestion /><a href="#questions" className="font-medium text-md transition-all">Preguntas frecuentes</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrHelpBook /><a href="#contact" className="font-medium text-md transition-all">Contacto</a></li>
            </ul>
            <div className="max-w-lg mx-auto flex-col justify-center items-center hidden xl:flex">
                <a href="https://api.whatsapp.com/send/?phone=5217715552268&text&type=phone_number&app_absent=0">
                    <button
                        type="button"
                        className="rounded-full border-2 text-gray-700 border-indigo-700 px-5 py-2 text-lg font-medium hover:bg-indigo-700 hover:text-white transition-all active:bg-indigo-800"
                    >
                        Agendar cita
                    </button>
                </a>
            </div>
        </nav>
    )
}

export { Navigation }
