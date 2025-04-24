import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Aboutme/>
          <Routes>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
