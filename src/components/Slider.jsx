import React from "react";
import { scoll } from "../data/data";

const Slider = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#E4E4E4] mt-5 border-y border-black/10 py-4 md:py-6">
      <ul className="relative flex w-max items-center gap-8 sm:gap-12 md:gap-16 whitespace-nowrap animate-infinite-scroll">
        {[...scoll, ...scoll].map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-8 sm:gap-12 md:gap-16"
          >
            <p className="text-[11px] sm:text-sm md:text-lg font-montserrat font-extrabold tracking-[0.12em] md:tracking-[0.18em] uppercase text-[#202020] hover:text-[#315b42] transition-colors">
              {item.text}
            </p>
            <span className="text-[#315b42] text-2xl md:text-3xl font-black">
              ✳
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;