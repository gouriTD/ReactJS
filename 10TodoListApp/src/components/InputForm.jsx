import React, { useState } from 'react'
import { useTodoContext } from '../context/todoContext'

function InputForm() {
    const [inputText, setInputText] = useState('')
    const {addTodo} = useTodoContext();

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false
        }
        addTodo(newTodo)
        setInputText('')
    }
  return (
    <form onSubmit={onSubmitHandler}>
        <input className='w-[90%] p-4 text-2xl focus:outline-none rounded-s-lg'  type="text" placeholder='Enter todo text' onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
        <button className='w-[10%] py-4 px-8 bg-blue-700 text-2xl text-white rounded-e-lg active:scale-95 ' type='submit' >Add</button>
    </form>
  )
}

export default InputForm
