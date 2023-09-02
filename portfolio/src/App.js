import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Aboutme from './Aboutme';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      {/* Rest of your app content */}
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <Aboutme/>}
    </div>
  );
}

export default App;
