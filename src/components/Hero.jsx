import heroImg from "../assets/hero2.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center animate-[heroZoom_1s_ease-in-out_forwards]"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: "center 20%",
      }}
    >
      {/* Overlay (tummennus) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Sisältö */}
      <div className="max-w-[1800px] min-h-screen mx-auto px-2 flex justify-between items-center py-4 animate-[fadeSlideUp_0.8s_ease-out]">
        <div className="max-w-md text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg ">
            JANI PEURALA Kuvaportfolio
          </h1>
          <p className="text-lg sm:text-xl mb-6 opacity-90 leading-relaxed">
            Henkilökuvaus | Tuotekuvaus | Tapahtumakuvaus | Maisema- &
            katukuvaus
          </p>
          <Link
            to="/gallery"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-sm border border-white/20 transition text-base"
          >
            Katso Galleria →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Hero;
