"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const securityFeatures = [
    {
        id: 1,
        title: "Bank-Grade Escrow",
        description: "Multi-signature escrow holds funds until obligations are verified.",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 1 3 5v6c0 5.25 3.84 10.74 9 12 5.16-1.26 9-6.75 9-12V5l-9-4Zm0 20c-3.76-1.11-7-5.35-7-10.02V6.3l7-3.11 7 3.11v4.68C19 15.65 15.76 19.89 12 21Zm-1-10.59-2.3 2.29 1.41 1.41L11 13.24l3.89 3.89 1.41-1.41-3.3-3.31 3.3-3.31-1.41-1.41L11 11.82l-1.89-1.91-1.41 1.41 3.3 3.31-1 1.02-1.41-1.41 2.3-2.29-1.41-1.41Z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Enterprise Verification",
        description: "KYB, document authentication, and real-time fraud screening.",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.33 0-8 1.67-8 5v2h16v-2c0-3.33-4.67-5-8-5Zm6-12v6h2V2Zm-2 0h-2v6h2Zm-4 0h-2v6h2Z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Compliance Controls",
        description: "Frameworks aligned with global trade, GDPR, and SOC 2 requirements.",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5 4h14v2H5Zm0 4h14v2H5Zm0 4h8v2H5Zm10 0h4v2h-4Zm0 4h4v2h-4ZM5 16h8v2H5Z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Independent Arbitration",
        description: "Professional dispute resolution with documented evidence trails.",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="m12 3 8 4v6c0 4.42-3.13 8.67-8 9.95C7.13 21.67 4 17.42 4 13V7l8-4Zm0 2.2L6 7.4V13c0 3.32 2.28 6.79 6 7.92 3.72-1.13 6-4.6 6-7.92V7.4l-6-2.2ZM7 12h10v2H7Zm0-4h10v2H7Zm0 8h6v2H7Z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: "24/7 Monitoring",
        description: "Automated anomaly detection across payments and counterparties.",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm.5-9H11v4.25l3.5 2.1.75-1.23-2.75-1.62Z" />
            </svg>
        ),
    },
    {
        id: 6,
        title: "Encrypted Payments",
        description: "End-to-end encryption for data, contracts, and transaction flows.",
        icon: (
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Zm-7-2a2 2 0 0 1 4 0v2h-4Zm2 9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 15Z" />
            </svg>
        ),
    },
];

const TrustSecuritySection: React.FC = () => {
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
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-white" id="trust-security">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457] font-semibold">Trust and Security</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#240457] mt-4">
                        Enterprise-Grade Protection for Every Transaction
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Built to support institutional and public-sector procurement with verified entities, escrow safeguards, and compliance-ready workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-10 items-center">
                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:order-1">
                        <div className="max-w-md mx-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-sm mb-6">
                            <Image
                                src="/images/escrow.png"
                                alt="Security operations overview"
                                width={900}
                                height={640}
                                className="rounded-xl w-full h-auto"
                            />
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#240457]">Security Snapshot</p>
                        <h3 className="text-2xl font-semibold text-[#240457] mt-4">Verified, monitored, and compliance-ready.</h3>
                        <p className="text-gray-600 mt-3">
                            Every transaction includes identity verification, escrow protection, and audit-ready reporting to reduce risk.
                        </p>
                        <div className="mt-6 space-y-3">
                            {[
                                "Multi-region data controls",
                                "Continuous risk scoring",
                                "Automated compliance checks",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#9747FF]"></span>
                                    <span className="text-sm text-gray-600">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 h-2 rounded-full bg-gray-100 overflow-hidden">
                            <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-[#9747FF] to-[#7a3ff5]"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:order-2">
                        {securityFeatures.map((feature, index) => (
                            <div
                                key={feature.id}
                                className={`group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-500 ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                                style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
                            >
                            <div className="h-11 w-11 rounded-xl bg-[#9747FF]/10 border border-[#9747FF]/20 flex items-center justify-center mb-4 text-[#9747FF]">
                                {feature.icon}
                            </div>
                                <h3 className="text-lg font-semibold text-[#240457] mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSecuritySection;
