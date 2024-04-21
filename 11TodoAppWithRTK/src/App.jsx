import { useSelector } from "react-redux"
import { TodoListItem,InputForm } from "./components"
import { useEffect, useState } from "react"
function App() {
  let todoList = useSelector(state=>state.todos)
  
  const TODO_LIST_TAG = 'todoList';

  useEffect(()=>{
    localStorage.setItem(TODO_LIST_TAG,JSON.stringify(todoList))
  },[todoList])
 
  return (
    <div className=" bg-slate-900 h-[100vh] w-[100vw]">
     <h1 className=" bg-green-800 text-center text-white p-6">Todo app with Redux toolkit</h1>
     <div className='p-4'>
        {/* Input section */}
        <InputForm/>
        {/* Todo item */}
        {todoList.map((todo,index)=><TodoListItem key={index+todo.id} inputlabel={todo.text} isInputChecked={todo.isCompleted} id={todo.id}/>)}
        </div> 
    </div>
  
  )
}

export default App
