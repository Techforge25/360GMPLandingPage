"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const advantages = [
    {
        title: "Global Market Access",
        description: "Reach verified partners in key trade corridors with institutional-grade controls.",
    },
    {
        title: "Risk Mitigation",
        description: "Escrow protection, compliance automation, and structured arbitration.",
    },
    {
        title: "Operational Efficiency",
        description: "Unified workflows for sourcing, contracting, and payment execution.",
    },
    {
        title: "Talent Excellence",
        description: "Recruit and manage international teams with verified credentials.",
    },
    {
        title: "Data Intelligence",
        description: "Real-time analytics, transaction insights, and performance reporting.",
    },
    {
        title: "Institutional Credibility",
        description: "Audit-ready activity logs and enterprise-grade governance.",
    },
];

const BenefitsSection: React.FC = () => {
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
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-[#f8fafc]" id="benefits">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Strategic Advantages</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#240457] mt-4">
                        Enterprise Benefits Built for Scale
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        A modern foundation for secure, scalable cross-border operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantages.map((advantage, index) => (
                        <div
                            key={advantage.title}
                            className={`group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-700 hover:shadow-md ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                        >
                            <div className="h-12 w-12 rounded-xl bg-[#9747FF]/10 border border-[#9747FF]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <div className="h-2.5 w-2.5 rounded-full bg-[#9747FF]"></div>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-[#240457] mb-2">{advantage.title}</h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{advantage.description}</p>
                            <div className="mt-5 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5] transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
                    <div className="relative">
                        <div className="absolute -inset-6 bg-gradient-to-br from-purple-200/40 to-indigo-200/30 rounded-3xl blur-3xl"></div>
                        <Image
                            src="/images/1.png"
                            alt="Enterprise analytics"
                            width={900}
                            height={600}
                            className="relative rounded-2xl shadow-lg"
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-6 bg-gradient-to-br from-indigo-200/40 to-purple-200/30 rounded-3xl blur-3xl"></div>
                        <Image
                            src="/images/2.png"
                            alt="Partner insights"
                            width={900}
                            height={600}
                            className="relative rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
