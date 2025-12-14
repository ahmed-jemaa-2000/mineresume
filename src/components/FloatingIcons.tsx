'use client';

import { motion, MotionConfig } from 'framer-motion';
import { useState, useEffect, useMemo, memo } from 'react';

interface FloatingIconsProps {
    scrollY: number;
}

// Reduced to 5 icons for better performance
const techLabels = [
    { name: 'AWS', color: '#FF9900' },
    { name: 'K8s', color: '#326CE5' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Terraform', color: '#7B42BC' },
    { name: 'React', color: '#61DAFB' },
];

// Deterministic positions for SSR
const initialPositions = techLabels.map((icon, index) => ({
    ...icon,
    x: 10 + (index * 18) % 80,
    y: 10 + (index * 20) % 80,
    size: 20 + (index % 3) * 4,
    duration: 25 + (index % 3) * 10,
    delay: index * 2,
    rotation: (index % 3) * 5 - 5,
}));

// Seeded random for consistent positions
function seededRandom(seed: number): number {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function FloatingIcons({ scrollY }: FloatingIconsProps) {
    const [mounted, setMounted] = useState(false);

    const icons = useMemo(() => {
        if (!mounted) return initialPositions;

        return techLabels.map((icon, index) => ({
            ...icon,
            x: 5 + seededRandom(index * 100) * 90,
            y: 5 + seededRandom(index * 200) * 90,
            size: 18 + seededRandom(index * 300) * 16,
            duration: 25 + seededRandom(index * 400) * 15,
            delay: seededRandom(index * 500) * 5,
            rotation: seededRandom(index * 600) * 10 - 5,
        }));
    }, [mounted]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollOffset = scrollY * 0.015;

    return (
        <MotionConfig reducedMotion="user">
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Floating tech labels - simplified animations */}
                {icons.map((icon, index) => (
                    <motion.div
                        key={`${icon.name}-${index}`}
                        className="absolute font-black tracking-wider select-none gpu-accelerate"
                        initial={{
                            x: `${icon.x}vw`,
                            y: `${icon.y}vh`,
                            opacity: 0.04,
                            rotate: icon.rotation,
                        }}
                        animate={{
                            y: [`${icon.y}vh`, `${icon.y - 3}vh`, `${icon.y}vh`],
                            opacity: [0.03, 0.05, 0.03],
                        }}
                        transition={{
                            duration: icon.duration,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: icon.delay,
                        }}
                        style={{
                            fontSize: icon.size,
                            color: icon.color,
                            transform: `translateY(${scrollOffset}px)`,
                        }}
                    >
                        {icon.name}
                    </motion.div>
                ))}

                {/* Simplified orbs - NO blur filter */}
                <div
                    className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 1) 0%, transparent 70%)',
                        transform: `translateY(${scrollOffset * 2}px)`,
                    }}
                />

                <div
                    className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full opacity-[0.05]"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 1) 0%, transparent 70%)',
                        transform: `translateY(${-scrollOffset}px)`,
                    }}
                />

                <div className="absolute inset-0 bg-grid opacity-10" />
            </div>
        </MotionConfig>
    );
}

export default memo(FloatingIcons);
