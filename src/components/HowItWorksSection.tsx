import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Button ke arrow ke liye

// Step data
const steps = [
    {
        number: 1,
        title: 'Create Your Account',
        description: 'Sign up and set up your business or personal profile in minutes.',
    },
    {
        number: 2,
        title: 'Post, Search, or Trade',
        description: 'Post jobs, search opportunities, or buy and sell products based on your needs.',
    },
    {
        number: 3,
        title: 'Work, Pay & Grow Securely',
        description: 'Collaborate smoothly and complete transactions with escrow-protected payments.',
    },
];

// Step Card Component
const StepCard: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-gray-100/50 ring-1 ring-gray-100/80 text-center transition-transform hover:scale-[1.02] duration-300">

        {/* Step Number Circle */}
        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-purple-100/50 border border-purple-200 mb-6">
            <span className="text-xl font-bold text-purple-600">{number}</span>
        </div>

        {/* Title */}
        <h3 className="manrope text-xl font-extrabold text-[#1a0737] mb-3">
            {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
            {description}
        </p>
    </div>
);


const HowItWorksSection: React.FC = () => {
    return (
        // Background color halka sa off-white/grey rakha hai
        <section className="py-24 md:py-32 relative bg-gray-50/50" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Header and Tagline */}
                <div className="mb-16">
                    <div className="inline-block bg-purple-100/60 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                        Simple process
                    </div>
                    <h2 className="manrope text-4xl md:text-5xl font-extrabold text-[#202939] tracking-normal">
                        How it works
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step) => (
                        <StepCard
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>

                {/* CTA / Questions Block */}
                <div className="mt-24">
                    <h2 className="manrope text-3xl md:text-4xl font-extrabold text-[#202939] tracking-normal mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-[#697586] max-w-lg mx-auto mb-8 text-lg">
                        We’re happy to guide you through features, pricing, and next steps.
                    </p>

                    {/* Contact Us Button (Purple background, jaisa pichle sections mein tha) */}
                    <button className="inline-flex items-center justify-center gap-2 bg-[#240457] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#412a87] transition-colors duration-300 transform hover:scale-[1.03]">
                        Contact Us
                        <ArrowRightIcon className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HowItWorksSection;