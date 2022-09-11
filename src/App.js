import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

import Home from './Home.js';
import Synopsis from './Synopsis.js';
import FourUp from './FourUp.js';
import Team from './Team.js';
import Time from './Time.js';
import Navbar from './Nav.js';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/Synopsis' element={<Synopsis /> } />
      <Route path='/FourUp' element={< FourUp />} />
      <Route path='/Time' element={< Time/>} />
      <Route path='/Team' element={< Team/>} />
    </Routes>
  </Router>
  );

}

export default App;
