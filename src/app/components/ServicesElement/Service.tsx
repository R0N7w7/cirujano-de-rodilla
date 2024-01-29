import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";


type Props = {
  title: string,
  description: string,
  icon: React.ReactElement,
}

const Service = ({ title, description, icon }: Props) => {
  return (
    <article className="flex flex-col items-center justify-center text-center border-b border-indigo-50 pb-4 mt-3">

      <div className="service-icon rounded-full p-4 w-20 h-20 flex items-center justify-center">
        {React.cloneElement(icon, { className: "w-8 h-8 fill-indigo-300" })}
      </div>

      <h3 className="text-2xl font-medium text-gray-700 mt-2 pl-8 pr-8 h-16 flex items-center">{title}</h3>

      <hr className="border border-indigo-500 w-16 rounded-full mt-3 mb-3" />

      <p className="font-thin text-xl pr-8 pl-8 h-24 flex items-center">{description}</p>

      <button className="btn-ver-mas mt-3 flex items-center justify-center w-40 bg-indigo-500 rounded-full pt-1 pb-1 text-lg text-white font-medium hover:bg-indigo-600 active:bg-indigo-700">
        Ver más<FaArrowAltCircleRight className="ml-4" />
      </button>
    </article>
  )
}

export { Service };

