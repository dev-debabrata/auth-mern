import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex justify-between items-center p-4 sm:p-3 sm:px-24 absolute top-0 bg-stone-950'>
            <div className=' flex justify-center gap-1 items-center text-center'>
                <img src={assets.auth} alt='' className=' w-[200px] filter brightness-50 invert' />
                {/* <h1 className=' text-2xl text-stone-300'>Authentication</h1> */}
            </div>
            <button
                onClick={() => navigate('/signup')}
                className=' flex items-center gap-2 border-none bg-stone-800 rounded-full px-6 py-2 text-stone-300 hover:bg-stone-300 hover:text-stone-900 font-semibold cursor-pointer'>
                Login<FaArrowRightLong size={14} />
            </button>
        </div>
    )
}

export default Navbar