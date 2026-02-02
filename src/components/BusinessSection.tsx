// components/MarketplaceSection.tsx
import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Features data (Same)
const features = [
    'Create Business Profiles',
    'Post Jobs & Hire Faster',
    'Sell Products & Services',
    'Escrow-Based Payments',
    'Dispute Management System',
    'Performance Analytics',
    'Team & Role Management',
];

// Mockup images (Updated Paths)
const mockupImages = {
    main: '/images/marketplace3.png',
    overlay: '/images/marketplace2.png',
};

const BusinessSection: React.FC = () => {
    const half = Math.ceil(features.length / 2);
    const leftFeatures = features.slice(0, half);
    const rightFeatures = features.slice(half);



    return (
        <section className="py-24 md:py-32 relative bg-white overflow-hidden" id="marketplace">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">

                {/* Left Side: Text and Features (No change) */}
                <div className="lg:w-5/12 text-center lg:text-left mb-12 lg:mb-0">
                    <p className="text-sm font-semibold text-purple-700 uppercase tracking-wider mb-3 bg-purple-100 w-fit px-3 py-1 rounded-full mx-auto lg:mx-0">
                        Smooth onboarding
                    </p>
                    <h2 className="manrope text-3xl md:text-5xl font-extrabold text-[#202939] tracking-normal mb-6">
                        Buy & Sell Smarter in One Unified Marketplace
                    </h2>
                    <p className="text-[#697586] max-w-lg lg:max-w-none mx-auto lg:mx-0 mb-10 text-base">
                        Connect directly with verified buyers and sellers on a powerful
                        marketplace built for both B2B and B2C transactions. From bulk
                        products to professional services, everything happens in one
                        secure, transparent, and scalable platform.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-lg mx-auto lg:mx-0">
                        {/* Features Columns */}
                        <div className="flex flex-col space-y-4 items-start">
                            {leftFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start text-left">
                                    <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                    <span className="ml-3 text-gray-800 font-medium ">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col space-y-4 items-start">
                            {rightFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start text-left">
                                    <CheckCircleIcon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                    <span className="ml-3 text-gray-800 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Responsive Mockups */}
                <div className="lg:w-7/12 relative flex justify-center lg:justify-end min-h-[400px] lg:min-h-[600px] mt-10 lg:mt-0">

                    {/* Gradient Blob (Image ke peechhe ka purple glow) */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -z-10 opacity-30"></div>

                    {/* Main Mockup (Bada screenshot) - Responsive */}
                    <div className="relative w-full max-w-[650px]">
                        <Image
                            src={mockupImages.main}
                            alt="Marketplace Main Screenshot"
                            width={532}
                            height={578}
                            quality={90}
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>

                    {/* Overlay Mockup (Chota image) - Clean, no box */}
                    {/* <div className="absolute bottom-[30px] left-[30px] lg:bottom-[50px] lg:-left-[50px] w-[180px] sm:w-[230px] z-20 rounded-xl shadow-2xl">
                        <Image
                            src={mockupImages.overlay}
                            alt="Marketplace Filter Overlay"
                            width={230}
                            height={280}
                            quality={100}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default BusinessSection;