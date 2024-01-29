import React from "react"
import { FaAngleRight } from "react-icons/fa6"
import { GrFacebook, GrInstagram, GrMail, GrMap, GrPhone, GrYoutube } from "react-icons/gr"
import { ImWhatsapp } from "react-icons/im"

type Info = {
    title: string,
    content?: string,
    link?: string,
    icon?: React.ReactElement
}

const data: Array<Info> = [
    {
        title: "Número de teléfono:",
        content: "5519837981",
        link: 'wah',
        icon: <GrPhone />
    },
    {
        title: "WhatsApp:",
        content: "5519837981",
        link: 'wa.link/050iq1',
        icon: <ImWhatsapp />
    },
    {
        title: "Correo Electrónico:",
        content: "dr.marcojardinez@gmail.com",
        link: 'wah',
        icon: <GrMail />
    },
    {
        title: "Dirección Pachuca:",
        content: "Hospital Español, Blvrd Luis Donaldo Colosio 4300, El Palmar, 42088 Pachuca de Soto, Hgo"
    },
    {
        title: "Google Maps Pachuca",
        icon: <GrMap />
    },
    {
        title: "Dirección Tulancingo:",
        content: "Narcizo Mendoza, 43625 Tulancingo de Bravo, Hgo."
    },
    {
        title: "Google Maps Tulancingo",
        icon: <GrMap />
    },
]

const Contact = () => {
    return (
        <article className='text-white w-full mt-3 grid grid-cols-1 pl-2 pr-2 justify-items-center md:grid-cols-2 '>
            <section className="flex flex-col items-center justify-center mt-2 pl-3 pr-3 w-full lg:w-5/6">
                <h2 className="text-4xl text-indigo-800 font-medium ">Visitános</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2371.5299986911323!2d-98.7722879232043!3d20.11023900999768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a12572b3e719%3A0xdda03ccfc6f56290!2sHospital%20Espa%C3%B1ol!5e0!3m2!1ses!2smx!4v1706241383422!5m2!1ses!2smx"
                    loading="lazy"
                    className="map w-full aspect-video rounded-xl mt-5"
                />
                <div className="flex gap-5 mt-5">
                    <div className="media-icon w-12 rounded-lg aspect-square bg-indigo-700 flex items-center justify-center">
                        <GrFacebook className="h-full w-full p-2 fill-white" />
                    </div>
                    <div className="media-icon w-12 rounded-lg aspect-square bg-neutral-800 flex items-center justify-center">
                        <GrInstagram className="h-full w-full p-2 fill-white" />
                    </div>
                    <div className="media-icon w-12 rounded-lg aspect-square bg-red-600 flex items-center justify-center">
                        <GrYoutube className="h-full w-full p-2 fill-white" />
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center w-full pb-8 bg-indigo-800 mt-5 rounded-xl lg:w-5/6">
                <h2 className="text-4xl font-medium mt-3">Contáctanos</h2>
                <div className="w-full pr-5 pl-5 mt-3 grid gap-5">
                    {data.map((info, index) => (
                        <div key={index} id={!info.content ? 'contact-link' : ''}>
                            <div className="flex items-center ">
                                {(!info.content && info.icon) ? <>{React.cloneElement(info.icon, { className: "w-5 h-5 mr-2" })}</> : <></>}
                                <h3 className="text-2xl text-left font font-medium" >{info.title}</h3>
                                {!info.content && <FaAngleRight className="h-6 w-6" />}
                            </div>
                            <div className="flex items-center">
                                {(!!info.icon && info.content) ?
                                    <>
                                        {React.cloneElement(info.icon, { className: "w-5 h-5 mr-2" })}
                                    </>
                                    : <></>
                                }
                                {!!info.content && <a href={info.link ? info.link : '#'}><p className="text-lg" id={info.link ? 'contact-link' : ''}>{info.content}</p></a>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    )
}

export default Contact
