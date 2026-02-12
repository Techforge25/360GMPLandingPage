"use client";
import React, { useEffect, useRef, useState } from "react";

const CorporatePurposeSection = () => {
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
            { threshold: 0.2 }
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
        <section ref={sectionRef} className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-1 w-16 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5]"></div>
                            <span className="text-xs font-semibold text-[#240457] uppercase tracking-[0.3em]">Corporate Purpose</span>
                        </div>

                        <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
                            <p className="text-xl md:text-2xl font-semibold text-[#240457] leading-relaxed">
                                360 Global Marketplace is critical infrastructure for modern cross-border business - enabling secure, transparent, and scalable collaboration across global markets.
                            </p>

                            <p>
                                Our platform connects enterprises, entrepreneurs, financial institutions, and governments through verified directories, secure transaction frameworks, talent exchange mechanisms, and dispute resolution systems.
                            </p>

                            <p>
                                Built on enterprise-grade security and institutional compliance standards, 360 GMP addresses trust verification, transaction integrity, regulatory complexity, and access barriers that limit international commerce.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Verified networks", "Escrow protection", "Global compliance", "Institutional onboarding"].map((item) => (
                                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="h-2 w-2 rounded-full bg-[#9747FF]"></span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Impact Snapshot</p>
                        <h3 className="text-2xl font-semibold text-[#240457] mt-4">Building the trusted layer for global trade.</h3>
                        <p className="text-gray-600 mt-3">
                            We enable verified partnerships, secure transactions, and data-driven decision-making for international commerce at scale.
                        </p>
                        <div className="mt-6 space-y-3">
                            {["Trusted counterparties", "Compliance-ready workflows", "Audit trails by default"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#9747FF]"></span>
                                    <span className="text-sm text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 h-2 rounded-full bg-gray-100 overflow-hidden">
                            <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-[#9747FF] to-[#7a3ff5]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporatePurposeSection;
