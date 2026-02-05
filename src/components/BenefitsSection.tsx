import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Feature Data
const businessFeatures = [
    'Post jobs & hire verified professionals',
    'List products & sell in bulk',
    'Escrow-secured payments & milestone tracking',
    'Manage teams & dashboards efficiently',
    'Access performance analytics',
];

const buyerFeatures = [
    'Search & apply for relevant jobs',
    'Offer services & get hired',
    'Buy products safely with escrow',
    'Track applications & payments',
    'Rate and review businesses',
];

// Mockup Images (Assuming a monitor mockup is part of the image)
const mockupImages = {
    dashboard: '/images/1.png',
    profile: '/images/2.png',
};

const MONITOR_WIDTH = 800;
const MONITOR_HEIGHT = 600;


// Reusable Feature List Component
const FeatureList: React.FC<{ features: string[] }> = ({ features }) => (
    <ul className="space-y-4">
        {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-base">{feature}</span>
            </li>
        ))}
    </ul>
);

const BenefitsSection: React.FC = () => {
    return (
        <section className="py-16 md:py-32 relative bg-gray-50/50" id="benefits">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Global Header */}
                <div className="text-center mb-12 lg:mb-20">
                    <h2 className="manrope text-4xl md:text-5xl font-extrabold text-[#202939] tracking-tight mb-4">
                        Unlock Opportunities & Earn Securely
                    </h2>
                    <p className="text-gray-600 text-lg mx-auto max-w-2xl">
                        Find relevant jobs, offer your services, buy products safely, and receive payments
                        protected with escrow—all in one trusted platform.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mb-16 lg:mb-32">

                    {/* Left Side: Mockup Image (Business Dashboard) */}
                    <div className="lg:w-1/2 w-full relative">
                        <Image
                            src={mockupImages.dashboard}
                            alt="Business Dashboard Mockup"
                            width={MONITOR_WIDTH}
                            height={MONITOR_HEIGHT}
                            quality={90}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Right Side: Content and Features */}
                    <div className="lg:w-1/2 w-full lg:text-left text-center lg:pl-10">
                        <h3 className="manrope text-3xl md:text-4xl font-extrabold text-[#202939] tracking-normal mb-6">
                            Empower Your Business Operations
                        </h3>
                        <p className="text-[#697586] mb-8 max-w-xl mx-auto lg:mx-0">
                            Manage your hiring, products, and payments seamlessly while
                            growing your reach and credibility.
                        </p>
                        <FeatureList features={businessFeatures} />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    <div className="lg:w-1/2 w-full lg:text-left text-center lg:pr-10 order-2 lg:order-1">
                        <h3 className="manrope text-3xl md:text-4xl font-extrabold text-[#202939] tracking-normal mb-6">
                            Achieve More as a Professional or Buyer
                        </h3>
                        <p className="text-[#697586] mb-8 max-w-xl mx-auto lg:mx-0">
                            Find jobs, offer services, and transact securely—all from one
                            easy-to-use platform.
                        </p>
                        <FeatureList features={buyerFeatures} />
                    </div>

                    {/* Right Side: Mockup Image (Buyer Profile) */}
                    <div className="lg:w-1/2 w-full relative order-1 lg:order-2">
                        <Image
                            src={mockupImages.profile}
                            alt="Buyer Profile Mockup"
                            width={MONITOR_WIDTH}
                            height={MONITOR_HEIGHT}
                            quality={90}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BenefitsSection;