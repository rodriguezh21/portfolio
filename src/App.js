import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import SideNavigation from './components/SideNavigation'
import Portfolio from './components/Portfolio'
import Stack from './components/Stack'
import Lottie from './components/Lottie'

function App () {
  const [loading, setLoading] = useState(undefined)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
    {loading ? (<Lottie/>) : (
     <div> 
      <SideNavigation />
      <Header />
      <Stack />
      <Portfolio />
      </div>
    )}
    </>
  )
}

export default App
