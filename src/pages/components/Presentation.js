import React from 'react'
import '../../App.css';
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
            <div className="lg:max-w-lg w-full md:w-1/2 bg-zinc-800 rounded-md shadow flex flex-col">
                <div className='flex flex-row justify-between p-2 border-b-[1px] border-zinc-700'>
                  <p className='text-white'>Presentation - Terminal</p>
                  <div class='flex flex-row gap-2 items-center'>
                    <div className='bg-red-500 rounded-full h-3 w-3'/>
                    <div className='bg-yellow-500 rounded-full h-3 w-3'/>
                    <div className='bg-green-500 rounded-full h-3 w-3'/>
                  </div>
                </div>
                <div className='flex flex-col justify-end h-72'>
                  <div className='font-mono w-full p-3 text-white overflow-y-scroll md:overflow-auto'>
                    <p>visitor@xshadow:~$ ls .</p>
                    <p className='text-gray-400'>presentation.txt</p>
                    <p>visitor@xshadow:~$ cat presentation.txt</p>
                    <p className='text-gray-400'>Hello, I'm Shadow, a french developer. I'm 17 years old and I'm currently in high school. I'm passionate about programming and I'm looking for small jobs in this field. I have a lot of experience in programming and I'm always looking to learn more. I'm a very motivated person and I'm always looking to improve myself. Oh and I love cats</p>
                    <p>visitor@xshadow:~$ <span className='animate-pulse'>▮</span></p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
