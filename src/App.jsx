import React, { useState } from 'react';
import './App.css';
import HomePage from './components/Home';
import AboutMe from './components/About';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import Logo from './components/Logo';

function App() {
  return (
    <div className="w-full bg-blackest-color h-full text-whitest-color text-lg font-main bg-[url('./src/imgs/bg-img.jpg')] bg-cover">
      <Logo />
      <HomePage />
      <ProjectList />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
