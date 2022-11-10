import { useState } from 'react';
import Form from './component/Form'
import Ul from './component/Ul';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => {
    toast.success('Deleted Successfully !', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
          });}
    const notifyUpdate = () => {
      toast.success('Updated Successfully !', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
      })
}
const notifySubmit = () => {
  toast.success('Added Successfully !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
  })
}

  const [todos,setTodos] = useState([])
  const [edit, setEdit] = useState({
    todo: {},
    isEdit : false
  })
  const[submitBtn,setSubmitBtn] = useState("Add")
 
  const saveTodo =(element)=>{
    setTodos([...todos, element])
 }

  function deleteTodo(id,callback){
    setTodos(todos.filter((item)=>{
      if(item.id !== id){
        return true
      }
    }))
    callback()
  }
  const updateTodo =(data)=>{
    setEdit({todo : data, isEdit :true})
    setSubmitBtn("update")

  }
  const editTodo =(id,newText)=>{
    setTodos(todos.map(item=> item.id===id? {...item, text : newText} :item))
  }
 
  console.log(todos);
  return (
    <>
    <div className="container text-center bg-info">
        <h1 className="mt-5">Todo-List</h1>
        <Form saveTodo = {saveTodo} edit={edit} editTodo={editTodo} submitBtn={submitBtn} setSubmitBtn={setSubmitBtn} notifyUpdate={notifyUpdate} notifySubmit={notifySubmit}/>
        <Ul todos = {todos} updateTodo={updateTodo} deleteTodo = {deleteTodo} notify={notify}/>
        <ToastContainer/>
     </div>
    </>
  );
}

export default App;
