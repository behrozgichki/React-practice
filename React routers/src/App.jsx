import React from 'react'
import ReactRouters from '../routers/ReactRouters'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Dashbord from '../components/dashbord'

function App() {
  return (
    <>
    <Navbar/>
    <Dashbord/>
    <Login/>
    <ReactRouters/>

    </>
  )
}

export default App