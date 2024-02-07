import React from "react";
import { FaBandAid, FaBone, FaHandHoldingHeart, FaJoint, FaMedkit, FaRegSadCry, FaRunning, FaTrophy } from 'react-icons/fa';
import { GiHealing } from "react-icons/gi";
import { Service } from "./Service";

type servicio = {
    service: string,
    description: string,
    icon: React.ReactElement,
    content: Array<string>
}


const servicios: Array<servicio> = [
    {
        service: "Artroscopia de Rodilla",
        description: "Solucionamos problemas articulares con cirugía mínimamente invasiva.",
        content: ['¿Te causa incomodidad o dolor tu rodilla?', 'Nuestra técnica de artroscopia de rodilla permite al doctor examinar el interior de tu articulación mediante un procedimiento mínimamente invasivo, ayudando a diagnosticar y tratar problemas con precisión y efectividad.', 'Volviendo a tus actividades normales más rápidamente.'],
        icon: <FaBone />
    },
    {
        service: "Lesiones Deportivas",
        description: "Recupera tu rendimiento máximo tras lesiones deportivas.",
        content: ['¿Amas los deportes, pero una lesión te está frenando?', 'Ofrecemos un enfoque integral para el diagnóstico y tratamiento de lesiones deportivas.', 'Garantizando una recuperación efectiva y segura para que puedas volver a tu rendimiento máximo lo antes posible.'],
        icon: <FaRunning />
    },
    {
        service: "Artroplastia (Prótesis de Rodilla)",
        description: "Dolor de rodilla crónico: solucionado con prótesis de alta calidad.",
        content: ['Si tu vida se ve afectada por el dolor crónico en la rodilla, la artroplastia, o prótesis de rodilla, puede ser una opción a considerar.', 'Este procedimiento reemplaza la articulación dañada por una prótesis para restaurar la función de tu rodilla y mejorar tu calidad de vida.'],
        icon: <FaRegSadCry />
    },
    {
        service: "Lesiones de Rodilla",
        description: "Restaura tu movilidad tras lesiones con nuestros tratamientos.",
        content: ['Las lesiones de rodilla pueden limitar tus actividades diarias y causar dolor significativo.', 'Ofrecemos diagnóstico y tratamiento de última generación para una amplia gama de lesiones de rodilla, ayudándote a recuperar la movilidad y disfrutar de la vida al máximo.'],
        icon: <FaMedkit />
    },
    {
        service: "Lesiones de Cartílago",
        description: "Recupera la función y minimiza el dolor tras lesiones de cartílago.",
        content: ['El cartílago es un componente esencial de nuestras articulaciones, pero puede dañarse fácilmente.', 'Ofrecemos tratamientos innovadores para las lesiones de cartílago, que van desde terapias conservadoras hasta intervenciones quirúrgicas, siempre con el objetivo de restaurar la función y reducir el dolor.'],
        icon: <FaTrophy />
    },
    {
        service: "Enfermedad Articular Degenerativa",
        description: "Mejora tu movilidad con nuestros tratamientos de enfermedad degenerativa.",
        content: ['Si estás sufriendo de dolor y rigidez debido a la enfermedad articular degenerativa, podemos ayudarte.', 'Nos especializamos en una serie de tratamientos, desde fisioterapia y medicamentos hasta cirugía, para ayudarte a manejar los síntomas y mejorar tu movilidad.'],
        icon: <FaJoint />
    },
    {
        service: "Lesiones Ligamentarias, Cruzados y Meniscos",
        description: "Restauramos la estabilidad de tu rodilla tras lesiones del LCM.",
        content: ['Una lesión del ligamento cruzado anterior puede ser debilitante, pero estamos aquí para ayudarte.', 'Ofrecemos evaluación exhaustiva y opciones de tratamiento personalizadas, incluyendo rehabilitación y, si es necesario, cirugía, para restaurar la estabilidad de tu rodilla.'],
        icon: <FaHandHoldingHeart />
    },
    {
        service: 'Lesiones Multiligamentarias de Rodilla',
        description: 'Recupera la fuerza y función tras lesiones multiligamentarias.',
        content: ['Las lesiones multiligamentarias de la rodilla son complejas y requieren un manejo experto.', 'Nuestro enfoque multidisciplinario asegura que recibas el mejor tratamiento posible, ayudándote a recuperar la fuerza y función de tu rodilla.'],
        icon: <GiHealing />
    },
    {
        service: "Desgaste Articular",
        description: "Alivia el dolor y mejora la función articular con nuestros tratamientos.",
        content: ['El desgaste articular puede ser una fuente de dolor y disminución de la movilidad.', 'Te ofrecemos una amplia gama de tratamientos, desde medidas conservadoras hasta intervenciones quirúrgicas, para aliviar el dolor y mejorar la función articular.'],
        icon: <FaBandAid />
    }
];


const Services = () => {
    return (
        <section className="w-full grid grid-cols-1 justify-items-center mt-0 services pb-3" id="services">
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
                        content={servicio.content}
                    />
                ))}
            </section>
        </section>
    )
}

export { Services };

