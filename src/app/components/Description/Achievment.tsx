import React from "react"

type Props = {
    title: string,
    description: Array<string>,
    icon: React.ReactElement
}

function Achievment({ title, description, icon }: Props) {
    return (
        <section className="flex pl-2 pr-2 w-full">
            <div className="flex items-start justify-center w-24">
                {React.cloneElement(icon, { className: "w-10 h-10 text-indigo-600" })}
            </div>
            <div className="flex flex-col text-left ml-2 w-max">
                <h3 className="text-xl font-medium text-gray-900">
                    {title}
                </h3>

                {description.map(des => (
                    <p className="text-xl font-light" key={des}>
                        {des}
                    </p>
                ))}

            </div>
        </section>
    )
}

export { Achievment }
