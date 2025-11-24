'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
            setFormData({ name: '', email: '', phone: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section className="section bg-dark-light relative" id="contact">
            <div className="container">
                <div className="scroll-reveal text-center mb-16">
                    <h2 className="text-white">Get In Touch</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
                    <p className="text-gray mt-4 max-w-2xl mx-auto">
                        Ready to start your transformation? Let's discuss your fitness goals
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="scroll-reveal">
                        <h3 className="text-white mb-6">Let's Connect</h3>
                        <p className="mb-8">
                            Whether you have questions about my coaching programs, want to discuss your fitness goals,
                            or just need some guidance, I'm here to help. Fill out the form and I'll get back to you
                            within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-xl flex-shrink-0">
                                    📧
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Email</h4>
                                    <p className="text-gray">abhishek.fitness@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-xl flex-shrink-0">
                                    📱
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                                    <p className="text-gray">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-xl flex-shrink-0">
                                    📍
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Location</h4>
                                    <p className="text-gray">Mumbai, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 card glass">
                            <h4 className="text-white font-semibold mb-3">Prefer WhatsApp?</h4>
                            <p className="text-sm mb-4">
                                Get instant responses to your queries via WhatsApp
                            </p>
                            <a
                                href="https://wa.me/919876543210?text=Hi%20Abhishek,%20I'm%20interested%20in%20your%20fitness%20coaching%20programs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary w-full text-center text-white"
                            >
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="scroll-reveal">
                        {isSubmitted ? (
                            <div className="card glass text-center py-12 animate-fade-in">
                                <div className="text-6xl mb-4">✅</div>
                                <h3 className="text-white mb-3">Message Sent Successfully!</h3>
                                <p className="text-gray">
                                    Thank you for reaching out. I'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="card glass">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg !text-white placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="Your full name"
                                        style={{ color: '#ffffff' }}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg !text-white placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="your.email@example.com"
                                        style={{ color: '#ffffff' }}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="phone" className="block text-white font-semibold mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg !text-white placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="10-digit mobile number"
                                        style={{ color: '#ffffff' }}
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg !text-white placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors resize-none`}
                                        placeholder="Tell me about your fitness goals..."
                                        style={{ color: '#ffffff' }}
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
