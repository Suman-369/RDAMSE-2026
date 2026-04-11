import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Vanue = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, []);

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 bg-[#fafafa]">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#b8f29d]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={contentRef} className="flex flex-col">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-1.5 bg-[#059669] rounded-full" />
            <span className="text-sm font-black uppercase tracking-[0.3em] text-[#059669]">Location</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            The Venue <br /> & <span className="text-[#059669]">Destination</span>
          </h1>
          
          <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <h3 className="text-gray-900 font-black mb-2 uppercase tracking-tight">Main Campus</h3>
              <p>Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex</p>
              <p className="text-sm text-gray-400 mt-2 italic">Dum Dum Road, Surer Math, Near Dum Dum Station, Kolkata, West Bengal 700074</p>
            </div>
            
            <p>
              Experience the vibrant culture of Kolkata while attending a world-class scientific event. Our campus provides a serene atmosphere perfect for intellectual exchange.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform cursor-pointer">
                View on Google Maps
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all cursor-pointer">
                Travel Guide
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#059669] rounded-[3rem] opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />
          <div className="relative aspect-square sm:aspect-video lg:aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
              {/* This would be an iframe for Google Maps or a high-quality image of the venue */}
              <div className="text-center p-8">
                <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Interactive Map Loader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vanue;
