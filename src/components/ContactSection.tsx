'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
    personal: {
        name: string;
        email: string;
        phone: string;
        location: string;
        github: string;
        linkedin: string;
        resumeUrl: string;
    };
}

export default function ContactSection({ personal }: ContactSectionProps) {
    const contactLinks = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email',
            value: personal.email,
            href: `mailto:${personal.email}`,
            gradient: 'from-red-500 to-orange-500',
            shadow: 'shadow-red-500/20',
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: 'Phone',
            value: personal.phone,
            href: `tel:${personal.phone}`,
            gradient: 'from-green-500 to-emerald-500',
            shadow: 'shadow-green-500/20',
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: 'LinkedIn',
            value: 'Connect with me',
            href: personal.linkedin,
            gradient: 'from-blue-500 to-blue-600',
            shadow: 'shadow-blue-500/20',
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: 'GitHub',
            value: 'View my code',
            href: personal.github,
            gradient: 'from-gray-600 to-gray-800',
            shadow: 'shadow-gray-500/20',
        },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <motion.div
                    className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                    }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                    }}
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.4, 0.6] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6"
                    >
                        <MessageCircle className="w-4 h-4 inline mr-2" />
                        Get in Touch
                    </motion.span>
                    <h2 className="section-title gradient-text">Let's Connect</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
                        I'm actively seeking a 6-month internship in Germany.
                        Let's discuss how I can contribute to your team!
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Availability badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/15 to-green-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold mb-8"
                            animate={{ boxShadow: ['0 0 20px rgba(16,185,129,0.2)', '0 0 40px rgba(16,185,129,0.4)', '0 0 20px rgba(16,185,129,0.2)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.span
                                className="w-2.5 h-2.5 bg-emerald-400 rounded-full"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <Sparkles className="w-4 h-4" />
                            Available for Internship
                        </motion.div>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            Ready to Start Your Next
                            <span className="block gradient-text mt-2">Cloud & DevOps</span>
                            <span className="block text-gray-300">Project?</span>
                        </h3>

                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Looking to bring fresh perspectives and strong technical skills to a dynamic team.
                            With experience across AWS, Kubernetes, and CI/CD pipelines, I'm ready to contribute
                            from day one.
                        </p>

                        {/* Location */}
                        <motion.div
                            className="flex items-center gap-4 text-gray-300 mb-10 p-5 glass-card rounded-2xl"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center">
                                <MapPin className="w-7 h-7 text-primary-400" />
                            </div>
                            <div>
                                <div className="font-bold text-lg">{personal.location}</div>
                                <div className="text-sm text-gray-500 flex items-center gap-2">
                                    <motion.span
                                        className="inline-block w-2 h-2 bg-emerald-400 rounded-full"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                    Valid Work Permit
                                </div>
                            </div>
                        </motion.div>

                        {/* Download Resume Button */}
                        <motion.a
                            href={personal.resumeUrl}
                            download
                            whileHover={{ scale: 1.03, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all group"
                        >
                            <Download className="w-6 h-6" />
                            Download My Resume
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </motion.span>
                        </motion.a>
                    </motion.div>

                    {/* Right: Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-5"
                    >
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
                                rel={link.label === 'Email' || link.label === 'Phone' ? undefined : 'noopener noreferrer'}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="glass-card rounded-2xl p-7 group"
                            >
                                <motion.div
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${link.gradient} flex items-center justify-center text-white mb-5 shadow-lg ${link.shadow} group-hover:scale-110 transition-transform`}
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                >
                                    {link.icon}
                                </motion.div>
                                <div className="text-white font-bold text-lg mb-1">{link.label}</div>
                                <div className="text-gray-400 text-sm truncate">{link.value}</div>

                                {/* Hover gradient */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${link.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-20 pt-16 border-t border-white/5"
                >
                    <p className="text-gray-500 mb-4 text-lg">
                        Prefer email? Write to me directly at
                    </p>
                    <motion.a
                        href={`mailto:${personal.email}`}
                        className="text-2xl md:text-4xl font-black gradient-text hover:opacity-80 transition-opacity inline-block"
                        whileHover={{ scale: 1.02 }}
                    >
                        {personal.email}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
