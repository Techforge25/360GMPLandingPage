"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const PartnershipSection: React.FC = () => {
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
        <section ref={sectionRef} className="relative w-full overflow-hidden py-20 md:py-28 bg-white">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <p className={`text-xs font-semibold text-[#240457] uppercase tracking-[0.3em] mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Trust and Protection
                    </p>
                    <h2 className={`text-gray-900 text-3xl md:text-5xl font-semibold mb-6 tracking-tight leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "100ms" }}>
                        Enterprise-Grade Escrow Protection
                    </h2>
                    <p className={`text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "200ms" }}>
                        Institutional transaction security with milestone-based escrow, verification, and dispute oversight for every international engagement.
                    </p>

                    <div className={`flex flex-wrap gap-3 justify-center mt-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "300ms" }}>
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#9747FF]/10 text-[#240457] border border-[#9747FF]/20">
                            Bank-grade escrow
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#9747FF]/10 text-[#240457] border border-[#9747FF]/20">
                            Verified transactions
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#9747FF]/10 text-[#240457] border border-[#9747FF]/20">
                            Global compliance
                        </div>
                    </div>
                </div>

                <div className="relative w-full min-h-[500px] md:min-h-[720px] mt-8">
                    <div className={`absolute top-0 right-0 w-[92%] md:w-[70%] z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`} style={{ transitionDelay: "400ms" }}>
                        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <Image
                                src="/images/escrow.png"
                                alt="Enterprise Escrow Dashboard"
                                width={1200}
                                height={800}
                                className="relative w-full h-auto rounded-2xl"
                                priority
                            />
                        </div>
                    </div>

                    <div className={`absolute top-[220px] md:top-[320px] left-0 w-[92%] md:w-[60%] z-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "600ms" }}>
                        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <Image
                                src="/images/escrow2.png"
                                alt="Transaction Details"
                                width={1000}
                                height={700}
                                className="relative w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;
