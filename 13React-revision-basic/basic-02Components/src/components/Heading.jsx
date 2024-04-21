import React from 'react'

const customeStyle = {
   color : ""
  }
  
  const greetings = ()=>{
  const hours = new Date().getHours()
  
  console.log(hours)
    let greeting
    if(hours >= 4 && hours <12){
      customeStyle.color = "red"
      greeting = "Good Morning!!!"
    } else if ( hours >= 12 && hours < 16 ){
      customeStyle.color = "green"
      greeting = "Good Afternoon!!!"
    } else if ( hours >=16 && hours < 20) {
      customeStyle.color = "purple"
      greeting = "Good Evening!!!"
    } else {
      customeStyle.color = "blue"
      greeting = "Good Night!!!"
    }
    return <h1 className="heading" style={customeStyle}>{greeting}</h1>
  }
  

export default function Heading() {
  return (
    <div>
      {greetings()}
    </div>
  )
}
