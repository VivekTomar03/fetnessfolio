'use client';

import { motion } from 'framer-motion';

export default function Media() {
    const mediaFeatures = [
        {
            type: 'Podcast',
            title: 'The Fitness Mindset',
            platform: 'Spotify Originals',
            description: 'Guest appearance discussing mental resilience in fitness journeys and sustainable lifestyle changes.',
            date: 'October 2024',
            icon: '🎙️'
        },
        {
            type: 'Magazine',
            title: 'Fitness Monthly',
            platform: 'Cover Feature',
            description: 'Featured as "Trainer of the Year" with an in-depth interview about modern training methodologies.',
            date: 'August 2024',
            icon: '📰'
        },
        {
            type: 'Collaboration',
            title: 'Nike Training Club',
            platform: 'Brand Partnership',
            description: 'Collaborated on creating exclusive workout programs for the Nike Training Club app.',
            date: 'June 2024',
            icon: '🤝'
        },
        {
            type: 'TV Appearance',
            title: 'Morning Wellness Show',
            platform: 'National Television',
            description: 'Live demonstration of effective home workouts and nutrition tips for busy professionals.',
            date: 'March 2024',
            icon: '📺'
        },
        {
            type: 'Workshop',
            title: 'Fitness Transformation Summit',
            platform: 'Keynote Speaker',
            description: 'Presented to 500+ attendees on science-based approaches to body transformation.',
            date: 'January 2024',
            icon: '🎤'
        },
        {
            type: 'Collaboration',
            title: 'MyProtein India',
            platform: 'Brand Ambassador',
            description: 'Official brand ambassador creating educational content on nutrition and supplementation.',
            date: 'December 2023',
            icon: '⭐'
        }
    ];

    return (
        <section className="section bg-dark-light relative" id="media">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-white">Media & Features</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                    <p className="text-gray mt-4 max-w-2xl mx-auto">
                        Recognized by leading platforms and brands in the fitness industry
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="card group relative overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <motion.div
                                className="text-5xl mb-4"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {feature.icon}
                            </motion.div>

                            <div className="mb-3">
                                <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full border border-secondary/30">
                                    {feature.type}
                                </span>
                            </div>

                            <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-primary font-semibold mb-3">{feature.platform}</p>
                            <p className="text-sm mb-4">{feature.description}</p>

                            <div className="text-xs text-gray">
                                {feature.date}
                            </div>

                            {/* Decorative Gradient */}
                            <motion.div
                                className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
