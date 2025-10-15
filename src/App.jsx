import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-100">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
