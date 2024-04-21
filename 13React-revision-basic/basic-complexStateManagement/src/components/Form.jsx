import React from 'react'

function Form({children,submitHandler}) {
  return (
    <form action='#' onSubmit={submitHandler}>{children}</form>
  )
}

export default Form
