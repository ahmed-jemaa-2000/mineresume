'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Calendar, Star } from 'lucide-react';

interface Education {
    id: number;
    institution: string;
    location: string;
    degree: string;
    period: string;
    status: string;
    highlight: string;
}

interface EducationSectionProps {
    education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <motion.div
                className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
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
                        className="inline-block px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-6"
                    >
                        Academic Background
                    </motion.span>
                    <h2 className="section-title gradient-text-accent">Education</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
                        Academic journey spanning Tunisia and Germany, building a strong foundation
                        in Computer Science and Engineering.
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 40, rotateX: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card rounded-2xl p-7 relative group"
                            style={{ transformPerspective: 1000 }}
                        >
                            {/* Status badge */}
                            <motion.div
                                className={`absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-bold ${edu.status === 'Completed'
                                        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                        : 'bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-400 border border-primary-500/30'
                                    }`}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                            >
                                {edu.status}
                            </motion.div>

                            {/* Icon */}
                            <motion.div
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 via-primary-500/20 to-accent-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 border border-white/5"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                            >
                                <GraduationCap className="w-8 h-8 text-accent-400" />
                            </motion.div>

                            {/* Institution */}
                            <h3 className="text-xl font-bold text-white mb-2 pr-20 group-hover:text-accent-300 transition-colors">
                                {edu.institution}
                            </h3>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-gray-400 mb-4">
                                <MapPin size={14} className="text-accent-500" />
                                <span className="font-medium">{edu.location}</span>
                            </div>

                            {/* Degree */}
                            <p className="text-gray-300 font-medium mb-4 leading-relaxed">
                                {edu.degree}
                            </p>

                            {/* Period */}
                            <div className="flex items-center gap-2 text-accent-400 text-sm font-medium mb-5">
                                <Calendar size={15} />
                                <span>{edu.period}</span>
                            </div>

                            {/* Highlight */}
                            <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                                    {edu.highlight.includes('Excellent') ? (
                                        <Star size={16} className="text-yellow-400" />
                                    ) : (
                                        <Award size={16} className="text-amber-400" />
                                    )}
                                </div>
                                <span className="text-gray-300 text-sm font-medium">{edu.highlight}</span>
                            </div>

                            {/* Hover gradient line */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
