import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Quiz from './pages/Student - quizes';
import HomePage from "./pages/homepage";
import LecturerDashboard from "./pages/Lecturer - dashboard";
import StudentSchedule from "./pages/Student - Schedule";
<<<<<<< HEAD
import StudentDashboard from "./pages/student - dashboard";
import StudentNotice from "./pages/Student - Notice";

=======
import StudentDashboard from "/pages/Student - Dashboard";
import ProfilePopup from "./components/ProfilePopup";
import AdminCourse from "./pages/Admin - courses";
import AdminProfile from "./pages/Admin -Profile";

<<<<<<< HEAD
export default function App() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash === "home") return <HomePage />;
  if (hash === "student-schedule") return <StudentSchedule />;
  if (hash === "student-dashboard") return <StudentDashboard />;
  if (hash === "admin-course") return <AdminCourse />;
  if (hash === "admin-profile") return <AdminProfile />;
  if (hash === "lecturer-analytics") return <LecturerAnalytics />;
}
>>>>>>> 9d5d191 (Admin - Courses Part Created)

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizes" element={<Quiz />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        <Route path="/student-schedule" element={<StudentSchedule />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-notice" element={<StudentNotice />} />
        <Route path="/admin-course" element={<AdminCourse />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/lecturer-analytics" element={<LecturerAnalytics />} />

      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
  if(hash === "home") return <HomePage />;

  if(hash === "student-schedule")
    return <StudentSchedule />;

  if(hash === "student-dashboard")
    return <StudentDashboard />;

  if(hash === "admin-course")
    return <AdminCourse />;

  if(hash === "admin-profile")
    return <AdminProfile />;

  return <LecturerDashboard />;

}
=======

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizes" element={<Quiz />} />
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
        <Route path="/student-schedule" element={<StudentSchedule />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-notice" element={<StudentNotice />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> 981f291f3acea63ae3734ae6ffbf50ae93505096
>>>>>>> 112f53f (save work)
