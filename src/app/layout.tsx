import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ahmed Jemaa | Cloud & DevOps Engineer',
    description: 'Aspiring Cloud & DevOps Engineer with hands-on experience in AWS, Kubernetes, Terraform, and CI/CD pipelines. Currently seeking a 6-month internship in Germany.',
    keywords: ['Ahmed Jemaa', 'DevOps', 'Cloud Engineer', 'AWS', 'Kubernetes', 'Terraform', 'Germany', 'Internship'],
    authors: [{ name: 'Ahmed Jemaa' }],
    openGraph: {
        title: 'Ahmed Jemaa | Cloud & DevOps Engineer',
        description: 'Aspiring Cloud & DevOps Engineer seeking a 6-month internship in Germany.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ahmed Jemaa | Cloud & DevOps Engineer',
        description: 'Aspiring Cloud & DevOps Engineer seeking a 6-month internship in Germany.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
