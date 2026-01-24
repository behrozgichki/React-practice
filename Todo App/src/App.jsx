// import { useState } from "react"
// function App() {
// const[title , setTitle] = useState("")
// const[description , setDescription] = useState("")
// const [todo , setTodo] = useState([])

// const addTodo = (event)=>{
//   event.preventDefault()
//   console.log(title);
//   console.log(description);
//   todo.push({
//     title,
//     description,
// })
//  setTodo([...todo])
  
// }
// const updateTodo = (index) => {
//   if (!todo[index]) return;

//   const newTitle = prompt(
//     'Enter updated title',
//     todo[index].title
//   );

//   if (!newTitle) return;

//   const updatedTodos = [...todo];
//   updatedTodos[index] = {
//     ...updatedTodos[index],
//     title: newTitle
//   };

//   setTodo(updatedTodos);
// };
// const deleteTodo = (index)=>{
//   console.log("Delete todo ===> " , index + 1);
//    todo.splice(index , 1)
//   setTodo([...todo])

// }

//   return(
//     <>
//     <h1>Todo App</h1>
//     <form onSubmit={addTodo}>
//       <input type="text" placeholder="Enter Title"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
//       <input type="text" placeholder="Enter description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
//       <button>Add Todo</button>
//       </form>
//       <div>
//         {todo.length > 0 ? todo.map((item , index)=>{
//           return(
//             <div className="childeren" key={index}>
//               <h1>No:{index + 1} </h1>
//               <p>Title:{item.title}</p>
//               <p>Description:{item.description}</p>
//               <button onClick={()=>updateTodo(index)}>Edit</button>
//               <button onClick={()=> deleteTodo(index)}>Delete</button>
//             </div>
//           )
//         }) : <h1>No Todo found!</h1> }
//       </div>
//     </>
//   )
// }
// export default App


import React, { useState } from 'react'


const App = () => {
  const [show , setShow] = useState(true)
  return (
    <>
    <h1>hello world</h1>
    <button onClick={()=>setShow(!show)}>{show ? 'hide' : 'show'}</button>
    {show ? <h1 >This is heading</h1> : null}
    </>
  )
}
export default App