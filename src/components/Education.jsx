import React from "react";

const educationData = [
    {
        slug: "ui",
        school: "Universitas Indonesia",
        degree: "Bachelor of Computer Engineering",
        period: "Expected Apr 2027",
        score: "GPA: 3.75 / 4.00",
        color: "#FFD700"
    },
    {
        slug: "sman34",
        school: "SMAN 34 Jakarta",
        degree: "Mathematics and Sciences",
        period: "Jul 2020 - Apr 2023",
        score: "Grade: 90 / 100",
        color: "#00FFFF"
    }
];

const EducationCard = ({ data }) => {
    return (
        <div className="relative bg-black/90 border border-white/10 overflow-hidden group transition-all duration-300 flex flex-col h-full hover:border-[#00FFFF] rounded-lg backdrop-blur-sm">
            <div className="h-56 w-full relative overflow-hidden text-left">
                <div className="absolute inset-0 z-10 bg-black/15" />
                <img
                    src={`/assets/education/${data.slug}.jpg`}
                    alt={data.school}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
            </div>

            <div className="absolute top-56 left-6 -translate-y-1/2 w-20 h-20 z-30 bg-black border border-white/20 p-2 rounded-lg shadow-xl shadow-black/50">
                <img
                    src={`/assets/logos/${data.slug}.png`}
                    alt={`${data.school} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white/50 font-black">EDU</div>';
                    }}
                />
            </div>

            <div className="p-6 pt-12 grow flex flex-col items-start relative z-10 text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-white group-hover:text-[#00FFFF] transition-colors leading-tight">
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

            <div className="absolute top-0 right-0 w-2 h-2 bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF00FF] shadow-[0_0_10px_#FF00FF]" />
        </div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tight text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                    Academic Archives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu) => (
                        <EducationCard key={edu.slug} data={edu} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
