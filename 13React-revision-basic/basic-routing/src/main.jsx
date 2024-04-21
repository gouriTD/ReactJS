import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import {Home,About, Contact,Blog,Github,Login} from './component'

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='blog' element={<Blog/>}/>
    <Route path='github' element={<Github/>}/>
    <Route path='github/users/:userId' element={<Github/>} loader={({params})=>fetch(`https://api.github.com/users/${params.userId}`)}/>
    <Route path='login' element={<Login/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,

)
