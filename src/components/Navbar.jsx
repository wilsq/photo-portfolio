import { Link } from "react-router-dom";
import { Camera, X, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-4">
        <h1 className="text-2x1 flex gap-2 font-bold text-white-600">
          <Camera /> Jani Peurala Photography
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-mono">
          <Link to="/" className="hover:text-gray-500 cursor-pointer">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-gray-500 cursor-pointer">
            Gallery
          </Link>
          <Link to="/about" className="hover:text-gray-500 cursor-pointer">
            About
          </Link>
        </ul>

        {/* Mobiili Menu */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobiili dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-black border-t border-white/20 md:hidden z-50 shadow-lg
               animate-slideDown origin-top"
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-500 transition"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-500 transition"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-500 transition"
            >
              About
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
