import React, { useState } from "react";
import { navLinks } from "../data/data";
import { Menu, X, Dumbbell } from "lucide-react";

const phone = "+919909912509";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-40 w-full h-[72px] md:h-[80px] bg-[#102f25]/95 backdrop-blur-md border-b border-white/10">
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-lime-300 text-[#102f25]">
              <Dumbbell size={27} strokeWidth={2.8} />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-[17px] sm:text-[19px]">
                EARTH
              </span>
              <span className="text-lime-300 font-extrabold text-[10px] sm:text-[11px] tracking-[0.25em] mt-1.5">
                FITNESS
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm lg:text-[15px] font-bold tracking-wide hover:text-lime-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href={`tel:${phone}`}
            className="hidden md:inline-flex items-center bg-lime-300 hover:bg-lime-200 text-black font-extrabold text-sm px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            Call Now →
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white"
          >
            <Menu size={23} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 md:hidden bg-[#102f25]/[98%] backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 ${
          mobileOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        <button
          onClick={closeMenu}
          aria-label="Close navigation menu"
          className="absolute top-5 right-5 w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 text-white"
        >
          <X size={25} />
        </button>

        <div className="flex items-center gap-2.5 mb-12">
          <div className="w-12 h-12 rounded-xl bg-lime-300 text-[#102f25] flex items-center justify-center">
            <Dumbbell size={28} strokeWidth={2.8} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-xl">EARTH</span>
            <span className="text-lime-300 font-extrabold text-[11px] tracking-[0.25em] mt-1.5">
              FITNESS
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl text-white hover:text-lime-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href={`tel:${phone}`}
            onClick={closeMenu}
            className="mt-5 bg-lime-300 text-black font-extrabold px-8 py-4 rounded-full"
          >
            Call Now →
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;