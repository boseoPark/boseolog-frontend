import { Routes, Route } from "react-router-dom";
import Certifications from "../pages/archive/Certifications";
import Projects from "../pages/archive/Projects";

export default function ArchiveRoutes() {
  return (
    <Routes>
      <Route path="certifications" element={<Certifications />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  );
}