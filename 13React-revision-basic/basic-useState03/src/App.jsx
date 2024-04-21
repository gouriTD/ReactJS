import React from 'react'
import { useState } from 'react'

/**
 * FORMS in React:
 * 1) in the world of react we have a form element is there to take a set of user data and then pass it for further processing. 
 * 2) Thus in a nutshell form is a container to get user input and then pass it over to a server for further processing.
 * 
 * 3) A form will contain a bunch of input elements and a button which will lead to submission of the form.
 * 4) There are different input elements of different types which can be grouped together in a form.
 * 5) Now submission of form will take place whenever we click the button provided or the enter key in the key board. Now to carry out an action a handler needs to be specified which is assigned to the onSubmit attribute of the form element.
 * 6) Now in HTML all the elements take care of their state by themselves, now if we want the component in React to take care of an element , then a state needs to take care of that attribute and then the component becomes a controlled component.
 * 
 * 7) The input element generates an onChange event , which needs to be handled to register changes.
 * 8) Also since a form functionality is to take user input and submit to ther server , hence we need to preventDefault() for doing something else.
 * 
 */

function App() {
  const [heading,setHeading] = useState('Hello')
  const [isInside,setInside] = useState(false)
  const [text,setText] = useState("")

  const submitHandler = (event)=>{
    
    console.log(text)
    setHeading(text)
    setText("")
    event.preventDefault()
  }

  const changeHandler = (event)=>{
    setText(event.target.value)
  }

  return (
    <>
      <form action="#" onSubmit={submitHandler}>
        <h1>{heading}</h1>
        <input type="text" placeholder='Enter a value' value={text} onChange={changeHandler}/>
        <button 
            type='submit'
            style={{backgroundColor: isInside ? 'black' : 'white',color: isInside ? 'white' : 'teal'}}
            onMouseEnter={()=>{setInside(true)}} 
            onMouseLeave={()=>{setInside(false)}}
            
        >Submit</button>
      </form>
    </>
  )
}

export default App
