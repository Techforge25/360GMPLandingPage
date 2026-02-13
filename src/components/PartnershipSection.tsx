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

        const current = sectionRef.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden py-20 md:py-28 bg-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-purple-200/60 to-blue-200/60 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-blue-200/60 to-purple-200/60 rounded-full blur-3xl"></div>
            </div>

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

                    <div className="hidden md:block absolute inset-0 pointer-events-none z-30">
                        <div className={`absolute top-[120px] left-[18%] transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "800ms" }}>
                            <div className="relative animate-float-slow">
                                <div className="px-7 py-3 rounded-2xl shadow-lg text-[#240457] text-base font-semibold flex items-center justify-center min-w-[140px] bg-white/90 border border-[#9747FF]/30 backdrop-blur">
                                    Enterprise
                                </div>
                                <svg className="absolute top-full left-1/2 w-[150px] h-[80px] text-[#9747FF]" style={{ overflow: "visible", transform: "translateX(-5px)" }}>
                                    <path
                                        d="M 5 5 Q 30 70 140 70"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeDasharray="8 6"
                                        strokeLinecap="round"
                                        className="opacity-70"
                                    />
                                    <circle cx="140" cy="70" r="4" fill="currentColor" />
                                </svg>
                            </div>
                        </div>

                        <div className={`absolute top-[250px] left-[2%] transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1000ms" }}>
                            <div className="relative animate-float-delayed">
                                <div className="px-7 py-3 rounded-2xl shadow-lg text-[#240457] text-base font-semibold flex items-center justify-center min-w-[140px] bg-white/90 border border-[#9747FF]/30 backdrop-blur">
                                    Vendor
                                </div>
                                <svg className="absolute top-1/2 left-full w-[100px] h-[5px] text-[#9747FF]" style={{ overflow: "visible", transform: "translate(0, -50%)" }}>
                                    <path
                                        d="M 5 0 C 40 0 50 40 90 40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeDasharray="8 6"
                                        strokeLinecap="round"
                                        className="opacity-70"
                                    />
                                    <circle cx="90" cy="40" r="4" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 5s ease-in-out infinite 1s;
                }
            `}</style>
        </section>
    );
};

export default PartnershipSection;
