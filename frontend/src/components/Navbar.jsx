import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';


const Navbar = () => {

    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useAuthStore();


    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logged out successfully");
        } catch {
            toast.error("Logout failed");
        }
    };


    return (
        <div className='w-full flex justify-between items-center p-4 sm:p-3 sm:px-24 absolute top-0 bg-stone-950'>
            <div className=' flex justify-center gap-1 items-center text-center'>
                <img src={assets.auth} alt='' className=' w-[200px] filter brightness-50 invert' />
                {/* <h1 className=' text-2xl text-stone-300'>Authentication</h1> */}
            </div>

            {!isAuthenticated ? (
                <button
                    onClick={() => navigate('/signup')}
                    className='flex items-center gap-2 border-none bg-stone-800 rounded-full px-6 py-2 text-stone-300 hover:bg-stone-300 hover:text-stone-900 font-semibold cursor-pointer'>
                    Login <FaArrowRightLong size={14} />
                </button>
            ) : (
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 bg-stone-700 text-white flex items-center justify-center rounded-full font-bold">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>

                    <button
                        onClick={handleLogout}
                        className="text-sm bg-red-600 px-4 py-1.5 rounded-full text-white hover:bg-red-700 cursor-pointer">
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}

export default Navbar