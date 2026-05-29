import React, { useEffect } from 'react'
import useApiData from './useApiData'

const Home = () => {
    const data = useApiData(`https://jsonplaceholder.typicode.com/todos/1`)

    return (
        <div>
            <h1>Home Component</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default Home
