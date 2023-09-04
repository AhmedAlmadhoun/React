import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ScrollingCards from './components/ScrollingCards';
import SearchAndFilter from './components/SearchAndFilter';
import Signup from './components/Signup';

function App() {
  return (
    
    <Router>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ScrollingCards" element={<ScrollingCards />} />
        <Route path="/SearchAndFilter" element={<SearchAndFilter />} />
        {/* <Route path="/LoginPage2" element={<LoginPage2 />} /> */}
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
