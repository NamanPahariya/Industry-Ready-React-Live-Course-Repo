import React from 'react'
import TestUseRef from './TestUseRef'
import TestUseMemo from './TestUseMemo'
import Home from './Home'
import About from './About'
import TestUncontrolled from './TestUncontrolled'
import TestControlled from './TestControlled'
import { RouterProvider } from 'react-router'
import { router } from './router'
import Dashboard from './Dashboard'
import { ThemeContext, UserContext } from './Context'

const App = () => {
    // const userName = "Naman"
    // const LastName = "Sharma"
    const user = {
        userName: 'Naman',
        LastName: "Sharma"
    }
    const color = 'dark';
    return (
        <div>
            {/* <TestUseRef /> */}
            {/* <TestUseMemo /> */}
            {/* <Home />
            <About /> */}
            {/* <TestUncontrolled /> */}
            {/* <TestControlled /> */}
            {/* <RouterProvider router={router} /> */}
            <ThemeContext.Provider value={color}>
                <UserContext.Provider value={{ user }}>
                    <Dashboard />
                </UserContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}



export default App
