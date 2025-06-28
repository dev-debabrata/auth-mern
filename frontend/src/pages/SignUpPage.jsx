import React from 'react'
import FloatingShape from '../components/FloatingShape';


const signUpPage = () => {
    const handleSignup = (e) => {
        e.preventDefault();
    }
    return (
        <div className=' min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden p-8'>
            <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
            <FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
            <FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />
            <h2
                className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500'>
                Create Account</h2>

            <form onSubmit={handleSignup}>

            </form>
        </div>
    )
}

export default signUpPage