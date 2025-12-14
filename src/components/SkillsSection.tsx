'use client';

import { motion } from 'framer-motion';
import {
    Cloud,
    Container,
    GitBranch,
    Database,
    Code,
    Monitor,
    Layers,
    Terminal,
    Zap
} from 'lucide-react';

interface SkillsSectionProps {
    skills: {
        devops: string[];
        cloud: string[];
        observability: string[];
        programming: string[];
        frontend: string[];
        backend: string[];
        databases: string[];
        versionControl: string[];
    };
}

const categoryConfig: Record<string, { icon: React.ReactNode; gradient: string; label: string }> = {
    devops: {
        icon: <Container className="w-6 h-6" />,
        gradient: 'from-cyan-500 to-blue-600',
        label: 'DevOps Tools'
    },
    cloud: {
        icon: <Cloud className="w-6 h-6" />,
        gradient: 'from-orange-500 to-amber-600',
        label: 'Cloud Platforms'
    },
    observability: {
        icon: <Monitor className="w-6 h-6" />,
        gradient: 'from-green-500 to-emerald-600',
        label: 'Observability'
    },
    programming: {
        icon: <Code className="w-6 h-6" />,
        gradient: 'from-purple-500 to-violet-600',
        label: 'Programming'
    },
    frontend: {
        icon: <Layers className="w-6 h-6" />,
        gradient: 'from-pink-500 to-rose-600',
        label: 'Frontend'
    },
    backend: {
        icon: <Terminal className="w-6 h-6" />,
        gradient: 'from-indigo-500 to-blue-600',
        label: 'Backend'
    },
    databases: {
        icon: <Database className="w-6 h-6" />,
        gradient: 'from-teal-500 to-cyan-600',
        label: 'Databases'
    },
    versionControl: {
        icon: <GitBranch className="w-6 h-6" />,
        gradient: 'from-red-500 to-orange-600',
        label: 'Version Control'
    },
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        },
    };

    const stats = [
        { value: '3+', label: 'Internships', icon: <Zap className="w-5 h-5" /> },
        { value: '5', label: 'Certifications', icon: <Layers className="w-5 h-5" /> },
        { value: '3', label: 'Projects', icon: <Code className="w-5 h-5" /> },
        { value: '3', label: 'Languages', icon: <Monitor className="w-5 h-5" /> },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <motion.div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)',
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
                        My Toolkit
                    </motion.span>
                    <h2 className="section-title gradient-text">Skills & Technologies</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
                        A comprehensive toolkit built through hands-on experience in cloud computing,
                        DevOps practices, and full-stack development.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {Object.entries(skills).map(([category, skillList], index) => {
                        const config = categoryConfig[category];
                        return (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="glass-card rounded-2xl p-6 group"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <motion.div
                                        className={`p-3 rounded-xl bg-gradient-to-br ${config.gradient} text-white shadow-lg`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        {config.icon}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            {config.label}
                                        </h3>
                                        <span className="text-xs text-gray-500">{skillList.length} skills</span>
                                    </div>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: skillIndex * 0.03 }}
                                            whileHover={{ scale: 1.08, y: -2 }}
                                            className="tag cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Hover gradient line */}
                                <motion.div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, type: 'spring' }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative text-center p-8 glass-card rounded-2xl group overflow-hidden"
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <motion.div
                                className="text-5xl font-black gradient-text mb-2 relative"
                                whileHover={{ scale: 1.1 }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-gray-400 font-medium flex items-center justify-center gap-2 relative">
                                <span className="text-primary-500">{stat.icon}</span>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
