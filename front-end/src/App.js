import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/SignIn';
import Sculpture from './Sculpture';
import Fashion from './Fashion';
import Sketches from './Sketches';
import Pottery from './Pottery';
import Upload from './Upload';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
      {/* <Switch> */}
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path='/' element={<Home />}/>
        <Route exact path='/auth' element={<Auth />}/>
          <Route exact path="/sculpture" element={<Sculpture/>}/>
          <Route exact path="/fashion" element={<Fashion/>} />
          <Route exact path="/sketch" element={<Sketches/>} />
          <Route exact path="/pottery" element={<Pottery/>} />
          <Route exact path="/upload" element={<Upload/>} />
          
          {/*<Route path="*">
            <NotFound />
          </Route> */}
        {/* </Switch> */}
        </Routes>
    </div>
    </Router>
  )
}

export default App;
