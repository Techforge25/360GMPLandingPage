"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-white">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-10 items-center">
                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#240457] font-semibold">Global Positioning</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#240457] tracking-tight mt-4">
                            Connecting Businesses.
                            <br />
                            <span className="text-[#9747FF]">Expanding Markets.</span>
                            <br />
                            Delivering Verified Opportunity.
                        </h2>
                        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl">
                            Built for international trade, public sector initiatives, and enterprise procurement, 360 GMP unlocks trusted partnerships without borders.
                        </p>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`rounded-2xl border border-gray-200 bg-white shadow-sm p-4 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                    style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                                >
                                    <p className="text-2xl md:text-3xl font-semibold text-[#240457]">{stat.value}</p>
                                    <p className="text-xs text-gray-600 mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "200ms" }}>
                        <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                            <Image
                                src="/images/marketplace-dashboard.png"
                                alt="Global marketplace overview"
                                width={1200}
                                height={720}
                                className="rounded-xl w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalPositioningSection;
