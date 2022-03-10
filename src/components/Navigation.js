import React, { useState, useEffect } from 'react'
import content from '../content'
import { Link as ScrollLink } from 'react-scroll'
import Lottie from './Lottie'
import 'animate.css'

export default function Navigation () {
  const [loading, setLoading] = useState(undefined)
  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <>
      {!loading ? (
        <Lottie />
      ) : (
        <div
          style={{
            background: '#091c29'
          }}
        >
          <div className='justify-between w-10/12 mx-auto py-3 text-white font-dosis animate__animated animate__fadeIn animate__delay-1s'>
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
                  className='text-xl mr-4 focus:outline-none '
                >
                  {content.nav.workLink.text}
                </button>
              </ScrollLink>
              <a
                disabled={loading}
                href='mailto:rodriguezh21@gmail.com?subject='
                className='text-xl mr-4 focus:outline-none'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
