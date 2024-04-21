import React from 'react'
import Card from './components/Card'
import { CARD_CONTENT } from './contents'


function App() {
  return (
    <>
      {
        CARD_CONTENT.map((item,index)=>{
          return (
            <Card 
              key={index}
              title={item.title}
              img={item.img}
              phone={item.phone}
              email={item.email}
            />
          )
        })
      }
      
    </>
  )
}

export default App
