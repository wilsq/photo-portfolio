import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const [errors, setErrors] = useState({});

  // Inputtien muutoskäsittelijä
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Frontendin validiointi funktio
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nimi on pakollinen";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Sähköposti on pakollinen";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Sähköposti ei ole kelvollinen";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Viesti ei voi olla tyhjä";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Jos ei virheitä, nollataan errorit
    setErrors({});

    console.log("Lähetettävä data:", formData);

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Virhe lähetyksessä");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Resetoidaan lomake
      setShowPopup(true); // avaa pop-up
    } catch (error) {
      console.error("Virhe lomakkeen lähetyksessä", error);
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-2x1 mx-auto">
        <h1 className="text-4x1 font-bold mb-8">Ota Yhteyttä</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white/5 p-6 rounded-x1 border border-white/10"
        >
          <input
            type="text"
            name="name"
            placeholder="Nimi"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-1g bg-black/30 border border-white/20"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Sähköposti"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-1g bg-black/30 border border-white/20"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}

          <textarea
            name="message"
            placeholder="Viesti"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-1g bg-black/30 border border-white/20 h-32"
          />
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-1g"
          >
            Lähetä viesti
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 w-80 text-center animate-[fadeIn_0.3s_ease-out]">
            <h3 className="text-x1 font-bold mb-3">Kiitos viestistä!</h3>
            <p>Vastaamme mahdollisimman pian.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Sulje
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
