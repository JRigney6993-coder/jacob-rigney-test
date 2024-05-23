import React from 'react';

const ScrollHandler = ({ targetId, children }) => {
    const handleScroll = (e) => {
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
    };

    return (
        <div onClick={handleScroll}>
            {children}
        </div>
    );
};

export default ScrollHandler;