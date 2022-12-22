import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import CleintPages from "./pages/client/router";
import AdminPages from "./pages/admin/router";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminPages />} />
        <Route path="/*" element={<CleintPages />} />
      </Routes>
    </Router>
  );
}
