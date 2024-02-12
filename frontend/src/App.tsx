import "./App.css";
import Card from "./components/Card";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <BrowserRouter basename="/:name">
      <Routes>
        <Route path="/link" element={<Index />} />;
        <Route path="/card/:name" element={<Card />} />;
        <Route path="/" element={<Home />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
