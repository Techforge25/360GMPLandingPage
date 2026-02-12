"use client";
import React, { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Countries Covered", value: "180+" },
    { label: "Verified Partners", value: "14K+" },
    { label: "Escrow Protected", value: "$4.8B" },
    { label: "Enterprise Users", value: "6.2K+" },
];

const GlobalPositioningSection = () => {
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
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-white">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457] font-semibold">Global Positioning</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#240457] tracking-tight mt-4">
                        Connecting Businesses.
                        <br />
                        <span className="text-[#9747FF]">Expanding Markets.</span>
                        <br />
                        Delivering Verified Opportunity.
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Built for international trade, public sector initiatives, and enterprise procurement, 360 GMP unlocks trusted partnerships without borders.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`rounded-2xl border border-gray-200 bg-white shadow-sm p-6 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                            style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                        >
                            <p className="text-3xl md:text-4xl font-semibold text-[#240457]">{stat.value}</p>
                            <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalPositioningSection;
