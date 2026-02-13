"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const steps = [
    {
        number: 1,
        title: "Verify Your Organization",
        description: "Complete enterprise onboarding with KYB checks and compliance validation.",
    },
    {
        number: 2,
        title: "Discover Global Partners",
        description: "Access verified suppliers, buyers, and talent across multiple markets.",
    },
    {
        number: 3,
        title: "Execute Secure Transactions",
        description: "Run deals through escrow, milestone release, and audit-ready records.",
    },
    {
        number: 4,
        title: "Scale With Intelligence",
        description: "Use analytics, risk scoring, and reporting to expand with confidence.",
    },
];

const HowItWorksSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        const headerOffset = 84;
        const rect = el.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top - headerOffset;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    };

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
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-[#f8fafc]" id="how-it-works">
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(151,71,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(151,71,255,0.1)_1px,transparent_1px)]"
                    style={{ backgroundSize: "120px 120px" }}
                ></div>
            </div>
            <div className="absolute -top-20 left-10 w-[360px] h-[360px] bg-[#9747FF]/10 rounded-full blur-3xl animate-float-slow"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">How It Works</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#240457] mt-4">
                        From Verification to Global Execution
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        A streamlined workflow designed for enterprise and institutional adoption.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                        >
                            <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-gradient-to-br from-[#7a3ff5] to-[#9747FF] text-white flex items-center justify-center text-sm font-semibold shadow-md">
                                {step.number}
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-[#240457] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                            <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5] transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
                    <div className="relative rounded-3xl p-10 md:p-12 text-center max-w-4xl mx-auto overflow-hidden border border-[#9747FF]/15 bg-white shadow-md">
                        <div className="absolute -top-20 right-0 w-72 h-72 bg-[#9747FF]/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-semibold text-[#240457] mb-4">
                                Ready to build your global operating layer?
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base md:text-lg">
                                Engage with our enterprise team to design your global trade and partnership program.
                            </p>

                            <button
                                onClick={() => scrollToSection("contact")}
                                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#7a3ff5] to-[#9747FF] text-white font-semibold px-10 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Request Enterprise Access</span>
                                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-14px); }
                }
                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default HowItWorksSection;
