import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./MainPage";
import SortingPage from "./Sort/SortingPagae";
import GraphPage from "./Graph/GraphPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/sorting" element={<SortingPage />} />
        <Route path="/graph" element={<GraphPage />} />
      </Routes>
    </Router>
  );
}

export default App;
