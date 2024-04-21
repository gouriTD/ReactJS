import React from 'react'
import Logo from './Logo'

function Footer() {
    return (
        <div className=' absolute bottom-[-100px] right-0 left-0 w-full p-4 bg-gray-100'>
            <div className=' bg-purple-700 w-full h-[2px]'></div>
            <div className=' p-3 flex justify-between'>
                <Logo />
                <p>copyright &copy; {new Date().getFullYear()}</p>
            </div>

        </div>
    )
}

export default Footer