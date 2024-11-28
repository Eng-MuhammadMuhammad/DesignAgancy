// src/App.js
import React from 'react';
import './global.css'; // Import global CSS
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Features from './components/Features/Features';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Features />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
