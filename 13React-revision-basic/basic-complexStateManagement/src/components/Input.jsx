import React from 'react'

function Input({type,name,placeholder,value,onChangeHandler}) {
  return (
    <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChangeHandler}/>
  )
}

export default Input
