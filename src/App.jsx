import React, { useState } from 'react'
import UserDetails from './UserDetails'
import Card from './Card'
import State from './State'
import TestUseEffect from './TestUseEffect'

const App = () => {

    const [show, setShow] = useState(true);



    // function clicked() {
    //     console.log("I am a function")
    //     alert("clicked")
    // }
    const handleVisibility = () => {
        setShow(!show)
    }

    return (
        <div>
            {/* we can pass the properties(props) in the component like this: */}
            {/* <UserDetails name='Naman' LastName='Sharma' number={12345} info={{ accountNumber: 1234, IFSC: 4567 }} clicked={clicked} /> */}
            {/* <UserDetails name='Rahul' /> */}

            {/* we can pass the children as a properties(props) in the component like this: */}
            {/* <Card>
                <h1>Amazon Card</h1>
                <button>Buy now</button>
            </Card>
            <Card>
                <h1>Netflix Card</h1>
                <button>Play now</button>
                <button> Watch later</button>
            </Card> */}

            {/* <State /> */}
            {show && <TestUseEffect />}
            <br /><br />

            <button onClick={handleVisibility}>Show me!</button>

        </div>
    )
}

export default App

