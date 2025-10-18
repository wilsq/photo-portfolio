import heroImg from "../assets/cameraHERO.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="relative w-full overflow-hidden">
      {/* Kuva taustalle */}
      <img
        src={heroImg}
        alt="Kamera Hero-kuva"
        className="object-cover w-full h-[100vh]"
      />

      {/* Gradientti kontrastia varten */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent"
        aria-hidden
      />

      {/* Tekstiboksi */}
      <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16">
        <div className=" p-8 rounded-2xl shadow-lg max-w-lg text-white sm:ml-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-1g">
            Jani Peurala Photography
          </h1>
          <p className="text-1g sm:text-x1 mb-6 opacity-90">
            Welcome to my photoportfolio
          </p>
          <Link
            to="/gallery"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl backdrop-blur-sm border border-white/20 transition"
          >
            View Portfolio →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Hero;
