import React from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center p-4 sm:p-3 sm:px-24 absolute top-0 bg-gray-100'>
            <div className=' flex justify-center items-center text-center'>
                <img src={assets.auth_logo} alt='' className=' w-12' />
                <h1 className=' text-3xl'>Auth</h1>
            </div>
            <button className=' flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100'>Login <img src={assets.arrow_icon} alt='' /></button>
        </div>
    )
}

export default Navbar