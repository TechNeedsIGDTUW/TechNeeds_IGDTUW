import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Team />} />
        
      </Routes>
    </Router>
  );
}

export default App;
