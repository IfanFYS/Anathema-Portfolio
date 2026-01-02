import React from "react";
import {
    SiCplusplus, SiPython, SiTypescript, SiGo, SiJavascript, SiRust,
    SiReact, SiNextdotjs, SiAstro, SiTailwindcss, SiExpress, SiFastapi, SiDjango, SiFlutter,
    SiNodedotjs, SiVuedotjs, SiSvelte, SiFlask,
    SiArduino, SiLinux, SiRaspberrypi, SiPlatformio,
    SiFigma, SiPostgresql, SiDocker, SiGit, SiGithub,
    SiMongodb, SiRedis, SiVercel, SiAmazonwebservices, SiFirebase,
    SiJira, SiNotion, SiPostman, SiTrello, SiCanva, SiAdobephotoshop,
    SiTensorflow, SiPytorch, SiOpencv
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { Cpu, Database, Brain } from "lucide-react"; // Fallback for VHDL/Hardware/AI if needed

// Helper to get icon
const getTechConfig = (name) => {
    const norm = name.toLowerCase();

    // Specific checks first to avoid partial matches
    if (norm.includes("django")) return { icon: SiDjango, color: "#092E20" };
    if (norm.includes("github")) return { icon: SiGithub, color: "#FFFFFF" };
    if (norm.includes("typescript")) return { icon: SiTypescript, color: "#3178C6" };
    if (norm.includes("javascript")) return { icon: SiJavascript, color: "#F7DF1E" };
    if (norm.includes("postgres")) return { icon: SiPostgresql, color: "#4169E1" }; // Before "sql"
    if (norm.includes("mongodb")) return { icon: SiMongodb, color: "#47A248" }; // Before "go"

    // Languages
    if (norm.includes("c++") || norm === "c") return { icon: SiCplusplus, color: "#00599C" };
    if (norm.includes("python")) return { icon: SiPython, color: "#3776AB" };
    if (norm.includes("java")) return { icon: FaJava, color: "#007396" };
    if (norm.includes("c#")) return { icon: TbBrandCSharp, color: "#239120" };
    if (norm.includes("go")) return { icon: SiGo, color: "#00ADD8" };
    if (norm.includes("rust")) return { icon: SiRust, color: "#DEA584" };
    if (norm.includes("sql")) return { icon: TbSql, color: "#4479A1" };

    // Frameworks
    if (norm.includes("react")) return { icon: SiReact, color: "#61DAFB" };
    if (norm.includes("next")) return { icon: SiNextdotjs, color: "#FFFFFF" };
    if (norm.includes("astro")) return { icon: SiAstro, color: "#BC52EE" };
    if (norm.includes("tailwind")) return { icon: SiTailwindcss, color: "#06B6D4" };
    if (norm.includes("express")) return { icon: SiExpress, color: "#FFFFFF" };
    if (norm.includes("fastapi")) return { icon: SiFastapi, color: "#009688" };
    if (norm.includes("flutter")) return { icon: SiFlutter, color: "#02569B" };
    if (norm.includes("node")) return { icon: SiNodedotjs, color: "#339933" };
    if (norm.includes("vue")) return { icon: SiVuedotjs, color: "#4FC08D" };
    if (norm.includes("svelte")) return { icon: SiSvelte, color: "#FF3E00" };
    if (norm.includes("flask")) return { icon: SiFlask, color: "#FFFFFF" };

    // Embedded/IoT
    if (norm.includes("arduino")) return { icon: SiArduino, color: "#00979D" };
    if (norm.includes("esp32")) return { icon: Cpu, color: "#E7352C" };
    if (norm.includes("linux")) return { icon: SiLinux, color: "#FCC624" };
    if (norm.includes("vhdl")) return { icon: Cpu, color: "#555555" };
    if (norm.includes("raspberry")) return { icon: SiRaspberrypi, color: "#A22846" };
    if (norm.includes("stm32")) return { icon: Cpu, color: "#03234B" };
    if (norm.includes("platformio")) return { icon: SiPlatformio, color: "#FF7F00" };

    // Design & Planning
    if (norm.includes("figma")) return { icon: SiFigma, color: "#F24E1E" };
    if (norm.includes("jira")) return { icon: SiJira, color: "#0052CC" };
    if (norm.includes("notion")) return { icon: SiNotion, color: "#FFFFFF" };
    if (norm.includes("trello")) return { icon: SiTrello, color: "#0052CC" };
    if (norm.includes("canva")) return { icon: SiCanva, color: "#00C4CC" };
    if (norm.includes("photoshop")) return { icon: SiAdobephotoshop, color: "#31A8FF" };

    // DevOps & Tools
    if (norm.includes("docker")) return { icon: SiDocker, color: "#2496ED" };
    if (norm.includes("git")) return { icon: SiGit, color: "#F05032" };
    if (norm.includes("redis")) return { icon: SiRedis, color: "#DC382D" };
    if (norm.includes("vercel")) return { icon: SiVercel, color: "#FFFFFF" };
    if (norm.includes("aws")) return { icon: SiAmazonwebservices, color: "#FF9900" };
    if (norm.includes("firebase")) return { icon: SiFirebase, color: "#FFCA28" };
    if (norm.includes("postman")) return { icon: SiPostman, color: "#FF6C37" };
    if (norm.includes("vs code") || norm.includes("vscode")) return { icon: VscCode, color: "#007ACC" };

    // AI/ML
    if (norm.includes("tensorflow")) return { icon: SiTensorflow, color: "#FF6F00" };
    if (norm.includes("pytorch")) return { icon: SiPytorch, color: "#EE4C2C" };
    if (norm.includes("opencv")) return { icon: SiOpencv, color: "#5C3EE8" };
    if (norm.includes("yolo")) return { icon: Brain, color: "#00FFFF" };

    return { icon: Cpu, color: "#CCCCCC" };
};

const skills = [
    {
        category: "Languages",
        items: ["C/C++", "Python", "Java", "C#", "JavaScript", "TypeScript", "Go", "SQL"]
    },
    {
        category: "Web/Frameworks",
        items: ["React", "Next.js", "Astro", "Tailwind", "Express.js", "FastAPI", "Django", "Node.js", "Vue.js", "Flutter"]
    },
    {
        category: "Hardware/IoT",
        items: ["Arduino", "ESP32", "Raspberry Pi", "Linux", "VHDL", "PlatformIO"]
    },
    {
        category: "Design & Planning",
        items: ["Figma", "Canva", "Photoshop", "Jira", "Notion", "Trello"]
    },
    {
        category: "DevOps & Tools",
        items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "Vercel", "AWS", "Postman"]
    },
    {
        category: "AI/ML",
        items: ["TensorFlow", "PyTorch", "OpenCV", "YOLO"]
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
