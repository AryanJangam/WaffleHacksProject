import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>front page</h2>
    </div>
  )
}

export default App;
