import React, { useEffect } from 'react';
import Home from './component/Home';
import About from './component/About';
import NotFound from './component/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {
 

  return (
    <div> 
      <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
