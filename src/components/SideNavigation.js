import React from 'react'
import content from '../content'
import { Link as ScrollLink } from 'react-scroll'

 const SideNavigation = () => {
  return (
    <div className='flex flex-col ml-0 sm:mr-0  fixed w-16 sm:w-6 lg:transform translate-y-6 sm:mt-2 lg:justify-center h-full items-center font-dosis list-none  text-gray-400'>
  
        <li className='transform -rotate-90 p-2 sm:mb-4'>
        <ScrollLink to='mywork' smooth={true}>
                <button
                  type='button'
                  className='text-xl focus:outline-none  '
                >
                  {content.nav.workLink.text}
                </button>
              </ScrollLink>
        </li>
        <li className='transform -rotate-90 p-2 sm:mb-4'>
            <a
              
                href='mailto:rodriguezh21@gmail.com?subject='
                className='text-xl focus:outline-none'
              >
                Contact
              </a></li>
              
    </div>
  )
}
export default SideNavigation;
