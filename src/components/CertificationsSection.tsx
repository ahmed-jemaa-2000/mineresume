'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2, BadgeCheck, ShieldCheck } from 'lucide-react';

interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
    logo: string;
    credentialUrl: string;
}

interface CertificationsSectionProps {
    certifications: Certification[];
}

const issuerIcons: Record<string, { icon: React.ReactNode; gradient: string }> = {
    'The Linux Foundation': {
        icon: <ShieldCheck className="w-7 h-7" />,
        gradient: 'from-blue-500 to-indigo-600'
    },
    'HashiCorp': {
        icon: <BadgeCheck className="w-7 h-7" />,
        gradient: 'from-violet-500 to-purple-600'
    },
    'Amazon Web Services': {
        icon: <Award className="w-7 h-7" />,
        gradient: 'from-orange-500 to-amber-600'
    },
    'Microsoft': {
        icon: <Award className="w-7 h-7" />,
        gradient: 'from-cyan-500 to-blue-600'
    },
};

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <motion.div
                className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] rounded-full"
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
                        Credentials
                    </motion.span>
                    <h2 className="section-title gradient-text-accent">Certifications</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
                        Professional certifications validating expertise in cloud platforms,
                        container orchestration, and infrastructure as code.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => {
                        const issuerConfig = issuerIcons[cert.issuer] || {
                            icon: <Award className="w-7 h-7" />,
                            gradient: 'from-primary-500 to-accent-600'
                        };

                        return (
                            <motion.a
                                key={cert.id}
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="glass-card rounded-2xl p-7 group cursor-pointer block relative overflow-hidden"
                            >
                                {/* Background decoration */}
                                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${issuerConfig.gradient} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`} />

                                <div className="flex items-start gap-5 relative">
                                    {/* Logo/Icon */}
                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${issuerConfig.gradient} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        {issuerConfig.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors leading-tight">
                                            {cert.name}
                                        </h3>

                                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                            <Building2 size={14} className="text-gray-500" />
                                            <span className="font-medium">{cert.issuer}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-accent-400 text-sm font-medium">
                                            <Calendar size={14} />
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>

                                    {/* External link icon */}
                                    <motion.div
                                        className="text-gray-600 group-hover:text-primary-400 transition-all"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileHover={{ scale: 1.2 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                </div>

                                {/* Hover gradient line */}
                                <motion.div
                                    className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${issuerConfig.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                />

                                {/* Shine effect on hover */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
                                    }}
                                />
                            </motion.a>
                        );
                    })}
                </div>

                {/* Cloud provider badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-20 pt-12 border-t border-white/5"
                >
                    {[
                        { name: 'AWS', subtitle: 'Amazon Web Services', gradient: 'from-orange-500 to-amber-500' },
                        { name: 'Azure', subtitle: 'Microsoft', gradient: 'from-cyan-500 to-blue-500' },
                        { name: 'K8s', subtitle: 'Kubernetes', gradient: 'from-blue-500 to-indigo-500' },
                        { name: 'TF', subtitle: 'Terraform', gradient: 'from-violet-500 to-purple-500' },
                    ].map((provider, index) => (
                        <motion.div
                            key={provider.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="text-center group cursor-default"
                        >
                            <div className={`text-3xl font-black bg-gradient-to-r ${provider.gradient} bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform`}>
                                {provider.name}
                            </div>
                            <div className="text-xs text-gray-500 font-medium">{provider.subtitle}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
