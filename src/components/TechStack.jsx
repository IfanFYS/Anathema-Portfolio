import React from "react";
import {
    SiCplusplus, SiPython, SiTypescript, SiGo, SiJavascript, SiRust,
    SiReact, SiNextdotjs, SiAstro, SiTailwindcss, SiExpress, SiFastapi, SiDjango, SiFlutter,
    SiNodedotjs, SiVuedotjs, SiSvelte, SiFlask,
    SiArduino, SiLinux, SiRaspberrypi, SiPlatformio, SiEspressif, SiProteus,
    SiFigma, SiPostgresql, SiDocker, SiGit, SiGithub,
    SiMongodb, SiMysql, SiNeo4J, SiRedis, SiVercel, SiAmazonwebservices, SiFirebase,
    SiJira, SiNotion, SiPostman, SiTrello, SiCanva, SiAdobephotoshop,
    SiTensorflow, SiPytorch, SiOpencv,
    SiKubernetes, SiDart, SiLatex, SiMarkdown, SiNvidia, SiHtml5, SiCss3, SiCisco
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { Database } from "lucide-react";

const TextBadgeIcon = ({ label, size = 40, style }) => (
    <div
        className="flex items-center justify-center font-black text-sm"
        style={{ width: size, height: size, color: style?.color, letterSpacing: 0 }}
    >
        {label}
    </div>
);

const VhdlIcon = (props) => <TextBadgeIcon {...props} label="VHDL" />;
const AssemblyIcon = (props) => <TextBadgeIcon {...props} label="ASM" />;

// Helper to get icon
const getTechConfig = (name) => {
    const norm = name.toLowerCase();

    // Specific checks first to avoid partial matches
    if (norm.includes("django")) return { icon: SiDjango, color: "#092E20" };
    if (norm.includes("github")) return { icon: SiGithub, color: "#FFFFFF" };
    if (norm.includes("typescript")) return { icon: SiTypescript, color: "#3178C6" };
    if (norm.includes("javascript")) return { icon: SiJavascript, color: "#F7DF1E" };
    if (norm === "html") return { icon: SiHtml5, color: "#E34F26" };
    if (norm === "css") return { icon: SiCss3, color: "#1572B6" };
    if (norm.includes("postgres")) return { icon: SiPostgresql, color: "#FFFFFF" }; // Before "sql"
    if (norm.includes("mysql")) return { icon: SiMysql, color: "#4479A1" };
    if (norm.includes("neo4j")) return { icon: SiNeo4J, color: "#008CC1" };
    if (norm.includes("mongodb")) return { icon: SiMongodb, color: "#47A248" }; // Before "go"
    if (norm.includes("nvidia")) return { icon: SiNvidia, color: "#76B900" };

    // Languages
    if (norm.includes("c++") || norm === "c") return { icon: SiCplusplus, color: "#00599C" };
    if (norm.includes("python")) return { icon: SiPython, color: "#FFD43B" };
    if (norm.includes("java")) return { icon: FaJava, color: "#F8981D" };
    if (norm.includes("c#")) return { icon: TbBrandCSharp, color: "#5C2D91" };
    if (norm.includes("go")) return { icon: SiGo, color: "#00ADD8" };
    if (norm.includes("dart")) return { icon: SiDart, color: "#0175C2" };
    if (norm.includes("rust")) return { icon: SiRust, color: "#DEA584" };
    if (norm.includes("assembly")) return { icon: AssemblyIcon, color: "#FF5F1F" };
    if (norm.includes("vhdl")) return { icon: VhdlIcon, color: "#C9D1D9" };
    if (norm.includes("latex")) return { icon: SiLatex, color: "#008080" };
    if (norm.includes("markdown")) return { icon: SiMarkdown, color: "#FFFFFF" };
    if (norm.includes("sql")) return { icon: Database, color: "#4479A1" };

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
    if (norm.includes("esp32")) return { icon: SiEspressif, color: "#E7352C" };
    if (norm.includes("linux")) return { icon: SiLinux, color: "#FCC624" };
    if (norm.includes("raspberry")) return { icon: SiRaspberrypi, color: "#A22846" };
    if (norm.includes("platformio")) return { icon: SiPlatformio, color: "#FF7F00" };
    if (norm.includes("proteus")) return { icon: SiProteus, color: "#1C79B3" };

    // Design & Planning
    if (norm.includes("figma")) return { icon: SiFigma, color: "#F24E1E" };
    if (norm.includes("jira")) return { icon: SiJira, color: "#0052CC" };
    if (norm.includes("notion")) return { icon: SiNotion, color: "#FFFFFF" };
    if (norm.includes("trello")) return { icon: SiTrello, color: "#0052CC" };
    if (norm.includes("canva")) return { icon: SiCanva, color: "#00C4CC" };
    if (norm.includes("photoshop")) return { icon: SiAdobephotoshop, color: "#31A8FF" };

    // DevOps & Tools
    if (norm.includes("kubernetes")) return { icon: SiKubernetes, color: "#326CE5" };
    if (norm.includes("docker")) return { icon: SiDocker, color: "#2496ED" };
    if (norm.includes("git")) return { icon: SiGit, color: "#F05032" };
    if (norm.includes("redis")) return { icon: SiRedis, color: "#DC382D" };
    if (norm.includes("vercel")) return { icon: SiVercel, color: "#FFFFFF" };
    if (norm.includes("aws")) return { icon: SiAmazonwebservices, color: "#FF9900" };
    if (norm.includes("firebase")) return { icon: SiFirebase, color: "#FFCA28" };
    if (norm.includes("postman")) return { icon: SiPostman, color: "#FF6C37" };
    if (norm.includes("vs code") || norm.includes("vscode")) return { icon: VscCode, color: "#007ACC" };
    if (norm.includes("packet tracer")) return { icon: SiCisco, color: "#1BA0D7" };

    // AI/ML
    if (norm.includes("tensorflow")) return { icon: SiTensorflow, color: "#FF6F00" };
    if (norm.includes("pytorch")) return { icon: SiPytorch, color: "#EE4C2C" };
    if (norm.includes("opencv")) return { icon: SiOpencv, color: "#5C3EE8" };

    return null;
};

const skills = [
    {
        category: "Languages",
        items: ["C/C++", "Python", "Java", "C#", "JavaScript", "TypeScript", "Go", "Dart", "VHDL", "Assembly", "LaTeX", "Markdown"]
    },
    {
        category: "Web/Frameworks",
        items: ["React", "Next.js", "Astro", "Tailwind", "Express.js", "FastAPI", "Django", "Node.js", "Flutter", "HTML", "CSS"]
    },
    {
        category: "Database",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Neo4j"]
    },
    {
        category: "Hardware/IoT",
        items: ["Arduino", "ESP32", "Raspberry Pi", "Linux", "Proteus", "PlatformIO"]
    },
    {
        category: "Networking & Cloud",
        items: ["Docker", "Kubernetes", "NVIDIA Aerial", "Packet Tracer"]
    },
    {
        category: "Tools & Design",
        items: ["Git", "GitHub", "Figma", "Canva", "Photoshop", "Jira", "Trello", "Postman"]
    },
    {
        category: "AI/ML",
        items: ["TensorFlow", "PyTorch", "OpenCV"]
    },
];

const TechStack = () => {
    return (
        <section className="py-20 px-4" id="tech-stack">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                    Technical Arsenal
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <div
                            key={idx}
                            className="bg-black/90 border border-white/10 p-6 md:p-8 hover:border-[#FF00FF] transition-colors duration-300 rounded-lg backdrop-blur-sm"
                        >
                            <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#FF00FF] uppercase tracking-wider border-b border-white/10 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-6 md:gap-8">
                                {skillGroup.items.map((tech, techIdx) => {
                                    const techConfig = getTechConfig(tech);
                                    if (!techConfig) return null;
                                    const { icon: Icon, color } = techConfig;
                                    return (
                                        <div
                                            key={techIdx}
                                            className="group flex flex-col items-center gap-3 cursor-pointer select-none active:scale-95 transition-transform"
                                        >
                                            <div
                                                className="w-18 h-18 md:w-20 md:h-20 flex items-center justify-center bg-zinc-900 border border-white/10 rounded-lg group-hover:scale-105 group-active:scale-105 transition-transform duration-200 shadow-lg group-hover:shadow-[0_0_20px_var(--hover-shadow-color)] group-active:shadow-[0_0_20px_var(--hover-shadow-color)] group-hover:border-(--hover-shadow-color) group-active:border-(--hover-shadow-color)"
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
