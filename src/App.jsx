import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteList from "./pages/website/index";
import WebsiteCreate from "./pages/website/create";
import WebsiteEdit from "./pages/website/[id]";
import WebsiteDetail from "./pages/website/detail"; // ✅ use detail page under pages

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebsiteList />} />
        <Route path="/website/create" element={<WebsiteCreate />} />
        <Route path="/website/:id/edit" element={<WebsiteEdit />} /> {/* Edit route */}
        <Route path="/website/:id" element={<WebsiteDetail />} /> {/* Detail route */}
      </Routes>
    </Router>
  );
}
