import React, {useId, useState } from 'react'
import { autocomplete, commands } from '../../data/commands';
import '../../App.css';
export default function Terminal() {
    const termId = useId();
    const [inputData, setInputData] = useState('');
    const [completion, setCompletion] = useState('');
    const [history, setHistory] = useState([]);
    const inputHandler = (value) => {
        setInputData(value);
        setCompletion(autocomplete(value));
    }
    return (
      <div className="lg:max-w-lg w-full md:w-1/2 bg-zinc-800 rounded-md shadow flex flex-col">
          <div className='flex flex-row justify-between p-2 border-b-[1px] border-zinc-700'>
            <p className='text-white'>Presentation - Terminal</p>
            <div className='flex flex-row gap-2 items-center'>
              <div className='bg-red-500 rounded-full h-3 w-3'/>
              <div className='bg-yellow-500 rounded-full h-3 w-3'/>
              <div className='bg-green-500 rounded-full h-3 w-3'/>
            </div>
          </div>
          <div className='flex flex-col justify-end h-72'>
            <div className='font-mono w-full p-3 text-white overflow-y-scroll md:overflow-auto noscrollbar' id={termId}>
              <p>visitor@xshadow:~$ ls .</p>
              <p className='text-gray-400'>presentation.txt</p>
              <p>visitor@xshadow:~$ cat presentation.txt</p>
              <p className='text-gray-400'>Hello, I'm Shadow, a french developer. I'm 17 years old and I'm currently in high school. I'm passionate about programming and I'm looking for small jobs in this field. I have a lot of experience in programming and I'm always looking to learn more. I'm a very motivated person and I'm always looking to improve myself. Oh and I love cats</p>
              {history.map((value) => {
                const Component = value;
                return <Component/>
              })}
              <p>
                visitor@xshadow:~$ 
                <input className='ml-2 bg-zinc-800 focus:outline-none' style={{width: `${inputData.length === 0 ? 4 : inputData.length}ch`}} placeholder='help' value={inputData} onChange={(value) => {inputHandler(value.target.value)}} onKeyDown={(key) => {
                    if (key.code === 'Enter') {
                      if (inputData.length === 0) return;
                      const command = commands.filter((value) => value.name === inputData)[0];
                      const comp = () => {return <p>visitor@xshadow:~$ {inputData}</p>}
                      if (!command) {
                        setHistory([...history, comp, () => {return <p className='text-red-500'>{inputData}: command not found</p>}]);
                        setInputData('');
                      } else {
                        setHistory([...history, comp, command.Response]);
                        setInputData('');
                      }
                      // Scroll to the bottom of the terminal
                      setTimeout(() => {
                        document.getElementById(termId).scrollTop = document.getElementById(termId).scrollHeight;
                      }, 100);
                    }
                }}></input>
                <span className='text-gray-400 mr-1'>{completion}</span>
                <span className='animate-pulse'>▮</span>
              </p>
            </div>
          </div>
      </div>
    )
}
