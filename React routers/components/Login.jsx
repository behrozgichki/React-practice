import React from 'react'
import { useNavigate } from 'react-router'

function Login() {
    const navigate = useNavigate()
    const login = () =>{
        navigate("/")
    }
    
  return (
    <>
    <h1>
        Click to login</h1>
        <button onClick={login}>Login</button>
    </>
  )
}

export default Login