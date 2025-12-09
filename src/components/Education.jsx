import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const educationData = [
    {
        slug: "ui",
        school: "Universitas Indonesia",
        degree: "Bachelor of Computer Engineering",
        period: "Expected April 2027",
        score: "GPA: 3.72 / 4.00",
        color: "#FFD700" // Gold
    },
    {
        slug: "sman34",
        school: "SMAN 34 Jakarta",
        degree: "Math and Sciences",
        period: "July 2020 – April 2023",
        score: "Grade: 89 / 100",
        color: "#00FFFF" // Cyan
    }
];

const EducationCard = ({ data, delay }) => {
    const [logoError, setLogoError] = useState(false);
    const [bgError, setBgError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTap={() => setIsHovered(!isHovered)}
            className={`relative backdrop-blur-md border border-white/10 overflow-hidden group transition-all duration-300 flex flex-col h-full ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}
        >
            {/* Campus Photo Background / Header */}
            <div className="h-56 w-full relative overflow-hidden text-left">
                <div className={`absolute inset-0 z-10 transition-colors duration-500 ${isHovered ? 'bg-black/30' : 'bg-black/50'}`} />
                <img
                    src={`/assets/education/${data.slug}.jpg`}
                    alt={data.school}
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'grayscale-0 scale-110' : 'grayscale scale-100'}`}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'; // Hide broken image
                        setBgError(true);
                    }}
                />
                {bgError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border-b border-white/10 z-0">
                        <Building2 className="text-white/20" size={48} />
                    </div>
                )}
            </div>

            {/* School Logo Overlay */}
            <div className="absolute top-48 left-6 -translate-y-1/2 w-16 h-16 z-30 bg-black border border-white/20 p-2 rounded-lg shadow-xl shadow-black/50">
                {!logoError ? (
                    <img
                        src={`/assets/logos/${data.slug}.png`}
                        alt="Logo"
                        className="w-full h-full object-contain"
                        onError={() => setLogoError(true)}
                    />
                ) : (
                    <Building2 className="w-full h-full text-white/50" />
                )}
            </div>

            <div className="p-6 pt-12 flex-grow flex flex-col items-start relative z-10 text-left">
                <h3 className={`text-2xl font-bold mb-1 transition-colors leading-tight ${isHovered ? 'text-[#00FFFF]' : 'text-white'}`}>
                    {data.school}
                </h3>
                <p className="text-slate-300 font-medium mb-4 text-sm uppercase tracking-wide">{data.degree}</p>

                <div className="mt-auto flex flex-wrap items-center gap-3 text-sm font-mono text-slate-400">
                    <span className="bg-white/5 px-2 py-1 border border-white/10">
                        {data.period}
                    </span>
                    <span className="text-[#39FF14] font-bold border border-[#39FF14]/30 px-2 py-1 bg-[#39FF14]/10">
                        {data.score}
                    </span>
                </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF00FF] shadow-[0_0_10px_#FF00FF]" />
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                        Academic Archives
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, idx) => (
                        <EducationCard key={idx} data={edu} delay={idx * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
