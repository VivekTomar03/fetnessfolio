'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Training Plans', href: '#training-plans' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { name: 'Instagram', icon: '📸', url: 'https://instagram.com/abhishek_fitness' },
        { name: 'YouTube', icon: '▶️', url: 'https://youtube.com/@abhisheksharma' },
        { name: 'Facebook', icon: '👥', url: 'https://facebook.com/abhishekfitness' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/abhishekfit' }
    ];

    return (
        <footer className="bg-dark border-t border-white/10 py-12">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-white text-2xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                ABHISHEK SHARMA
                            </span>
                        </h3>
                        <p className="text-gray mb-4">
                            Professional fitness coach dedicated to helping you achieve your health and fitness goals
                            through personalized training and expert guidance.
                        </p>
                        <p className="text-sm text-gray">
                            📧 abhishek.fitness@gmail.com<br />
                            📱 +91 98765 43210
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-dark-lighter border border-white/10 rounded-lg flex items-center justify-center text-xl hover:border-primary hover:bg-primary/10 transition-all duration-300"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-gray text-sm">
                        © {currentYear} Abhishek Sharma. All rights reserved. |
                        <span className="text-primary"> Transforming Lives Through Fitness</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
