import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  const onColorChange = (colour)=>{
    return setColor(color)
  }

  return (
    <>
      <div style={{...styles.container,backgroundColor:color}}>
        <h1 style={styles.h1Style}>Background Color Changer App !!!</h1>
        <div style={styles.buttonContainer}>
          <button style={{...styles.buttons,backgroundColor:'red'}} onClick={()=>setColor('red')}>Red</button>
          <button style={{...styles.buttons,backgroundColor:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
          <button style={{...styles.buttons,backgroundColor:'orange'}} onClick={()=>setColor('orange')}>Orange</button>
          <button style={{...styles.buttons,backgroundColor:'green'}} onClick={()=>setColor('green')}>Green</button>
          <button style={{...styles.buttons,backgroundColor:'purple'}} onClick={()=>setColor('purple')}>Purple</button>
        </div>
      </div>
      
    </>
  )
}

const styles = {
  container:{
    backgroundColor : 'red',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },

  h1Style:{
    margin: 0,
    padding: 20
  },

  buttonContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    padding: 20,
    alignSelf: 'center',
  },

  buttons: {
    width: 100,
    padding: 15,
    borderRadius: 30,
    color: 'white',
    backgroundColor: 'cyan',
    border: 2 ,
    textAlign: 'center',
    marginRight: 10,
  }
}

export default App
