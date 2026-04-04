import React, { useEffect, useState } from 'react'
import Card from './userCards/Card'

const App = () => {

  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(false)
  const [users , setUsers] = useState(null)




  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (res => {
      console.log(res);
      setUsers(res)
      
    }).catch(err =>{
      console.log(err);
      setError(true)
      
    }).finally(()=>{
      setLoading(false)
    })
  },[])
  return (
    <>
    {/* <Card name= "behroz" email= "behrozashrafgichki72@gmail.com"/>
    <Card name= "Umair" email= "umair7@gmail.com"/>
    <Card name= "Kabeer" email= "kabeer2@gmail.com"/> */}

     {loading && <h1>Loading...</h1>}
      {error && <h1>internal server error</h1>}
        {users &&  users.map(item => {
        return <><h1 key={item.id}>{item.name}</h1>
        <p>{item.email}</p></>
      })}
    
    </>
  )
}

export default App