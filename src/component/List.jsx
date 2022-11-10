import React from 'react'

const List = ({todo,deleteTodo,notify,updateTodo}) => {
  return (
   <>
   <li className="list-group-item mt-3 text-start">{todo.text} 
   <button className="btn btn-success ms-2 float-end"onClick={() => updateTodo(todo)}>Edit</button>
   <button type="button" className="btn btn-danger float-end" onClick={()=>deleteTodo(todo.id,notify)}>Delete</button>
   </li> 
   </>
  )
}

export default List