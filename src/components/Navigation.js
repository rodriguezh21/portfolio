import React, { useEffect, useState } from 'react'
import content from '../content'
import { Link as ScrollLink } from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Navigation () {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    Aos.init()
    setAnimated(true)
  }, [])

  return (
    <>
      <div
        style={{
          background: '#1D1D1D'
        }}
      >
        <div
          className=' top-0 justify-between w-10/12 mx-auto py-3 p-6 text-white font-dosis sm:border-0 sm:border-none focus:outline-none'
          id='header'
        >
          <div className='flex'>
            <ScrollLink to='mywork' smooth={true}>
              <button
                type='button'
                className={`${
                  animated ? '' : 'translate-x-10 opacity-0'
                } transform transition duration-500 ease-in-out text-gray-300 text-xl mr-4 hover:-translate-x-1 focus:outline-none hover:text-lime-300`}
                alt='mywork'
              >
                {content.nav.workLink.text}
              </button>
              <span className='mr-4 text-gray-500'>|</span>
            </ScrollLink>
            <a
              href='mailto:rodriguezh21@gmail.com?subject='
              className={`${
                animated ? '' : '-translate-x-10 opacity-0'
              } transform transition duration-500 ease-in-out text-lime-300 hover:text-tertiary hover:translate-x-1 text-xl mr-4 focus:outline-none`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
