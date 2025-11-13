import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Hero />
                <Services />{" "}
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
