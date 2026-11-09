import React from "react";

const HeadLine = () => {
  return (
    <section
      id="about"
      className="w-full bg-white text-black flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-[clamp(60px,8vw,110px)] text-center overflow-hidden"
    >
      <p className="text-[#315b42] font-montserrat font-extrabold tracking-[0.25em] text-xs md:text-sm mb-5">
        ABOUT EARTH FITNESS
      </p>

      <h1 className="font-nudge text-[clamp(30px,5vh,58px)] md:text-[clamp(38px,5vh,64px)] leading-[1.15] tracking-[0.1rem] max-w-[900px]">
        Stronger Every Day.
        <br />
        <span className="text-[#315b42]">A Better You Starts Here.</span>
      </h1>

      <p className="mt-6 max-w-[720px] text-[clamp(13px,1.1vw,16px)] font-Work font-medium leading-[1.8] text-gray-700">
        Welcome to Earth Fitness, a fitness centre in Kamod, Ahmedabad.
        Whether your goal is to build strength, improve stamina, manage
        your weight or feel healthier, find a workout routine that helps
        you keep moving forward.
      </p>

      <a
        href="tel:+919909912509"
        className="py-4 px-7 bg-[#E8FE61] rounded-full mt-8 font-montserrat font-extrabold text-sm hover:scale-105 transition duration-200"
      >
        Talk To Our Team →
      </a>

      <img
        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=85"
        alt="Fitness training environment"
        loading="lazy"
        className="mt-12 w-full max-w-[1000px] h-[250px] sm:h-[400px] object-cover rounded-2xl shadow-xl"
      />
    </section>
  );
};

export default HeadLine;