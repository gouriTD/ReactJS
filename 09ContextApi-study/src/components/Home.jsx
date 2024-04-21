import React,{useContext} from 'react'
import Image from './Image'
import { UserContext } from '../context/UserContext'

function Home() {
    const {user} = useContext(UserContext);
    console.log(user);
  return (
    <div className=' h-full w-full flex justify-center items-center dark:bg-slate-800'>
        <div className=' bg-yellow-500 w-[70%] h-[60vh] p-8 my-11 mx-8 flex flex-col justify-around items-center'>
        <Image imgSrc={user.imgSrc}/>
        <h3 className='text-2xl font-bold'>I am :{user.username}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, qui ipsam? Eaque, rem! Laudantium molestias perspiciatis, id sed quis rem!</p>  
        </div>
    </div>
  )
}

export default Home
