import React from 'react'
import Page from './Page'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <Page className='bg-pink-600 text-white flex-col'> 
    {
      data ? <>
      <img src={data.avatar_url} alt="github-pic" className=' rounded-full mb-4'/>
      <h1>{data.name}</h1>
      </> : <>We are in Github</>
    }
      
    </Page>
  )
}

export default Github