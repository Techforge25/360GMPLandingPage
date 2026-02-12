"use client";
import React, { useEffect, useRef, useState } from "react";
import { BuildingOffice2Icon, GlobeAltIcon, UsersIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const platformFeatures = [
    {
        id: 1,
        title: "Verified Global Directory",
        description: "Instant access to vetted enterprises, SMEs, and agencies with compliance-ready profiles.",
        icon: <GlobeAltIcon className="w-7 h-7" />,
    },
    {
        id: 2,
        title: "Cross-Border Procurement",
        description: "Source products and services with secure RFX, contract workflows, and supplier verification.",
        icon: <BuildingOffice2Icon className="w-7 h-7" />,
    },
    {
        id: 3,
        title: "Talent and Project Exchange",
        description: "Build international teams with pre-screened talent and milestone-based engagements.",
        icon: <UsersIcon className="w-7 h-7" />,
    },
    {
        id: 4,
        title: "Escrow + Dispute Resolution",
        description: "Protected transactions, audit trails, and professional arbitration for every engagement.",
        icon: <ShieldCheckIcon className="w-7 h-7" />,
    },
];

const PlatformOverviewSection = () => {
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
        <section id="platform-overview" ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-[#f8fafc]">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Platform Overview</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#240457] mt-4">
                        A Unified Global Business Ecosystem
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        A single platform for verified trade, strategic partnerships, talent exchange, and institutional-grade transaction security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {platformFeatures.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-md ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                            style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                        >
                            <div className="h-12 w-12 rounded-xl bg-[#9747FF]/10 border border-[#9747FF]/20 flex items-center justify-center mb-4 text-[#9747FF] group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-[#240457] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5] transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformOverviewSection;
