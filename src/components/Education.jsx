import React from "react";
import { Building2 } from "lucide-react";

const educationData = [
    {
        slug: "ui",
        school: "Universitas Indonesia",
        degree: "Bachelor of Computer Engineering",
        period: "Expected April 2027",
        score: "GPA: 3.75 / 4.00",
        color: "#FFD700" // Gold
    },
    {
        slug: "sman34",
        school: "SMAN 34 Jakarta",
        degree: "Math and Sciences",
        period: "July 2020 – April 2023",
        score: "Grade: 90 / 100",
        color: "#00FFFF" // Cyan
    }
];

const EducationCard = ({ data }) => {
    return (
        <div
            className="relative bg-black border border-zinc-800 overflow-hidden group transition-all duration-300 flex flex-col h-full hover:border-[#00FFFF]"
        >
            {/* Campus Photo Background / Header */}
            <div className="h-56 w-full relative overflow-hidden text-left">
                <div className="absolute inset-0 z-10 bg-black/40" />
                <img
                    src={`/assets/education/${data.slug}.jpg`}
                    alt={data.school}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* School Logo Overlay */}
            <div className="absolute top-56 left-6 -translate-y-1/2 w-20 h-20 z-30 bg-black border border-white/20 p-2 rounded-lg shadow-xl shadow-black/50">
                <img
                    src={`/assets/logos/${data.slug}.png`}
                    alt="Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/50"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>';
                    }}
                />
            </div>

            <div className="p-6 pt-12 grow flex flex-col items-start relative z-10 text-left">
                <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-[#00FFFF] transition-colors leading-tight">
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
        </div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter text-[#FFFF00] drop-shadow-[0_0_15px_rgba(255,255,0,0.6)]">
                    Academic Archives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, idx) => (
                        <EducationCard key={idx} data={edu} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
