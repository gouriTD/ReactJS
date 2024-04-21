import React from 'react'
import { useState } from 'react'

const btnStyle = {
    backgroundColor : 'red',
    color: 'white',
}

function ListItem({value ,id, ondelete}) {

    const[isClicked,setIsClicked] = useState(false)
    
  return (
    <div className='list'>
        <li style={{textDecorationLine: isClicked &&'line-through'}} onClick={()=>{setIsClicked(prev=>!prev)}}>
        {value}
        </li>
        <button style={btnStyle} onClick={()=>{ondelete(id)}}>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
    </div>
    
  )
}

export default ListItem
