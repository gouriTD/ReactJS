import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Users() {
    const {myuser} = useParams();
    const [userData, setUserData] = useState({})
    useEffect(()=>{
        fetch(`https://api.github.com/users/${myuser}`)
        .then((res)=>res.json())
        .then(res=>setUserData(res))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      userId: {userData.name}
      <img src={userData.avatar_url} alt="avtar" width={200} height={200} className=' rounded-full'/>
    </div>
  )
}

export default Users
