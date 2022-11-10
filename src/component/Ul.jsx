import React from 'react'
import List from './List'


const Ul = ({todos,deleteTodo,notify,updateTodo}) => {
  return (
 <>
  <ul className="list-group">
    
        {     
            todos.map((todo)=>
            <List key={todo.id} todo = {todo} deleteTodo = {deleteTodo} notify = {notify} updateTodo={updateTodo}/>
            )   
          }
    
  </ul>
 </>
  )
}

export default Ul