import React from 'react'
import { useOutletContext } from 'react-router'

const Career = () => {
    const userName = useOutletContext();
    return (
        <div>
            <h1 className='text-3xl'>Career Page {userName}</h1>
        </div>
    )
}

export default Career
