import React from 'react'
import { db, frameworks, languages, tools } from '../data/data'
import Display from './Skills/Display'

export default function Skills() {
  return (
    <section id="skills">
        <div className="container px-5 py-10 mx-auto">
            <div className='flex justify-center text-center mb-5'>
                <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white wavy-underline'>My skills</h1>
            </div>
            <Display toDisp={languages} name="Languages" />
            <Display toDisp={frameworks} name="Frameworks / Libraries" />
            <Display toDisp={db} name="Databases" />
            <Display toDisp={tools} name="Tools / Utilities" />
        </div>
    </section>
  )
}
