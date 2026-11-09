import React, { useState } from "react";
import { navLinks } from "../data/data";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMenu = () => setMobileOpen(false);

    return (
        <>
            <nav className="fixed top-0 left-0 z-40 w-full h-[72px] md:h-[80px] bg-[#101010]/90 backdrop-blur-xl border-b border-white/10">
                <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8">

                    <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-[#D7FF3F] text-black flex items-center justify-center">
                            <Dumbbell size={26} strokeWidth={2.7} />
                        </div>

                        <div className="flex flex-col leading-none">
                            <span className="text-white font-black text-lg tracking-tight">
                                FITFUSION
                            </span>
                            <span className="text-[#D7FF3F] text-[10px] font-bold tracking-[0.3em] mt-1">
                                STUDIO
                            </span>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white/80 hover:text-[#D7FF3F] text-sm font-semibold transition"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        className="hidden md:inline-flex bg-[#D7FF3F] text-black font-extrabold px-6 py-3 rounded-full hover:bg-white transition"
                    >
                        Join The Studio →
                    </a>

                    <button
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                        className="md:hidden text-white p-2"
                    >
                        <Menu size={27} />
                    </button>
                </div>
            </nav>

            <div className={`fixed inset-0 z-50 bg-[#101010] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
                mobileOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}>
                <button
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="absolute top-6 right-6 text-white"
                >
                    <X size={28} />
                </button>

                <div className="flex items-center gap-3 mb-12">
                    <div className="w-12 h-12 rounded-xl bg-[#D7FF3F] text-black flex items-center justify-center">
                        <Dumbbell size={28} />
                    </div>
                    <div>
                        <p className="text-white font-black text-xl">FITFUSION</p>
                        <p className="text-[#D7FF3F] text-xs font-bold tracking-[0.3em]">STUDIO</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="text-white text-2xl font-bold hover:text-[#D7FF3F]"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="mt-4 bg-[#D7FF3F] text-black font-extrabold px-8 py-4 rounded-full"
                    >
                        Join The Studio →
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;