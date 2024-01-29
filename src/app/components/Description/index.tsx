import React from "react"
import { GrAid, GrCertificate, GrTree, GrWorkshop } from "react-icons/gr"
import { Achievment } from "./Achievment"

type Achiev = {
    title: string,
    description: Array<string>,
    icon: React.ReactElement
}

const Achievs: Array<Achiev> = [
    {
        title: "Traumatólogo ortopedista",
        description: ["Lorem ipsum dolor et all querom demosrando"],
        icon: <GrAid />
    },
    {
        title: "Subespecialista en cirugía articular",
        description: ["Lorem ipsum dolor et all querom demosrando"],
        icon: <GrTree />
    },
    {
        title: "Máster en cirugía avanzada de rodilla",
        description: ["Lorem ipsum dolor et all querom demosrando"],
        icon: <GrWorkshop />
    },
    {
        title: "Cédulas profesionales",
        description: ["CED. PROF. 7480662", "CED. ESP. 11544669"],
        icon: <GrCertificate />
    },
]

type Props = {}

function Description({ }: Props) {
    return (
        <article className="grid grid-cols-1 justify-items-center text-center mt-5 md:grid-cols-2 w-full">
            <picture className="md:justify-self-end">
                <img src="/images/perfilMain.webp" alt="" className="w-auto h-96 object-cover" />
            </picture>


            <div className="grid grid-cols-1 justify-items-start mt-5 gap-3 md:justify-self-start">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-medium text-indigo-800 mt-3">
                        Acerca del Dr. Marco Jardinez
                    </h2>

                    <p className="mt-4 text-xl font-thin ml-3 mr-3">
                        Estudios cursados, especialidades y cedulas profesionales
                    </p>
                </div>
                {Achievs.map(achiev => (
                    <Achievment
                        key={achiev.title}
                        title={achiev.title}
                        description={achiev.description}
                        icon={achiev.icon}
                    />
                ))}
            </div>
        </article>
    )
}

export default Description