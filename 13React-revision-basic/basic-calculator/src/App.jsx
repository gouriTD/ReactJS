import React from 'react'
import {add,subtract,multiply,divide} from './calculator'

function List(){
  return(
    <>
      <ul>
        <li>{add(5,6)}</li>
        <li>{subtract(10,6)}</li>
        <li>{multiply(10,6)}</li>
        <li>{divide(5,2)}</li>
      </ul>
    </>
  )
}

function App() {
  return (
    <div>
      <List />
    </div>
  )
}

export default App
