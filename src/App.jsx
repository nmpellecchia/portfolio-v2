import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/Home';
import AboutMe from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-blackest-color h-full text-whitest-color text-lg font-main bg-[url('./src/imgs/bg-img.jpg')] bg-cover">
      <HomePage />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
