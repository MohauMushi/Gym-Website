import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Services />
        < Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
