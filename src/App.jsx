import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-100">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
