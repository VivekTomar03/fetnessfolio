'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function Hero() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const stats = [
        { value: 8, suffix: '+', label: 'Years Experience' },
        { value: 500, suffix: '+', label: 'Clients Trained' },
        { value: 300, suffix: '+', label: 'Transformations' },
        { value: 15, suffix: '+', label: 'Certifications' }
    ];

    return (
        <section className="section relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
            {/* Decorative Background Elements */}
            <motion.div
                className="decorative-circle"
                style={{ width: '600px', height: '600px', top: '-200px', right: '-200px' }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="decorative-circle"
                style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px' }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Animated 3D Shapes */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 border-4 border-primary opacity-20"
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-40 left-10 w-24 h-24 border-4 border-secondary opacity-20 rounded-full"
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-accent opacity-20"
                style={{ transform: 'rotate(45deg)' }}
                animate={{
                    y: [0, -25, 0],
                    rotate: [45, 225, 405]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <div className="container relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-secondary text-xl md:text-2xl font-semibold mb-4 tracking-wider uppercase">
                            Transform Your Body & Mind
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className="mb-6">
                            ABHISHEK SHARMA
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <p className="text-2xl md:text-3xl font-bold text-white mb-8">
                            Fitness Coach <span className="text-primary">|</span> Online Trainer
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                            Empowering individuals to achieve their fitness goals through personalized training,
                            expert guidance, and unwavering support. Your transformation journey starts here.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-6 justify-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <motion.a
                            href="#training-plans"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Journey
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.a>
                    </motion.div>

                    {/* Animated Stats Preview */}
                    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
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
                                <div className="text-sm md:text-base text-gray">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
                    <motion.div
                        className="w-1 h-3 bg-primary rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
