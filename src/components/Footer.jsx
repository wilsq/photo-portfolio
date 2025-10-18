import { InstagramIcon, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Jani Peurala Photography. All rights
          reserved
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
            href="mailto:jani@example.com" // <-- vaihda oikea sähköposti
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
