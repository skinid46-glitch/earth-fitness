import { Phone, Dumbbell, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const phone = "+919909912509";

  const address =
    "2nd Floor, Satyamev Complex, Kamod, Ahmedabad, Gujarat 382427";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=EARTH+FITNESS+2nd+Floor+Satyamev+Complex+Kamod+Ahmedabad+Gujarat+382427";

  return (
    <section id="contact">
      <footer className="w-full bg-gradient-to-br from-[#102f25] via-[#194b36] to-[#102f25] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <a href="#home" className="flex items-center gap-2.5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-lime-300 text-[#102f25]">
                  <Dumbbell size={27} strokeWidth={2.8} />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="text-white font-black text-xl">
                    EARTH
                  </span>
                  <span className="text-lime-300 font-extrabold text-[10px] tracking-[0.25em] mt-1.5">
                    FITNESS
                  </span>
                </div>
              </a>
            </div>

            <div className="md:col-span-5 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Train Hard.
                <span className="text-lime-300"> Live Strong.</span>
              </h2>

              <p className="text-green-100 text-sm md:text-base leading-relaxed max-w-xl">
                Your fitness journey starts here. Visit Earth Fitness
                at Satyamev Complex, Kamod, Ahmedabad.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="bg-white text-gray-800 rounded-2xl p-6 md:p-7 shadow-lg">
                <h3 className="text-3xl font-extrabold mb-6">
                  Contact Us
                </h3>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 bg-lime-300 hover:bg-lime-200 rounded-xl px-4 py-4 mb-3 font-bold text-sm"
                >
                  <Phone size={20} />
                  +91 99099 12509
                </a>

                <div className="flex items-start gap-3 bg-gray-100 rounded-xl px-4 py-4 text-sm font-medium leading-relaxed mb-3">
                  <MapPin className="shrink-0 mt-0.5 text-[#315b42]" />
                  <span>{address}</span>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-4 text-sm font-medium">
                  <Clock className="shrink-0 text-[#315b42]" />
                  <span>Listed hours: 5:30 AM – 10:00 PM</span>
                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-5 font-bold text-[#315b42] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-10 pt-6">
            <p className="text-green-100/70 text-sm text-center">
              © {new Date().getFullYear()} Earth Fitness. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}