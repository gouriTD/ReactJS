import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

/**
 * In React we carry out conditional rendering. This conditional rendering can be achieved through various ways: 
 * *** One thing that we should keep in mind is {} => stands for expression and not for statement so any thing that we put into {} should be something which is evaluated.
 * ***** The statements are not allowed inside {} so statements such as if-else, loop, switch fall in the category of statements so they need not be used inside the {}
 * We can use ternary operator, functions or variables inside {}
 * Now in case of ternary operator if we need not return anything then we should simply return null.
 * Also isUser && <Do something> can be used which marks that only if the first condition is met the expression after && will be executed.
 */

const myStyle = {
  color : ""
}

const App = ()=>{
  const isUserRegistered = false

  function getContent(){
    if(!isRender){
      return (
        <Form />
      )
    } else {
      return (
        <h1> Hello Welcome to a new App !!!</h1>
      )
    }
  }
  return(
    <>
      {isUserRegistered?<Login /> : <Register />}
    </>
    
  )
}

export default App;