import { useEffect, useState } from 'react'
import { TodoListItem, InputForm } from './components'
import { TodoContextProvider } from './context/todoContext'

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(()=>{
    const initTodoList = JSON.parse(localStorage.getItem('todos'))
    
    if(initTodoList && initTodoList.length > 0){
      setTodoList(initTodoList)
    }
    console.log(todoList)
  },[])

  useEffect(()=>{
    // After the todo is added the list needs to be stored in local storage as well.
    localStorage.setItem('todos',JSON.stringify(todoList))
  },[todoList])
  
  const addTodo = (todo)=>{
    setTodoList(prevTodos=>[...prevTodos,todo]);
  }

  const removeTodo = (id)=>{
    const remainingTodos = todoList.filter(todo=>(todo.id !== id))
    setTodoList(remainingTodos)
  }

  const updateTodo = (id,newtodo)=>{
    setTodoList(prevTodos=>prevTodos.map((todo)=>(todo.id === id? newtodo : todo)))
  }

  return (
    <TodoContextProvider value={{todoList, addTodo, removeTodo, updateTodo}}>
      <div className='w-full h-[100vh] p-10 bg-slate-800'>
        <h1 className=' bg-green-600 text-3xl text-center text-white rounded-lg p-4'>Todo list app</h1>
        {/* Todo input section with list */}
        <div className='p-4'>
          {/* Input section */}
          <InputForm/>
          {/* Todo item */}
          {todoList.map((todo,index)=><TodoListItem key={index+todo.id} inputlabel={todo.text} isInputChecked={todo.isCompleted} id={todo.id}/>)}
          
        </div> 
      </div>
    </TodoContextProvider>
  )
}

export default App
