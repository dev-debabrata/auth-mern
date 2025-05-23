import React from 'react'

const signUpPage = () => {
    const handleSignup = (e) => {
        e.preventDefault();
    }
    return (
        <div className=' p-8'>
            <h2
                className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500'>
                Create Account</h2>

            <form onSubmit={handleSignup}>

            </form>
        </div>
    )
}

export default signUpPage