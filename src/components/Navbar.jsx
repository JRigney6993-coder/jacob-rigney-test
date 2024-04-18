"use client";
import React, { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" shadow-md p-1 w-full">
            <div className="p-4 rounded-xl max-w-7xl mx-auto flex justify-between items-center flex-wrap">
                <div className="flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="block md:hidden border-none outline-none cursor-pointer"
                    >
                        <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
                        <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
                        <span className="block w-5 h-0.5 bg-gray-700"></span>
                    </button>
                    <a href="#" className="text-gray-800 text-lg font-medium ml-3">
                        Temp <span className="text-blue-600">Nav</span>
                    </a>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto`}>
                    <ul className="md:flex md:items-center md:justify-between w-full md:w-auto mt-4 md:mt-0">
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-gray-800 hover:text-blue-600">Home</a></li>
                        
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-gray-800 hover:text-blue-600">About</a></li>
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-gray-800 hover:text-blue-600">Contact</a></li>
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-gray-800 hover:text-blue-600">Signin</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
