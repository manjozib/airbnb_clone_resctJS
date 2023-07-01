import React from "react";
import logo from '../image/logo.png';

export default function Navbar() {
    return(
        <div className="flex justify-between mt-6 border-b-2">
            <div className="">
                <img src="../image/logo.png" alt="logo" className="w-full h-full"></img>
            </div>
            <div className="border rounded-full hover:shadow-lg">
                <div className="flex gap-2 p-2">
                    <button className="border-r-2 pr-8">
                        Anywhere
                    </button>
                    <button className="border-r-2 pr-8">
                        Any week
                    </button>
                    <div>
                        <p>Add Guest</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex gap-1">
                    <button className="rounded-full text-sm font-semibold hover:bg-gray-50 p-3">Airbnb your home</button>
                    <button className="rounded-2xl hover:bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                        </svg>
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full hover:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>

                        </button>
                </div>
            </div>
        </div>
    )
}