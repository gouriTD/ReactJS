import React from 'react'
import Form from './Form'
import Input from './Input'

function Register() {
  return (
    <Form>
        <Input inputType={"text"} placeholderText={"Username"} />
        <Input inputType={"password"} placeholderText={"Password"} />
        <Input inputType={"password"} placeholderText={"Confirm Password"} />
        <Input inputType={"submit"} value='Register'/>
    </Form>
  )
}

export default Register
