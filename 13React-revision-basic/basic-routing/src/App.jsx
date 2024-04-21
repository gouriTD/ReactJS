import React from 'react'
import { Header,Footer } from './component'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
