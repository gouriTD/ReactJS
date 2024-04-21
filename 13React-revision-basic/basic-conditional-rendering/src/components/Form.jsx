import React from 'react'
import Input from './Input'

function Form({children}) {
  return (
    <form action="#">
        {children}
    </form>
  )
}

export default Form
