"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
        <section id="platform-overview" ref={sectionRef} className="relative py-16 md:py-22 overflow-hidden bg-[#f8fafc]">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-8 items-center">
                    <div>
                        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Platform Overview</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#240457] mt-4">
                                A Unified Global Business Ecosystem
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mt-4">
                                A single platform for verified trade, strategic partnerships, talent exchange, and institutional-grade transaction security.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            {platformFeatures.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className={`group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-md ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                                    style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                                >
                                    <div className="h-12 w-12 rounded-xl bg-[#9747FF]/10 border border-[#9747FF]/20 flex items-center justify-center mb-4 text-[#9747FF] group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-[#240457] mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <div className="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5] transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "200ms" }}>
                        <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                            <Image
                                src="/images/analytics.png"
                                alt="Platform overview dashboard"
                                width={1200}
                                height={720}
                                className="rounded-xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformOverviewSection;
