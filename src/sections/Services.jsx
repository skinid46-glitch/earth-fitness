import React from "react";
import {
  Dumbbell,
  Users,
  HeartPulse,
  Scale,
  Salad,
  Activity,
  Trophy,
} from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Work towards greater strength with resistance exercises and structured strength-training routines.",
  },
  {
    icon: Users,
    title: "Group Fitness Classes",
    description:
      "Stay motivated and enjoy exercising with others through group fitness sessions.",
  },
  {
    icon: HeartPulse,
    title: "Cardio & Endurance",
    description:
      "Improve cardiovascular fitness, build stamina and make movement part of your daily routine.",
  },
  {
    icon: Scale,
    title: "Weight Management",
    description:
      "Work towards your weight-management goals with exercise guidance and consistent training.",
  },
  {
    icon: Salad,
    title: "Nutrition Guidance",
    description:
      "Explore nutrition guidance and meal-planning support to complement your fitness routine.",
  },
  {
    icon: Activity,
    title: "Functional & Sports Training",
    description:
      "Build movement, coordination and fitness with functional exercises and sports-focused training.",
  },
  {
    icon: Trophy,
    title: "Personal Training",
    description:
      "Get individual attention and workout guidance to help you work towards your personal goals.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#eff5ef] px-5 sm:px-8 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col items-center gap-6"
    >
      <p className="text-[#315b42] font-montserrat font-extrabold tracking-[0.2em] text-xs md:text-sm">
        TRAIN YOUR WAY
      </p>

      <h1 className="text-black font-nudge font-bold tracking-wider text-center text-[clamp(28px,4vw,50px)]">
        Our Fitness Services
      </h1>

      <p className="text-black/70 font-Work font-medium text-sm md:text-lg leading-relaxed max-w-[680px] text-center">
        From strength and cardio to group workouts and personal
        guidance, explore ways to work towards your fitness goals.
      </p>

      <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="bg-white text-black rounded-2xl p-7 shadow-sm border border-black/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#315b42] text-lime-300 flex items-center justify-center mb-6">
                <Icon size={25} />
              </div>

              <h2 className="font-nudge text-xl tracking-wide mb-3">
                {service.title}
              </h2>

              <p className="font-Work text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;