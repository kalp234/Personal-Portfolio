import Navbar from "./components/Navbar/Navbar";
import HomePage from "./HomePage";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
