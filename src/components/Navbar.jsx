"use client";
import React, { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-1 w-full" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
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
                    <a href="#" className="text-neutral-100 text-lg font-medium ml-3">
                        Jake's <span className="text-primary">Portfolio</span>
                    </a>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto`}>
                    <ul className="md:flex md:items-center md:justify-between w-full md:w-auto mt-4 md:mt-0">
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-primary hover:text-primary">Home</a></li>
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-neutral-100 hover:text-primary">About</a></li>
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-neutral-100 hover:text-primary">Favorite Projects</a></li>
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-neutral-100 hover:text-primary">Journey</a></li>
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-neutral-100 hover:text-primary">Contact</a></li>
                        <li className="md:ml-6 mt-3 md:mt-0"><a href="#" className="text-primary border border-primary px-4 pt-1 pb-2 m-2">Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
