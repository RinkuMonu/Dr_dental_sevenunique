

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



import './app.css'
import Home from './Pages/Home'
import Servies from './Pages/Servies'
import Contactus from './Pages/Contactus'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Checkup from './Pages/Checkup'
import Team from './Pages/Team'
import Surgery from './Pages/Surgery'
import Photos from './Pages/Photos'
import Therapy from './Pages/Therapy'
import OurVision from './Pages/Ourmission'
import DentalCare from './Pages/DentalCare'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Servies' element={<Servies />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/Ourmission' element={<OurVision/>}/>
        <Route path='/DentalCare' element={<DentalCare/>} />
        <Route path='/Checkup' element={<Checkup/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Surgery'element={<Surgery/>}/>
        <Route path='/Photos' element={<Photos/>}/>
        <Route path='/Therapy'element={<Therapy/>}/>
        
   
      </Routes>

      <Footer />
    </Router>
  )
}

export default App

