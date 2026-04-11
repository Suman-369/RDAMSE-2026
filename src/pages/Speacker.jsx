import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const speakers = [
  { name: "Coming Soon", role: "Keynote Speaker", org: "International Institute" },
  { name: "Coming Soon", role: "Featured Researcher", org: "Global Science University" },
  { name: "Coming Soon", role: "Industry Expert", org: "Tech Innovations Lab" },
];

const Speacker = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(".speaker-title", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(cardRefs.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      delay: 0.3
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-40 pb-20 px-6 bg-[#fafafa] flex flex-col items-center">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b8f29d]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="z-10 max-w-7xl w-full">
        <div className="text-center mb-16">
          <h1 className="speaker-title text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Distinguished <span className="text-[#059669]">Speakers</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Join world-renowned experts and innovators as they share their groundbreaking research and insights at IC-RDAMSE 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((s, idx) => (
            <div
              key={idx}
              ref={el => (cardRefs.current[idx] = el)}
              className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-gray-100 to-white shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#059669]/10 transition-all"
            >
              <div className="p-8 rounded-[2.4rem] bg-white h-full flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full bg-gray-50 border-4 border-[#b8f29d]/20 mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#b8f29d]/20 to-[#059669]/10" />
                   <svg className="w-full h-full text-gray-200 p-8" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                   </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-[#059669] font-black uppercase tracking-widest text-xs mb-4">{s.role}</p>
                <div className="w-12 h-1 bg-gray-100 rounded-full mb-4" />
                <p className="text-gray-500 font-medium">{s.org}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 rounded-[3rem] bg-gray-900 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8f29d]/10 rounded-full blur-3xl" />
          <h2 className="text-3xl font-black text-white mb-4 relative z-10">Want to be a Speaker?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">We are still accepting nominations for keynote and plenary sessions for the upcoming edition.</p>
          <button className="relative z-10 px-8 py-4 bg-[#b8f29d] text-gray-900 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer">
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speacker;