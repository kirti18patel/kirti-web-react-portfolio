import React, { useState, useEffect } from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentCategory, setCurrentCategory] = useState('Home');

  useEffect(() => {
    document.title = `Kirti | ${currentCategory}`;
  }, [currentCategory])

  const renderCategory = () => {
    switch (currentCategory) {
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
        case 'Work':
          return <Work />;
      default:
        return <Home />;
    }
  };

  return (
    <>
    <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    {renderCategory(currentCategory)}
    <Footer />
    </>
  );
}

export default App;