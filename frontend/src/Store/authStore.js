import { create } from "zustand";
import { axiosInstance } from "../lib/axios";


export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,
    isCheckingAuth: true,
    message: null,

    signup: async (email, password, name) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.post("/auth/signup", {
                email,
                password,
                name,
            });
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
        } catch (err) {
            const message = err.response?.data?.message || "Error signing up";

            set({ error: message, isLoading: false });

            throw new Error(message);
        }
    },

    login: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
            const response = await axiosInstance.post("/auth/login", {
                email,
                password,
            });

            set({
                isAuthenticated: true,
                user: response.data.user,
                error: null,
                isLoading: false,
            });

            return response.data;
        } catch (err) {
            const message = err.response?.data?.message || "Error logging in";

            set({
                error: message,
                isLoading: false,
            });

            throw new Error(message);
        }
    },

    logout: async () => {
        set({ isLoading: true, error: null });

        try {
            const response = await axiosInstance.post("/auth/logout");

            set({
                user: null,
                isAuthenticated: false,
                error: null,
                isLoading: false,
            });

            return response.data;
        } catch (err) {
            const message = err.response?.data?.message || "Error logging out";
            set({ error: message, isLoading: false });
            throw new Error(message);
        }
    },



    verifyEmail: async (code) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.post("/auth/verify-email", { code });
            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false
            });
            return response.data;
        } catch (err) {
            const message = err.response?.data?.message || "Error verifying email";
            set({ error: message, isLoading: false });
            throw new Error(message);
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
            const response = await axiosInstance.get("/auth/check-auth");
            set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
        } catch (error) {
            set({ error: null, isCheckingAuth: false, isAuthenticated: false });
        }
    },

    forgotPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.post("/auth/forgot-password", { email });
            set({
                message: response.data.message, isLoading: false
            });
        } catch (err) {
            const message = err.response?.data?.message || "Error sending reset password email";
            set({ error: message, isLoading: false });
            throw new Error(message);
        }
    },

    resetPassword: async (token, password) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axiosInstance.post(`/auth/reset-password/${token}`, { password });
            set({ message: response.data.message, isLoading: false });
        } catch (err) {
            const message = err.response?.data?.message || "Error resetting password";
            set({ error: message, isLoading: false });
            throw new Error(message);
        }
    },

    getUser: async () => {
        set({ isLoading: true });

        try {
            const response = await axiosInstance.get("/auth/me");

            set({
                user: response.data.user,
                isAuthenticated: true,
                isLoading: false,
            });

            return response.data;
        } catch {
            set({ user: null, isAuthenticated: false, isLoading: false });
        }
    },



}));