function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2x1 font-bold text-blue-600">
        Jani Peurala Photography
      </h1>
      <ul className="flex gap-4">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">Gallery</li>
        <li className="hover:text-blue-500 cursor-pointer">About Me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
