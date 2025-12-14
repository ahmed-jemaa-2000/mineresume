'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin, Sparkles, Download, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import TypewriterText from './TypewriterText';

interface HeroSectionProps {
    data: {
        name: string;
        title: string;
        subtitle: string;
        bio: string;
        location: string;
        email: string;
        phone: string;
        github: string;
        linkedin: string;
        resumeUrl: string;
    };
}

export default function HeroSection({ data }: HeroSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const scrollToNext = () => {
        const nextSection = document.getElementById('about');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const nameLetters = data.name.split('');

    return (
        <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid opacity-40" />

                {/* Gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.6, 0.4, 0.6],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
            >
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
                        className="relative"
                    >
                        {/* Outer glow ring */}
                        <motion.div
                            className="absolute -inset-4 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #06b6d4)',
                                opacity: 0.3,
                                filter: 'blur(20px)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Animated ring */}
                        <motion.div
                            className="absolute -inset-1 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
                                padding: '3px',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Profile container */}
                        <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 p-1 animate-pulse-glow">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 flex items-center justify-center overflow-hidden border-2 border-slate-700/50">
                                {/* Placeholder with gradient */}
                                <div className="w-full h-full bg-gradient-to-br from-primary-600/80 via-primary-700/90 to-slate-800 flex items-center justify-center relative">
                                    <span className="text-6xl md:text-8xl font-black text-white/95 tracking-tight">
                                        {data.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                    {/* Shine effect */}
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                                        }}
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                    />
                                </div>
                                {/* Uncomment when you add your photo */}
                                {/* <Image
                  src="/profile.jpg"
                  alt={data.name}
                  fill
                  className="object-cover"
                  priority
                /> */}
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.8, type: 'spring' }}
                            className="absolute -bottom-4 -right-4 md:bottom-2 md:-right-2"
                        >
                            <motion.div
                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-bold rounded-full shadow-xl shadow-emerald-500/30"
                                whileHover={{ scale: 1.05, y: -2 }}
                                animate={{
                                    boxShadow: [
                                        '0 10px 40px rgba(16, 185, 129, 0.3)',
                                        '0 10px 60px rgba(16, 185, 129, 0.5)',
                                        '0 10px 40px rgba(16, 185, 129, 0.3)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles size={18} />
                                Open to Work
                            </motion.div>
                        </motion.div>

                        {/* Decoration dots */}
                        <motion.div
                            className="absolute -top-8 -left-8 w-4 h-4 rounded-full bg-primary-400/60"
                            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-6 left-8 w-3 h-3 rounded-full bg-accent-400/50"
                            animate={{ y: [0, -8, 0], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            {/* Seeking internship badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500/15 to-accent-500/10 border border-primary-500/30 rounded-full text-primary-300 text-sm font-semibold backdrop-blur-sm"
                            >
                                <motion.span
                                    className="w-2.5 h-2.5 bg-primary-400 rounded-full"
                                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                {data.subtitle}
                            </motion.div>

                            {/* Name with letter animation */}
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight"
                            >
                                <span className="text-gray-300">Hi, I'm </span>
                                <span className="inline-block">
                                    {nameLetters.map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            className="inline-block gradient-text"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.05, type: 'spring' }}
                                            whileHover={{ scale: 1.1, rotate: [-2, 2, 0] }}
                                        >
                                            {letter === ' ' ? '\u00A0' : letter}
                                        </motion.span>
                                    ))}
                                </span>
                            </motion.h1>

                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-2xl md:text-3xl font-bold text-gray-300"
                            >
                                <TypewriterText
                                    texts={[
                                        data.title,
                                        'Cloud Automation Enthusiast',
                                        'AWS & Kubernetes Practitioner',
                                        'CI/CD Pipeline Builder',
                                    ]}
                                    typingSpeed={70}
                                    deletingSpeed={40}
                                    pauseDuration={2500}
                                />
                            </motion.h2>

                            {/* Bio */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="text-lg text-gray-400 max-w-2xl leading-relaxed"
                            >
                                {data.bio}
                            </motion.p>

                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="flex items-center justify-center lg:justify-start gap-3 text-gray-400"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary-400" />
                                    <span className="font-medium">{data.location}</span>
                                </div>
                                <span className="text-gray-600">•</span>
                                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                    <motion.span
                                        className="inline-block w-2 h-2 bg-emerald-400 rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                    Valid Work Permit
                                </span>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
                            >
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary flex items-center gap-2 text-base"
                                >
                                    <Mail size={18} />
                                    Get in Touch
                                    <ExternalLink size={14} className="opacity-70" />
                                </motion.a>
                                <motion.a
                                    href={data.resumeUrl}
                                    download
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-secondary flex items-center gap-2 text-base"
                                >
                                    <Download size={18} />
                                    Download Resume
                                </motion.a>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 }}
                                className="flex items-center justify-center lg:justify-start gap-3 pt-4"
                            >
                                {[
                                    { icon: Github, href: data.github, label: 'GitHub' },
                                    { icon: Linkedin, href: data.linkedin, label: 'LinkedIn' },
                                    { icon: Mail, href: `mailto:${data.email}`, label: 'Email' },
                                    { icon: Phone, href: `tel:${data.phone}`, label: 'Phone' },
                                ].map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target={label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
                                        rel={label === 'GitHub' || label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                                        whileHover={{ scale: 1.15, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3.5 text-gray-400 hover:text-primary-400 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-primary-500/30"
                                    >
                                        <Icon size={22} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        onClick={scrollToNext}
                        className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group"
                    >
                        <span className="text-sm font-medium opacity-70 group-hover:opacity-100">Scroll Down</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        >
                            <ArrowDown className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
