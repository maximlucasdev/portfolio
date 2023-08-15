import React from 'react'
import '../../App.css';
import Terminal from './Terminal';
export default function Presentation() {
  return (
    <section id="about">
      <div className='bg-gray-700 justify-center items-center flex'>
        <div className='flex px-5 p-5 md:p-10 items-center flex-wrap justify-center w-4/5'>
            <div className="lg:flex-grow w-full md:w-1/2 justify-center lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className='title-font sm:text-4xl text-3xl mb-4 text-white font-bold'>Hi, I'm <span className='gradient-text'>Shadow</span>.</h1>
                <p className='text-base lg:text-xl md:text-xl font-light mb-8 leading-relaxed text-gray-50'>French developer</p>
                <br className='hidden lg:block' />
                <div className="flex justify-center">
                    <a className='inline-flex items-center bg-white shadow-xl hover:shadow-lg border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black' href='#contact'>I'm looking for work, hire me!</a>
                    <a className='inline-flex items-center bg-gray-900 shadow-xl hover:shadow-lg border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0 ml-2' href='#projects'>Projects</a>
                </div>
            </div>
            <Terminal/>
        </div>
      </div>
    </section>
  )
}
