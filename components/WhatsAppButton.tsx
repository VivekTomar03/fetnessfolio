'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);

    const whatsappNumber = '919876543210';
    const message = encodeURIComponent("Hi Abhishek, I'm interested in your fitness coaching programs!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Chat on WhatsApp"
        >
            <div className="relative">
                {/* Tooltip */}
                <div
                    className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-dark px-4 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
                        }`}
                >
                    <span className="font-semibold">Chat with me on WhatsApp</span>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
                </div>

                {/* Button */}
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse">
                    💬
                </div>

                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
                    1
                </div>
            </div>
        </a>
    );
}
