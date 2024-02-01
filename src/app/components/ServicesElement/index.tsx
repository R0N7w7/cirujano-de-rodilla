import React from "react";
import { FaBandAid, FaBone, FaHandHoldingHeart, FaJoint, FaMedkit, FaRegSadCry, FaRunning, FaTrophy } from 'react-icons/fa';
import { Service } from "./Service";

type servicio = {
    service: string,
    description: string,
    icon: React.ReactElement
}


const servicios: Array<servicio> = [
    {
        service: "Artroscopia de Rodilla",
        description: "Solucionamos problemas articulares con cirugía mínimamente invasiva.",
        icon: <FaBone />
    },
    {
        service: "Lesiones Deportivas",
        description: "Recupera tu rendimiento máximo tras lesiones deportivas.",
        icon: <FaRunning />
    },
    {
        service: "Artroplastia (Prótesis de Rodilla)",
        description: "Dolor de rodilla crónico: solucionado con prótesis de alta calidad.",
        icon: <FaRegSadCry />
    },
    {
        service: "Lesiones de Rodilla",
        description: "Restaura tu movilidad tras lesiones con nuestros tratamientos.",
        icon: <FaMedkit />
    },
    {
        service: "Lesiones de Cartílago",
        description: "Recupera la función y minimiza el dolor tras lesiones de cartílago.",
        icon: <FaTrophy />
    },
    {
        service: "Enfermedad Articular Degenerativa",
        description: "Mejora tu movilidad con nuestros tratamientos de enfermedad degenerativa.",
        icon: <FaJoint />
    },
    {
        service: "Lesiones Ligamentarias, Cruzados y Meniscos",
        description: "Restauramos la estabilidad de tu rodilla tras lesiones del LCM.",
        icon: <FaHandHoldingHeart />
    },
    {
        service: "Desgaste Articular",
        description: "Alivia el dolor y mejora la función articular con nuestros tratamientos.",
        icon: <FaBandAid />
    }
];


const Services = () => {
    return (
        <section className="w-full grid grid-cols-1 justify-items-center mt-0 services pb-3">
            <h2 className="text-3xl font-medium text-indigo-800 popup mt-8">
                SERVICIOS
            </h2>
            <p className="pl-2 pr-2 mt-5 text-lg text-center font-light max-w-7xl sm:text-xl popup">
                El doctor Jardinez utiliza los últimos avances en tecnología y técnicas quirúrgicas para brindar a sus pacientes los mejores resultados posibles. También se compromete a proporcionar una atención personalizada y compasiva a cada paciente.
            </p>
            <section className="grid grid-cols-1 mt-4 gap-4 sm:grid-cols-2 sm:gap-0 lg:grid-cols-3 max-w-7xl">
                {servicios.map((servicio): React.ReactNode => (
                    <Service
                        key={servicio.service}
                        description={servicio.description}
                        title={servicio.service}
                        icon={servicio.icon}
                    />
                ))}
            </section>
        </section>
    )
}

export { Services };

