import React from 'react'

function Card({title, img, phone, email}) {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <img src={img} alt="card-image" />
      <div className='contact'>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
