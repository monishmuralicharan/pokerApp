import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ChipPage from './components/Chip-Page';
import HostPage from './components/HostPage';
import ClosePage from './components/Close-Page'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chip-count" element={<ChipPage />} />
        <Route path="/host-page" element={<HostPage />} />
        <Route path="/close-page" element={<ClosePage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
