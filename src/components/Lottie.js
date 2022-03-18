import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function Lottie () {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../setting.json')
    })
  }, [])
  return <div className='min-h-screen flex flex-col items-center justify-center font-dosis 'style={{
    background: '#091c29'
  }} >
      <div className=' animate-pulse container flex flex-wrap justify-center w-64 ' ref={container}></div>
  </div>
}
