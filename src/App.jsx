import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteList from "./pages/index";
import WebsiteCreate from "./pages/website/create";
import WebsiteEdit from "./pages/website/[id]";
import WebsiteDetail from "./components/WebsiteDetail";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebsiteList />} />
        <Route path="/website/create" element={<WebsiteCreate />} />
        <Route path="/website/:id" element={<WebsiteEdit />} />
        <Route path="/website/:id/view" element={<WebsiteDetail />} />
      </Routes>
    </Router>
  );
}
