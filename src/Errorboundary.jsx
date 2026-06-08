import React from 'react'

const Errorboundary = ({ error, resetErrorBoundary }) => {
    return (
        <div>
            <h1>Something went wrong...</h1>
            <h2>{error.message}</h2>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}

export default Errorboundary
