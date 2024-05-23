"use client";
import React, { useState } from 'react';
import ScrollHandler from '@/components/ScrollHandler';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-1 w-full fixed top-0 z-10">
            <div className="p-4 rounded-sm max-w-7xl mx-auto flex justify-between items-center flex-wrap bg-opacity-50 bg-background-color outline outline-[1px] outline-primary">
                <div className="flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="block md:hidden border-none outline-none cursor-pointer"
                    >
                        <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
                        <span className="block w-5 h-0.5 bg-gray-700 -1"></span>
mb                        <span className="block w-5 h-0.5 bg-gray-700"></span>
                    </button>
                    <a href="#home" className="text-neutral-100 text-lg font-medium ml-3">
                        Jake&#39;s <span className="text-primary">Portfolio</span>
                    </a>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto`}>
                    <ul className="md:flex md:items-center md:justify-between w-full md:w-auto mt-4 md:mt-0">
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <ScrollHandler targetId="#home">
                                <a href="#home" className="text-primary hover:text-primary">Home</a>
                            </ScrollHandler>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <ScrollHandler targetId="#about-me">
                                <a href="#about-me" className="text-neutral-100 hover:text-primary">About</a>
                            </ScrollHandler>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <ScrollHandler targetId="#featured-projects">
                                <a href="#featured-projects" className="text-neutral-100 hover:text-primary">Featured Projects</a>
                            </ScrollHandler>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <ScrollHandler targetId="#journey">
                                <a href="#journey" className="text-neutral-100 hover:text-primary">Journey</a>
                            </ScrollHandler>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <ScrollHandler targetId="#contact-me">
                                <a href="#contact-me" className="text-neutral-100 hover:text-primary">Contact</a>
                            </ScrollHandler>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                        <a href="https://www.canva.com/design/DAF5m9wiwCY/42VVKEG7kuNpWdLfILpFWQ/edit?utm_content=DAF5m9wiwCY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="text-primary border border-primary px-4 pt-1 pb-2 m-2">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
