function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-2x1 mx-auto">
        <h1 className="text-4x1 font-bold mb-8">Ota Yhteyttä</h1>

        <form className="flex flex-col gap-6 bg-white/5 p-6 rounded-x1 border border-white/10">
          <input
            type="text"
            placeholder="Nimi"
            className="p-3 rounded-1g bg-black/30 border border-white/20"
          />

          <input
            type="email"
            placeholder="Sähköposti"
            className="p-3 rounded-1g bg-black/30 border border-white/20"
          />

          <textarea
            placeholder="Viesti"
            className="p-3 rounded-1g bg-black/30 border border-white/20 h-32"
          />

          <button className="bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-1g">
            Lähetä viesti
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
