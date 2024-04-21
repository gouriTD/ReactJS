import React,{useContext} from 'react'
import { Link,NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import ThemeBtn from './ThemeBtn';

export default function Header() {
    const {user,setUser} = useContext(UserContext)
    const logOut = ()=>{
        setUser(null)
    }
  return (
      <header className="shadow sticky z-50 top-0">
          <nav className="bg-yellow-300 border-gray-500 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                      <img
                        //   src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            src='https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689640.jpg?size=626&ext=jpg&ga=GA1.1.1938183055.1686652629&semt=ais'
                          className="mr-3 w-16 h-16 rounded-full"
                          alt="Logo"
                      />
                  </Link>
                  <div className="flex items-center lg:order-2">
                        <div>
                            <ThemeBtn />
                        </div>
                      <div
                          className="flex justify-around gap-2 items-center text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                        <p>Welcome {user.username} !!!</p>
                        <img className='rounded-full w-16' src={user.imgSrc} alt="#" />
                      </div>
                      <Link
                          to="#"
                          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                          onClick={logOut} 
                      >
                          Log out
                      </Link>
                  </div>
                  <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                                  to=""
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${isActive?'text-orange-700':'text-black'} hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to="/about"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${isActive?'text-orange-700':'text-black'} hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  About
                              </NavLink>
                          </li>
                          
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
}


