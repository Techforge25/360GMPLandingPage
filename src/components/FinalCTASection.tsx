"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
);

const FinalCTASection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f4ff] to-white"></div>
            <div className="absolute top-16 left-10 w-[420px] h-[420px] bg-[#9747FF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 right-10 w-[420px] h-[420px] bg-[#9747FF]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#240457] text-xs font-medium px-4 py-2 rounded-full mb-6 ring-1 ring-[#9747FF]/20">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        Global marketplace access now open
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#240457] mb-6 tracking-tight">
                        Step Into the
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#240457] via-[#6a3dff] to-[#9747FF]">
                            Global Economy
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Join the platform trusted by enterprises, institutions, and government agencies to build secure international partnerships.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7a3ff5] to-[#9747FF] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                        >
                            Join the Platform
                            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={() => scrollToSection("platform-overview")}
                            className="group inline-flex items-center justify-center gap-2 bg-white text-[#240457] font-semibold px-8 py-4 rounded-lg border border-[#240457]/20 hover:border-[#240457]/40 transition-all duration-300 transform hover:scale-105"
                        >
                            Explore the Platform
                            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* <div className="mt-12 max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                        <Image
                            src="/images/profile-images.png"
                            alt="Global platform preview"
                            width={1200}
                            height={720}
                            className="rounded-xl w-full h-auto"
                        />
                    </div> */}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9747FF] to-transparent"></div>
        </section>
    );
};

export default FinalCTASection;
