import React from 'react'
import {  GlobeAltIcon, } from '@heroicons/react/outline'

const features = [
  {
    name: 'Lets connect',
    link: {
        text: 'www.freepik.com', to: 'https://www.freepik.com/vectors/icon'
    },
    description:
      'Handcrafted by me @ twentytwentytwo',
    icon: GlobeAltIcon,
  }
]

export default function Footer() {
  return (
    <div className="py-8 bg-secondary font-serif ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{features.name}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {/* A better way to send money */}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {/* Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam. */}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 ">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                 
                  <p className="text-lg text-center leading-6 font-medium text-tertiary">{feature.name}</p>
                </dt>

                <dd className="mt-2 text-base text-tertiary">
              </dd>
              <p className="text-lg text-center leading-6 font-medium text-tertiary">{feature.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
