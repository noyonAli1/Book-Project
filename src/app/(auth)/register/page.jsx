
"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const page = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;
        console.log({ name, email, password, photoURL });



        const { data, error } = await authClient.login.email({
            email,
            password,
            name,
            photoURL
        })
        console.log({ data, error });

    };

    return (
        <div className="min-h-screen flex items-center justify-center  p-4">


            <div className="flex w-full max-w-5xl bg-white backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">


                <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-700 to-indigo-600 p-10 items-center">


                    <img
                        src="/reg.png"
                        className="w-full rounded-3xl py-2 h-full object-cover"
                    />


                </div>

                <div className="w-full md:w-1/2 p-8 sm:p-10">


                    <h2 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h2>
                    <p className="text-gray-500 mt-1 mb-6">
                        Join Book World today
                    </p>


                    <form className="space-y-4">


                        <div>
                            <label className="text-sm text-gray-600">Full Name</label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition hover:shadow-md"
                            />
                        </div>


                        <div>
                            <label className="text-sm text-gray-600">Email Address</label>
                            <input
                                name='email'
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition hover:shadow-md"
                            />
                        </div>


                        <div>
                            <label className="text-sm text-gray-600">Photo URL</label>
                            <input
                                name='photoURL'
                                type="text"
                                placeholder="Enter photo URL"
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition hover:shadow-md"
                            />
                        </div>


                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Create a password"
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition hover:shadow-md"
                            />
                        </div>


                        <button
                            onSubmit={onSubmit}
                            type="submit"
                            className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600"
                        >
                            Register
                        </button>

                        <div className="text-center text-gray-400 text-sm">
                            ── or continue with ──
                        </div>


                        <button
                            type="button"
                            className="w-full py-3 rounded-xl border flex items-center justify-center gap-2 hover:bg-gray-50 hover:shadow transition"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>


                        <p className="text-center text-sm text-gray-600 mt-4">
                            Already have an account?
                            <Link href="/login" className="text-purple-600 font-medium hover:underline">
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