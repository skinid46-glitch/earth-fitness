import React from "react";
import Slider from "../components/Slider";
const heroImage =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85";
const HeroSection = () => {
    return (
        
        <section
            id="home"
            className="relative min-h-[100svh] w-full bg-[#101010] overflow-hidden flex flex-col justify-between"
        >
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Fitfusion Studio fitness floor"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-40 md:pt-48 pb-20">
                <div className="max-w-4xl">

                    <div className="inline-flex items-center gap-3 mb-7">
                        <span className="w-10 h-[2px] bg-[#D7FF3F]" />
                        <p className="text-[#D7FF3F] uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">
                            Welcome to Fitfusion Studio
                        </p>
                    </div>

                    <h1 className="text-white font-black uppercase leading-[0.9] tracking-tight text-[clamp(52px,10vw,120px)]">
                        Find Your
                        <br />
                        <span className="text-[#D7FF3F]">Strength.</span>
                    </h1>

                    <p className="text-white/75 mt-7 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
                        More than a workout. Discover a motivating fitness
                        community with strength sessions, energetic group
                        workouts and coaching that keeps you moving forward.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-9">
                        <a
                            href="#contact"
                            className="bg-[#D7FF3F] text-black font-extrabold px-7 py-4 rounded-full hover:bg-white transition"
                        >
                            Start Your Journey →
                        </a>

                        <a
                            href="#about"
                            className="border border-white/40 text-white font-bold px-7 py-4 rounded-full hover:bg-white hover:text-black transition"
                        >
                            Explore Studio
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative z-20">
                <Slider />
            </div>
        </section>
    );
};

export default HeroSection;