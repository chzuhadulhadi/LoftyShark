import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Culture from './components/Culture.jsx';
import DMS from './components/DMS.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/dms" element={<DMS />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
