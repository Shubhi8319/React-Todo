import  { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({saveTodo,edit, editTodo,submitBtn,setSubmitBtn,notifyUpdate,notifySubmit}) => {

    const[text,setText] = useState("")

    useEffect(() => {
      setText(edit.todo.text)
    }, [edit])
    

    function handleChange(e,notifySubmit,notifyUpdate){
        setText(e.target.value)
    }

    function handleSubmit(e){
      console.log("submit")
      e.preventDefault()
      const newTask={
        id:uuidv4(),
        text:text
      }
     if(edit.isEdit){
      editTodo(edit.todo.id,text)
      notifyUpdate()
     }
     else{
      saveTodo(newTask)
      notifySubmit()
     }
     setText("")
     setSubmitBtn("Add")
    }

  return (
    <>
     <form onSubmit = {((e)=>handleSubmit(e))}>
           <div className="mb-3">
              <input value={text} type="text" className="form-control" required onChange = {(e)=> handleChange(e)}/>
            </div>
            <button type="submit" className="btn btn-primary mb-3 w-100" >{submitBtn}</button>
          </form>
    </>
  )
}

export default Form