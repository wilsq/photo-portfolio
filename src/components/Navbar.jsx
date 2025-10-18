import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2x1 flex gap-2 font-bold text-white-600">
          <Camera /> Jani Peurala Photography
        </h1>
        <ul className="flex gap-10">
          <Link to="/" className="hover:text-gray-500 cursor-pointer">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-gray-500 cursor-pointer">
            Gallery
          </Link>
          <li className="hover:text-gray-500 cursor-pointer">About Me</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
