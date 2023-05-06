import React, { useEffect, useState } from 'react'
// import Tech from  '../content/assets/Tech.mp4'
import content from '../content'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Typical from 'react-typical'
import { Link as ScrollLink } from 'react-scroll'
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function Header2 () {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    Aos.init({ duration: 2000 })
    setAnimated(true)
  }, [])
  return (
    <>
      <div className=' min-h-screen pt-4 mb-0 flex items-center sm:border-0 sm:border-none justify-center bg-primary'>
        <div className=' p-8 max-w-7xl px-2 py-6  lg:px-4 '>
          <div className='text-tertiary font-serif text-center md:text-left'>
            <h2
              className={`${
                animated ? '' : 'translate-y-10 opacity-0'
              } transform transition duration-1000  ease-in-out text-4xl md:text-5xl font-bold`}
            >
              Hi! <br />
              I'm <span className='text-gray-200'>He</span>
              {content.header.text[1]} <span className='text-gray-200'>Ro</span>
              {content.header.text[2]}
            </h2>

            <h1
              className={`${
                animated ? '' : 'translate-y-10 opacity-0'
              } transform transition duration-2000 ease-in-out font-bold text-2xl text-lime-300`}
            >
              {content.header.text[3]}
              <Typical
                steps={content.header.typical}
                loop={Infinity}
                wrapper='p'
                className='inline-block'
              />
            </h1>
            <div className='text-center mt-10'>
              <ScrollLink to='stack' smooth={true}>
                <button className=' animate-bounce py-2 focus:outline-none '>
                  <ChevronDownIcon className='h-6 w-6 text-gray-400' />
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
