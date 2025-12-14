'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingIcons from '@/components/FloatingIcons';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
