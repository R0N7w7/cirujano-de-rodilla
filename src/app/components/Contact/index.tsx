import { GrFacebook, GrInstagram, GrLocation, GrMail, GrMap, GrPhone, GrYoutube } from "react-icons/gr"
import { ImWhatsapp } from "react-icons/im"
import { PiCertificateLight } from "react-icons/pi"

const Contact = () => {
    return (
        <article className='text-white w-full flex flex-col pb-5 justify-items-center lg:flex-row sisisi z-20 contact'>

            <section className="flex flex-col items-center justify-start w-full mt-2 pb-5 h-max lg:w-3/5">

                <h2 className="text-4xl font-medium my-5 md:text-5xl popup">Contáctanos</h2>

                <div className="flex flex-col items-center w-full gap-5">

                    <div className="w-full pr-5 pl-5 mt-3 grid gap-5 grid-cols-1 sm:grid-cols-2 sm:justify-items-center">

                        <div className="flex flex-col items-start justify-start gap-5 w-max">

                            <div className="popup appear">
                                {/*                                 <h3 className="text-3xl">Número:</h3> */}
                                <a href="tel:+525519837981" className="flex gap-2 items-center text-xl underline underline-offset-2"><GrPhone /> 5519837981</a>
                            </div>

                            <div className="popup appear">
                                {/*                                 <h3 className="flex gap-1 items-center text-3xl">WhastApp:</h3> */}
                                <a href="https://wa.link/050iq1" rel="nofollow" className="flex gap-2 items-center text-xl underline underline-offset-2"><ImWhatsapp /> 5519837981</a>
                            </div>

                            <div className="popup appear">
                                {/*                                 <h3 className="flex gap-1 items-center text-3xl">Correo Eléctronico:</h3> */}
                                <a href="mailto:dr.marcojardinez@gmail.com" className="flex gap-2 items-center text-xl underline underline-offset-2"><GrMail />dr.marcojardinez@gmail.com</a>
                            </div>

                            <div className="popup appear">
                                {/*                                 <h3 className="flex gap-1 items-center text-3xl">Correo Eléctronico:</h3> */}
                                <a href="https://goo.gl/maps/d2X6ZSnHmVJZetAF9" className="flex gap-2 items-center text-xl underline underline-offset-2"><GrLocation />Google Maps Pachuca</a>
                            </div>

                            <div className="popup appear">
                                {/*                                 <h3 className="flex gap-1 items-center text-3xl">Correo Eléctronico:</h3> */}
                                <a href="https://goo.gl/maps/gSXp5xkE5b1x1ZU7A" className="flex gap-2 items-center text-xl underline underline-offset-2"><GrLocation />Google Maps Tulancingo</a>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 gap-5">

                            <div className="popup appear">
                                <h3 className="text-2xl">Dirección Pachuca:</h3>
                                <a href="https://goo.gl/maps/d2X6ZSnHmVJZetAF9" className="flex gap-2 items-center text-xl "><GrMap className="w-8 h-8" /><p className="w-full">Hospital Español, Blvrd Luis Donaldo Colosio 4300, El Palmar, 42088 Pachuca de Soto, Hgo</p></a>
                            </div>

                            <div className="popup appear">
                                <h3 className="text-2xl">Dirección Tulancingo:</h3>
                                <a href="https://goo.gl/maps/gSXp5xkE5b1x1ZU7A" className="flex gap-2 items-center text-xl "><GrMap className="w-8 h-8" /><p className="w-full">Narcizo Mendoza, 43625 Tulancingo de Bravo, Hgo.</p></a>
                            </div>

                        </div>

                    </div>

                    <div className="popup appear w-fullflex items-center justify-center">
                        <p className="flex gap-2 items-center text-xl"><PiCertificateLight />COFEPRIS: 2313015036X00272</p>
                    </div>
                </div>
            </section>


            <section className="flex flex-col items-center justify-center pl-3 pr-3 w-full lg:w-2/5">
                {/*                 <h2 className="text-4xl text-white font-medium md:text-5xl pt-5">Visitános</h2> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2371.5299986911323!2d-98.7722879232043!3d20.11023900999768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a12572b3e719%3A0xdda03ccfc6f56290!2sHospital%20Espa%C3%B1ol!5e0!3m2!1ses!2smx!4v1706241383422!5m2!1ses!2smx"
                    loading="lazy"
                    className="map aspect-video rounded-xl mt-3 h-36 xsm:h-52 sm:h-60 md:h-72 lg:h-56 xl:h-72 popup"
                />
                <div className="flex gap-5 mt-5">
                    <a href="https://www.facebook.com/profile.php?id=100093055686038">
                        <div className="media-icon w-12 rounded-lg aspect-square bg-indigo-700 flex items-center justify-center">
                            <GrFacebook className="h-full w-full p-2 fill-white" />
                        </div>
                    </a>

                    <a href="https://www.instagram.com/dr.marcojardinez/">
                        <div className="media-icon w-12 rounded-lg aspect-square bg-neutral-800 flex items-center justify-center">
                            <GrInstagram className="h-full w-full p-2 fill-white" />
                        </div>
                    </a>

                    <a href="https://www.youtube.com/channel/UCMH2lyyVnTi6R6ZRrCDTJ3Q">
                        <div className="media-icon w-12 rounded-lg aspect-square bg-red-600 flex items-center justify-center">
                            <GrYoutube className="h-full w-full p-2 fill-white" />
                        </div>
                    </a>
                </div>
            </section>
        </article>
    )
}

export default Contact
