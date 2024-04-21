import React, { useState } from 'react';
import {Form,Input} from './index';


function Form1() {

  const [contact,setContact] = useState({
    lname:"",
    fname:"",
    email:""
  })

  const updateContact = (e)=>{
    const {name,value} = e.target

    setContact((prevContact)=>{
      return {
        ...prevContact,
        [name] : value
      }
    })
  }

  const submitHandler = (e)=>{
    e.preventDefault();
  }

  return (
    <>  
        <h1>Hello {contact.fname} {contact.lname}</h1>
        <p>{contact.email}</p>
        <Form submitHandler={submitHandler}>
        <Input type={"text"} name="fname" placeholder="FirstName" value={contact.fname} onChangeHandler={updateContact}/>
        <Input type={"text"} name="lname" placeholder="LastName" value={contact.lname} onChangeHandler={updateContact}/>
        <Input type={"email"} name="email" placeholder="Email" value={contact.email} onChangeHandler={updateContact}/>
        <button> Submit </button>
        </Form>
    </>
    
  )
}

export default Form1
