import React,{useState} from 'react'
import ListItem from './components/ListItem'
import InputArea from './components/InputArea'

function App() {

  const [item,setItem] = useState("")
  const [list,setList] = useState([])

  const addHandler = ()=>{

    console.log(list,item)
    setList(prevlist=>([...prevlist,item]))
    setItem('')
  }

  const onDelete = (id)=>{
    console.log(`on delete ${id}`)
    setList(prevList=>{
      return prevList.filter((item,index)=>index !== id)
    })
  }

  return (
    <div className='container'>
      <div className='heading'>
          <h1>to-do list</h1>
      </div>
      {/* <div className='form'>
        <input type="text" value={item} onChange={(e)=>{setItem(e.target.value)}}/>
        <button onClick={addHandler}>
          Add
        </button>
      </div> */}
      <InputArea item={item} setItem={setItem} addHandler={addHandler}/>
      <ul>
        {/**One thing to note here is we need to assign key to the main component not the inner level html element */}
        {list.map((item,index)=><ListItem key={index} value={item} id={index} ondelete={onDelete}/>)}
      </ul>
    </div>
  )
}

export default App
