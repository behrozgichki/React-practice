import React, { useEffect, useState } from 'react'

const Btn = () => {
    useEffect(()=>{
        console.log("button mounted");
        return()=>{
            console.log("button unmounted");
            
        }
    } ,[])
    const [counter , setCounter] = useState(0)
  return (
    <div style={{
        border : '2px solid black',
        margin : '10px',
        padding : '10px',
        borderRadius : '20px'
    }}>
    <h1>{counter}</h1>
    <button onClick={()=> setCounter(counter + 1)}>+</button>
    <button onClick={()=> setCounter(counter - 1)}>-</button>
    </div>
  )
}

export default Btn