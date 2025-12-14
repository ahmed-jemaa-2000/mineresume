'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Folder, Code2 } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    highlights: string[];
    github: string;
    image: string;
}

interface ProjectsSectionProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <motion.div
                className="absolute left-1/4 top-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 60%)',
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
                        Portfolio
                    </motion.span>
                    <h2 className="section-title gradient-text">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
                        Personal projects showcasing cloud infrastructure, DevOps practices,
                        and microservices architecture.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <motion.div
                                className="glass-card rounded-2xl overflow-hidden h-full flex flex-col"
                                whileHover={{ y: -8 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Project Image/Visual */}
                                <div className="relative h-52 bg-gradient-to-br from-slate-800 via-slate-750 to-slate-800 overflow-hidden">
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 bg-dots opacity-30" />

                                    {/* Decorative shapes */}
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full"
                                        style={{
                                            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.5, 0.3],
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />

                                    {/* Project icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            className="p-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 border border-white/5"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Folder className="w-12 h-12 text-primary-400" />
                                        </motion.div>
                                    </div>

                                    {/* Hover overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end"
                                        initial={false}
                                    >
                                        <div className="p-5 flex gap-3 w-full">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2.5 bg-primary-500 rounded-xl text-white text-sm font-medium shadow-lg shadow-primary-500/30"
                                            >
                                                <Github size={18} />
                                                View Code
                                            </motion.a>
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 rounded-xl text-white text-sm font-medium backdrop-blur-sm border border-white/10"
                                            >
                                                <ExternalLink size={18} />
                                                Demo
                                            </motion.a>
                                        </div>
                                    </motion.div>

                                    {/* Top gradient */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-start gap-3 mb-4">
                                        <Code2 className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-2.5 mb-5">
                                        {project.highlights.slice(0, 2).map((highlight, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2 text-gray-300 text-sm"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                            >
                                                <ChevronRight size={14} className="text-primary-400 mt-1 flex-shrink-0" />
                                                <span>{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5 mt-auto">
                                        {project.technologies.slice(0, 5).map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                className="tag text-xs"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + techIndex * 0.03 }}
                                                whileHover={{ scale: 1.08 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                        {project.technologies.length > 5 && (
                                            <span className="tag text-xs bg-accent-500/10 text-accent-400 border-accent-500/30">
                                                +{project.technologies.length - 5}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
