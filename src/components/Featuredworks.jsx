import { Link } from "react-router-dom";
import port1 from "../assets/port1.jpg";
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";
import { useState } from "react";
import { X } from "lucide-react";

function FeaturedWorks() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [port1, port2, port3];

  const handleClose = () => setSelectedImage(null);
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6x1 mx-auto text-center">
        <h2 className="text-3x1 font-bold mb-8">My work</h2>

        {/* Kuvagrid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Esimerkkikuva ${index + 1}`}
              className="rounded-lg object-cover w-full h-64 hover:opacity-80 transition"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
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
            <img
              src={selectedImage}
              alt="Suurempi kuva"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedWorks;
