import React,{useState} from 'react'

const inputStyle = {
  btnStyle : {display:"inline",backgroundColor: "green",color:"white",fontSize:"1.2rem"},
  divStyle : {
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  },
  btn:{
    display: "flex",
    justifyContent:"center",
    gap:"10px"
  }
}

function App() {
  const [count , setCount] = useState(0)

  const increase = ()=>{
    setCount(prevCount=>prevCount+1)
  }

  const decrease = ()=>{
    setCount(prevCount=>prevCount-1)
  }
  return (
    <div style={inputStyle.divStyle}>
      <h1 style={{display:"block"}}>{count}</h1>
      <div style={inputStyle.btn}>
        <button style={inputStyle.btnStyle} onClick={increase}>+</button>
        <button style={inputStyle.btnStyle} onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default App
