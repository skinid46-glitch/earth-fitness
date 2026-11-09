import React from "react";
import { scoll } from "../data/data";

const Slider = () => {
    return (
        <div className="w-full overflow-hidden bg-[#D7FF3F] py-5 border-y border-black/10">
            <ul className="flex w-max items-center gap-10 md:gap-16 whitespace-nowrap animate-infinite-scroll">
                {[...scoll, ...scoll].map((item, index) => (
                    <li key={index} className="flex items-center gap-10 md:gap-16">
                        <p className="text-black text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.15em]">
                            {item.text}
                        </p>
                        <span className="text-black text-xl font-black">✳</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Slider;