

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
import RootCanelTreatment from './Pages/RootCanelTreatment'
import CosmeticDentistry from './Pages/CosmeticDentistry'
import BracesTreatments from './Pages/BracesTreatments'
import DentalImplants from './Pages/DentalImplants'
import RoutineTreatments from './Pages/RoutineTreatments'
import FullMouthReconstruction from './Pages/FullMouthReconstruction'
import DenturesRepair from './Pages/DenturesRepair'
import ChildrenDentisry from './Pages/ChildrenDentisry'
import Terms from './Pages/terms'
import Privacy from './Pages/privacy'
import Disclaimer from './Pages/disclaimer'
import { Fa500Px } from 'react-icons/fa'
import Faq from './Pages/faq'
import Opd from './Pages/Opd'
import Modularot from './Pages/Modularot'
import Blogs from './Pages/Blogs'



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
        <Route path='/team' element={<Team/>}/>
        <Route path='/Surgery'element={<Surgery/>}/>
        <Route path='/Photos' element={<Photos/>}/>
        <Route path='/Therapy'element={<Therapy/>}/>
        <Route path='/rootcanaltreatment'element={<RootCanelTreatment/>}/>
        <Route path='/cosmeticdentistry'element={<CosmeticDentistry/>}/>
        <Route path='/bracestreatment'element={<BracesTreatments/>}/>
        
        <Route path='/dentalImplants'element={<DentalImplants/>}/>
        
        <Route path='/routinetreatments'element={<RoutineTreatments/>}/>
        
        <Route path='/fullmouthreconstruction'element={<FullMouthReconstruction/>}/>
        
        <Route path='/denturerepair'element={<DenturesRepair/>}/>
        <Route path='/childrendentistry' element={<ChildrenDentisry />} />
        <Route path='/terms' element={< Terms/>} />

        <Route path='/privacy' element={<Privacy />} />

        <Route path='/disclaimer' element={< Disclaimer/>} />
         <Route path='/faq' element={<Faq/>} />

        <Route path='/opd' element={<Opd/>} />
                <Route path='/modularot' element={<Modularot/>} />
                        <Route path='/blogs' element={<Blogs/>} />

        
   
      </Routes>

      <Footer />
    </Router>
  )
}

export default App

