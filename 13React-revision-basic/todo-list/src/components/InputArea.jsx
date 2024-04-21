import React from 'react'

function InputArea({item,setItem,addHandler}) {
    return (
        <div className='form'>
            <input type="text" value={item} onChange={(e) => { setItem(e.target.value) }} />
            <button onClick={addHandler}>
                Add
            </button>
        </div>
    )
}

export default InputArea
