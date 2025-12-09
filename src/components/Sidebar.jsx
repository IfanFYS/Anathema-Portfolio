import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Cpu, GraduationCap, Mail, Terminal } from "lucide-react";

const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Briefcase, label: "Experiences", href: "#experience" },
    { icon: GraduationCap, label: "Education", href: "#education" },
    { icon: Terminal, label: "Tech Stack", href: "#tech-stack" },
    { icon: Cpu, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
];

const Sidebar = () => {
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= (element.offsetTop - 300)) {
                    current = "#" + section;
                }
            }
            setActiveHash(current || "#home");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed z-50 bg-black/90 backdrop-blur-md border-[#00FFFF]/30 flex transition-all duration-300
            top-0 left-0 right-0 h-16 border-b flex-row items-center justify-between px-4
            md:left-0 md:top-0 md:bottom-0 md:w-24 md:h-auto md:border-r md:border-b-0 md:flex-col md:py-8
        ">
            {/* Logo Area */}
            <div className="flex-shrink-0">
                <h1 className="text-2xl font-black tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#39FF14]">
                        FYS
                    </span>
                </h1>
            </div>

            {/* Navigation Icons */}
            <div className="flex flex-row gap-1 md:gap-8 w-full md:w-full items-center justify-end md:justify-center md:flex-col overflow-x-auto md:overflow-visible no-scrollbar">
                {navItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = activeHash === item.href;

                    return (
                        <a
                            key={idx}
                            href={item.href}
                            className="group relative flex justify-center items-center"
                        >
                            <div
                                className={`p-2 md:p-3 rounded-lg transition-all duration-300 relative z-10 ${isActive ? "text-[#00FFFF]" : "text-slate-500 group-hover:text-[#FF00FF]"
                                    }`}
                            >
                                <Icon className="w-5 h-5 md:w-7 md:h-7" />

                                {/* Active Indicator Scanline */}
                                {isActive && (
                                    <div className="absolute inset-0 bg-[#00FFFF]/10 border-b-2 md:border-b-0 md:border-l-2 border-[#00FFFF] animate-pulse w-full h-full" />
                                )}
                            </div>

                            {/* Hover Text / Glitch Effect (Desktop Only) */}
                            <div className="hidden md:block absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-black border border-[#FF00FF] text-[#FF00FF] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-[0_0_10px_#FF00FF]">
                                {item.label}
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Bottom Spacing (Desktop Only) */}
            <div className="hidden md:block h-20" />
        </nav>
    );
};

export default Sidebar;
