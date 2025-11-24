'use client';

import { motion } from 'framer-motion';

export default function TrainingPlans() {
    const plans = [
        {
            name: 'Starter',
            price: '₹2,999',
            period: '/month',
            description: 'Perfect for beginners starting their fitness journey',
            features: [
                'Personalized workout plan',
                'Weekly progress check-ins',
                'Email support',
                'Nutrition guidelines',
                'Exercise video library access',
                'Monthly plan adjustments'
            ],
            popular: false,
            gradient: 'from-gray-600 to-gray-800'
        },
        {
            name: 'Pro',
            price: '₹5,999',
            period: '/month',
            description: 'Most popular choice for serious fitness enthusiasts',
            features: [
                'Everything in Starter',
                'Customized meal plans',
                'Bi-weekly video calls',
                'WhatsApp support (24/7)',
                'Supplement recommendations',
                'Form check videos',
                'Priority support',
                'Access to exclusive content'
            ],
            popular: true,
            gradient: 'from-primary to-secondary'
        },
        {
            name: 'Elite',
            price: '₹9,999',
            period: '/month',
            description: 'Ultimate transformation package for maximum results',
            features: [
                'Everything in Pro',
                'Daily check-ins',
                'Weekly video consultations',
                'Advanced body composition tracking',
                'Competition prep (if applicable)',
                'Lifestyle coaching',
                'Injury prevention protocols',
                'VIP support',
                'Quarterly in-person sessions*'
            ],
            popular: false,
            gradient: 'from-accent to-purple-600'
        }
    ];

    return (
        <section className="section bg-dark-light relative" id="training-plans">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-white">Online Coaching Plans</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
                    <p className="text-gray mt-4 max-w-2xl mx-auto">
                        Choose the perfect plan to kickstart your transformation journey
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`card relative ${plan.popular ? 'md:scale-105 border-2 border-primary shadow-2xl shadow-primary/20' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10, scale: plan.popular ? 1.05 : 1.02 }}
                        >
                            {plan.popular && (
                                <motion.div
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <span className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-full shadow-lg">
                                        MOST POPULAR
                                    </span>
                                </motion.div>
                            )}

                            <div className={`text-center mb-6 p-6 rounded-xl bg-gradient-to-br ${plan.gradient} relative overflow-hidden`}>
                                <motion.div
                                    className="absolute inset-0 bg-white/10"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <h3 className="text-white text-2xl font-bold mb-2 relative z-10">{plan.name}</h3>
                                <div className="flex items-end justify-center gap-1 mb-2 relative z-10">
                                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                                    <span className="text-white/70 text-lg mb-2">{plan.period}</span>
                                </div>
                                <p className="text-white/80 text-sm relative z-10">{plan.description}</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + (i * 0.05) }}
                                    >
                                        <span className="text-primary text-xl mt-0.5">✓</span>
                                        <span className="text-sm">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.a
                                href="#contact"
                                className={`btn w-full text-center ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-sm text-gray">
                        * Elite plan in-person sessions available in select cities. Custom enterprise plans available for gyms and organizations.
                    </p>
                    <p className="text-sm text-gray mt-2">
                        All plans include a 7-day money-back guarantee. No questions asked.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
