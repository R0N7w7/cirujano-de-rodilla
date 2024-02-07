import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ViewMore } from "../ViewMore";


type Props = {
  title: string,
  description: string,
  icon: React.ReactElement,
  content: Array<string>
}

const Service = ({ title, description, icon, content }: Props) => {
  return (
    <article className="flex flex-col items-center justify-center text-center border-b border-indigo-50 pb-4 mt-3 popup">

      <div className="service-icon rounded-full p-4 w-20 h-20 flex items-center justify-center bg-white serviceIcon">
        {React.cloneElement(icon, { className: "w-8 h-8 fill-indigo-400" })}
      </div>

      <h3 className="text-2xl font-medium text-gray-800 mt-2 pl-8 pr-8 h-16 flex items-center">{title}</h3>

      <hr className="border border-indigo-600 w-16 rounded-full mt-2 mb-1" />

      <p className="font-light text-gray-700 text-xl pr-8 pl-8 h-24 flex items-center max-w-md  md:max-w-80 md:pr-2 md:pl-2 lg:pr-0 lg:pl-0">{description}</p>

      <ViewMore title={title} content={content} icon={ icon } />
    </article>
  )
}

export { Service };

