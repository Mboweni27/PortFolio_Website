// App.tsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/intro";
import M5CS from "./components/M5CS"; // or wherever it lives

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<M5CS />} /> {/* BMW view first */}
        <Route path="/portfolio" element={<Intro />} /> {/* Full portfolio */}
      </Routes>
    </Router>
  );
}

export default App;
