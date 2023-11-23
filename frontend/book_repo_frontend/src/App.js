import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './components/main/Books'
import Auth from './components/auth/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/main" element={<Books/>} />
      </Routes>
    </Router>
  );
}

export default App;

// todo add http cookies functionality to contact the backend for rgister and authentication
// todo add redirection, to main webpage after successfull login, and maybe error message after unsuccessfull login/registration
