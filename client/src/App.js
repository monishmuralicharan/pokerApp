import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
