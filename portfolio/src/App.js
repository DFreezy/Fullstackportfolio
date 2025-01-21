import './App.css';
import Intro from './components/intro'
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Intro />
      <Routes>
        <Route></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
