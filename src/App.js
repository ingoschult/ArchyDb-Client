import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarArchy from "./components/navbarArchy"
import Projekte from "./pages/projekte"
import Erfassung from "./pages/erfassung"
import Bearbeitung from './pages/bearbeitung';

function App() {
  return (
    <Router>
      <NavbarArchy />
      <Routes>
        <Route path="projekte" element={<Projekte />} />
        <Route path="erfassung" element={<Erfassung />} />
        <Route path="bearbeitung" element={<Bearbeitung />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </Router>
  );
}

export default App;
