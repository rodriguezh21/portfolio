import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { Link as ScrollLink } from 'react-scroll'
import content from '../content'

import '../styles/portfolio.css'

export default function Stack () {
  return (
    <>
      <div className='min-h-full font-serif ' id='stack'>
        <div className='bg-primary pb-48 sm:border-0 sm:border-none'>
          <header className='py-20 '>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-2xl font-bold text-center text-tertiary uppercase'>
                About Me
              </h1>
              <h3 className='pt-10  text-xl font-bold text-center text-gray-200 '>
                I provide web solutions for small businesses, design and develop
                beautiful portfolio websites, and often collaborate in apps as a
                full stack consultant. I'm quietly confident, naturally curious,
                and perpetually working on improving my work one design problem
                at a time.
              </h3>
            </div>
          </header>
        </div>

        <main className='-mt-32 '>
          <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-48 '>
            <ul className='relative group grid grid-cols-1 gap-4 sm:w-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {content.projects.map(project => (
                <li
                  key={project.title}
                  className=' transform transition duration-500 ease-in-out hover:animate-bounce hover:-translate-y-3 hover:-skew-x-2  col-span-1 flex flex-col text-center md:text-center bg-tertiary rounded-lg shadow hover:shadow-lg divide-y divide-gray-200 overflow-hidden bg-gradient-to-r from-gray-100 hover:bg-gradient-to-t hover:from-gray-200'
                >
                  <div className='flex-1 flex flex-col p-8'>
                    <img
                      key={project.title}
                      className='w-16 h-16 flex-shrink-0 mx-auto'
                      src={project.icon}
                      alt={project.icon}
                      placeholder={project.placeholder}
                    />
                    <h3 className='mt-6 text-primary text-lg font-extrabold'>
                      {project.title}
                    </h3>
                    <dl className='mt-1 flex-grow flex flex-col justify-between'>
                      <dt className='sr-only'>Languages</dt>
                      <dd className='text-primary text-lg'>{project.langs}</dd>
                      <dt className='sr-only'>Description</dt>
                      <dd className='mt-3'>
                        <span className=' py-1 text-secondary text-sm sm:text-xl font-medium'>
                          {project.desc}
                        </span>
                      </dd>
                      <dt className='sr-only'>Tools</dt>
                      <dd className='mt-3'>
                        <span className=' py-1 text-neon text-xs sm:text-lg font-medium'>
                          {project.tools}
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div></div>
                </li>
              ))}
            </ul>
            <div className='text-center mt-10'>
              <ScrollLink to='mywork' smooth={true}>
                <button className=' animate-ping px-10 py-10 focus:outline-none'>
                  <ChevronDownIcon className='h-6 w-6' />
                </button>
              </ScrollLink>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
