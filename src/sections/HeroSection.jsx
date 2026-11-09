import React from "react";
import Slider from "../components/Slider";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] bg-[#173d2d] overflow-hidden flex flex-col justify-between select-none"
    >
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-lime-200 rounded-full blur-[140px] opacity-20 pointer-events-none" />

      <div className="relative z-20 w-full mt-[130px] md:mt-[170px] max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="text-white">
          <p className="font-montserrat font-bold tracking-[0.2em] text-sm text-lime-300 mb-5">
            WELCOME TO EARTH FITNESS
          </p>

          <h1 className="font-montserrat font-black text-[clamp(48px,7vw,94px)] leading-[0.95] tracking-tight">
            BUILD
            <br />
            YOUR
            <br />
            <span className="text-lime-300">STRENGTH.</span>
          </h1>

          <p className="mt-7 max-w-[480px] text-white/90 text-sm md:text-base leading-relaxed font-medium">
            Make every workout count. Discover a motivating fitness
            environment with strength training, group workouts and
            guidance to help you work towards your fitness goals.
          </p>

          <a
            href="tel:+919909912509"
            className="inline-flex items-center justify-center bg-[#E8FE61] text-black font-montserrat font-black rounded-2xl px-7 py-4 mt-8 hover:scale-105 transition"
          >
            Call Earth Fitness →
          </a>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-lime-300 text-xl">★★★★★</span>
            <span className="text-white font-bold">5.0 Google Rating</span>
            <span className="text-white/70">(487 reviews)</span>
          </div>
        </div>

        <div className="relative w-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85"
            alt="Gym training equipment"
            className="w-full h-[350px] md:h-[520px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#102f25]/80 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-black text-2xl">EARTH FITNESS</p>
            <p className="text-lime-300 font-bold tracking-widest text-xs">
              TRAIN. GROW. GET STRONGER.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-16 z-30">
        <Slider />
      </div>
    </section>
  );
};

export default HeroSection;