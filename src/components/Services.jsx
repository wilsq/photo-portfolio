import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Tuotekuvaus",
      text: "Tyylikkäät tuotekuvat, jotka tuovat esiin yksityiskohdat ja laadun.",
      img: "/gallery/tuotekuvaus/tuote13.jpg",
      tab: "tuotekuvaus",
    },
    {
      title: "Tapahtumakuvaus",
      text: "Hetket ja tunnelmat tapahtumista ammattitaidolla.",
      img: "/gallery/tapahtumakuvaus/tapa2.jpg",
      tab: "tapahtumakuvaus",
    },
    {
      title: "Maisema- & katukuvaus",
      text: "Taltioin urbaanit hetket ja luonnon rauhan sellaisina kuin ne ovat.",
      img: "/gallery/katukuvaus/katu1.jpg",
      tab: "katukuvaus",
    },
  ];

  return (
    <section className="max-w-[1800px] mx-auto px-2 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white justify-items-center">
      {services.map((s, i) => (
        <Link
          to={`/gallery?tab=${s.tab}`}
          key={i}
          className="block w-full max-w-[600px] mx-auto rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <img src={s.img} alt={s.title} className="w-full h-72 object-cover" />
          <div className="p-5 text-center">
            <h3 className="text-xl font-mono mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.text}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Services;
