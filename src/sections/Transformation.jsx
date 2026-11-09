import React from "react";

const gymImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
    alt: "Gym equipment and workout area",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85",
    alt: "Strength training workout",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",
    alt: "Athlete training",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1000&q=85",
    alt: "Fitness centre interior",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85",
    alt: "Gym strength workout",
  },
  {
    src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1000&q=85",
    alt: "Fitness training session",
  },
];

const Transformation = () => {
  return (
    <section
      id="transformations"
      className="w-full bg-white px-5 sm:px-8 md:px-12 py-16 md:py-24 flex flex-col items-center"
    >
      <p className="text-[#315b42] font-montserrat font-extrabold tracking-[0.2em] text-xs md:text-sm mb-4">
        FITNESS IN ACTION
      </p>

      <h1 className="font-nudge text-black text-center text-[clamp(28px,5vw,56px)] leading-tight tracking-wider">
        Make Every
      </h1>

      <h1 className="font-nudge text-[#315b42] text-center text-[clamp(28px,5vw,56px)] leading-tight tracking-wider mt-2">
        Workout Count
      </h1>

      <p className="mt-5 max-w-[650px] text-center text-gray-600 font-Work leading-relaxed">
        Take the next step in your fitness journey with training,
        movement and consistency.
      </p>

      <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mt-12">
        {gymImages.map((image, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl bg-gray-100 shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-[250px] sm:h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <div className="mt-16 w-full max-w-[1100px] min-h-[320px] rounded-3xl bg-[#173d2d] flex flex-col justify-center items-center text-center px-6 sm:px-12 py-12">
        <h1 className="text-white font-nudge text-[clamp(24px,4vw,42px)] tracking-wide">
          Ready To Get Stronger?
        </h1>

        <p className="mt-5 text-white/90 text-sm md:text-base font-montserrat leading-relaxed max-w-[700px]">
          Take the first step towards your fitness goals. Contact
          Earth Fitness to learn more.
        </p>

        <a
          href="tel:+919909912509"
          className="mt-8 bg-[#E8FE61] text-black font-montserrat font-extrabold px-8 py-4 rounded-2xl hover:scale-105 transition"
        >
          Call Earth Fitness →
        </a>
      </div>
    </section>
  );
};

export default Transformation;