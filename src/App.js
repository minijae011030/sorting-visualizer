import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./MainPage";
import NetworkPage from "./Graph/NetworkPage";
import SortingPage from "./Sort/SortingPagae";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/sorting" element={<SortingPage />} />
        <Route path="/graph" element={<NetworkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
