/**
 * Now lets understand the moral of this project.
 * Here we understood:
 * 1) How to power up our vite+React project to use components built with tailwind.
 * 2) We created an App JSX which had data for card display.
 * 3) We created a card component as it was a repititive element and placed it inside the Card jsx file.
 * 4) Differrent card properties were passed as props to the card component.
 * 5) These props where then used to comstruct and configure our card.
 * 6) We used devUi card component to build our gallery.
 * 7) Our key learnings were:
 *  a) How to use and pass props.
 *  b) How to create re-usable components. The components should be kept in separate component folder.
 *  c) How to use {} inside jsx, basically they stand for evaluated expressions and help us to write javascript inside jsx.
 *  d) How to use "map" function.
 *  e) How to add components inside the component tree.i.e basically they are added as part of App.jsx.
 *  f) How to import and export reusable components. 
 */

import './App.css'
import Card from './Card'

function App() {
 
  const data = [
    {
      title: "About Mac", 
      btnText: "Read" 
    },
    {
      title: "About Train", 
      imgSrc: "https://images.pexels.com/photos/5059248/pexels-photo-5059248.jpeg?auto=compress&cs=tinysrgb&w=800",
      btnText: "View" 
    },
    {
      title: "Beautiful Sunshine", 
      imgSrc: "https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg?auto=compress&cs=tinysrgb&w=800",
      btnText: "Click" 
    },
    {
      title: "Trees", 
      imgSrc:"https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800", 
      btnText: "Read" 
    },
    {
      title: "Birds", 
      imgSrc: "https://images.pexels.com/photos/6688207/pexels-photo-6688207.jpeg?auto=compress&cs=tinysrgb&w=800",
      btnText: "Visit" 
    },
    {
      title: "Climate" ,
      imgSrc: "https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "About Weather", 
      imgSrc: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800",
      btnText: "Click" 
    },
    {
      title: "India", 
      imgSrc: "https://media.istockphoto.com/id/1454563185/photo/gantantra-diwas-happy-republic-day-and-republic-day-background-abstraction.jpg?s=1024x1024&w=is&k=20&c=SwpJo19bVjqo0znyhQUHRSX7xStgVxmxarj0f_E3bxQ=",
      btnText: "Visit" 
    }
  ]

  

  return (
    <>
      <h1 className="bg-yellow-700 p-4 rounded-2xl">My Blog Gallery Powered by React !!!</h1>
      <div className="bg-slat-400 mt-6 flex flex-wrap justify-around items-center gap-4 items-center">
        {data.map((item,index)=><Card key={index} title={item.title} imgSrc={item.imgSrc} btnText={item.btnText}/>)}
      </div>
    </>
  )
}

export default App
