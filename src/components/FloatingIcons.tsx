'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

interface FloatingIconsProps {
    scrollY: number;
}

const techLabels = [
    { name: 'AWS', color: '#FF9900' },
    { name: 'K8s', color: '#326CE5' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Azure', color: '#0078D4' },
    { name: 'Terraform', color: '#7B42BC' },
    { name: 'Jenkins', color: '#D24939' },
    { name: 'Python', color: '#3776AB' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Git', color: '#F05032' },
];

export default function FloatingIcons({ scrollY }: FloatingIconsProps) {
    const icons = useMemo(() => {
        return techLabels.map((icon, index) => ({
            ...icon,
            x: 5 + Math.random() * 90,
            y: 5 + Math.random() * 90,
            size: 16 + Math.random() * 20,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 10,
            rotation: Math.random() * 20 - 10,
        }));
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Floating tech labels */}
            {icons.map((icon, index) => (
                <motion.div
                    key={`${icon.name}-${index}`}
                    className="absolute font-black tracking-wider select-none"
                    initial={{
                        x: `${icon.x}vw`,
                        y: `${icon.y}vh`,
                        opacity: 0.03,
                        rotate: icon.rotation,
                    }}
                    animate={{
                        y: [`${icon.y}vh`, `${icon.y - 5}vh`, `${icon.y + 3}vh`, `${icon.y}vh`],
                        x: [`${icon.x}vw`, `${icon.x + 2}vw`, `${icon.x - 1}vw`, `${icon.x}vw`],
                        opacity: [0.02, 0.04, 0.02],
                    }}
                    transition={{
                        duration: icon.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: icon.delay,
                    }}
                    style={{
                        fontSize: icon.size,
                        color: icon.color,
                        textShadow: `0 0 20px ${icon.color}20`,
                        transform: `translateY(${scrollY * 0.02}px)`,
                    }}
                >
                    {icon.name}
                </motion.div>
            ))}

            {/* Animated gradient orbs */}
            <motion.div
                className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    transform: `translateY(${scrollY * 0.05}px)`,
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    transform: `translateY(${-scrollY * 0.03}px)`,
                }}
                animate={{
                    scale: [1.1, 1, 1.1],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.03) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    transform: `translateY(${scrollY * 0.08}px)`,
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    x: [0, -20, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
            />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-grid opacity-10" />
        </div>
    );
}
