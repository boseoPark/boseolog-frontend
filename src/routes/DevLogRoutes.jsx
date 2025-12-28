import { Routes, Route } from "react-router-dom";
import DevLogList from "../pages/dev-log/DevLogList";

export default function DevLogRoutes() {
  return (
    <Routes>
      <Route path="" element={<DevLogList />} />
      <Route path=":category" element={<DevLogList />} />
    </Routes>
  );
}