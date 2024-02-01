import Contact from "../Contact"


const Resume = () => {
    return (
        <section className='w-full grid grid-cols-1 mt-3 z-50'>
            <Contact />
            <div className="w-full h-32 bg-neutral-8 bg-gray-800 flex items-start justify-start sticky bottom-0 z-0">
                <picture className="h-full flex items-center justify-center ml-8">
                    <img src="/icons/logoWhite.png" alt="" className="h-5/6 w-auto"/>
                </picture>
            </div>
        </section>
    )
}

export { Resume }
