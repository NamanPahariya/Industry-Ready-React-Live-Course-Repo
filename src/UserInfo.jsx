import React, { useContext } from 'react'
import { UserContext } from './Context'

const UserInfo = () => {

    const { user } = useContext(UserContext)
    return (
        <div>
            <h1>UserInfo {user.userName} {user.LastName}</h1>
        </div>
    )
}

export default UserInfo
