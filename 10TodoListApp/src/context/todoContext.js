import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todoList: [{id:1,text:'',isCompleted:false}],
    addTodo:()=>{},
    removeTodo:()=>{},
    updateTodo:()=>{}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = ()=>{
    return useContext(TodoContext)
}