import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { LuLock } from "react-icons/lu";
import toast from "react-hot-toast";



const ResetPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { resetPassword, error, isLoading, message } = useAuthStore();

    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            await resetPassword(token, password);

            toast.success("Password reset successfully, redirecting to login page...");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            console.error(error);
            toast.error(error.message || "Error resetting password");
        }
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
                    Reset Password
                </h2>
                {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
                {message && <p className='text-stone-500 text-sm mb-4'>{message}</p>}

                <form onSubmit={handleSubmit}>
                    <Input
                        icon={LuLock}
                        type='password'
                        placeholder='New Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Input
                        icon={LuLock}
                        type='password'
                        placeholder='Confirm New Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='w-full py-3 px-4 bg-gradient-to-r from-stone-400 to-gray-500 font-bold rounded-lg shadow-lg hover:from-stone-500 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
                        type='submit'
                        disabled={isLoading}
                    >
                        {isLoading ? "Resetting..." : "Set New Password"}
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};
export default ResetPasswordPage;