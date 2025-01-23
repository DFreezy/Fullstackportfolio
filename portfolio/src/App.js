import './App.css';
import Intro from './components/intro'
import Projects from './pages/projects';
import Certificate from './pages/certificates'
import About from './pages/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Intro />
      <Routes>
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/certificates" element={<Certificate />} /> 
        <Route path="/pages/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
