import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutContent from "./Components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutContent />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
