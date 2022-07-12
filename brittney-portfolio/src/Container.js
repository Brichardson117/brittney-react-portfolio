import React, { useState } from 'react';
import About from './componets/about';
import Projects from './componets/projects';
import Home from './componets/Home';
import NavTabs from './componets/Nav';
import Footer from './componets/footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // TODO: Add a comment describing the functionality of this method
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
     
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        
        {renderPage()}
      </div>
    );
  }