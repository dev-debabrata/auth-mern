import React, { useState } from 'react'
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Input from '../components/Input';
import { FiLoader, FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import PasswordStrength from '../components/PasswordStrength';
import { useAuthStore } from '../store/authStore';
import { assets } from '../assets/assets'



const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { signup, error, isLoading } = useAuthStore();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await signup(email, password, name);
            toast.success("Account created! Please verify your email.");
            navigate("/verify-email");
        } catch (err) {
            toast.error(err.message || "Signup failed");
        }
    };
    return (
        <>
            <button
                onClick={() => navigate('/')}
                className="absolute top-4 left-4 sm:top-8 sm:left-20 flex items-center gap-1 z-50 cursor-pointer">
                <img src={assets.authLogo} alt='' className='w-12 ' />
            </button>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=' max-w-md w-full bg-blue-900 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
                <div className="p-8">
                    <h2
                        className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-200 to-gray-500 text-transparent bg-clip-text'>
                        Create Account</h2>

                    <form onSubmit={handleSignup}>
                        <Input
                            icon={FiUser}
                            type="text"
                            placeholder='Full Name'
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)} />
                        <Input
                            icon={MdOutlineEmail}
                            type="email"
                            placeholder='Email Address'
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)} />
                        <Input
                            icon={LuLock}
                            type="password"
                            placeholder='Password'
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)} />
                        {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

                        {/* password strength meter */}
                        <PasswordStrength password={password} />
                        <motion.button
                            className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-blue-400 to-gray-500 
						font-bold rounded-lg shadow-lg hover:from-blue-500 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer'
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type='submit'
                        >
                            {isLoading ? <FiLoader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
                        </motion.button>
                    </form>
                </div>
                <div className='px-8 py-4 bg-blue-950 bg-opacity-50 flex justify-center'>
                    <p className='text-sm text-gray-300'>
                        Already have an account?{" "}
                        <Link to={"/login"} className='text-blue-500 hover:underline hover:text-blue-300'>
                            Login
                        </Link>
                    </p>
                </div>
            </motion.div>
        </>
    )
}

export default SignUpPage