import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Quiz from './pages/Student - quizes';
import HomePage from "./pages/homepage";
import LecturerDashboard from "./pages/Lecturer - dashboard";
import StudentSchedule from "./pages/Student - Schedule";
import StudentDashboard from "./pages/Student - Dashboard";
import StudentNotice from "./pages/Student - Notice";


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
