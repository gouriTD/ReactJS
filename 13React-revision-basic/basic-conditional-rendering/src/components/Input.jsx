import React from 'react'

function Input({inputType,placeholderText,value=""}) {
  return (
    <input type={inputType} placeholder={placeholderText} value={value}/>
  )
}

export default Input
