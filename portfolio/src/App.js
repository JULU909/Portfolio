import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Aboutme from './Aboutme';
import Project from './projects';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <Aboutme/>}
      {currentPage === 'projects' && <Project/>}
    </div>
  );
}

export default App;
