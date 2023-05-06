import React from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import { Link as ScrollLink } from 'react-scroll'
import content from '../content'

import '../styles/portfolio.css'

export default function Portfolio () {
  return (
    <>
      <div
        className='min-h-full font-serif bg-tertiary sm:border-0 sm:border-none'
        id='mywork'
      >
        <div className=' pb-48 bg-neon '>
          <header className='py-16  border-y-0 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-2xl font-bold text-center text-tertiary uppercase'>
                my recent work
              </h1>
              <h3 className='pt-10 text-xl font-bold text-center text-tertiary '>
                Here are a few projects I've worked on recently
              </h3>
            </div>
          </header>
        </div>

        <main className=' py-6'>
          {/* <div className='max-w-7xl mx-auto px-10 sm:px-16 md:px-16 lg:px-8 pb-48'>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
            
            >
              {content.callouts.map(file => (
                <li key={file.name} className='relative'>
                  <a href={file.href} target="_blank" rel="noopener noreferrer">
                  <div className=' group block rounded-lg bg-gray-700  overflow-hidden'>
                    <img
                      src={file.imageSrc}
                      alt='Blind Barber'
                      className='w-full pointer-events-none hover:opacity-75'
                    />
                    
                  </div>
                  </a>
                  <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>
                    {file.name}
                  </p>
                  <p className='block text-sm font-medium text-gray-500 pointer-events-none'>
                    {file.type}
                  </p>
                </li>
              ))}
            </ul>
            <div className='text-center mt-10'>
              <ScrollLink to='collabs' smooth={true}>
                <button className=' animate-ping px-10 py-10 focus:outline-none'>
                  <ChevronDownIcon className='h-6 w-6' />
                </button>
              </ScrollLink>
            </div>
          </div> */}




<div className='-mt-32 max-w-7xl mx-auto px-6 md:px-20 lg:px-8 pb-48'>
    <ul className="grid grid-cols-1 gap-6  md:grid-cols-1 lg:grid-cols-3 ">
      {content.callouts.map((file) => (
        <li
          key={file.name}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-t-lg bg-gray-200 text-center shadow-xl"
        >
          <div className="flex flex-1 flex-col p-8 bg-gradient-to-r from-gray-200 bg-tertiary rounded-t-lg shadow">
            <img className="mx-auto h-32 w-32 md:h-48 md:w-48 flex-shrink-0 rounded-full bg-tertiary shadow-xl" src={file.imageSrc} alt="" />
            <h3 className="mt-6 text-2xl font-medium text-gray-900">{file.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full px-2 py-1 text-lg font-medium text-green-800">
                  {file.type}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200 ">
              <div className="flex w-0 flex-1 bg-tertiary bg-gradient-to-r from-gray-200 shadow rounded-bl-lg">
                <a
                  href={file.href} target='_blank' rel="noopener noreferrer"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  {/* <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                  <span className="ml-3 md:text-lg">Site</span>
                </a>
                
              </div>
              <div className="-ml-px flex w-0 flex-1 bg-tertiary shadow rounded-br-lg ">
                <a
                  href={file.href2} target='_blank'rel="noopener noreferrer"
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  
                  <span className="ml-3 md:text-lg">{file.altName}</span>
                </a>
              </div>
            </div>
          </div>
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
        <hr></hr>
      </div>
    </>
  )
}
