import React from "react";
import aboutImg from "../assets/aboutkuva2.jpg";

function About() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen max-h-[90vh]">
      <div className="md:w-1/2 h-[40vh] md:h-auto overflow-hidden ">
        <img
          src={aboutImg}
          alt="Jani kuva"
          className="w-full h-full object-cover scale-105 opacity-0 animate-[fadeSlideLeft_1s_ease-out_forwards]"
        />
      </div>

      {/* teksti */}
      <div className="md:w-1/2 bg-black text-white flex items-center animate-[fadeSlideUp_0.8s_ease-out]">
        <div className="max-w-lg mx-auto px-6 py-10 md:py-16">
          <h2 className="text-4xl font-bold mb-4">Moi, olen Jani</h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Olen intohimoinen valokuvaaja, joka rakastaa tallentaa aitoja hetkiä
            henkilökuvien, tapahtumien ja maisemien kautta.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Kuvissani tärkeintä on tunnelma ja aitous. Valokuvaus on minulle
            tapa pysäyttää hetkiä.
          </p>
          <a
            href="mailto:jani@example.com"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl border border-white/20 transition"
          >
            Ota yhteyttä 📩
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
