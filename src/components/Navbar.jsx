function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2x1 font-bold text-white-600">
          Jani Peurala Photography
        </h1>
        <ul className="flex gap-4">
          <li className="hover:text-gray-500 cursor-pointer">Home</li>
          <li className="hover:text-gray-500 cursor-pointer">Gallery</li>
          <li className="hover:text-gray-500 cursor-pointer">About Me</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
