import Contact from "../Contact"


const Resume = () => {
    return (
        <section className='w-full grid grid-cols-1 mt-3 z-50' id="contact">
            <Contact />
            <div className="w-full h-auto bg-neutral-8 bg-gray-800 flex items-center flex-col justify-center sticky bottom-0 z-0 ">
                <picture className="h-32 flex items-center justify-center ml-8 ">
                    <img src="/designs/logoWhite.png" alt="" className="h-5/6 w-auto" loading="lazy"/>
                </picture>
            </div>
        </section>
    )
}

export { Resume }
