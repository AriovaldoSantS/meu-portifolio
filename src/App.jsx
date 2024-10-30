import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
