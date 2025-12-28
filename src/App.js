import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DevLogRoutes from "./routes/DevLogRoutes";
import DailyRoutes from "./routes/DailyRoutes";
import ArchiveRoutes from "./routes/ArchiveRoutes";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dev-log/*" element={<DevLogRoutes />} />
      <Route path="/daily/*" element={<DailyRoutes />} />
      <Route path="/archive/*" element={<ArchiveRoutes />} />
    </Routes>
  );
}