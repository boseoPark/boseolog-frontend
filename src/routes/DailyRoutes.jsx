import { Routes, Route } from "react-router-dom";
import DailyList from "../pages/daily/DailyList";

export default function DailyRoutes() {
  return (
    <Routes>
      <Route path="" element={<DailyList />} />
    </Routes>
  );
}