import React, { lazy, Suspense, useMemo, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import Errorboundary from './Errorboundary';
// import Navbar from './Navbar'

const Navbar = lazy(() => import('./Navbar'))

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
            <ErrorBoundary FallbackComponent={Errorboundary} onReset={() => { window.location.reload() }}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Navbar userName={user} />
                </Suspense>
            </ErrorBoundary>
            <button onClick={() => setCount(count + 1)}>CLick Me</button>
        </div>
    )
}

export default Dashboard
