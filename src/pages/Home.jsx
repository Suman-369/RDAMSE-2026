import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const pillRef = useRef(null);

  useEffect(() => {
    // GSAP Timeline for sequential, smooth reveals
    const tl = gsap.timeline();

    // Initial hidden states for non-text elements
    gsap.set([pillRef.current, subtitleRef.current], {
      y: 60,
      opacity: 0,
    });

    // Initial hidden state for the rolling text characters
    gsap.set('.rdamse-char', { 
      x: -60, 
      opacity: 0, 
      rotationY: 90, 
      transformOrigin: 'left center' 
    });

    tl.to(pillRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.5)',
      delay: 0.3,
    })
    // Text characters roll from left to right stagger effect
    .to('.rdamse-char', {
      x: 0,
      opacity: 1,
      rotationY: 0,
      duration: 1,
      stagger: 0.1, // This makes it flow from left to right one by one
      ease: 'back.out(2)',
    }, '-=0.4')
    .to(subtitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6');

  }, []);

  // Helper arrays for split text
  const rdamseText = "RDAMSE".split("");
  const yearText = "2026".split("");

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-[#fafafa]"
      style={{ perspective: '1000px' }}
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#b8f29d] opacity-[0.15] blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="z-10 text-center flex flex-col items-center pt-32 sm:pt-40 md:pt-16 lg:pt-0 w-full">
        {/* Animated Brand Pill */}
        <div 
          ref={pillRef}
          className="mb-8 px-5 py-2 bg-[#b8f29d] text-gray-900 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm border border-[#a1df84]"
        >
          Discover The Future
        </div>

        {/* Rolling Header Text */}
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-6 overflow-hidden pb-4 w-full justify-center">
          <h1 className="flex text-[15vw] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter text-gray-900 leading-none drop-shadow-sm">
            {rdamseText.map((char, index) => (
              <span key={`r-${index}`} className="rdamse-char inline-block">
                {char}
              </span>
            ))}
          </h1>
          <h2 className="flex text-[16vw] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] font-black tracking-tighter text-[#059669] leading-none drop-shadow-sm">
            {yearText.map((char, index) => (
              <span key={`y-${index}`} className="rdamse-char inline-block">
                {char}
              </span>
            ))}
          </h2>
        </div>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl font-medium px-4 leading-relaxed"
        >
          Experience a reimagined interface driven by smooth animations, premium aesthetics, and unparalleled speed.
        </p>

        {/* Call to action */}
        <button className="mt-12 group relative px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-bold shadow-xl overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
          <span className="relative z-10 flex items-center gap-2 ">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <div className="absolute inset-0 h-full w-full bg-[#b8f29d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          <style>{`
            .group:hover span { color: black; }
            .group span { transition: color 0.3s; }
          `}</style>
        </button>
      </div>
    </section>
  );
};

export default Home;
