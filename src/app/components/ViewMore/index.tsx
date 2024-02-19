"use client"

import React, { useState } from "react"
import { FaArrowAltCircleRight } from "react-icons/fa"

type Props = {
    title: string,
    content: Array<string>,
    icon: React.ReactElement,
    image: string
}

const ViewMore = ({ title, content, icon, image }: Props) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <button
                className="btn-ver-mas mt-1 flex items-center justify-center w-40 bg-indigo-600 rounded-full pt-1 pb-1 text-lg text-white font-medium hover:bg-indigo-700 active:bg-indigo-800 !transition-all"
                onClick={() => setModalOpen(!modalOpen)}
            >
                Ver más<FaArrowAltCircleRight className="ml-4" />
            </button>
            {
                modalOpen &&
                <article className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 transition-all" onClick={() => setModalOpen(false)}>

                    <div className="must-be-shadowed bg-white rounded-lg p-3 sm:px-8 sm:py-5 max-w-lg w-full grid grid-cols-1" onClick={(e) => e.stopPropagation()}>

                        <div>
                            <header className="flex flex-col items-center justify-center">
                                <h2 className="text-2xl font-bold mb-2 mt-2">{title}</h2>
                            </header>
                            <section className="text-start text-lg">
                                {
                                    content.map((cont, index) => {
                                        return (
                                            <p className="text-gray-700 mb-4" key={index}>{cont}</p>
                                        );
                                    })
                                }
                                <picture className="w-full h-full items-center justify-center flex my-3">
                                    <img src={image} alt="Imagen Representativa del servicio ofrecido por el doctor Marco Jardinez" className="w-3/4 h-auto rounded-xl aspect-video object-cover" loading="lazy" />
                                </picture>
                            </section>
                            <footer className="flex w-full justify-between">
                                <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded hover:bg-gray-400" onClick={() => setModalOpen(false)}>Cerrar</button>
                                <a href="https://wa.link/050iq1">
                                    <button className="px-4 py-2 border bg-indigo-600 text-white rounded hover:bg-indigo-700 hover:text-white active:bg-indigo-800"> Agendar Cita</button>
                                </a>
                            </footer>
                        </div>
                    </div>
                </article>

            }
        </>
    )
}

export { ViewMore }
