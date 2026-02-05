import React from 'react';
import Image from 'next/image';
import { BriefcaseIcon, MagnifyingGlassIcon, LockClosedIcon } from '@heroicons/react/24/outline';

// Feature Data
const hiringFeatures = [
    {
        icon: BriefcaseIcon,
        title: 'Post Jobs & Hire with Confidence',
        description: 'Businesses can publish job listings, review applications, and hire verified professionals through a simple, secure process.',
    },
    {
        icon: MagnifyingGlassIcon,
        title: 'Discover Jobs That Match You',
        description: 'Find relevant opportunities, apply effortlessly, and track your progress from application to hiring.',
    },
    {
        icon: LockClosedIcon,
        title: 'Trusted & Secure Hiring System',
        description: 'Every hire is protected with escrow payments, verified profiles, and transparent communication.',
    },
];

const mockupImage = {
    src: '/images/jobs.png',
};

const FeatureItem: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
        <div className="flex items-center space-x-4 mb-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100/50 flex-shrink-0">
                <Icon className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="manrope text-xl font-bold text-[#202939]">{title}</h3>
        </div>
        <p className="text-gray-600 max-w-md ml-16 md:ml-16">
            {description}
        </p>
    </div>
);


const HiringSection: React.FC = () => {
    const MOCKUP_WIDTH = 1200;
    const MOCKUP_HEIGHT = 900;

    return (
        <section className="py-16 md:py-32 relative bg-white overflow-hidden" id="hiring">

            <div className="absolute top-0 right-0 h-full w-1/2 bg-purple-500/10 blur-3xl -z-10 opacity-30 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between lg:gap-x-20">

                <div className="lg:w-6/12 xl:w-5/12 text-center lg:text-left mb-12 lg:mb-0">
                    <div className="space-y-12">
                        {hiringFeatures.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>

                <div className="lg:w-6/12 xl:w-7/12 relative flex justify-center lg:justify-end">


                    <div className="relative w-full max-w-xl lg:max-w-none lg:w-[800px] z-10">
                        <Image
                            src={mockupImage.src}
                            alt="Job Listing Platform Mockup"
                            width={MOCKUP_WIDTH}
                            height={MOCKUP_HEIGHT}
                            quality={100}
                            className="w-full h-auto rounded-xl shadow-2xl shadow-purple-300/50 ring-1 ring-gray-100"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HiringSection;