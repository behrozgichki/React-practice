import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../src/pages/About'
import Services from '../src/pages/Services'
import Contact from '../src/pages/Contact'
import Home from '../src/pages/Home'

function ReactRouters() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/services' element={<Services/>}/>
        <Route  path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default ReactRouters