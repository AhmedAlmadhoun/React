import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import ScrollingCards from './components/ScrollingCards';
import SearchAndFilter from './components/SearchAndFilter';

function App() {
  return (
    
    <Router>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ScrollingCards" element={<ScrollingCards />} />
        <Route path="/SearchAndFilter" element={<SearchAndFilter />} />
      </Routes>
    </Router>
  );
}

export default App;
