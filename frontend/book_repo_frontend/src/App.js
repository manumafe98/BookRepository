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
