import React from 'react'
import { Link } from 'react-router'

function ErrorPage() {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-20'>Oops!!! </h2>
            <Link to='/' className='text-center block mt-5 text-blue-600 font-semibold'>Back to Home</Link>
        </div>
    )
}

export default ErrorPage
