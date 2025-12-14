'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';

interface FooterProps {
    personal: {
        name: string;
        email: string;
        github: string;
        linkedin: string;
    };
}

export default function Footer({ personal }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-16 border-t border-white/5">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left: Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-3 text-2xl font-black mb-3"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold text-lg">
                                AJ
                            </div>
                            <span>
                                <span className="gradient-text">Ahmed</span>
                                <span className="text-white"> Jemaa</span>
                            </span>
                        </motion.a>
                        <p className="text-gray-500 text-sm">
                            Cloud & DevOps Engineer
                        </p>
                    </motion.div>

                    {/* Center: Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3"
                    >
                        {[
                            { icon: Github, href: personal.github, label: 'GitHub' },
                            { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                            { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={label !== 'Email' ? '_blank' : undefined}
                                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3.5 text-gray-400 hover:text-primary-400 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-primary-500/30"
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Right: Back to Top */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onClick={scrollToTop}
                        whileHover={{ y: -5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-3 text-gray-400 hover:text-primary-400 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-primary-500/30 font-medium"
                    >
                        <span className="text-sm">Back to Top</span>
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowUp size={16} />
                        </motion.div>
                    </motion.button>
                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom: Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
                >
                    <p className="flex items-center gap-2">
                        © {currentYear} {personal.name}. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2">
                        Built with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Heart size={14} className="text-red-500 fill-red-500" />
                        </motion.span>
                        using
                        <Code2 size={14} className="text-primary-400" />
                        <span className="text-gray-400">Next.js & TailwindCSS</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
