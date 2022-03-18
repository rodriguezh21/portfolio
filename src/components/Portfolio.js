import React from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import { Link as ScrollLink } from 'react-scroll'
import content from '../content'

import '../styles/portfolio.css'

export default function Portfolio2 () {
  return (
    <>
      <div className='min-h-full font-serif bg-secondary' id='mywork'>
        <div className='bg-tertiary pb-48'>
          <header className='py-20  border-primary '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold text-center text-secondary uppercase'>
                coming soon
              </h1>
            </div>
          </header>
        </div>

        <main className='-mt-32'>
          <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-48'>
            <ul className='grid grid-cols-1 gap-4 sm:w-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
              {content.projects.map(project => (
                <li
                  key={project.title}
                  className='col-span-1 flex flex-col text-center md:text-center divide-y divide-gray-200 overflow-hidden'
                >
                  <div className='transform transition duration-500 ease-in-out hover:-translate-y-3 hover:-skew-x-2 border border-blue-300 bg-gray-200 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
                    <div className='animate-pulse flex space-x-4'>
                      <div className='rounded-full bg-gray-400 h-10 w-10'></div>
                      <div className='flex-1 space-y-6 py-1'>
                        <div className='h-2 bg-gray-400 rounded'></div>
                        <div className='space-y-3'>
                          <div className='grid grid-cols-3 gap-4'>
                            <div className='h-2 bg-gray-400 rounded col-span-2'></div>
                            <div className='h-2 bg-gray-400 rounded col-span-1'></div>
                          </div>
                          <div className='h-2 bg-gray-400 rounded'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='text-center mt-12'>
              <ScrollLink to='header' smooth={true}>
                <button className='text-tertiary animate-ping px-10 py-10 focus:outline-none'>
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
