"use client";

import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

// FAQ Data
const faqsData = [
    {
        id: 1,
        question: 'What is 360GMP?',
        answer: '360GMP is a unified platform for buying, selling, hiring, applying to jobs, creating business profiles, listing products, and managing transactions.',
    },
    {
        id: 2,
        question: 'How does the free trial work?',
        answer: 'Our free trial allows you to access basic features and explore the marketplace for 30 days without any commitment. Full features require a subscription.',
    },
    {
        id: 3,
        question: 'Do I need to pay to create a business?',
        answer: 'Creating a basic business profile is free. You only need to pay for premium features like bulk listing, advanced analytics, or job posting features.',
    },
    {
        id: 4,
        question: 'How does the escrow system work?',
        answer: 'The escrow system securely holds funds until both the buyer and seller approve that the service or product delivery is complete, ensuring protection for all parties.',
    },
    {
        id: 5,
        question: 'Can job-seekers use the platform for free?',
        answer: 'Yes, job-seekers can search and apply for jobs, create personal profiles, and track applications completely free of charge.',
    },
];

// Reusable FAQ Item Component
const FaqItem: React.FC<{ faq: typeof faqsData[0] }> = ({ faq }) => {
    // State to manage whether this specific FAQ is open or closed
    const [isOpen, setIsOpen] = useState(faq.id === 1); // First item is open by default (as shown in the image)

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const Icon = isOpen ? MinusCircleIcon : PlusCircleIcon;

    return (
        <div
            className={`border border-gray-200/80 rounded-xl mb-4 transition-all duration-300 ${isOpen ? 'bg-white shadow-lg' : 'bg-white'}`}
        >
            {/* Question (Header) */}
            <button
                onClick={toggleOpen}
                className="flex justify-between items-center w-full p-5 md:p-6 text-left focus:outline-none"
            >
                <span className={`manrope text-lg font-semibold ${isOpen ? 'text-[#1a0737]' : 'text-gray-800'}`}>
                    {faq.question}
                </span>
                <Icon className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-0'}`} />
            </button>

            {/* Answer (Content) */}
            {isOpen && (
                <div
                    className="px-5 md:px-6 pb-5 pt-0 text-gray-600 text-base leading-relaxed"
                    // Simple animation for appearing/disappearing
                    style={{ animation: 'fadeIn 0.3s' }}
                >
                    {faq.answer}
                </div>
            )}
        </div>
    );
};


const FaqsSection: React.FC = () => {
    return (
        <section className="py-16 md:py-32 relative bg-white" id="faqs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Header */}
                <h2 className="manrope text-4xl md:text-5xl font-extrabold text-[#202939] tracking-tight mb-16">
                    FAQs
                </h2>

                {/* FAQ List Container */}
                <div className="max-w-3xl mx-auto text-left space-y-4">
                    {faqsData.map((faq) => (
                        <FaqItem key={faq.id} faq={faq} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FaqsSection;