"use client";
import React from "react";
import Image from "next/image";

const heroDetails = {
    badge: "NOW IN V2.0 ENTERPRISE RELEASE",
    heading: "Find Verified Businesses Across The Globe",
    subheading:
        "Work with confidence using our escrow-based payment system that protects both parties, ensures transparency, and releases funds only when work is approved.",

    centerImageSrc: "/images/hero-images.png",
    backgroundImageSrc: "/images/hero-bg.png"
};

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
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const headerOffset = 84;
        const rect = el.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top - headerOffset;

        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    };
    const MOCKUP_WIDTH = 1120;
    const MOCKUP_HEIGHT = 700;

    return (
        <section
            id="home"
            className="relative pt-24 md:pt-40 pb-0 overflow-hidden min-h-[85vh]"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 right-0 h-[65%] lg:h-[75%]">
                    <Image
                        src={heroDetails.backgroundImageSrc}
                        alt="City Skyscraper Background"
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                        priority
                        className="opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[30%] lg:h-[25%] bg-white">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/0 to-transparent"></div>
                </div>

            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full mb-4 md:mb-6 ring-1 ring-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                    {heroDetails.badge}
                </div>

                <h1 className="manrope text-4xl sm:text-5xl lg:text-7xl font-bold text-white max-w-4xl tracking-normal text-balance leading-tight">
                    {heroDetails.heading}
                </h1>

                <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-200 max-w-2xl px-2">
                    {heroDetails.subheading}
                </p>

                <button onClick={() => scrollToSection("contact")} className="mt-6 md:mt-8 inline-flex items-center justify-center gap-2 bg-[#240457] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#6847c9] transition-colors duration-300 transform hover:scale-105">
                    Get A Quotes
                    <ArrowRightIcon className="w-5 h-5" />
                </button>

                <div className="mt-10 md:mt-16 w-full max-w-5xl px-2 lg:px-0">
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={MOCKUP_WIDTH}
                        height={MOCKUP_HEIGHT}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
                        priority={true}
                        alt="360 GMP Platform Mockup"
                        className="rounded-xl shadow-2xl shadow-black/30 ring-1 ring-gray-200"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;