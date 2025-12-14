'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FloatingIcons from '@/components/FloatingIcons';
import portfolioData from '@/data/portfolio.json';

// Dynamic imports for below-fold sections (code splitting)
const SkillsSection = dynamic(() => import('@/components/SkillsSection'), {
    loading: () => <div className="min-h-[400px]" />,
});
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), {
    loading: () => <div className="min-h-[400px]" />,
});
const EducationSection = dynamic(() => import('@/components/EducationSection'), {
    loading: () => <div className="min-h-[400px]" />,
});
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
    loading: () => <div className="min-h-[400px]" />,
});
const CertificationsSection = dynamic(() => import('@/components/CertificationsSection'), {
    loading: () => <div className="min-h-[400px]" />,
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
    loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import('@/components/Footer'));

// Throttle utility for scroll events
function useThrottledScroll(delay: number = 16) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;
        let lastScrollY = 0;

        const updateScrollY = () => {
            setScrollY(lastScrollY);
            ticking = false;
        };

        const handleScroll = () => {
            lastScrollY = window.scrollY;
            if (!ticking) {
                requestAnimationFrame(updateScrollY);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}

export default function Home() {
    const scrollY = useThrottledScroll();

    return (
        <div className="min-h-screen relative overflow-x-hidden">
            {/* Floating Background Icons */}
            <FloatingIcons scrollY={scrollY} />

            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="relative z-10">
                {/* Hero Section */}
                <HeroSection data={portfolioData.personal} />

                {/* Skills Section */}
                <SkillsSection skills={portfolioData.skills} />

                {/* Experience Section */}
                <ExperienceSection experience={portfolioData.experience} />

                {/* Education Section */}
                <EducationSection education={portfolioData.education} />

                {/* Projects Section */}
                <ProjectsSection projects={portfolioData.projects} />

                {/* Certifications Section */}
                <CertificationsSection certifications={portfolioData.certifications} />

                {/* Contact Section */}
                <ContactSection personal={portfolioData.personal} />
            </main>

            {/* Footer */}
            <Footer personal={portfolioData.personal} />
        </div>
    );
}
