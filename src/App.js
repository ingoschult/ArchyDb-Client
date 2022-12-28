import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarArchy from "./components/navbarArchy"
import Projekte from "./pages/projekte"
import Erfassung from "./pages/erfassung"
import Bearbeitung from './pages/bearbeitung';
import Main from './pages/main';

function App() {
  return (
    <Router>
      <NavbarArchy />
      <Routes>
        <Route path="main" element={<Main />} />
        <Route path="projekte" element={<Projekte />} />
        <Route path="erfassung" element={<Erfassung />} />
        <Route path="bearbeitung" element={<Bearbeitung />} />
        <Route path='*' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
