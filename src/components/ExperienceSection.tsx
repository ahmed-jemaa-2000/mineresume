'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight, Building2 } from 'lucide-react';

interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

interface ExperienceSectionProps {
    experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <motion.div
                className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
                    filter: 'blur(80px)',
                }}
            />

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
                        Career Journey
                    </motion.span>
                    <h2 className="section-title gradient-text">Work Experience</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
                        Hands-on experience in cloud computing, DevOps, and full-stack development
                        across diverse industries.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5">
                        <motion.div
                            className="w-full h-full bg-gradient-to-b from-primary-500 via-accent-500 to-transparent"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            style={{ transformOrigin: 'top' }}
                        />
                    </div>

                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative mb-16 pl-20 md:pl-0 ${index % 2 === 0
                                    ? 'md:pr-[52%] md:text-right'
                                    : 'md:pl-[52%] md:text-left'
                                }`}
                        >
                            {/* Timeline dot */}
                            <motion.div
                                className={`absolute top-2 left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-10`}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                            >
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-4 border-slate-900 shadow-lg shadow-primary-500/50" />
                                <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary-400 animate-ping opacity-30" />
                            </motion.div>

                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -6, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="glass-card rounded-2xl p-8 relative group"
                            >
                                {/* Gradient border on top */}
                                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-2xl`} />

                                {/* Header */}
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                    <motion.div
                                        className="flex items-center gap-2 text-primary-400 text-sm font-semibold mb-3"
                                        whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                                    >
                                        <Calendar size={16} />
                                        {exp.period}
                                    </motion.div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                                        {exp.title}
                                    </h3>

                                    <div className={`flex items-center gap-3 text-gray-300 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="flex items-center gap-2">
                                            <Building2 size={16} className="text-primary-500" />
                                            <span className="font-semibold">{exp.company}</span>
                                        </div>
                                        <span className="text-gray-600">•</span>
                                        <div className="flex items-center gap-1.5 text-gray-500">
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`text-gray-400 mt-5 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <ul className={`mt-5 space-y-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                    {exp.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className={`flex items-start gap-2 text-gray-300 text-sm leading-relaxed ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                                }`}
                                        >
                                            <ChevronRight size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                                            <span>{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className={`flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                    {exp.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={tech}
                                            className="tag"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + techIndex * 0.05 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
