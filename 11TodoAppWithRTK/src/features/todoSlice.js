// Here we will create slice for our todo .
import { createSlice, nanoid } from "@reduxjs/toolkit";

// For any slice to be constructed we need 3 entities:
/**
 * 1) name of the slice.
 * 2) initialState, this is the state with which our stores are configured.
 * 3) reducers : set of functions which will operate on our states.
 * We can create initial state, and different reducer functions separately which will further enhance our readibility.
 */

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                isCompleted: false
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((todo)=>(
                (todo.id === action.payload) ? {...todo,
                    text: action.payload,
                    isCompleted: action.payload
                }:todo))
        }
    }
})

//Once the slice is defined we need to export the individual functions for their usage in components.
// After the functions are exported we need to export the reducer , for store configuration.

export const{addTodo, removeTodo, updateTodo} = TodoSlice.actions
export const todoReducer = TodoSlice.reducer;