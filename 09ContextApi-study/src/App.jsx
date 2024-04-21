import React, { useContext, useState } from 'react'
import { UserContext } from './context/UserContext'
import Home from './components/Home'
import Login from './components/Login'
import Layout from './components/Layout'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import About from './components/About'
import { ThemeProvider } from './context/theme'

// Here we will also be setting the necessary router.
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
    </Route>
  )
)

function HomeRoute(){
  return (
    <RouterProvider router={appRouter}/>
  )
}

function App() {
  const {user}= useContext(UserContext)
  const [themeMode , setThemeMode] = useState("light")
  //Lets create functions similar to exported provider functions.
  const lightTheme = ()=>{
    setThemeMode('dark')
  }

  const darkTheme = ()=>{
    setThemeMode('light')
  }

  const isUser = ()=>{
    console.log(JSON.stringify(user))
    console.log(user?.hasOwnProperty('username'),user?.hasOwnProperty('password'))
    if(user && (user?.hasOwnProperty('username') && user?.username !== "") && (user?.hasOwnProperty('password') && (user.password !== "")))
    {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        {isUser() ? <HomeRoute/> : <Login />}
      </ThemeProvider>
    </>
  )
}

export default App
