import React from 'react'
import { Outlet, Link, NavLink } from 'react-router'

const MainLayout = () => {
    const userName = "Naman";
    return (
        <div>
            <nav><ul className='flex gap-3 justify-center border-2 border-white p-3 rounded-2xl'>
                <li><NavLink className={({ isActive }) => isActive ? 'bg-amber-300 text-black rounded-xl p-1' : ''} to='/'>Landing</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'bg-amber-300  text-black rounded-xl p-1' : ''} to='/career'>Career</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'bg-amber-300  text-black rounded-xl p-1' : ''} to='/blog/:id'>Blog</NavLink></li>
            </ul>
            </nav>
            <Outlet context={userName} />
            <footer className='mt-4'>Footer</footer>
        </div>
    )
}

export default MainLayout
