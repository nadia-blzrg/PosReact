import React from 'react'
import InfoPos from './pages/InfoPos'
import Wilayas from './pages/Wilayas'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wilayas />} />
        <Route path="/pos/:city" element={<InfoPos />} />
      </Routes>
    </Router>    




  );
}

export default App