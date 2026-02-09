"use client";

import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

// FAQ Data
const faqsData = [
    {
        id: 1,
        question: 'What is 360GMP?',
        answer:
            '360GMP is an all-in-one B2B and B2C marketplace where businesses and individuals can post jobs, apply for opportunities, buy or sell products, and complete transactions securely using escrow payments—all within a single platform.',
    },
    {
        id: 2,
        question: 'How is 360GMP different from other platforms?',
        answer:
            'Unlike traditional platforms that focus solely on jobs or product trading, 360 GMP offers a unified ecosystem where businesses and individuals can post jobs, search for opportunities, trade products, manage payments through escrow, and resolve disputes efficiently—all within one secure platform. ',
    },
    {
        id: 3,
        question: 'Can I use 360GMP for both B2B and B2C?',
        answer:
            'Yes. 360GMP is designed to support both B2B and B2C workflows, allowing businesses and individuals to trade, hire, and transact securely on the same platform.',
    },
    {
        id: 4,
        question: 'Can I switch between business and personal profiles?',
        answer:
            'Yes. With one account, you can easily switch between business and personal profiles. Each profile has its own dashboard, settings, and activity history.',
    },
    {
        id: 5,
        question: 'How does job posting and hiring work?',
        answer:
            'Businesses can post jobs, review applications, communicate with candidates, and hire verified professionals through a transparent and secure hiring process.',
    },
    {
        id: 6,
        question: 'How can users search and apply for jobs?',
        answer:
            'Users can search relevant jobs, apply in a few clicks, track application status, and communicate directly with businesses through their dashboard.',
    },
    {
        id: 7,
        question: 'Does 360GMP support bulk product buying and selling?',
        answer:
            'Yes. Businesses can list products for bulk sales, manage orders, negotiate pricing, and complete transactions securely through escrow-based checkout.',
    },
    {
        id: 8,
        question: 'How does escrow payment work on 360GMP?',
        answer:
            'Payments are held securely in escrow and released only after work completion or order approval, protecting both buyers and sellers.',
    },
    {
        id: 9,
        question: 'What happens if there is a dispute?',
        answer:
            '360GMP provides a built-in dispute resolution system where issues are reviewed fairly with platform support to ensure transparency and trust.',
    },
    {
        id: 10,
        question: 'Is 360GMP secure and reliable?',
        answer:
            'Yes. The platform uses verified profiles, secure payments, encrypted data, and role-based access to maintain enterprise-level security.',
    },
    {
        id: 11,
        question: 'Who should use 360GMP?',
        answer:
            '360GMP is ideal for businesses, job seekers, buyers, sellers, and enterprises looking for a single, trusted platform to manage jobs, product trading, and secure transactions.',
    },
];


const FaqItem: React.FC<{ faq: typeof faqsData[0] }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(faq.id === 1);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const Icon = isOpen ? MinusCircleIcon : PlusCircleIcon;

    return (
        <div
            className={`border border-gray-200/80 rounded-xl mb-4 transition-all duration-300 ${isOpen ? 'bg-white shadow-lg' : 'bg-white'}`}
        >
            <button
                onClick={toggleOpen}
                className="flex justify-between items-center w-full p-5 md:p-6 text-left focus:outline-none"
            >
                <span className={`manrope text-lg font-semibold ${isOpen ? 'text-[#1a0737]' : 'text-gray-800'}`}>
                    {faq.question}
                </span>
                <Icon className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-0'}`} />
            </button>
            {isOpen && (
                <div
                    className="px-5 md:px-6 pb-5 pt-0 text-gray-600 text-base leading-relaxed"
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
                <h2 className="manrope text-4xl md:text-5xl font-extrabold text-[#202939] tracking-tight mb-16">
                    FAQs
                </h2>
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