import React from "react";
import { Dumbbell, Users, Activity, HeartPulse, Target, Zap } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: Dumbbell,
            title: "Strength Training",
            description: "Build strength and improve your fitness through structured resistance workouts.",
        },
        {
            icon: Users,
            title: "Group Workouts",
            description: "Train alongside others in energetic sessions that keep you motivated.",
        },
        {
            icon: Zap,
            title: "HIIT-Style Training",
            description: "Challenge your stamina with high-intensity training and varied workout formats.",
        },
        {
            icon: Activity,
            title: "Conditioning",
            description: "Work on endurance, movement and overall physical performance.",
        },
        {
            icon: HeartPulse,
            title: "Yoga & Mobility",
            description: "Support flexibility, balance and recovery with mindful movement sessions.",
        },
        {
            icon: Target,
            title: "Personal Guidance",
            description: "Get support and motivation as you work towards your individual fitness goals.",
        },
    ];

    return (
        <section
            id="services"
            className="w-full bg-[#101010] text-white px-5 sm:px-8 md:px-12 py-20 md:py-28"
        >
            <div className="max-w-7xl mx-auto">

                <div className="max-w-2xl mb-12 md:mb-16">
                    <p className="text-[#D7FF3F] text-sm font-bold uppercase tracking-[0.25em] mb-4">
                        Train Your Way
                    </p>

                    <h2 className="font-black uppercase leading-tight text-[clamp(34px,5vw,60px)]">
                        Built Around
                        <span className="text-[#D7FF3F]"> Your Goals.</span>
                    </h2>

                    <p className="text-white/60 mt-5 leading-relaxed">
                        Find the right way to move, build strength and stay
                        consistent with a range of training experiences.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-[#1B1B1B] border border-white/10 rounded-2xl p-7 md:p-8 hover:bg-[#D7FF3F] hover:text-black transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#D7FF3F] text-black flex items-center justify-center group-hover:bg-black group-hover:text-[#D7FF3F] transition">
                                    <Icon size={27} />
                                </div>

                                <h3 className="font-black text-xl mt-7 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-white/60 group-hover:text-black/70 leading-relaxed text-sm">
                                    {service.description}
                                </p>

                                <div className="mt-7 text-[#D7FF3F] group-hover:text-black font-black text-2xl">
                                    0{index + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;