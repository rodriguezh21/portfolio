import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import {Link as ScrollLink} from 'react-scroll'
import '../styles/portfolio.css'
import { ChevronDownIcon } from '@heroicons/react/outline'



export default function Stack() {
  return (
    <div className='min-h-full flex flex-col items-center justify-center font-dosis' id='stack'>
        <h1 className='text-5xl mt-12 font-bold'>Stacks I use</h1>
        <div className='flex flex-wrap justify-center mt-10'>
            {content.stack.tech.map((tech, index)=> {
                return (
                    <span key={index} className={`${index % 2 === 0 ? 'animate-float' : 'animate-refloat'} w-40 h-40 bg-white shadow-2xl rounded-full m-2 flex items-center p-5`}>
                        <LazyLoadImage src={tech.img} alt={tech.alt}/>
                    </span>
                )
            })}
        </div>
        <p className='w-11/12 md:max-w-xl text-lg text-center '>{content.stack.desc}</p>
        <div className='spacer layered-waves'>
          <div className='text-center mt-10 mb-{16px} '>
        <ScrollLink to='mywork' smooth={true}>
      <button className=' animate-ping px-10 py-10 focus:outline-none'>
          <ChevronDownIcon className='h-6 w-6'/>
      </button>
      </ScrollLink>
      </div>
          
        </div>

    </div>
  )
}
