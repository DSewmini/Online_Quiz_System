import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Quiz from './pages/Student - quizes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizes" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;