import React, { useMemo, useState } from 'react'
import Navbar from './Navbar'

const Dashboard = () => {
    const [count, setCount] = useState(0);



    const user = useMemo(() => {
        return {
            userName: "naman",
            age: 23,
        }
    }, [])
    return (
        <div>
            <h1>Dashboard Page</h1>
            <h1>{count}</h1>
            <Navbar userName={user} />
            <button onClick={() => setCount(count + 1)}>CLick Me</button>
        </div>
    )
}

export default Dashboard
