import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
    {
        role: "Research Intern (TEEP Program)",
        company: "BMW Lab, NTUST",
        period: "Jan 2026 - Present",
        active: true,
        slug: "bmw-ntust",
        image: "/assets/experience/bmw-ntust-photo.jpeg",
        desc: [
            "Completed remote O-RAN research interconnecting OSC SMO and FlexRIC over O1, A1, and E2 interfaces for AI-driven QoS optimization, validating 29/29 integration tests.",
            "Built OAI PRACH simulator and RFsim baselines, mapped gNB detection thresholds, and developed a context-aware mitigation pipeline for log extraction, policy replay, and sensitivity testing with 44 passing tests.",
            "Reproduced controlled PRACH attacker runs on an on-site OAI UE/gNB testbed with USRP B210 hardware, resolving launch dependencies and preserving repeatable configuration, execution, and cleanup evidence."
        ]
    },
    {
        role: "AI, Mechatronics & Full-Stack Software Intern",
        company: "PT. Pharos Indonesia",
        period: "Jan 2026 - Jun 2026",
        active: false,
        slug: "pharos-intern",
        image: "/assets/experience/pharos-foto.png",
        images: [
            "/assets/experience/pharos-foto.png",
            "/assets/experience/pharos-team.jpg",
            "/assets/experience/pharos-big-team.jpg",
            "/assets/experience/pharos-cert.png"
        ],
        desc: [
            "Developed an Autoreject Blister inspection application using PyQt, OpenCV, YOLO, and Arduino integration with interactive ROI/lane editing, preprocessing, per-lane counters, product master data, and audit trails.",
            "Trained and compared YOLO models for pharmaceutical blister quality control, then integrated camera, proximity sensor, servo/rejector, and hardware-debug workflows for local validation.",
            "Built QR-BPOM production-scan features across a Next.js frontend and Go backend, including WebSocket device events, duplicate/unreadable QR handling, scan ID reset, and monitoring fixes."
        ]
    },
    {
        role: "Physics Laboratory Assistant",
        company: "Universitas Indonesia",
        period: "Aug 2025 - Dec 2025",
        active: false,
        slug: "physics-lab",
        image: "/assets/experience/physics-lab-cert.jpg",
        images: [
            "/assets/experience/physics-lab-cert.jpg",
            "/assets/experience/physics-lab-potrait.jpg"
        ],
        desc: [
            "Facilitated experiments twice a week and graded technical reports for mechanical and electrical physics modules.",
            "Collaborated with faculty and lab staff to maintain safety, equipment readiness, and consistent lab workflows."
        ]
    },
    {
        role: "Teaching Assistant (Computational Thinking)",
        company: "Universitas Indonesia",
        period: "Feb 2025 - Jun 2025",
        active: false,
        slug: "ta-comthinking",
        desc: [
            "Mentored and graded students in algorithmic logic and Python programming for the Computational Thinking course."
        ]
    },
    {
        role: "Vice Head of Academics & Professions",
        company: "IME FTUI",
        period: "Jan 2025 - Dec 2025",
        active: false,
        slug: "ime-vice",
        image: "/assets/experience/ime-vice.jpg",
        images: [
            "/assets/experience/ime-vice.jpg",
            "/assets/experience/ime-members.png"
        ],
        desc: [
            "Led strategic academic initiatives and professional development programs for the Electrical Engineering student body.",
            "Coordinated academic advocacy, external affairs, secretariat work, and peer-support programs."
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
            "Coordinated peer tutoring, study resources, and publications for the Sharing Mattack event."
        ]
    },
    {
        role: "Software Intern (Bootcamp)",
        company: "EXERCISE FTUI",
        period: "Oct 2023 - Dec 2023",
        active: false,
        slug: "exercise-2023",
        desc: [
            "Learned web development fundamentals through hands-on assignments.",
            "Built my first web portfolio using React.js and Tailwind CSS."
        ]
    }
];

const ExperienceCard = ({ exp }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);
    const imageList = useMemo(() => exp.images || [exp.image || `/assets/experience/${exp.slug}.jpg`], [exp]);
    const hasMultipleImages = imageList.length > 1;

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMultipleImages) return undefined;

        const intervalId = window.setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
        }, 4500);

        return () => window.clearInterval(intervalId);
    }, [hasMultipleImages, imageList.length]);

    const showPreviousImage = (event) => {
        event.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    };

    const showNextImage = (event) => {
        event.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
    };

    return (
        <div
            className={`bg-black/90 border p-1 transition-all duration-300 group shadow-lg rounded-lg overflow-hidden backdrop-blur-sm ${isHovered ? "border-[#00FFFF] shadow-[#00FFFF]/20" : "border-white/10"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
        >
            <div className="w-full aspect-video bg-zinc-900 mb-4 overflow-hidden relative rounded-md">
                <div className={`absolute inset-0 bg-[#00FFFF]/10 mix-blend-overlay z-10 transition-opacity ${isHovered ? "opacity-100" : "opacity-0"}`} />
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentImageIndex}
                        initial={hasMounted ? { x: "100%" } : false}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 h-full w-full"
                    >
                        <img
                            src={imageList[currentImageIndex]}
                            alt={exp.company}
                            className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? "grayscale-0 scale-[1.02]" : "grayscale"}`}
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.parentElement.nextSibling.style.display = "flex";
                            }}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="hidden absolute inset-0 bg-zinc-900 items-center justify-center text-zinc-700 font-mono text-xs uppercase tracking-widest border border-dashed border-zinc-800">
                    No Image Data
                </div>
                {hasMultipleImages && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous experience photo"
                            onClick={showPreviousImage}
                            className={`absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-black/70 border border-white/15 p-1 text-white transition-opacity hover:border-[#00FFFF] hover:text-[#00FFFF] ${isHovered ? "opacity-100" : "opacity-0 md:opacity-0"}`}
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            aria-label="Next experience photo"
                            onClick={showNextImage}
                            className={`absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-black/70 border border-white/15 p-1 text-white transition-opacity hover:border-[#00FFFF] hover:text-[#00FFFF] ${isHovered ? "opacity-100" : "opacity-0 md:opacity-0"}`}
                        >
                            <ChevronRight size={18} />
                        </button>
                        <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-1">
                            {imageList.map((image, index) => (
                                <button
                                    key={image}
                                    type="button"
                                    aria-label={`Show experience photo ${index + 1}`}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setCurrentImageIndex(index);
                                    }}
                                    className={`h-1.5 w-1.5 rounded-full transition-colors ${index === currentImageIndex ? "bg-white" : "bg-white/35"}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h3 className={`text-xl md:text-2xl font-black transition-colors uppercase tracking-tight leading-tight ${isHovered ? "text-[#00FFFF]" : "text-white"}`}>
                        {exp.role}
                    </h3>
                    {exp.active && (
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black bg-[#39FF14] px-2 py-1">
                            Active
                        </span>
                    )}
                </div>
                <p className="text-[#FF00FF] font-bold mb-4 text-sm uppercase tracking-wide border-b border-white/10 pb-2 inline-block">
                    {exp.company}
                </p>

                <ul className="text-slate-400 text-sm leading-relaxed space-y-2 list-none mb-6">
                    {exp.desc.map((point, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="text-[#39FF14] font-bold min-w-[10px]">&gt;</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

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
                <h2 className="text-4xl md:text-6xl font-black mb-6 text-center uppercase tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                    Level Progression
                </h2>

                <div className="relative">
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#00FFFF] via-[#FF00FF] to-[#39FF14] transform -translate-x-1/2 shadow-[0_0_10px_#FF00FF]" />

                    <div className="flex flex-col gap-12 md:gap-0">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                key={exp.role}
                                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""} ${idx !== 0 ? "md:-mt-28" : ""}`}
                            >
                                <div className="w-full md:w-5/12 text-left pl-14 md:pl-0">
                                    <ExperienceCard exp={exp} />
                                </div>

                                <div className="absolute left-[28px] md:left-1/2 w-10 h-10 bg-black border-2 border-[#39FF14] transform -translate-x-1/2 z-20 shadow-[0_0_15px_#39FF14] flex items-center justify-center rounded-sm">
                                    {exp.active && <div className="w-3 h-3 bg-white animate-pulse shadow-[0_0_10px_white]" />}
                                </div>

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
