'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['about', 'experience', 'education', 'projects', 'certifications', 'contact'];
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && element.getBoundingClientRect().top <= 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'py-2'
                    : 'py-4'
                }`}
        >
            {/* Glass background */}
            <motion.div
                className={`absolute inset-0 transition-all duration-500 ${scrolled
                        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
                        : 'bg-transparent'
                    }`}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 z-10"
                    >
                        <motion.div
                            className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/25"
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            AJ
                        </motion.div>
                        <span className="hidden sm:block text-xl font-bold">
                            <span className="gradient-text">Ahmed</span>
                            <span className="text-white"> Jemaa</span>
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-lg rounded-full px-2 py-2 border border-white/5">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {/* Active background */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Right side: Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Social links */}
                        <div className="flex items-center gap-1">
                            {[
                                { icon: Github, href: portfolioData.personal.github, label: 'GitHub' },
                                { icon: Linkedin, href: portfolioData.personal.linkedin, label: 'LinkedIn' },
                                { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: 'Email' },
                            ].map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={label !== 'Email' ? '_blank' : undefined}
                                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2.5 text-gray-400 hover:text-primary-400 transition-colors rounded-xl hover:bg-white/5"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Resume Button */}
                        <motion.a
                            href={portfolioData.personal.resumeUrl}
                            download
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-xl hover:from-primary-400 hover:to-primary-500 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                        >
                            <Download size={16} />
                            Resume
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2.5 text-gray-300 hover:text-primary-400 transition-colors rounded-xl hover:bg-white/5 z-10"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden mt-4 overflow-hidden"
                        >
                            <div className="glass-card rounded-2xl p-4">
                                <div className="flex flex-col gap-2">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === item.href.slice(1)
                                                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {item.name}
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/5">
                                    {[
                                        { icon: Github, href: portfolioData.personal.github },
                                        { icon: Linkedin, href: portfolioData.personal.linkedin },
                                        { icon: Mail, href: `mailto:${portfolioData.personal.email}` },
                                    ].map(({ icon: Icon, href }, index) => (
                                        <motion.a
                                            key={index}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 text-gray-400 hover:text-primary-400 bg-white/5 rounded-xl transition-all"
                                        >
                                            <Icon size={20} />
                                        </motion.a>
                                    ))}
                                    <motion.a
                                        href={portfolioData.personal.resumeUrl}
                                        download
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-xl"
                                    >
                                        <Download size={16} />
                                        Resume
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
