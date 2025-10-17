import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import port1 from "../assets/port1.jpg";
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";
import port4 from "../assets/port4.jpeg";
import blackpaper from "../assets/blackpaper.png";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [port1, port2, port3, port4];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => setSelectedIndex(null);
  return (
    <section
      id="gallery"
      className="min-h-screen  text-white py-16 pb-8 px-6 flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${blackpaper})",
        backgroundColor: "#000",
      }}
    >
      {/* Kuvagrid */}
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-10">Galleria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Kuva ${index + 1}`}
              className="rounded-lg object-cover w-full h-64 cursor-pointer hover:opacity-80 transition"
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        {/* LightBox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-6 text-white hover:text-gray-300"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </button>

            <img
              src={images[selectedIndex]}
              alt="isompi kuva"
              className="max-h-[90vh] max-w-[90vw] rounded-1g shadow-1g"
            />

            <button
              className="absolute right-6 text-white hover:text-gray-300"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
