import React, { useEffect, useState } from 'react'
import useApiData from './useApiData'

const About = () => {

    const data = useApiData(`https://jsonplaceholder.typicode.com/todos/2`)

    return (
        <div>
            <h1>About Component</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default About
