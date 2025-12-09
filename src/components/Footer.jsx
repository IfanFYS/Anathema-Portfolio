import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaDiscord, FaLine, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fathanyazidsatriani/', icon: FaLinkedin, color: 'hover:text-[#0077B5]' },
    { name: 'GitHub', url: 'https://github.com/IfanFYS', icon: FaGithub, color: 'hover:text-white' },
    { name: 'Email', url: 'mailto:fathanyazidsatriani@gmail.com', icon: FaEnvelope, color: 'hover:text-[#EA4335]' },
    { name: 'Discord', url: '#', icon: FaDiscord, color: 'hover:text-[#5865F2]' },
    { name: 'WhatsApp', url: 'https://wa.me/6281398696033', icon: FaWhatsapp, color: 'hover:text-[#25D366]' },
    { name: 'Line', url: '#', icon: FaLine, color: 'hover:text-[#00C300]' },
];

const Footer = () => {
    return (
        <footer className="py-12 border-t border-zinc-900 bg-black relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-[#00FFFF] to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-widest">
                    Ready to <span className="text-[#00FFFF]">Collaborate</span>?
                </h3>

                <div className="flex flex-wrap justify-center gap-8 mb-8">
                    {socialLinks.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.name}
                                className={`text-3xl text-zinc-700 transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] ${link.color}`}
                            >
                                <Icon />
                            </a>
                        );
                    })}
                </div>

                <p className="text-zinc-600 text-sm font-mono">
                    SYSTEM_VERSION_2.0 // © {new Date().getFullYear()} FATHAN YAZID SATRIANI
                </p>
            </div>
        </footer>
    );
};

export default Footer;
