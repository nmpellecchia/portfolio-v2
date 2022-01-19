import React from 'react';

function HomePage() {
  return (
    <header className="h-screen w-full bg-blackest-color bg-opacity-50 text-main-color text-transparent p-6 font-black flex flex-col justify-center items-center border-b-8 border-accent-color">
      <div className="text-8xl tracking-tighter text-center font-header bg-gradient-to-r from-main-color to-accent-color bg-clip-text">
        <h1 className="px-4">Nicolas</h1>
        <h1 className="px-4">Pellecchia</h1>
      </div>
      <span className="text-6xl tracking-wider bg-gradient-to-br from-main-color to-accent-color bg-clip-text">
        ⚊ • ⚊
      </span>
      <h2 className="text-white uppercase mt-5">desarrollador front-end</h2>
    </header>
  );
}

export default HomePage;
