import React from 'react'

function Page({className,children}) {
  return (
    <div className={`${className} text-purple-950 text-2xl font-mono font-semibold w-full h-screen flex justify-center items-center`}>
      {children}
    </div>
  )
}

export default Page