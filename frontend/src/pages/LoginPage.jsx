import React, { useState } from 'react'
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';



const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isLoading = false;

    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full bg-stone-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>

            <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r  from-stone-200 to-gray-500 text-transparent bg-clip-text">
                    Welcome Back
                </h2>
                <form onSubmit={handleLogin}>
                    <Input
                        icon={MdOutlineEmail}
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        icon={LuLock}
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className='flex items-center mb-6'>
                        <Link to='/forgot-password' className='text-sm text-stone-200 hover:underline'>
                            Forgot password?
                        </Link>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='w-full py-3 px-4 bg-gradient-to-r from-stone-400 to-gray-500 font-bold rounded-lg shadow-lg hover:from-stone-500
						hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
                        type='submit'
                        disabled={isLoading}
                    >
                        {isLoading ? <FiLoader className='w-6 h-6 animate-spin  mx-auto' /> : "Login"}
                    </motion.button>
                </form>
            </div>
            <div className='px-8 py-4 bg-stone-950 bg-opacity-50 flex justify-center'>
                <p className='text-sm text-gray-400'>
                    Don't have an account?{" "}
                    <Link to={"/signup"} className='text-stone-200 hover:underline'>
                        Sign Up
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};

export default LoginPage