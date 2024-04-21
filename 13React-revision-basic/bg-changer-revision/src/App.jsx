import React, { useState } from 'react'
import ColorPicker from './components/ColorPicker'

function App() {
  const[bgColor,setBgColor] = useState('bg-indigo-950')

  const onClick = (color)=>{
    setBgColor(color)
  }
  return (
    <div className={` p-6 w-[100vw] h-[100vh] flex justify-center items-start ${bgColor}`}>
      <div className=' w-[80%] border-2 border-white p-2 flex justify-evenly gap-2 rounded-lg bg-slate-900'>
        <ColorPicker classname={' bg-green-500'} setBgColor={onClick}/>
        <ColorPicker classname={' bg-orange-600'} setBgColor={onClick}/>
        <ColorPicker classname={' bg-green-800'} setBgColor={onClick}/>
        <ColorPicker classname={' bg-yellow-200'} setBgColor={onClick}/>
        <ColorPicker classname={' bg-pink-700'} setBgColor={onClick}/>
        <ColorPicker classname={' bg-gray-400'} setBgColor={onClick}/>
        <ColorPicker classname={' bg-slate-900'} setBgColor={onClick}/>
        <ColorPicker classname={' bg-red-500'} setBgColor={onClick}/>
        <ColorPicker classname={' bg-cyan-500'}setBgColor={onClick}/>
        <ColorPicker classname={'bg-pink-300'}setBgColor={onClick}/>
       <ColorPicker classname={' bg-purple-500'}setBgColor={onClick}/>
      </div>
    ̦
    </div>
  )
}

export default App
