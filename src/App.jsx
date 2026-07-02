import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Recommends from './pages/Recommends';
import Contact from './pages/Contact';
import Blackjack from './pages/Blackjack';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/recommends" element={<Recommends />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blackjack" element={<Blackjack />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
