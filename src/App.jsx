import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
