import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Sort/MainPage";
import NetworkPage from "./Graph/NetworkPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/network" element={<NetworkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
