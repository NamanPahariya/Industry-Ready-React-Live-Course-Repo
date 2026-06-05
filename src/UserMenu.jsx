import React, { useContext } from 'react'
import UserInfo from './UserInfo'
import { ThemeContext, UserContext } from './Context'

const UserMenu = () => {
    const { user } = useContext(UserContext)
    const color = useContext(ThemeContext);
    return (
        <div>
            <h1>UserMenu {user.userName} {color}</h1>
            <UserInfo />
        </div>
    )
}

export default UserMenu
