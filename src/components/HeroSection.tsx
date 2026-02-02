import React from "react";
import Image from "next/image";

const heroDetails = {
    badge: "NOW IN V2.0 ENTERPRISE RELEASE",
    heading: "Find Verified Businesses Across The Globe",
    subheading:
        "Work with confidence using our escrow-based payment system that protects both parties, ensures transparency, and releases funds only when work is approved.",
    // images path
    centerImageSrc: "/images/hero-images.png",
};

// Heroicons se liya gaya Arrow Right icon
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
        />
    </svg>
);

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden"
        >
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[700px] -z-0 opacity-50 blur-3xl"
                style={{
                    // Teen colors ka linear gradient
                    background: "linear-gradient(to left, #3DD6FF, #3445B9, #EC2DFD)",
                    filter: 'blur(100.33px)',
                    WebkitFilter: 'blur(120px)',
                }}
            ></div>{" "}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 bg-white text-[#240457] text-xs font-medium px-3 py-1 rounded-full mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#240457]"></span>
                    {heroDetails.badge}
                </div>

                <h1 className="manrope text-4xl sm:text-5xl lg:text-7xl font-bold text-white max-w-4xl tracking-normal text-balance">
                    {heroDetails.heading}
                </h1>

                <p className="mt-6 text-lg text-white max-w-2xl">
                    {heroDetails.subheading}
                </p>

                <button className="mt-8 inline-flex items-center justify-center gap-2 bg-[#240457] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#412a87] transition-colors duration-300 transform hover:scale-105">
                    Get A Quotes
                    <ArrowRightIcon className="w-5 h-5" />
                </button>

                {/* Hero Section Image */}
                <div className="mt-16 w-full max-w-5xl">
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={1120}
                        height={700}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
                        priority={true}
                        alt="360 GMP Platform Mockup"
                        className="rounded-xl shadow-2xl shadow-purple-200/50"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
