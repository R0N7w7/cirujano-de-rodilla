import { GrBusinessService, GrCircleQuestion, GrHelpBook, GrHome, GrUserManager } from "react-icons/gr"
import { MobileMenu } from "./MobileMenu"


const Navigation = () => {
    return (
        <nav className="flex w-screen h-24 justify-between items-center max-w-full z-50">

            <div className="h-full ml-5 pt-2 pb-2">
                <picture className="h-full w-full flex items-center justify-center">
                    <img src="/designs/mainLogo.png" alt="" className="h-20" />
                </picture>
            </div>
            <div className="w-auto  mr-5 lg:hidden">
                <MobileMenu />
            </div>
            {/*             <div className="w-auto  mr-5 lg:hidden">
                <BiMenu className="h-10 w-10" />
            </div> */}
            <ul className="hidden lg:flex justify-evenly w-2/3 xl:text-lg  text-gray-500">
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrHome /><a href="" className="font-medium text-md transition-all">Inicio</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrBusinessService /><a href="" className="font-medium text-md transition-all">Servicios</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrUserManager /><a href="" className="font-medium text-md transition-all">Acerca de</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrCircleQuestion /><a href="" className="font-medium text-md transition-all">Preguntas frecuentes</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrHelpBook /><a href="" className="font-medium text-md transition-all">Contacto</a></li>
            </ul>
            <div className="max-w-lg mx-auto flex flex-col justify-center items-center">
                <a className="group relative inline-flex border border-indigo-600 focus:outline-none w-full sm:w-auto"
                    href="" target="_blank">
                    <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-indigo-800 text-center font-bold uppercase bg-white ring-1 ring-indigo-800 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">Agendar Cita</span>
                </a>
            </div>
        </nav>
    )
}

export { Navigation }
