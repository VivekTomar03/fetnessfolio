'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Media', href: '#media' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Plans', href: '#training-plans' },
        { name: 'Social', href: '#social' },
        { name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <motion.a href="#home" className="flex items-center gap-3 group" whileHover={{ scale: 1.05 }} onClick={(e) => handleClick(e, '#home')}>
                            <div className="relative w-12 h-12">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                                    <div className="w-full h-full rounded-full bg-dark-light flex items-center justify-center">
                                        <span className="text-lg font-bold text-white">AS</span>
                                    </div>
                                </div>
                                <svg className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 text-primary group-hover:text-secondary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                                </svg>
                                <svg className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 text-primary group-hover:text-secondary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                                </svg>
                                <motion.div className="absolute inset-0 bg-primary/20 rounded-full blur-lg" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ABHISHEK</span>
                        </motion.a>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <motion.a key={link.name} href={link.href} onClick={(e) => handleClick(e, link.href)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSection === link.href.substring(1) ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'text-gray hover:text-white'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <motion.button className="md:hidden text-white z-50" whileTap={{ scale: 0.9 }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} />
                        <motion.div className="fixed top-0 right-0 bottom-0 w-64 bg-dark-light border-l border-white/10 z-40 md:hidden" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}>
                            <div className="flex flex-col gap-2 p-6 pt-24">
                                {navLinks.map((link, index) => (
                                    <motion.a key={link.name} href={link.href} onClick={(e) => handleClick(e, link.href)} className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${activeSection === link.href.substring(1) ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'text-gray hover:text-white hover:bg-white/5'}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} whileTap={{ scale: 0.95 }}>
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
