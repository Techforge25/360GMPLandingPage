"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const opportunities = [
    {
        title: "Enterprise Partnerships",
        description: "Strategic sourcing and procurement with verified global vendors.",
        features: ["Verified suppliers", "Contract workflows", "Escrow protection"],
    },
    {
        title: "SME Growth Access",
        description: "Faster onboarding and better market access for growth firms.",
        features: ["Rapid verification", "Market discovery", "Risk controls"],
    },
    {
        title: "Institutional Programs",
        description: "Audit-ready execution for institutions and multinationals.",
        features: ["Compliance trails", "KPI reporting", "Dedicated success"],
    },
    {
        title: "Government Procurement",
        description: "Transparent vendor management with dispute oversight.",
        features: ["Vendor validation", "Policy alignment", "Dispute workflows"],
    },
];

const signals = [
    { label: "Global Reach", value: "180+ markets" },
    { label: "Verified Entities", value: "14K+" },
    { label: "Escrow Volume", value: "$4.8B" },
];

const OpportunitiesSection: React.FC = () => {
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
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-white" id="opportunities">
            <div className="absolute inset-0 opacity-25">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(151,71,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(151,71,255,0.1)_1px,transparent_1px)]"
                    style={{ backgroundSize: "96px 96px" }}
                ></div>
            </div>
            <div className="absolute -top-24 right-0 w-[360px] h-[360px] bg-[#9747FF]/10 rounded-full blur-3xl animate-float-slow"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457] font-semibold">Global Opportunities</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#240457] mt-4">
                        Opportunity Engines for Every Segment
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Distinct tracks for enterprises, SMEs, institutions, and public sector programs - all on one verified platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr,1.1fr] gap-10 items-center">
                    <div className={`rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Opportunity Snapshot</p>
                        <h3 className="text-2xl font-semibold text-[#240457] mt-4">One dashboard, multiple growth lanes.</h3>
                        <p className="text-gray-600 mt-3">
                            Manage procurement, partnerships, and talent sourcing through a unified execution layer.
                        </p>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {signals.map((signal) => (
                                <div key={signal.label} className="rounded-2xl border border-gray-200 bg-[#f9fafb] p-4 text-center">
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#240457]">{signal.label}</p>
                                    <p className="text-sm font-semibold text-[#240457] mt-2">{signal.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#9747FF]/20 bg-[#f7f4ff] p-6">
                            <p className="text-sm text-gray-600">
                                Verified access to global supply chains, audit-ready transaction execution, and real-time compliance tracking.
                            </p>
                            <div className="mt-4 h-2 rounded-full bg-white">
                                <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-[#9747FF] to-[#7a3ff5]"></div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <Image
                                src="/images/cart.png"
                                alt="Opportunity dashboard"
                                width={320}
                                height={220}
                                className="rounded-2xl border border-gray-200 shadow-sm"
                            />
                            <Image
                                src="/images/order.png"
                                alt="Opportunity insights"
                                width={320}
                                height={220}
                                className="rounded-2xl border border-gray-200 shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {opportunities.map((opportunity, index) => (
                            <div
                                key={opportunity.title}
                                className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#240457]">Track</p>
                                    <span className="h-2 w-2 rounded-full bg-[#9747FF]"></span>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-[#240457] mt-3">
                                    {opportunity.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">{opportunity.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {opportunity.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-xs font-semibold px-3 py-1 rounded-full bg-[#9747FF]/10 text-[#240457]"
                                        >
                                            {feature}
                                        </span>
                                    ))}
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
            `}</style>
        </section>
    );
};

export default OpportunitiesSection;
