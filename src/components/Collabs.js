import React from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import { Link as ScrollLink } from 'react-scroll'
import content from '../content'

import '../styles/portfolio.css'

export default function Stack () {
    
  return (
    <>
      <div className='min-h-full font-serif ' id='collabs'>
        <div className='pb-48 sm:border-0 sm:border-none'>
          <header className='py-20 '>
            <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-2xl font-bold text-center text-primary uppercase'>
              I'm proud to have collaborated with some awesome companies
              </h1>
              
            </div>
          </header>
        </div>

        <main className='-mt-32 '>
          <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-48 '>
          <ul  className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {content.collabs.map((collab) => (
        <li key={collab.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img src={collab.source} alt="" className="object-cover pointer-events-none hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {collab.title}</span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{collab.title}</p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">{collab.size}</p>
        </li>
      ))}
    </ul>
            <div className='text-center mt-12 '>
              <ScrollLink to='header' smooth={true}>
                <button className='animate-ping px-10 py-10 focus:outline-none'>
                  <ChevronDoubleUpIcon className='h-6 w-6' />
                </button>
              </ScrollLink>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
