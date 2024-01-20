import React from 'react'

const TodoList = (props) => {
    console.log(props.item)
  return (
    <div>
        <ul>
            <li>{props.item}  <button
            
            onClick={(e)=>{
                props.delete(props.index)
            }}>delete</button></li>
          
        </ul>
    </div>
  )
}

export default TodoList