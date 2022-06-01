import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import InsertFaqs from "./Components/Administration/InsertFaqs/InsertFaqs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login/" element={<HomePage />} />
        <Route path="/admin/insertfaqs" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
