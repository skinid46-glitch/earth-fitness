import React from "react";

const HeadLine = () => {
    const communityImage =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85";
    return (
        <section
            id="about"
            className="w-full bg-[#F4F4F0] text-black px-5 sm:px-8 md:px-12 py-20 md:py-28"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                <div>
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#6B7E22] mb-5">
                        The Fitfusion Experience
                    </p>

                    <h2 className="font-black uppercase leading-[0.95] tracking-tight text-[clamp(38px,5.5vw,68px)]">
                        Stronger
                        <br />
                        <span className="text-[#8AAE00]">Together.</span>
                    </h2>

                    <p className="mt-7 text-gray-600 leading-[1.8] text-sm sm:text-base max-w-xl">
                        Build consistency, challenge yourself and enjoy
                        training with a community that keeps you motivated.
                        Whether you enjoy independent workouts or coached
                        group sessions, make every session count.
                    </p>

                    <a
                        href="#services"
                        className="inline-flex mt-8 bg-black text-white font-bold px-7 py-4 rounded-full hover:bg-[#8AAE00] hover:text-black transition"
                    >
                        Discover Training →
                    </a>
                </div>

                <div className="relative">
                    <div className="absolute -top-4 -right-4 w-28 h-28 bg-[#D7FF3F] rounded-full" />
                    <img
                        src={communityImage}
                        alt="Fitfusion Studio community and group training"
                        className="relative z-10 w-full h-[330px] sm:h-[440px] object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-5 -left-5 z-20 bg-[#D7FF3F] px-6 py-5 rounded-xl">
                        <p className="font-black text-2xl">MOVE.</p>
                        <p className="font-black text-2xl">GROW.</p>
                        <p className="font-black text-2xl">REPEAT.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeadLine;