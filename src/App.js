import React from "react";
import "./App.css";

import HomePage from "./pages/homepage";
import LecturerDashboard from "./pages/Lecturer - dashboard";
import StudentSchedule from "./pages/Student - Schedule";
import StudentDashboard from "./pages/Student - Dashboard";
import StudentNotice from "./pages/Student - Notice";

export default function App() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash === "home") return <HomePage />;
  if (hash === "student-schedule") return <StudentSchedule />;
  if (hash === "student-dashboard") return <StudentDashboard />;
  if (hash === "student-notice") return <StudentNotice />;

  return <LecturerDashboard />;
}