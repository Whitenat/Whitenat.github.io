import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import '../styles/App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;