import React, { useState } from 'react';
import Navigation from './Navigation';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Header from './Header';
import Footer from './Footer';

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class="row">
      <Header/>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
    
  );
}