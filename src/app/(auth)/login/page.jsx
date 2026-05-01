import Link from 'next/link';
import React from 'react';
import Image from "next/image";
const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  p-4">

            <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">

                <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-700 to-indigo-600 text-white p-10 flex-col justify-between">

                    <div>
                        <h2 className="text-3xl font-bold">Book World</h2>
                        <p className="mt-2 text-sm opacity-80">
                            Discover your next favorite book
                        </p>
                    </div>

                    <Image
                        src="/login.png"
                        alt="Login Illustration"
                        className="w-full rounded-3xl py-2 h-full object-cover"
                        width={300}
                        height={300}
                    />

                    <div className="text-sm opacity-80">
                        Reading is dreaming with open eyes.
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8 sm:p-10">

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Welcome Back!
                    </h2>
                    <p className="text-gray-500 mt-1 mb-6">
                        Login to your account
                    </p>

                    <form className="space-y-5">

                        {/* Email Input Field */}
                        <div>
                            <label className="text-sm text-gray-600">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                            />
                        </div>

                        {/* Password Input Field */}
                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-600">
                                <input type="checkbox" />
                                Remember me
                            </label>

                            <a href="#" className="text-purple-600 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="button"
                            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
                        >
                            Login
                        </button>

                        <div className="text-center text-gray-400 text-sm">
                            ── or continue with ──
                        </div>

                        <button
                            type="button"
                            className="w-full py-3 rounded-xl border flex items-center justify-center gap-2 hover:bg-gray-50 transition"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google Logo"
                                className="w-5 h-5"
                            />

                            Continue with Google
                        </button>

                        <p className="text-center text-sm mt-5 text-gray-600">
                            Don’t have an account?
                            <Link href="/register" className="text-purple-600 font-medium hover:underline">
                                Register here
                            </Link>
                        </p>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default page;