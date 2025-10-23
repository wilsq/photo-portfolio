import { InstagramIcon, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-5">
      <div className="max-w-[1800px] mx-auto px-2 flex justify-between items-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jani Peurala Photography. Kaikki
          oikeudet pidätetään.
        </p>
        <div className="flex justify-center items-center space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/beurala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="Instagram"
          >
            <InstagramIcon size={28} />
          </a>

          {/* Sähköposti */}
          <a
            href="mailto:jani@example.com"
            className="hover:text-gray-400 transition"
            aria-label="Sähköposti"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
