import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../src/pages/About'
import Services from '../src/pages/Services'
import Contact from '../src/pages/Contact'
import Home from '../src/pages/Home'
import PageNotFound from '../components/PageNotFound'
import Setting from '../components/Setting'
import dashbord from '../components/dashbord'
import Profile from '../components/Profile'

function ReactRouters() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/services' element={<Services/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        {/* Parent Route */}
        <Route path='dashbord' element={dashbord}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='setting' element={<Setting/>}/>

        </Route>



    </Routes>
    </>
  )
}

export default ReactRouters