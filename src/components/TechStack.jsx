import React from "react";
import {
    SiCplusplus, SiPython, SiTypescript, SiGo,
    SiReact, SiNextdotjs, SiAstro, SiTailwindcss, SiExpress, SiFastapi, SiDjango, SiFlutter,
    SiArduino, SiLinux,
    SiFigma, SiPostgresql, SiDocker, SiGit
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { Cpu, Database } from "lucide-react"; // Fallback for VHDL/Hardware if needed

// Helper to get icon
const getTechConfig = (name) => {
    const norm = name.toLowerCase();
    if (norm.includes("c++") || norm === "c") return { icon: SiCplusplus, color: "#00599C" };
    if (norm.includes("python")) return { icon: SiPython, color: "#3776AB" };
    if (norm.includes("java")) return { icon: FaJava, color: "#007396" };
    if (norm.includes("c#")) return { icon: TbBrandCSharp, color: "#239120" };
    if (norm.includes("typescript")) return { icon: SiTypescript, color: "#3178C6" };
    if (norm.includes("go")) return { icon: SiGo, color: "#00ADD8" };

    if (norm.includes("react")) return { icon: SiReact, color: "#61DAFB" };
    if (norm.includes("next")) return { icon: SiNextdotjs, color: "#FFFFFF" };
    if (norm.includes("astro")) return { icon: SiAstro, color: "#BC52EE" };
    if (norm.includes("tailwind")) return { icon: SiTailwindcss, color: "#06B6D4" };
    if (norm.includes("express")) return { icon: SiExpress, color: "#FFFFFF" }; // Express default often white/black
    if (norm.includes("fastapi")) return { icon: SiFastapi, color: "#009688" };
    if (norm.includes("django")) return { icon: SiDjango, color: "#092E20" };
    if (norm.includes("flutter")) return { icon: SiFlutter, color: "#02569B" };

    if (norm.includes("arduino")) return { icon: SiArduino, color: "#00979D" };
    if (norm.includes("esp32")) return { icon: Cpu, color: "#E7352C" }; // Espressif/ESP32 using generic Cpu if icon fails
    if (norm.includes("linux")) return { icon: SiLinux, color: "#FCC624" };
    if (norm.includes("vhdl")) return { icon: Cpu, color: "#555555" }; // Generic for VHDL

    if (norm.includes("figma")) return { icon: SiFigma, color: "#F24E1E" };
    if (norm.includes("postgres")) return { icon: SiPostgresql, color: "#4169E1" };
    if (norm.includes("docker")) return { icon: SiDocker, color: "#2496ED" };
    if (norm.includes("git")) return { icon: SiGit, color: "#F05032" };

    return { icon: Cpu, color: "#CCCCCC" };
};

const skills = [
    {
        category: "Languages",
        items: ["C/C++", "Python", "Java", "C#", "TypeScript", "Go"]
    },
    {
        category: "Web Dev",
        items: ["React", "Next.js", "Astro", "Tailwind", "Express.js", "FastAPI", "Django", "Flutter"]
    },
    {
        category: "Hardware/IoT",
        items: ["Arduino", "ESP32", "Linux", "VHDL"]
    },
    {
        category: "Tools",
        items: ["Figma", "PostgreSQL", "Docker", "Git", "Neo4j"]
    },
];

const TechStack = () => {
    return (
        <section className="py-20 px-4" id="tech-stack">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter text-white">
                    <span className="text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Technical Arsenal</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <div
                            key={idx}
                            className="bg-black border border-zinc-800 p-8 hover:border-[#FF00FF] transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-[#FF00FF] uppercase tracking-wider border-b border-zinc-900 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-8">
                                {skillGroup.items.map((tech, techIdx) => {
                                    const { icon: Icon, color } = getTechConfig(tech);
                                    return (
                                        <div
                                            key={techIdx}
                                            className="group flex flex-col items-center gap-3 cursor-pointer select-none active:scale-95 transition-transform"
                                        >
                                            <div
                                                className="w-20 h-20 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group-hover:scale-110 group-active:scale-110 transition-transform duration-200 shadow-lg group-hover:shadow-[0_0_20px_var(--hover-shadow-color)] group-active:shadow-[0_0_20px_var(--hover-shadow-color)] group-hover:border-[var(--hover-shadow-color)] group-active:border-[var(--hover-shadow-color)]"
                                                style={{
                                                    "--hover-shadow-color": color
                                                }}
                                            >
                                                <Icon size={40} style={{ color: color }} />
                                            </div>
                                            <span className="text-sm uppercase font-bold text-zinc-500 group-hover:text-white group-active:text-white transition-colors">{tech}</span>

                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TechStack;
