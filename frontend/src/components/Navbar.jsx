import React from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center p-4 sm:p-3 sm:px-24 absolute top-0 bg-stone-950'>
            <div className=' flex justify-center gap-1 items-center text-center'>
                <img src={assets.auth_logo} alt='' className=' w-10' />
                <h1 className=' text-2xl text-stone-300'>Authentication</h1>
            </div>
            <button className=' flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-stone-300 hover:bg-stone-400 hover:text-stone-900 cursor-pointer'>Login <img src={assets.arrow_icon} alt='' /></button>
        </div>
    )
}

export default Navbar