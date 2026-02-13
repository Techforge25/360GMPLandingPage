"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const problems = [
    {
        title: "Trust gaps",
        problem: "Unverified partners increase risk and slow procurement cycles.",
        solution: "Verified enterprise profiles with audit-ready documentation.",
    },
    {
        title: "Workflow silos",
        problem: "Sourcing, contracts, payments, and talent live in silos.",
        solution: "Unified operating layer across trade and execution.",
    },
    {
        title: "Escrow uncertainty",
        problem: "Traditional payments create exposure and delays.",
        solution: "Milestone escrow with automated release logic.",
    },
    {
        title: "Compliance drag",
        problem: "Multi-jurisdiction rules slow deals and add risk.",
        solution: "Embedded compliance checks aligned to standards.",
    },
];

const extraSignals = [
    "Partner discovery in days, not months",
    "Dispute resolution with evidence workflows",
    "Institutional reporting by default",
];

const BusinessSection: React.FC = () => {
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
        <section ref={sectionRef} className="relative py-20 md:py-24 overflow-hidden bg-[#f9fafb]" id="business">
            <div className="absolute -top-24 left-0 w-[420px] h-[420px] bg-[#9747FF]/10 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-24 right-0 w-[420px] h-[420px] bg-[#9747FF]/10 rounded-full blur-3xl animate-float-slower"></div>
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(151,71,255,0.15)_1px,transparent_0)]" style={{ backgroundSize: "48px 48px" }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Problems We Solve</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#240457] mt-4">Global trade, simplified.</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Four high-impact friction points we remove so institutions can move faster and safer.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {problems.map((item, index) => (
                            <div
                                key={item.title}
                                className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                style={{ transitionDelay: isVisible ? `${index * 90}ms` : "0ms" }}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#240457]">Challenge</p>
                                    <span className="h-2 w-2 rounded-full bg-[#9747FF]"></span>
                                </div>
                                <h3 className="text-lg font-semibold text-[#240457] mt-3">{item.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{item.problem}</p>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#240457]">Solution</p>
                                    <p className="text-sm text-gray-600 mt-2">{item.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "400ms" }}>
                        <div className="max-w-md mx-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-sm mb-6">
                            <Image
                                src="/images/business.png"
                                alt="Enterprise trade insights"
                                width={900}
                                height={600}
                                className="rounded-xl w-full h-auto"
                            />
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Signal Deck</p>
                        <h3 className="text-2xl font-semibold text-[#240457] mt-4">Operational clarity at scale.</h3>
                        <p className="text-gray-600 mt-3">
                            Verified partners, escrow protection, and compliance checks become default - not exceptions.
                        </p>
                        <div className="mt-6 space-y-3">
                            {extraSignals.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#9747FF]"></span>
                                    <span className="text-sm text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 rounded-2xl border border-gray-200 bg-[#f9fafb] p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs uppercase tracking-[0.25em] text-[#240457]">Risk Score</span>
                                <span className="text-sm font-semibold text-[#240457]">Low</span>
                            </div>
                            <div className="mt-3 h-2 rounded-full bg-white">
                                <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-[#9747FF] to-[#7a3ff5]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-14px); }
                }
                @keyframes float-slower {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-18px); }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
                .animate-float-slower {
                    animation: float-slower 7s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default BusinessSection;
