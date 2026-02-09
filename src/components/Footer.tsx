// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// React Icons for social media
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

// Footer Links Data
const companyLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#marketplace' },
    { name: 'Pricing', href: '#contact' },
    { name: 'Why choose us', href: '#how-it-works' },
    { name: 'Contact us', href: '#contact' },
];

const faqLinks = [
    'What is 360GMP?',
    'How does the free trial work?',
    'Do I need to pay to create a business?',
    'Can job-seekers use the platform for free?',
];

// Custom Social Icon Component
const SocialIcon: React.FC<{ Icon: React.ElementType; href: string }> = ({ Icon, href }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700 transition-colors cursor-pointer">
            <Icon className="w-5 h-5 text-white" />
        </div>
    </Link>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0D182A] text-white border-t border-gray-700/50" id="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">

                    <div className="col-span-2 md:col-span-1 pr-8">
                        {/* Logo */}
                        <div className="mb-4">
                            <Image
                                src="/images/fr-logo.png"
                                alt="3SIXTY Logo"
                                width={120}
                                height={35}
                                priority
                            />
                        </div>
                        <p className="text-white text-sm font-light">
                            Our mission is to make global trade easier, faster, safer, and more accessible for every buyer, seller, and job seeker, eliminating friction through a unified digital platform.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-base tracking-wider">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white hover:text-purple-400 transition-colors text-sm font-light">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick FAQs */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-base tracking-wider">
                            Quick FAQs
                        </h4>
                        <ul className="space-y-3">
                            {faqLinks.map((faq, index) => (
                                <li key={index}>
                                    <p className="text-white font-light text-sm leading-relaxed">
                                        {faq}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-base tracking-wider">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            {/* Email */}
                            <div>
                                <p className="text-white font-light text-sm">Email:</p>
                                <a href="mailto:info360@gmail.com" className="text-white hover:text-purple-400 transition-colors text-sm">
                                    info360@gmail.com
                                </a>
                            </div>

                            {/* Social Media */}
                            <div>
                                <p className="text-white font-light text-sm mb-3">Follow Us:</p>
                                <div className="flex space-x-3">
                                    <SocialIcon Icon={FaLinkedinIn} href="#" />
                                    <SocialIcon Icon={FaFacebookF} href="#" />
                                    <SocialIcon Icon={FaInstagram} href="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Strip */}
            <div className="border-t border-gray-700/50 py-4">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-white font-light text-sm">
                        © 2025 360 Global Marketplace LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;