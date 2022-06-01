import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Views/HomePage/HomePage";
import InsertFaqs from "./Views/Administration/InsertFaqs/InsertFaqs";
import AdminLogin from "./Views/Administration/AdminLogin/AdminLogin";
import NotFound from "./Views/NotFound/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login/" element={<AdminLogin />} />
        <Route path="/admin/insertfaqs" element={<InsertFaqs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
