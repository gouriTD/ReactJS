import React,{useId} from 'react'

function InputField({label,value,setValue,inputType,placeholderText}){

    const inputID = useId();
     

  return (
    <div className='flex flex-col'>
        <label className="mb-4" htmlFor={inputID}>{label}:</label>
        {/* <br /> */}
        <input className='py-2 px-4 text-purple-900 border-solid border-2' type={inputType} 
        id={inputID} 
        value={value} 
        onChange={(e)=>setValue(e.target.value)}
        placeholder={placeholderText}
        
        />
        <br />
    </div>
  )
}

export default InputField
