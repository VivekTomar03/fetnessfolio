'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Certifications() {
    const certifications = [
        {
            name: 'Certified Personal Trainer (CPT)',
            organization: 'National Academy of Sports Medicine (NASM)',
            year: '2016',
            icon: '🏆'
        },
        {
            name: 'Certified Strength & Conditioning Specialist',
            organization: 'National Strength and Conditioning Association (NSCA)',
            year: '2017',
            icon: '💪'
        },
        {
            name: 'Precision Nutrition Level 1',
            organization: 'Precision Nutrition',
            year: '2018',
            icon: '🥗'
        },
        {
            name: 'Functional Movement Screen (FMS)',
            organization: 'Functional Movement Systems',
            year: '2018',
            icon: '🎯'
        },
        {
            name: 'CrossFit Level 2 Trainer',
            organization: 'CrossFit Inc.',
            year: '2019',
            icon: '⚡'
        },
        {
            name: 'TRX Suspension Training',
            organization: 'TRX Training',
            year: '2019',
            icon: '🔗'
        },
        {
            name: 'Kettlebell Athletics Instructor',
            organization: 'Kettlebell Athletics',
            year: '2020',
            icon: '🏋️'
        },
        {
            name: 'Sports Nutrition Specialist',
            organization: 'International Sports Sciences Association (ISSA)',
            year: '2020',
            icon: '🍎'
        },
        {
            name: 'Corrective Exercise Specialist',
            organization: 'NASM',
            year: '2021',
            icon: '🩺'
        },
        {
            name: 'Olympic Weightlifting Coach',
            organization: 'USA Weightlifting',
            year: '2021',
            icon: '🥇'
        },
        {
            name: 'Advanced HIIT Certification',
            organization: 'American Council on Exercise (ACE)',
            year: '2022',
            icon: '🔥'
        },
        {
            name: 'Mobility & Flexibility Specialist',
            organization: 'Functional Movement Systems',
            year: '2022',
            icon: '🧘'
        },
        {
            name: 'Youth Fitness Specialist',
            organization: 'ISSA',
            year: '2023',
            icon: '👶'
        },
        {
            name: 'Senior Fitness Specialist',
            organization: 'ACE',
            year: '2023',
            icon: '👴'
        },
        {
            name: 'Mental Performance Coach',
            organization: 'International Coaching Federation (ICF)',
            year: '2024',
            icon: '🧠'
        }
    ];

    return (
        <section className="section relative" id="certifications">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-white">Certifications</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                    <p className="text-gray mt-4 max-w-2xl mx-auto">
                        Continuously expanding knowledge through industry-leading certifications
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <TiltCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TiltCard({ cert, index }: { cert: any; index: number }) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            className="card text-center cursor-pointer perspective-1000"
            style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                className="text-4xl mb-3"
                style={{ transform: 'translateZ(50px)' }}
                animate={{
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1
                }}
            >
                {cert.icon}
            </motion.div>

            <h4 className="text-white font-bold mb-2 text-sm leading-tight min-h-[40px]">
                {cert.name}
            </h4>

            <p className="text-xs text-gray mb-2 leading-relaxed">
                {cert.organization}
            </p>

            <div className="mt-auto pt-3 border-t border-white/10">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                    {cert.year}
                </span>
            </div>
        </motion.div>
    );
}
