"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
    const scrollToSection = (href: string) => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
            const headerOffset = 84;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#mission-vision" },
        { name: "Platform", href: "#platform-overview" },
        { name: "Opportunities", href: "#opportunities" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            href: "#",
        },
        {
            name: "Twitter",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
            href: "#",
        },
    ];

    const trustBadges = ["ISO aligned", "SOC 2 controls", "GDPR ready"];

    return (
        <footer className="relative bg-gradient-to-br from-white via-[#f5f1ff] to-white text-gray-900 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.08]">
                {[...Array(18)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-purple-400"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 15}s ease-in-out ${Math.random() * 5}s infinite`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <Image
                                src="/images/fr-logo.png"
                                alt="360 Global Marketplace"
                                width={160}
                                height={48}
                                quality={100}
                                className="h-auto w-auto"
                            />
                        </div>
                        <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                            The institutional platform for secure cross-border commerce, verified partnerships, and global talent exchange.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {trustBadges.map((badge) => (
                                <div
                                    key={badge}
                                    className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white/70 border border-gray-200"
                                >
                                    <span className="text-[#240457]">{badge}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-[#240457] hover:text-[#9747FF] transition-all duration-300 transform hover:scale-110"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.7)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(36, 4, 87, 0.15)",
                                    }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-600 hover:text-[#240457] transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Newsletter</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Monthly insights on global trade, compliance, and verified partnerships.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter business email"
                                className="px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9747FF]"
                            />
                            <button
                                type="submit"
                                className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#6a3dff] to-[#9747FF] text-white font-semibold text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} 360 Global Marketplace. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-[#240457] transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-500 hover:text-[#240457] transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-500 hover:text-[#240457] transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-12px) translateX(6px); }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
