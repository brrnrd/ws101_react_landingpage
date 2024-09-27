import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import More from './components/More/More';
import Footer from './components/Footer/Footer';
import background from './images/bg.jpg'; 

const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <Hero />
      <About />
      <More />
      <Footer />
    </div>
  );
};

export default App;
