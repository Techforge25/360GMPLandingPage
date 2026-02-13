"use client";
import React, { useEffect, useRef, useState } from "react";

const coreValues = [
    {
        id: 1,
        title: "Global Inclusion",
        description: "Breaking barriers so organizations of any size can participate in global markets.",
    },
    {
        id: 2,
        title: "Integrity and Transparency",
        description: "Clear audit trails and accountable partnerships across every transaction.",
    },
    {
        id: 3,
        title: "Secure Innovation",
        description: "Modern infrastructure designed with institutional security and compliance first.",
    },
    {
        id: 4,
        title: "Economic Empowerment",
        description: "Unlocking sustainable growth through verified partnerships and trusted trade.",
    },
    {
        id: 5,
        title: "Long-Term Resilience",
        description: "Building durable global networks that withstand regulatory and market change.",
    },
];

const ValuesFrameworkSection = () => {
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
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-[#f9fafb]">
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(36,4,87,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,4,87,0.08)_1px,transparent_1px)]"
                    style={{ backgroundSize: "120px 120px" }}
                ></div>
            </div>
            <div className="absolute -top-24 left-10 w-[360px] h-[360px] bg-[#9747FF]/10 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-24 right-10 w-[360px] h-[360px] bg-[#9747FF]/10 rounded-full blur-3xl animate-float-slower"></div>
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 animate-grid-drift" style={{ backgroundImage: "linear-gradient(to right, rgba(151,71,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(151,71,255,0.08) 1px, transparent 1px)", backgroundSize: "140px 140px" }}></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Values Framework</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#240457] mt-4">Principles That Shape 360 GMP</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Instead of cards, we map our values along a continuous rail to reflect how they operate together.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#9747FF]/40 to-transparent"></div>

                        <div className="space-y-10">
                            {coreValues.map((value, index) => (
                                <div
                                    key={value.id}
                                    className={`group relative flex flex-col md:flex-row items-center justify-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                    style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                                >
                                    <div className="relative z-10 w-9 h-9 rounded-full bg-white border border-[#9747FF]/40 flex items-center justify-center shadow-sm">
                                        <div className="h-2.5 w-2.5 rounded-full bg-[#9747FF]"></div>
                                    </div>
                                    <div className="w-full rounded-2xl bg-white border border-gray-200 px-6 py-5 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                                        <p className="text-xs uppercase tracking-[0.25em] text-[#240457]">Value {String(index + 1).padStart(2, "0")}</p>
                                        <h3 className="text-lg md:text-xl font-semibold text-[#240457] mt-3">{value.title}</h3>
                                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">{value.description}</p>
                                        <div className="mt-5 h-1 w-0 group-hover:w-14 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5] transition-all duration-500"></div>
                                    </div>
                                </div>
                            ))}
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
                @keyframes float-slower {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-18px); }
                }
                .animate-float-slower {
                    animation: float-slower 8s ease-in-out infinite;
                }
                @keyframes grid-drift {
                    0% { background-position: 0 0; }
                    100% { background-position: 140px 140px; }
                }
                .animate-grid-drift {
                    animation: grid-drift 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default ValuesFrameworkSection;
