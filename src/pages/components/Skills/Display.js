import React from 'react'
import Icon from '@mdi/react'

export default function Display(props) {
  return (
    <div>
        <div className="container py-1 mx-auto">
            <div className='flex justify-center text-center'>
              <h1 className='title-font sm:text-3xl text-2xl mb-2 font-medium text-white ml-25'>{props.name}</h1>
            </div>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {props.toDisp.map((prop) => (
            <div key={prop.name} className="p-2 sm:w-1/5 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white flex">
                  <Icon path={prop.mdi} title={prop.name} size={1} color="white" style={{marginRight:10}}/> {prop.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  )
}
