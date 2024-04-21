import React from 'react'

function ColorPicker({classname, setBgColor}) {
  return (
    <div className={`w-[40px] h-[40px] border-2 border-white rounded-full ${classname} cursor-pointer`} onClick={()=>setBgColor(classname)
    }></div>
  )
}

export default ColorPicker
