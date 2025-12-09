import React, { useState } from "react";
import { motion } from "framer-motion";


const experiences = [
    {
        role: "Incoming IT Intern",
        company: "PT. Pharos Indonesia",
        period: "Dec 2025 - Present",
        active: true,
        slug: "pharos",
        desc: [
            "Upcoming internship focusing on IT infrastructure and software development within the pharmaceutical industry."
        ]
    },
    {
        role: "Physics Laboratory Assistant",
        company: "Universitas Indonesia",
        period: "Aug 2025 - Dec 2025",
        active: false,
        slug: "physics-lab",
        desc: [
            "Supervised 2 lab sessions per-week (Atwood Machine & Spring Oscillation modules)",
            "Collaborated with faculty to ensure safety compliance."
        ]
    },
    {
        role: "Teaching Assistant (Computational Thinking)",
        company: "Universitas Indonesia",
        period: "Feb 2025 - June 2025",
        active: false,
        slug: "ta-comthinking",
        desc: [
            "Served as a Teaching Assistant for the Computational Thinking subject, assisting Mr. Elvian Syafrurizal in grading assignments."
        ]
    },
    {
        role: "Vice Head of Academics & Professions",
        company: "IME FTUI",
        period: "Jan 2025 - Dec 2025",
        active: false,
        slug: "ime-vice",
        desc: [
            "Steered the \"Advokasi Akademis\" committee to support students falling behind in studies.",
            "Person in Charge of the departement's external affairs and secretariat."
        ]
    },
    {
        role: "Staff of Academics & Professions",
        company: "IME FTUI",
        period: "Jan 2024 - Dec 2024",
        active: false,
        slug: "ime-staff",
        desc: [
            "Assisted students with academic modules and informal lectures for midterms/finals.",
            "Head of Publications for the \"Sharing Mattack\" event."
        ]
    },
    {
        role: "Software Intern (Bootcamp)",
        company: "EXERCISE FTUI",
        period: "Oct 2023 - Dec 2023",
        active: false,
        slug: "exercise",
        desc: [
            "Learned the basics of web development by doing hands-on exercises and assignments.",
            "Made my very first web portfolio using React.js & Tailwind CSS frameworks."
        ]
    }
];

const ExperienceCard = ({ exp }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`bg-black border p-1 transition-all duration-300 group shadow-lg ${isHovered ? 'border-[#00FFFF] shadow-[#00FFFF]/20' : 'border-zinc-800'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
        >
            {/* Image Slot */}
            <div className="w-full aspect-video bg-zinc-900 mb-4 overflow-hidden relative">
                <div className={`absolute inset-0 bg-[#00FFFF]/10 mix-blend-overlay z-10 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                <img
                    src={`/assets/experience/${exp.slug}.jpg`}
                    alt={exp.company}
                    className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'grayscale-0' : 'grayscale'}`}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'; // Hide if missing
                        e.currentTarget.nextSibling.style.display = 'flex'; // Show fallback
                    }}
                />
                {/* Fallback pattern */}
                <div className="hidden absolute inset-0 bg-zinc-900 items-center justify-center text-zinc-700 font-mono text-xs uppercase tracking-widest border border-dashed border-zinc-800">
                    No Image Data
                </div>
            </div>

            <div className="p-6">
                <h3 className={`text-2xl font-black transition-colors mb-1 uppercase tracking-tight ${isHovered ? 'text-[#00FFFF]' : 'text-white'}`}>{exp.role}</h3>
                <p className="text-[#FF00FF] font-bold mb-4 text-sm uppercase tracking-wide border-b border-zinc-800 pb-2 inline-block">{exp.company}</p>

                <ul className="text-slate-400 text-sm leading-relaxed space-y-2 list-none mb-6">
                    {exp.desc.map((point, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="text-[#39FF14] font-bold min-w-[10px]">»</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Date Badge Moved Inside */}
                <div className="flex justify-start">
                    <span className="inline-block text-[#39FF14] font-mono text-xs font-bold bg-zinc-900 px-3 py-1 border border-[#39FF14]/30 rounded shadow-[0_0_5px_rgba(57,255,20,0.2)]">
                        {exp.period}
                    </span>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <section className="py-20 px-4 relative" id="experience">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-20 text-center uppercase tracking-tighter text-white">
                    <span className="text-[#39FF14] text-shadow drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">Level Progression</span>
                </h2>

                <div className="relative">
                    {/* Connecting Neon Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00FFFF] via-[#FF00FF] to-[#39FF14] transform -translate-x-1/2 shadow-[0_0_10px_#FF00FF]" />

                    <div className="flex flex-col gap-16">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                key={idx}
                                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Box */}
                                <div className={`w-full md:w-5/12 text-left pl-14 md:pl-0`}>
                                    <ExperienceCard exp={exp} />
                                </div>

                                {/* Timeline Node */}
                                <div className="absolute left-[28px] md:left-1/2 w-10 h-10 bg-black border-4 border-[#39FF14] transform -translate-x-1/2 z-20 shadow-[0_0_15px_#39FF14] flex items-center justify-center rounded-sm">
                                    {exp.active && <div className="w-3 h-3 bg-white animate-pulse shadow-[0_0_10px_white]" />}
                                </div>

                                {/* Spacer for Balance */}
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
