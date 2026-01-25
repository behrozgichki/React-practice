import { useEffect, useState } from 'react'
import './assets/leather.webp'
import Btn from './Btn'

// const App = () => {
//   const [mount , setMount] = useState(true)
//   return (
//     <>
//       <h1>Hello world</h1>
//       <button onClick={()=>setMount(!mount) }>Button component{mount ? ' unmount' : ' mount'}</button>
//       {/* {mount && <Btn/>} */}
//       {mount ? <Btn/> : null}
//     </>
//   )
// }

// export default App



// const App = () => {
//   const[users , setUsers] = useState(null)
//   const [loading , setLoading] = useState(true)
//   const [error , setError] = useState(false)
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res =>{
//       console.log(res);
//       setUsers(res)
      
//     }).catch((err)=>{
//       console.log(err);
//       setError(true)
      
//     }).finally(()=>{
//       setLoading(false)
//     })
//   })
  
//   return (
//     <>
//     <h1>Hello World</h1>
//     {loading && <h1>Loading....</h1>}
//     {error && <h1>Error Occured</h1>}
//     {users ? users.map(item =>{
//       return <h3 key={item.id}>{item.name}</h3>
//     }) : null} 
//     <h1></h1>
//     </>
//   )
// }

// export default App




const App = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data.data)
        console.log(res);
        
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <h1 className="text-center text-4xl font-bold text-white mb-10 tracking-wide">
        ⌚ Product App
      </h1>

      {loading && (
        <p className="text-center text-lg text-slate-300 animate-pulse">
          Loading products...
        </p>
      )}

      {error && (
        <p className="text-center text-red-400 font-semibold">
          ❌ Something went wrong
        </p>
      )}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products &&
          products.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-48 w-full object-cover rounded-xl mb-4"
              />

              <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                {item.title}
              </h2>

              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-emerald-400">
                  ${item.price}
                </span>

                <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App


