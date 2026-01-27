import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useAuthStore();

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = async () => {
        try {
            const res = await logout();
            toast.success(res?.message || "Logged out successfully");
            setOpen(false);
        } catch (err) {
            toast.error(err.message || "Logout failed");
        }
    };


    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className='w-full flex justify-between items-center p-4 sm:p-3 sm:px-24 absolute top-0 bg-blue-950'>
            <div className='flex justify-center gap-1 items-center text-center'>
                <img src={assets.authLogo} alt='' className='w-10 ' />
                <h1 className=' text-white text-2xl font-bold italic'>DevAuth</h1>
            </div>

            {!isAuthenticated ? (
                <button
                    onClick={() => navigate('/signup')}
                    className='flex items-center gap-2 border-none bg-blue-800 rounded-full px-6 py-2 text-blue-100 hover:bg-blue-200 hover:text-blue-900 font-semibold cursor-pointer'>
                    Login <FaArrowRightLong size={14} />
                </button>
            ) : (
                <div className="relative" ref={dropdownRef}>
                    {/* Avatar */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="w-10 h-10 bg-blue-700 text-white flex items-center justify-center rounded-full font-bold cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
                    >
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute right-0 mt-2 w-20 bg-blue-100 rounded-xl shadow-lg border border-blue-700 overflow-hidden">
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-800 hover:text-white transition cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
