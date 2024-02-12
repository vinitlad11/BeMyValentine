import "./App.css";
import Card from "./components/Card";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />;
      <Route path="/card/:name" element={<Card />} />;
      <Route path="/:name" element={<Home />} />;
    </Routes>
  );
}

export default App;
