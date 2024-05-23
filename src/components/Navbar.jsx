"use client";
import React, { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
    
        if (targetElement) {
            const observer = new IntersectionObserver((entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    if (targetId === 'about-me') {
                        window.scrollBy({
                            top: -750,
                            behavior: 'smooth'
                        });
                    } else {
                        window.scrollBy({
                            top: -200,
                            behavior: 'smooth'
                        });
                    }
                    
                    observer.disconnect();
                }
            }, { threshold: 1.0 });
    
            observer.observe(targetElement);
    
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };
    
    


    return (
        <nav className="p-1 w-full fixed top-0 z-10">
            <div className="p-4 rounded-sm max-w-7xl mx-auto flex justify-between items-center flex-wrap bg-opacity-50 bg-background-color outline outline-[1px] outline-primary">
                <div className="flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="block md:hidden border-none outline-none cursor-pointer"
                    >
                        <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
                        <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
                        <span className="block w-5 h-0.5 bg-gray-700"></span>
                    </button>
                    <a href="#home" className="text-neutral-100 text-lg font-medium ml-3">
                        Jake's <span className="text-primary">Portfolio</span>
                    </a>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto`}>
                    <ul className="md:flex md:items-center md:justify-between w-full md:w-auto mt-4 md:mt-0">
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <a href="#home" className="text-primary hover:text-primary" onClick={(e) => handleScroll(e, '#home')}>Home</a>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <a href="#about-me" className="text-neutral-100 hover:text-primary" onClick={(e) => handleScroll(e, '#about-me')}>About</a>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <a href="#featured-projects" className="text-neutral-100 hover:text-primary" onClick={(e) => handleScroll(e, '#featured-projects')}>Featured Projects</a>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <a href="#journey" className="text-neutral-100 hover:text-primary" onClick={(e) => handleScroll(e, '#journey')}>Journey</a>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <a href="#contact-me" className="text-neutral-100 hover:text-primary" onClick={(e) => handleScroll(e, '#contact-me')}>Contact</a>
                        </li>
                        <li className="md:ml-6 mt-3 md:mt-0">
                            <a href="#" className="text-primary border border-primary px-4 pt-1 pb-2 m-2">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
