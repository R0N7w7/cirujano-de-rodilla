import { BiMenu } from "react-icons/bi"
import { GrBusinessService, GrCircleQuestion, GrHelpBook, GrHome, GrUserManager } from "react-icons/gr"
import { Button } from "../Button"


const Navigation = () => {
    return (
        <nav className="flex w-screen h-24 justify-between items-center max-w-full fixed sm:relative z-50">

            <div className="h-full ml-5 pt-2 pb-2">
                <picture className="h-full w-full flex items-center justify-center">
                    <img src="/icons/mainLogo.png" alt="" className="h-20" />
                </picture>
            </div>
            <div className="w-auto  mr-5 lg:hidden">
                <BiMenu className="h-10 w-10" />
            </div>
            <ul className="hidden lg:flex justify-evenly w-2/3 xl:text-lg  text-gray-500">
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrHome /><a href="" className="font-medium text-md transition-a">Inicio</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrBusinessService /><a href="" className="font-medium text-md transition-all">Servicios</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrUserManager/><a href="" className="font-medium text-md transition-all">Acerca de</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrCircleQuestion /><a href="" className="font-medium text-md transition-all">Preguntas frecuentes</a></li>
                <li className="flex items-center justify-center gap-1 hover:text-indigo-800"><GrHelpBook /><a href="" className="font-medium text-md transition-all">Contacto</a></li>
            </ul>
            <div className="hidden transition-all items-center justify-center mr-5 hover:mb-1 lg:flex ">
                <Button content="Agendar cita" />
            </div>
        </nav>
    )
}

export { Navigation }
