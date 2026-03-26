import React from "react";
import "./App.css";

import HomePage from "./pages/homepage";
import LecturerDashboard from "./pages/Lecturer - dashboard";
import StudentSchedule from "./pages/Student - Schedule";

export default function App() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash === "home") return <HomePage />;
  if (hash === "student-schedule") return <StudentSchedule />;

  // Default to lecturer dashboard so you can preview the UI immediately.
  // Use `#home` to switch back.
  return <LecturerDashboard />;
}
