import React from 'react'
import Form from './Form'
import Input from './Input'

function Login() {
  return (
    <Form>
        <Input inputType={"text"} placeholderText={"Username"} />
        <Input inputType={"password"} placeholderText={"Password"} />
        <Input inputType={"submit"} value='Login'/>
    </Form>
  )
}

export default Login
