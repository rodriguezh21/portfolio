import React from 'react'
import content from '../content'
import {Link as ScrollLink} from 'react-scroll'
import { ChevronUpIcon } from '@heroicons/react/outline'


export default function Portfolio() {
  return (
    <div style={{background: '#b6421c'}}
    className='min-h-screen mt-0 sm:min-h-screen flex flex-col items-center justify-center font-dosis' id='mywork'>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {content.callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
              
            ))}
          </div>
          <div className='text-center mt-10'>
        <ScrollLink to='header' smooth={true}>
      <button className=' animate-ping px-10 py-10 focus:outline-none'>
          <ChevronUpIcon className='h-6 w-6'/>
      </button>
      </ScrollLink>
      </div>
        </div>
      </div>
     
    </div>
  )
}
