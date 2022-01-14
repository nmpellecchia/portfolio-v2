import React from 'react';

function HomePage() {
  return (
    <header className="h-screen w-full bg-black text-red-600 font-black p-6 flex flex-col justify-center items-center border-b-8 border-red-600">
      <h1 className="text-7xl tracking-tighter uppercase text-center">
        nicolas
      </h1>
      <h1 className="text-6xl tracking-tighter uppercase text-center">
        pellecchia
      </h1>
      <span className="text-6xl tracking-wider">- • -</span>
      <h2 className="text-white uppercase mt-5">desarrollador front-end</h2>
    </header>
  );
}

export default HomePage;
