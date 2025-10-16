import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
