"use client";
import React, { useEffect, useRef, useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const contactInfo = [
    { icon: PhoneIcon, title: "Enterprise Inquiries", detail: "+1 (800) 360-GMP1" },
    { icon: EnvelopeIcon, title: "Email", detail: "enterprise@360gmp.com" },
    { icon: MapPinIcon, title: "Global Headquarters", detail: "70 Washington Square South, New York, NY 10012, United States" },
];

const trustBadges = ["Secure communication", "Response within 24 hours", "Global support coverage"];

const ContactSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-[#f9fafb]" id="contact">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-14">
                    <p className={`text-xs font-semibold text-[#240457] uppercase tracking-[0.3em] mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Get Started
                    </p>
                    <h2 className={`text-3xl md:text-5xl font-semibold text-[#240457] tracking-tight mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "100ms" }}>
                        Connect With Our Enterprise Team
                    </h2>
                    <p className={`text-gray-600 text-base md:text-lg max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "200ms" }}>
                        Discuss platform integration, global procurement workflows, and institutional partnerships.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
                    <div className={`lg:col-span-1 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <h3 className="text-lg font-semibold text-[#240457] mb-6">Direct Access</h3>
                        <div className="space-y-5">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-[#9747FF]/10 border border-[#9747FF]/20 rounded-lg flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-[#9747FF]" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-[#240457]">{item.title}</p>
                                            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.detail}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <form className={`lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] focus:outline-none transition-all duration-300 text-base placeholder:text-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] focus:outline-none transition-all duration-300 text-base placeholder:text-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Business Email</label>
                                <input
                                    type="email"
                                    placeholder="contact@enterprise.com"
                                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] focus:outline-none transition-all duration-300 text-base placeholder:text-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+1 (800) 000-0000"
                                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] focus:outline-none transition-all duration-300 text-base placeholder:text-gray-400"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Enterprise"
                                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] focus:outline-none transition-all duration-300 text-base placeholder:text-gray-400"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Tell us about your requirements</label>
                                <textarea
                                    rows={5}
                                    placeholder="Describe your global trade or procurement needs."
                                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9747FF] focus:border-[#9747FF] focus:outline-none transition-all duration-300 text-base resize-none placeholder:text-gray-400"
                                />
                            </div>

                            <div className="md:col-span-2 flex flex-wrap gap-2">
                                {trustBadges.map((badge) => (
                                    <span key={badge} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#9747FF]/10 text-[#240457]">
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <div className="md:col-span-2 pt-2">
                                <button
                                    type="submit"
                                    className="group relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7a3ff5] to-[#9747FF] text-white font-semibold py-4 rounded-xl hover:shadow-md transition-all duration-300 text-base overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    <span className="relative z-10">Request Enterprise Access</span>
                                    <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
