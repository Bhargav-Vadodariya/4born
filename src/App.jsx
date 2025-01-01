import React from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/Landingpage'
import Vision from './components/Vision'
import Chooseus from './components/Chooseus'
import Aboutus from './components/Aboutus'
import Workprocess from './components/Workprocess'
import Contactus from './components/Contactus'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full h-screen bg-black text-white'>
      <Navbar/>
      <Landingpage/>
      <Vision/>
      <Chooseus/>
      <Aboutus/>
      <Workprocess/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App
