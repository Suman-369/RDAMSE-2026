import React from 'react';

const Vanue = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-[#fafafa] flex flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#b8f29d] opacity-[0.1] blur-[100px] rounded-full pointer-events-none" />
      <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 drop-shadow-sm">Venue</h1>
      <p className="text-gray-500 text-lg max-w-xl text-center">
        Discover the exciting location for RDAMSE 2026. Explore accommodation options, transportation, and local attractions.
      </p>
    </div>
  );
};

export default Vanue;
