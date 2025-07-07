import React from 'react'
import { assets } from '../assets/assets'
// import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className=' flex items-center justify-center py-12'>
            <div className=' flex flex-col mt-20 px-4 text-stone-800 items-center text-center'>
                <img src={assets.header_img} alt="" className=" w-50 h-47 rounded-full mb-6" />
                <h1 className=' text-3xl font-extrabold flex items-center gap-2 mb-2'>Hey Developer</h1>
                <h2 className=' text-3xl sm:text-5xl font-bold mb-4'>Welcome to our app</h2>
                <p className=' mb-8 max-w-md'>Let's start with a quick product tour and we will have you up and running in no time!</p>
                <button className='border-none bg-stone-800 rounded-full px-6 py-2.5 text-stone-300 hover:bg-stone-400 hover:text-stone-900 font-semibold cursor-pointer transition-all'>Get Started</button>
            </div>
        </div>
    )
}

export default Header