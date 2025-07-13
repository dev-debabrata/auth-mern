import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { MdOutlineEmail } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";



const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { isLoading, forgotPassword } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
        setIsSubmitted(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full bg-stone-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
        >
            <div className='p-8'>
                <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-stone-200 to-gray-500 text-transparent bg-clip-text'>
                    Forgot Password
                </h2>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <p className='text-stone-300 mb-6 text-center'>
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                        <Input
                            icon={MdOutlineEmail}
                            type='email'
                            placeholder='Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='w-full py-3 px-4 bg-gradient-to-r from-stone-400 to-gray-500 font-bold rounded-lg shadow-lg hover:from-stone-500
						    hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
                            type='submit'
                        >
                            {isLoading ? <FiLoader className='size-6 animate-spin mx-auto' /> : "Send Reset Link"}
                        </motion.button>
                    </form>
                ) : (
                    <div className='text-center'>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className='w-16 h-16 bg-stone-500 rounded-full flex items-center justify-center mx-auto mb-4'
                        >
                            <MdOutlineEmail className='h-8 w-8 text-white' />
                        </motion.div>
                        <p className='text-gray-300 mb-6'>
                            If an account exists for {email}, you will receive a password reset link shortly.
                        </p>
                    </div>
                )}
            </div>

            <div className='px-8 py-4 bg-stone-950 bg-opacity-50 flex justify-center'>
                <Link to={"/login"} className='text-sm text-stone-200 hover:underline flex items-center'>
                    <FaArrowRightLong className='h-4 w-4 mr-2' /> Back to Login
                </Link>
            </div>
        </motion.div>
    );
};
export default ForgotPasswordPage;