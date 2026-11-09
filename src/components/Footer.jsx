import React from "react";
import { Mail, Phone, MapPin, Dumbbell, Clock } from "lucide-react";

const phoneNumber = "919537956135";

const Footer = () => {
    return (
        <section id="contact" className="bg-[#101010] text-white">

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">

                <div className="grid md:grid-cols-2 gap-12">

                    <div>
                        <a href="#home" className="inline-flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-[#D7FF3F] text-black flex items-center justify-center">
                                <Dumbbell size={28} />
                            </div>

                            <div>
                                <p className="font-black text-xl">FITFUSION</p>
                                <p className="text-[#D7FF3F] text-xs font-bold tracking-[0.3em]">
                                    STUDIO
                                </p>
                            </div>
                        </a>

                        <h2 className="font-black uppercase text-[clamp(32px,4vw,48px)] leading-tight mt-10">
                            Make Your
                            <br />
                            <span className="text-[#D7FF3F]">Move.</span>
                        </h2>

                        <p className="text-white/60 max-w-md mt-5 leading-relaxed">
                            Find your strength, enjoy the energy of group
                            training and keep moving towards your goals.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-8">
                            <a
                                href={`https://wa.me/${phoneNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#D7FF3F] text-black font-extrabold px-6 py-4 rounded-full hover:bg-white transition"
                            >
                                WhatsApp Us →
                            </a>

                            <a
                                href={`tel:+${phoneNumber}`}
                                className="border border-white/30 text-white font-bold px-6 py-4 rounded-full hover:border-[#D7FF3F] hover:text-[#D7FF3F] transition"
                            >
                                Call The Studio
                            </a>
                        </div>
                    </div>

                    <div className="bg-[#1B1B1B] border border-white/10 rounded-2xl p-6 sm:p-8">

                        <h3 className="text-2xl font-black mb-7">
                            Get In Touch
                        </h3>

                        <div className="space-y-5">

                            <a
                                href={`tel:+${phoneNumber}`}
                                className="flex items-center gap-4 text-white/80 hover:text-[#D7FF3F] transition"
                            >
                                <div className="w-11 h-11 rounded-xl bg-[#D7FF3F] text-black flex items-center justify-center">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-wider">
                                        Phone
                                    </p>
                                    <p className="font-bold">+91 95379 56135</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-xl bg-[#D7FF3F] text-black flex items-center justify-center">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-wider">
                                        Listed Hours
                                    </p>
                                    <p className="font-bold">Mon–Sat: 6 AM–10 PM</p>
                                    <p className="text-white/50 text-sm">Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-[#D7FF3F] text-black flex items-center justify-center shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-wider">
                                        Address
                                    </p>
                                    <p className="font-bold leading-relaxed">
                                        2nd Floor, Sarthik Complex,
                                        Iskcon Cross Rd, Satellite,
                                        Ahmedabad, Gujarat 380015
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-14 border-t border-white/10 pt-8">
                    <h3 className="font-black text-lg mb-5">Find The Studio</h3>

                    <div className="overflow-hidden rounded-2xl border border-white/10">
                        <iframe
                            title="Fitfusion Studio location map"
                            src="https://www.google.com/maps?q=Fitfusion%20Studio%2C%202nd%20Floor%2C%20Sarthik%20Complex%2C%20Iskcon%20Cross%20Rd%2C%20Satellite%2C%20Ahmedabad%2C%20Gujarat%20380015&output=embed"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Fitfusion+Studio+2nd+Floor+Sarthik+Complex+Iskcon+Cross+Road+Satellite+Ahmedabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-[#D7FF3F] font-bold hover:text-white transition"
                    >
                        Get Directions →
                    </a>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-sm">
                    © {new Date().getFullYear()} Fitfusion Studio. All rights reserved.
                </div>

            </div>
        </section>
    );
};

export default Footer;