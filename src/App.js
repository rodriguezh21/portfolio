import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Portfolio from './components/Portfolio'
import Stack from './components/Stack'
import Footer from './components/Footer'
function App () {
  return (
    <>
      <div>
        <Navigation />
        <Header />
        <Stack />
        <Portfolio />
        <Footer />
      </div>
    </>
  )
}

export default App
