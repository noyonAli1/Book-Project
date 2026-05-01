


import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div class="min-h-screen flex items-center justify-center  p-4">


            <div class="flex w-full max-w-5xl bg-white backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">


                <div class="hidden md:flex w-1/2 bg-gradient-to-br from-purple-700 to-indigo-600 p-10 items-center justify-center relative">


                    <img
                        src="/reg.png"
                        className="w-full rounded-3xl py-2 h-full object-cover"
                    />


                </div>

                <div class="w-full md:w-1/2 p-8 sm:p-10">


                    <h2 class="text-3xl font-bold text-gray-800">
                        Create Account
                    </h2>
                    <p class="text-gray-500 mt-1 mb-6">
                        Join Book World today
                    </p>


                    <form class="space-y-4">


                        <div>
                            <label class="text-sm text-gray-600">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                class="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition hover:shadow-md"
                            />
                        </div>


                        <div>
                            <label class="text-sm text-gray-600">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition hover:shadow-md"
                            />
                        </div>


                        <div>
                            <label class="text-sm text-gray-600">Photo URL</label>
                            <input
                                type="text"
                                placeholder="Enter photo URL"
                                class="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition hover:shadow-md"
                            />
                        </div>


                        <div>
                            <label class="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Create a password"
                                class="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition hover:shadow-md"
                            />
                        </div>


                        <button
                            type="button"
                            class="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02] hover:shadow-lg transition duration-300"
                        >
                            Register
                        </button>

                        <div class="text-center text-gray-400 text-sm">
                            ── or continue with ──
                        </div>


                        <button
                            type="button"
                            class="w-full py-3 rounded-xl border flex items-center justify-center gap-2 hover:bg-gray-50 hover:shadow transition"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                class="w-5 h-5"
                            />
                            Continue with Google
                        </button>


                        <p class="text-center text-sm text-gray-600 mt-4">
                            Already have an account?
                            <Link href="/login" class="text-purple-600 font-medium hover:underline">
                                Login here
                            </Link>
                        </p>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default page;