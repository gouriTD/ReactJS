import { useContext, useState } from 'react'
import Image from './Image';
import { UserContext } from '../context/UserContext';
// import './App.css'

function Login() {

  const {setUser,user} = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e)=>{
    e.preventDefault();

    setUser((prev)=>({...prev,username,password}))
    console.log(JSON.stringify(user))
  }

  const getProfileImages = ()=>{
    const imgArr = [];
    for (let index = 1; index <= 9; index++) {
      imgArr.push(<Image key={`image#${index}`} imgSrc={`https://randomuser.me/api/portraits/women/${index+41}.jpg`}/>)
    }
    return imgArr
  }

  return (
    <>
     <div className='flex w-full h-[100vh]'>
        <div className='w-[40%] h-[100vh] bg-yellow-400 p-6 flex flex-col justify-center items-center'>
          <h3 className='text-2xl font-bold'>Select your profile picture</h3>
          <div className='rounded-md flex flex-wrap w-[90%] gap-4 justify-center p-4'>
            {
              getProfileImages()
            }
          </div>
        </div>
        <div className="card h-[100vh] flex flex-col justify-between items-center w-[60%] p-6 py-12 dark:bg-slate-800 dark:text-white">
          <h1 className=' font-sans text-3xl font-bold'>Welcome</h1>
          <img className="rounded-full self-center" src={user?.imgSrc} alt="add profile pic"/>
          <div className=' bg-slate-500 flex flex-col justify-center items-start px-9 py-6 text-white dark:bg-slate-50 dark:text-gray-800'>
            <label htmlFor="userName">username:</label> 
            <input 
            className="bg-transparent border-b-2 border-white focus:outline-none dark:border-gray-400" 
            type="text" 
            id="userName" 
            value={username}
            required
            onChange={(e)=>setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="userName">password:</label>
            <input 
            className="bg-transparent border-b-2 border-white focus:outline-none dark:border-gray-400" 
            type="password" 
            id="userName" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required/>
            <button className='w-full p-1 bg-green-600 my-4 rounded-3xl shadow-xl' onClick={(e)=>onSubmitHandler(e)}>Login</button>
          </div>
          <div>
            <ul className=' text-gray-400 text-sm list-disc list-outside'>
              <li>forgot <a href='#' className=' text-green-500 hover:text-blue-600'>username/password?</a></li>
              <li>Don't have an account? <a href='#' className=' text-green-500 hover:text-blue-600'>Signup</a></li>
            </ul>
          </div>
        </div> 
     </div> 
    </>
  )
}

export default Login
