import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function Image({imgSrc}) {
  const {user, setUser} = useContext(UserContext)
  const onClickHandler = ()=>{
    setUser(prev=>({...prev,imgSrc}))
    console.log(user)
  }
  return (
    <img 
    className="rounded-full self-center border-4 border-white cursor-pointer hover:border-orange-600" 
    src={imgSrc} 
    alt="profile-image" 
    onClick={onClickHandler}
    />
  )
}

export default Image
