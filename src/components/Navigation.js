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
          className='justify-between w-10/12 mx-auto py-3 p-6 text-white font-dosis '
          id='header'
        >
          {/* <img src={content.nav.logo}
          className='h-20 w-20'
        /> */}
          {/* <span className='w-3 h-3 bg-red-500 inline-block rounded-full animate__fadeIn animate__delay-2s'></span> */}

          <div className='flex'>
            {/* <button type='button' className='text-xl mr-4 focus:outline-none'>
                {content.nav.contactLink.text}
              </button> */}

            <ScrollLink to='mywork' smooth={true}>
              <button
                type='button'
                className={`${
                  animated ? '' : 'translate-x-10 opacity-0'
                } transform transition duration-500 ease-in-out text-gray-300 text-xl mr-4 hover:-translate-x-1 focus:outline-none hover:text-lime-300`}
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
