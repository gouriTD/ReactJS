import React, { useState } from 'react'

function App() {

    // We can make use of 2 different states and then proceed with the updation.
    // BUT
    // There is another way were we can make use of a single state variable and then make things work.
    // const [fname, setFname] = useState("")
    // const [lname, setLname] = useState("")

    /**
     * Thus whenever we are dealing with state which excepts an object, there at the time of defining we need to specify an object , with default values for its properties. 
     * Now whenever calling setState , we should call a function which gets a previous value and returns an updated value.
     */

    const [fullName,setFullName] = useState({fname:"", lname:""})

    const submitHandler = (event) => {
        event.preventDefault()
    }

    const updateFullName = (event)=>{

        // We should not work with event attributes inside a set state otherwise we will encounter synthetic errors.
        const {value,name} = event.target
        console.log(value,name)
        setFullName((prevFullName)=>{
            if(name === "fname"){
                return {
                    ...prevFullName,
                    fname: value
                }
            } else if(name === "lname"){
                return{
                    ...prevFullName,
                    lname: value
                }
            }
            
        })
    }
    return (
        <>
            <h1>{`Hello ${fullName.fname} ${fullName.lname}`}</h1>
            <form action="#" onSubmit={submitHandler}>

                <input
                    type="text"
                    placeholder='FirstName'
                    value={fullName.fname}
                    onChange={updateFullName}
                    name="fname"
                />

                <input
                    type="text"
                    placeholder='LastName'
                    value={fullName.lname}
                    onChange={updateFullName}
                    name='lname'
                />

                <button type='submit'>Submit</button>
            </form>
        </>

    )
}

export default App
