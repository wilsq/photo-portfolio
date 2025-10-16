import React from "react";
import port1 from "../assets/port1.jpg";
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";
import port4 from "../assets/port4.jpeg";

function Gallery() {
  return (
    <section id="gallery" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Galleria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={port1}
            alt="Kuva 1"
            className="rounded-1g object-cover w-full h-64"
          />
          <img
            src={port2}
            alt="Kuva 2"
            className="rounded-1g object-cover w-full h-64"
          />
          <img
            src={port3}
            alt="Kuva 3"
            className="rounded-1g object-cover w-full h-64"
          />
          <img
            src={port4}
            alt="Kuva 4"
            className="rounded-1g object-cover w-full h-64"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
