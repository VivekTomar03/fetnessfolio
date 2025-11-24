'use client';

import { motion } from 'framer-motion';

export default function SocialMedia() {
    const socialPlatforms = [
        {
            name: 'Instagram',
            handle: '@abhishek_fitness',
            followers: '85K',
            description: 'Daily workout tips, transformation stories, and fitness motivation',
            icon: '📸',
            color: 'from-purple-600 via-pink-600 to-orange-500',
            url: 'https://instagram.com/abhishek_fitness'
        },
        {
            name: 'YouTube',
            handle: 'Abhishek Sharma Fitness',
            followers: '120K',
            description: 'Full workout videos, nutrition guides, and Q&A sessions',
            icon: '▶️',
            color: 'from-red-600 to-red-700',
            url: 'https://youtube.com/@abhisheksharma'
        },
        {
            name: 'Facebook',
            handle: 'Abhishek Sharma - Fitness Coach',
            followers: '45K',
            description: 'Community support, live sessions, and fitness challenges',
            icon: '👥',
            color: 'from-blue-600 to-blue-700',
            url: 'https://facebook.com/abhishekfitness'
        },
        {
            name: 'Twitter',
            handle: '@AbhishekFit',
            followers: '32K',
            description: 'Quick fitness tips, industry insights, and daily motivation',
            icon: '🐦',
            color: 'from-sky-500 to-blue-600',
            url: 'https://twitter.com/abhishekfit'
        }
    ];

    return (
        <section className="section relative" id="social">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-white">Connect With Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                    <p className="text-gray mt-4 max-w-2xl mx-auto">
                        Join our growing community and stay updated with daily fitness content
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {socialPlatforms.map((platform, index) => (
                        <motion.a
                            key={index}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card group cursor-pointer relative overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            {/* Gradient Background on Hover */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                            />

                            {/* Icon with Gradient Background */}
                            <motion.div
                                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-4xl mb-4 mx-auto shadow-lg`}
                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {platform.icon}
                            </motion.div>

                            <h3 className="text-white text-xl font-bold mb-1 text-center">{platform.name}</h3>
                            <p className="text-primary text-sm font-semibold mb-3 text-center">{platform.handle}</p>

                            <div className="flex items-center justify-center gap-2 mb-4">
                                <motion.span
                                    className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                >
                                    {platform.followers}
                                </motion.span>
                                <span className="text-xs text-gray">Followers</span>
                            </div>

                            <p className="text-sm text-gray leading-relaxed text-center mb-4">
                                {platform.description}
                            </p>

                            <motion.div
                                className="text-primary text-sm font-semibold text-center flex items-center justify-center gap-2"
                                whileHover={{ x: 5 }}
                            >
                                Follow <span className="text-xl">→</span>
                            </motion.div>

                            {/* Decorative Corner Element */}
                            <motion.div
                                className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${platform.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`}
                            />
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.p
                        className="text-lg text-white mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        Join <motion.span
                            className="text-primary font-bold text-2xl"
                            animate={{
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        >
                            280K+
                        </motion.span> followers across all platforms
                    </motion.p>
                    <p className="text-gray">
                        Get daily motivation, expert tips, and be part of an amazing fitness community
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
