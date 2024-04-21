import React from "react";
import ReactDOM from "react-dom/client"



const customeStyle = {
  morning :{
    color: "red"
  },
  afternoon :{
    color: "green"
  },
  night :{
    color: "blue"
  },
  evening :{
    color: "purple"
  }

}


const greetings = ()=>{
const hours = new Date().getHours()
// const hours = 4

console.log(hours)
  let myStyle, greeting
  if(hours >= 4 && hours <12){
    myStyle = customeStyle.morning
    greeting = "Good Morning!!!"
  } else if ( hours >= 12 && hours < 16 ){
    myStyle = customeStyle.afternoon
    greeting = "Good Afternoon!!!"
  } else if ( hours >=16 && hours < 20) {
    myStyle = customeStyle.evening
    greeting = "Good Evening!!!"
  } else {
    myStyle = customeStyle.night
    greeting = "Good Night!!!"
  }
  return <h1 className="heading" style={myStyle}>{greeting}</h1>
}

const rootElement = document.querySelector('#root')

const component = <div>
  <h1 className="heading" >{greetings()}</h1>
</div>

// ReactDOM.render(component,rootElement)
ReactDOM.createRoot(rootElement).render(component)