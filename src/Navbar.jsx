import React, { memo } from 'react'
import UserMenu from './UserMenu'

const Navbar = ({ userName }) => {
    console.log("this log gets print from navbar component")
    return (
        <div>
            <h1>NavBar {userName.userName}</h1>
            <UserMenu userName={userName} />

        </div>
    )
}

export default memo(Navbar)
