import React from "react";
import port1 from "../assets/port1.jpg";
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";
import port4 from "../assets/port4.jpeg";

function Gallery() {
  return (
    <section
      id="gallery"
      className="min-h-screen  text-white py-16 pb-8 px-6 flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://www.transparenttextures.com/patterns/black-paper.png')",
        backgroundColor: "#000",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-10">Galleria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[port1, port2, port3, port4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Kuva ${i + 1}`}
              className="rounded-lg object-cover w-full h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
