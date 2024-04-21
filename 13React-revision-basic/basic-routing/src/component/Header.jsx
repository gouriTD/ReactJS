import React from 'react'
import Logo from './Logo'
import {NavLink,Link} from 'react-router-dom'

function Header() {
  return (
    <div className=' w-full px-10  py-3 shadow-lg bg-gray-100 flex justify-between items-center'>
     <Logo />
     
      <ul className='flex gap-6'>
        <li><NavLink
              to="/"
              className={({ isActive }) =>
                    `${isActive?'text-orange-700':' text-purple-950'}`
                        }
              >
              Home
              </NavLink>
        </li>
        <li><NavLink
              to="/about"
              className={({ isActive }) =>
                    `${isActive?'text-orange-700':' text-purple-950'}`
                        }
              >
              About
              </NavLink>
        </li>
        <li><NavLink
              to="/contact"
              className={({ isActive }) =>
                    `${isActive?'text-orange-700':' text-purple-950'}`
                        }
              >
              Contact-us
              </NavLink>
        </li>
        <li><NavLink
              to="/github"
              className={({ isActive }) =>
                    `${isActive?'text-orange-700':' text-purple-950'}`
                        }
              >
              Github
              </NavLink>
        </li>
        <li><NavLink
              to="/blog"
              className={({ isActive }) =>
                    `${isActive?'text-orange-700':' text-purple-950'}`
                        }
              >
              Blog
              </NavLink>
        </li>
      </ul>

      <button className=' p-3 bg-purple-900 text-orange-300 rounded-lg cursor-pointer' onClick={()=>{console.log('clicked')}}><Link to={'/login'}>Getting Starte</Link>
      d</button>
     
    </div>
  )
}

export default Header
