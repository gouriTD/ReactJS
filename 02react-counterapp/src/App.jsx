import { useState } from 'react'

function App() {

  let [counter,setCounter] = useState(0);

  const increamentHandler = ()=>{
    if(counter >= 20){
      return
    } else {
      // Thus here even though we are calling multiple setCounter but only once thats called.
      // setCounter( counter + 1);
      // setCounter( counter + 1);
      // setCounter( counter + 1);
      // setCounter( counter + 1);
      // setCounter( counter + 1);

      // However if we need to increament the counter by 5 and see its effect then we need to do the following.
      setCounter( prevCounter => prevCounter + 1);
      setCounter( prevCounter => prevCounter + 1);
      setCounter( prevCounter => prevCounter + 1);
      setCounter( prevCounter => prevCounter + 1);
      setCounter( prevCounter => prevCounter + 1);

      // Now in the above scenario since the previous values get looped in hence the setCounter gets called 5 times instead of 1.
    }
  }
  
  const decrementHandler = ()=>{
    if(counter <= 0){
      return
    }else{
      setCounter(counter - 1);
    }

    // counter = counter - 1;
    // console.log(counter);
    // Here even though we are decreamenting the values the effect is not visible on the screen to do so, we need to call setCounter, which is a hook to reflect changes on the screen with change in the counter value. Thus react gives us the freedom to introduce new variables but how these variables would be propogated to the UI is controlled by REACT, and for this they have introduced HOOKS.
    
  }

  // in the following jsx , {} provides a place for writing evaluated js code.
  return(
    <>
      <h1>Counter application</h1>
      <h2>Counter : {counter}</h2><br />
      <button onClick={increamentHandler}>Increament</button>
      <button onClick={decrementHandler}>Decreament</button>
      <br />
      <p>{counter}@ 2024</p>
    </>
  )
}

export default App
