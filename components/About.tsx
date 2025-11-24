'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const stats = [
        { value: 8, suffix: '+', label: 'Years', sublabel: 'Professional Experience' },
        { value: 500, suffix: '+', label: 'Clients', sublabel: 'Successfully Trained' },
        { value: 300, suffix: '+', label: 'Transformations', sublabel: 'Life-Changing Results' },
        { value: 15, suffix: '+', label: 'Certifications', sublabel: 'Industry Recognized' }
    ];

    return (
        <section className="section bg-dark-light relative" id="about">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-white">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-white mb-6">Transforming Lives Through Fitness</h3>
                        <p className="mb-4">
                            With over 8 years of experience in the fitness industry, I've dedicated my career to helping
                            individuals unlock their full potential. My journey began as a passionate athlete, and evolved
                            into a mission to empower others to achieve their health and fitness goals.
                        </p>
                        <p className="mb-4">
                            I believe that fitness is not just about physical transformation—it's about building mental
                            resilience, developing healthy habits, and creating a sustainable lifestyle. Every client is
                            unique, and I tailor my approach to meet individual needs, preferences, and goals.
                        </p>
                        <p>
                            Whether you're looking to lose weight, build muscle, improve athletic performance, or simply
                            lead a healthier life, I'm here to guide you every step of the way with science-backed methods
                            and unwavering support.
                        </p>
                    </motion.div>

                    {/* Key Stats with Animated Counters */}
                    <div ref={ref}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="card text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="text-5xl font-bold text-primary mb-3">
                                        {inView ? (
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={2.5}
                                                suffix={stat.suffix}
                                            />
                                        ) : (
                                            <span>0{stat.suffix}</span>
                                        )}
                                    </div>
                                    <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                                    <div className="text-sm text-gray">{stat.sublabel}</div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h4 className="text-white font-semibold mb-3">Specializations</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Weight Loss', 'Muscle Building', 'Athletic Performance', 'Nutrition Coaching',
                                    'Strength Training', 'HIIT', 'Functional Fitness', 'Body Recomposition'].map((spec, index) => (
                                        <motion.span
                                            key={spec}
                                            className="px-4 py-2 bg-dark-lighter text-primary text-sm font-medium rounded-full border border-primary/30"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 102, 255, 0.2)' }}
                                        >
                                            {spec}
                                        </motion.span>
                                    ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
