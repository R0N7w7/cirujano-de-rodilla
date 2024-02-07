import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="hero grid place-items-center h-screen" id="hero">
            <picture className="h-screen w-full overflow-hidden">
                <img src="/backgrounds/background.webp" alt="" className=""/>
            </picture>
            <div className="grid grid-cols-1 max-w-6xl md:grid-cols-2">
                <div className="flex flex-col items-center justify-center w-full sm:text-center xl:text-left">
                    <div className="flex flex-col w-full pl-3 pr-3">
                        <h1 className="text-6xl font-medium text-white text xsm:text-7xl titulo-change">Cuida Tus Rodillas</h1>
                        <p className="text-2xl mt-8 text-indigo-800 xsm:text-3xl subtitulo-change">Alivia el dolor, recupera tu movilidad y vive sin limitaciones con nuestro experto en rodillas.</p>
                    </div>
                    <div className="grid grid-cols-1 justify-items-center mt-16 text-center w-full">
                        <a href="https://wa.link/050iq1">
                            <button className="must-be-shadowed w-full bg-indigo-600 text-xl p-2 rounded-full text-white font-medium  hover:bg-indigo-700 active:bg-indigo-800 xsm:text-2xl xsm:pl-4 xsm:pr-4 xsm:pt-2 xsm:pb-2" >
                                Más información
                            </button>
                        </a>
                        <a href="https://www.doctoralia.com.mx/marco-jardinez/traumatologo-ortopedista/tulancingo">
                            <button className="flex items-center justify-start gap-1 text-xl mt-4 text-indigo-800 underline underline-offset-2 pt-3 pb-3 hover:text-indigo-900 active:text-indigo-900 xsm:text-2xl">
                                Agendar cita ahora <FaAngleRight />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="hidden max-w-2xl h-auto items-center justify-center md:flex">
                    <picture className="w-full h-auto">
                        <img src="/images/doctorHero.webp" alt="" className="must-be-floating"/>
                    </picture>
                </div>
            </div>
        </section>
    )
}

export { Hero };

