import React from "react";
const trainingImage =
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=85";

const communityImage =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85";
const Transformation = () => {
    return (
        <section
            id="transformations"
            className="w-full bg-[#F4F4F0] text-black px-5 sm:px-8 md:px-12 py-20 md:py-28"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <p className="text-[#6B7E22] font-black uppercase tracking-[0.25em] text-sm mb-4">
                        Inside Fitfusion
                    </p>

                    <h2 className="font-black uppercase leading-tight text-[clamp(34px,5vw,60px)]">
                        Experience The
                        <span className="text-[#8AAE00]"> Energy.</span>
                    </h2>

                    <p className="text-gray-600 max-w-xl mx-auto mt-5 leading-relaxed">
                        Take a look inside the studio and explore the
                        environment where your next fitness chapter begins.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-3 overflow-hidden rounded-2xl">
                        <img
                            src={trainingImage}
                            alt="Fitfusion Studio training area"
                            className="w-full h-[300px] sm:h-[430px] object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="md:col-span-2 overflow-hidden rounded-2xl">
                        <img
                            src={communityImage}
                            alt="Fitfusion Studio group fitness environment"
                            className="w-full h-[300px] sm:h-[430px] object-cover hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>


                <div className="mt-16 md:mt-24 bg-[#D7FF3F] rounded-3xl px-6 sm:px-10 md:px-16 py-12 md:py-16 text-center">
                    <p className="font-bold uppercase tracking-[0.2em] text-sm">
                        Your Next Chapter Starts Here
                    </p>

                    <h2 className="font-black uppercase text-[clamp(30px,5vw,55px)] leading-tight mt-4">
                        Ready To Move?
                    </h2>

                    <p className="max-w-xl mx-auto mt-5 text-black/70 leading-relaxed">
                        Get in touch with Fitfusion Studio and take the
                        first step towards your fitness goals.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex mt-8 bg-black text-white font-extrabold px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Contact The Studio →
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Transformation;