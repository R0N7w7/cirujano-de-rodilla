
const Videos = () => {
    return (
        <article className="w-full flex items-center justify-center flex-col">
            <h2 className="text-3xl font-medium text-indigo-800 mt-3">Videos</h2>
            <section className="grid grid-cols-1 justify-items-center gap-5 mt-3 lg:grid-cols-2">
                <picture>
                    <iframe
                        className="aspect-video rounded-xl w-full  lg:h-72 lg:w-auto"
                        src="https://www.youtube.com/embed/MWu6czUfeMA"
                        title="Traumatología y las Lesiones Deportivas"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </picture>
                <picture>
                    <iframe
                        className="aspect-video rounded-xl w-full lg:h-72 lg:w-auto"
                        src="https://www.youtube.com/embed/rSaymo_6EDk"
                        title="¿Qué es una artroscopia de rodilla?"
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </picture>
            </section>
        </article>
    )
}

export { Videos }

