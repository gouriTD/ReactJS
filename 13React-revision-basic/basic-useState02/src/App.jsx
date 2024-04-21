import React from 'react'
import { useState,useEffect } from 'react'

function App() {

  const [time,setTime] = useState(new Date().toLocaleTimeString())
  const [isStopped,setIsStopped] = useState(false)

  const updateTime = ()=>{
    const newtime = new Date().toLocaleTimeString()
    setTime(newtime)
  }
  
  useEffect(() => {
    let interval;
    if (!isStopped) {
      interval = setInterval(updateTime, 1000); // change it
    }

    return function cleanup() {
      clearInterval(interval);
      console.log('Clear timer');
    };
  }, [isStopped]);



  // const stopHandler = ()=>{
  //   console.log('trying to stop the handler')
  //   setIsStopped(true)
  // }
  return (
    <div className='container'>
      <h1>{time}</h1>
      <button onClick={()=>{setIsStopped(false)}}>Get Time</button>
      <button onClick={()=>{setIsStopped(true)}}>Stop</button>
    </div>
  )
}

export default App
