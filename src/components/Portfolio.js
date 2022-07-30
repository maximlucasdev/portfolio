import React from 'react'
import { projects } from "../data/data";

export default function Portfolio() {
  return (
    <section id="projects">
        <div className="container px-5 py-10 mx-auto">
            <div className='flex justify-center text-center'>
                <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white wavy-underline'>Portfolio</h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
              {projects.map((project) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 m-2">
                    <img className="w-full" src={project.image} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-white">{project.title}</div>
                      <div className="font-italic text-sm mb-2 text-gray-300">{project.subtitle}</div>
                      <p className="text-gray-500 text-base">
                        {project.description}
                      </p>
                      {project.link ? <a href={project.link} className="text-yellow-500 inline-block mt-2">Visit</a> : null}
                    </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}