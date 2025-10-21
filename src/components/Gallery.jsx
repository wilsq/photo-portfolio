import React, { useMemo, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

// Kategoria config
const CATEGORIES = {
  henkilokuvaus: {
    prefix: "/gallery/henkilokuvaus/henk",
    count: 4,
    ext: "jpg",
  },
  tuotekuvaus: {
    prefix: "/gallery/tuotekuvaus/tuote",
    count: 13,
    ext: "jpg",
  },
  tapahtumakuvaus: {
    prefix: "/gallery/tapahtumakuvaus/tapa",
    count: 3,
    ext: "jpg",
  },
  katukuvaus: {
    prefix: "/gallery/katukuvaus/katu",
    count: 11,
    ext: "jpg",
  },
};

// Funktio kuvapolkujen luontiin
const buildImageList = ({ prefix, count, ext }) =>
  Array.from({ length: count }, (_, i) => `${prefix}${i + 1}.${ext}`);

function Gallery() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tabFromUrl = params.get("tab");

  useEffect(() => {
    // Scrollaa aina gallerian alkuun kun tullaan sivulle
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    if (tabFromUrl && tabs.some((t) => t.key === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  // Välilehtien luonti
  const tabs = [
    { key: "henkilokuvaus", label: "Henkilökuvaus" },
    { key: "tuotekuvaus", label: "Tuotekuvaus" },
    { key: "tapahtumakuvaus", label: "Tapahtumakuvaus" },
    { key: "katukuvaus", label: "Katu- ja maisemakuvaus" },
  ];

  // Aktiivinen kategoria
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  //
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = useMemo(
    () => buildImageList(CATEGORIES[activeTab]),
    [activeTab]
  );

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
    <section className="min-h-screen text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Galleria</h2>

        {/* Välilehdet */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10">
          {tabs.map((t) => {
            const isActive = t.key === activeTab;
            return (
              <button
                key={t.key}
                onClick={() => {
                  setActiveTab(t.key);
                  setSelectedIndex(null);
                }}
                className={[
                  "px-4 py-2 rounded-xl border transition font-mono",
                  isActive
                    ? "bg-white/15 border-white/30"
                    : "bg-white/5 border-white/10 hover:bg-white/20",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Kuvagrid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${activeTab} ${i + 1}`}
              loading="lazy"
              onClick={() => setSelectedIndex(i)}
              className="cursor-pointer rounded-lg object-cover w-full h-64 hover:scale-105 hover:opacity-80 transition"
            />
          ))}
        </div>

        {/* LightBox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
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
