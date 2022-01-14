import React from 'react';

function HomePage() {
  return (
    <header className="h-screen w-full bg-black text-white p-6 flex flex-col justify-center items-center border-b-8 border-red-600">
      <h1 className="text-6xl tracking-tighter font-black text-red-600 uppercase">
        nicolas pellecchia
      </h1>
      <span className="text-6xl text-red-600 tracking-wider font-black">
        - • -
      </span>
      <h2 className="font-black uppercase mt-5">desarrollador front-end</h2>
    </header>
  );
}

export default HomePage;
