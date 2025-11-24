'use client';

import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            year: '2022 - Present',
            title: 'Lead Fitness Coach',
            company: 'Elite Performance Gym',
            description: 'Leading a team of trainers and managing personalized training programs for high-performance athletes and fitness enthusiasts.',
            achievements: ['Increased client retention by 45%', 'Developed signature HIIT program', 'Trained 3 national-level athletes']
        },
        {
            year: '2019 - 2022',
            title: 'Senior Personal Trainer',
            company: 'FitZone Wellness Center',
            description: 'Provided one-on-one and group training sessions, specializing in weight loss and muscle building programs.',
            achievements: ['200+ successful transformations', 'Launched online coaching platform', 'Featured in Fitness Monthly magazine']
        },
        {
            year: '2017 - 2019',
            title: 'Fitness Instructor',
            company: 'PowerHouse Gym',
            description: 'Conducted group fitness classes and assisted members with workout routines and nutrition guidance.',
            achievements: ['Certified in 5 specialized training methods', 'Grew class attendance by 60%', 'Developed beginner-friendly programs']
        },
        {
            year: '2016 - 2017',
            title: 'Brand Ambassador',
            company: 'NutriFit Supplements',
            description: 'Collaborated with leading supplement brand to promote fitness and nutrition awareness through social media and events.',
            achievements: ['Reached 50K+ followers', 'Hosted 10+ fitness workshops', 'Created educational content series']
        }
    ];

    return (
        <section className="section relative" id="experience">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-white">Experience Roadmap</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                    <p className="text-gray mt-4 max-w-2xl mx-auto">
                        A journey of continuous growth, learning, and helping others achieve their fitness dreams
                    </p>
                </motion.div>

                {/* Roadmap Style Layout */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical Line - More visible */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent" style={{ opacity: 0.6 }}></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Content Card */}
                            <motion.div
                                className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="card relative">
                                    <motion.div
                                        className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.2, 0.4, 0.2]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />

                                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <span className="px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/30">
                                            {exp.year}
                                        </span>
                                    </div>

                                    <h3 className="text-white mb-2">{exp.title}</h3>
                                    <p className="text-secondary font-semibold mb-4">{exp.company}</p>
                                    <p className="mb-4">{exp.description}</p>

                                    <div>
                                        <h4 className="text-white font-semibold mb-2 text-sm">Key Achievements:</h4>
                                        <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            {exp.achievements.map((achievement, i) => (
                                                <motion.li
                                                    key={i}
                                                    className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}
                                                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: 0.1 * i }}
                                                >
                                                    <span className="text-primary mt-1">▸</span>
                                                    <span className="text-sm">{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Center Node */}
                            <motion.div
                                className="hidden md:flex w-2/12 justify-center relative z-10"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                            >
                                <motion.div
                                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-dark-light flex items-center justify-center text-white font-bold text-xl shadow-lg"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {index + 1}
                                </motion.div>
                            </motion.div>

                            {/* Spacer for alignment */}
                            <div className="hidden md:block w-5/12"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
