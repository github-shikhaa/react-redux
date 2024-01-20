import React, { useState } from 'react'

const Todo = (props) => {
    const [inputtext,setInput] = useState('');
    const [inputodo,setInputTodo] = useState('');
  return (
    <div>
   <input  type = 'text' placeholder='todo list'
  value={inputtext}
 onChange={(e)=>{
    setInput(e.target.value);
    
   }}
   /> 
   
   <button onClick={()=>{
    props.addList(inputtext);
    setInput('');
   }}>Add</button>

   <input type= 'text' placeholder='enter todo list' value={inputodo} onChange={(e)=>setInputTodo(e.target.value)}/>
   <button  onClick={()=>{
   props.addTodoval(inputodo);
   setInputTodo('');
   }}>Click on me</button>
    </div>
  )
}

export default Todo