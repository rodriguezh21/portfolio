import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Typical from 'react-typical'
import { Link as ScrollLink } from 'react-scroll'
import '../styles/header.css'
import 'animate.css'
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function Header () {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    setAnimated(true)
  }, [])
  return (
    <div
      className='min-h-screen flex items-center justify-center'
      id='header'
      style={{
        background: '#091c29'
      }}
    >
      <div className='w-10/12 flex flex-col md:flex-row-reverse items-center justify-between'>
        

        <div className='text-white font-dosis text-center md:text-left animate__animated animate__fadeIn animate__delay-500ms'>
          <h2
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-2000  ease-in-out text-4xl md:text-5xl font-bold`}
          >
            {content.header.text[0]} <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              wrapper='p'
              className='inline-block'
            />
            <hr />
          </h1>
          <div className='text-center mt-10'>
            <ScrollLink to='stack' smooth={true}>
              <button className=' animate-bounce py-2 focus:outline-none '>
                <ChevronDownIcon className='h-6 w-6' />
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className='w-full md:w-2/5 animate-refloat '>
          <LazyLoadImage
            src={content.header.img}
            placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
          />
        </div>
      </div>
      {/* DIVIDER */}
      <div className='custom-shape-divider-bottom-1646688328'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className='shape-fill'
          ></path>
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className='shape-fill'
          ></path>
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
    </div>
  )
}
