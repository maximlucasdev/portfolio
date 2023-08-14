import React from 'react'
import Icon from '@mdi/react'

export default function Display(props) {
  return (
    <div className='items-center justify-center'>
        <div className="container py-1 mx-auto">
            <div className='flex justify-center text-center'>
              <h1 className='title-font sm:text-3xl text-2xl mb-2 font-medium text-white ml-25'>{props.name}</h1>
            </div>
        </div>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {props.toDisp.map((prop) => (
            <div key={prop.name} className="p-2 w-full">
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
