"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const missionVisionContent = {
    mission: {
        title: "Our Mission",
        content: "Build a trusted global business infrastructure that empowers enterprises, SMEs, institutions, and governments to collaborate across borders with security and transparency.",
    },
    vision: {
        title: "Our Vision",
        content: "Be the most trusted operating layer for cross-border commerce, where verified partnerships and secure transactions unlock inclusive global growth.",
    },
};

const MissionVisionSection = () => {
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
        <section ref={sectionRef} className="py-20 md:py-28 bg-white" id="mission-vision">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#240457] font-semibold">About 360 GMP</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#240457] mt-4">Mission and Vision</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        <div className="group h-full bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#240457]">
                                {missionVisionContent.mission.title}
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                {missionVisionContent.mission.content}
                            </p>
                            <div className="mt-6 h-1 w-0 group-hover:w-14 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5] transition-all duration-500"></div>
                        </div>
                    </div>

                    <div
                        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        style={{ transitionDelay: "150ms" }}
                    >
                        <div className="group h-full bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#240457]">
                                {missionVisionContent.vision.title}
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                {missionVisionContent.vision.content}
                            </p>
                            <div className="mt-6 h-1 w-0 group-hover:w-14 bg-gradient-to-r from-[#9747FF] to-[#7a3ff5] transition-all duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
