"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqsData = [
    {
        id: 1,
        question: "What makes 360 Global Marketplace enterprise grade?",
        answer:
            "360 GMP combines verified enterprise networks, secure escrow transactions, analytics, and compliance tooling within a unified platform designed for cross-border business at scale.",
    },
    {
        id: 2,
        question: "How does 360 GMP differ from traditional B2B platforms?",
        answer:
            "360 GMP integrates trade, talent, and secure transaction management into one ecosystem. Enterprises gain verified networks, institutional escrow, dispute resolution, analytics, and multi-market access in a single dashboard.",
    },
    {
        id: 3,
        question: "What security measures protect enterprise transactions?",
        answer:
            "We provide escrow protection, multi-layer verification, encrypted data transmission, compliance alignment, and professional dispute resolution for institutional-level security.",
    },
    {
        id: 4,
        question: "Can we integrate 360 GMP with existing systems?",
        answer:
            "Yes. 360 GMP offers API integration capabilities for ERP, CRM, and procurement systems. Custom integration support is available for enterprise clients.",
    },
    {
        id: 5,
        question: "How does the global talent exchange work?",
        answer:
            "Enterprises connect with pre-verified professionals across 180+ countries using milestone-based payments, quality assurance, and compliance documentation.",
    },
    {
        id: 6,
        question: "Which compliance standards are supported?",
        answer:
            "We support international trade regulations, data protection standards including GDPR and SOC 2, AML protocols, and cross-border transaction requirements.",
    },
];

const FaqItem: React.FC<{ faq: typeof faqsData[0]; index: number; isVisible: boolean }> = ({ faq, index, isVisible }) => {
    const [isOpen, setIsOpen] = useState(faq.id === 1);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`group border border-gray-200 rounded-xl mb-4 transition-all duration-500 ${isOpen ? "bg-white shadow-sm" : "bg-white"} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isVisible ? `${index * 60}ms` : "0ms" }}
        >
            <button
                onClick={toggleOpen}
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
            >
                <span className={`text-base md:text-lg font-semibold pr-4 transition-colors ${isOpen ? "text-[#240457]" : "text-gray-900"}`}>
                    {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#9747FF] rotate-180" : "bg-[#9747FF]/10"}`}>
                    <ChevronDownIcon className={`w-5 h-5 transition-colors ${isOpen ? "text-white" : "text-[#9747FF]"}`} />
                </div>
            </button>
            {isOpen && (
                <div
                    className="px-6 pb-6 pt-0 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 mt-2 pt-4"
                    style={{ animation: "fadeIn 0.4s ease-out" }}
                >
                    {faq.answer}
                </div>
            )}
        </div>
    );
};

const FaqsSection: React.FC = () => {
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
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-white" id="faqs">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className={`text-xs font-semibold text-[#240457] uppercase tracking-[0.3em] mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        Questions and Answers
                    </p>
                    <h2 className={`text-3xl md:text-5xl font-semibold text-[#240457] tracking-tight mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "100ms" }}>
                        Frequently Asked Questions
                    </h2>
                    <p className={`text-gray-600 text-base md:text-lg max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "200ms" }}>
                        Learn more about platform capabilities, compliance, and enterprise onboarding.
                    </p>
                </div>

                <div className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "200ms" }}>
                    {/* <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                        <Image
                            src="/images/marketplace-dashboard2.png"
                            alt="FAQ platform view"
                            width={1200}
                            height={720}
                            className="rounded-xl w-full h-auto"
                        />
                    </div> */}
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqsData.map((faq, index) => (
                        <FaqItem key={faq.id} faq={faq} index={index} isVisible={isVisible} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default FaqsSection;
