import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  const activeBgRef = useRef(null);
  const buttonRefs = useRef([]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Call For Papers', path: '/call-for-papers' },
    { name: 'Submission', path: '/submission' },
    { name: 'Registration', path: '/registration' },
    { name: 'Committee', path: '/committee' },
    { name: 'Venue', path: '/venue' },
  ];

  const currentNav = navItems.find((item) => item.path === location.pathname) || navItems[0];
  const activeTab = currentNav.name;

  // GSAP Entrance Animation for the Navbar
  useEffect(() => {
    gsap.fromTo(
      navContainerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.2 }
    );
  }, []);

  // GSAP Mobile Menu Slide Animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        display: 'block',
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        display: 'none',
      });
    }
  }, [isMobileMenuOpen]);

  // GSAP Active Tab Background Animation
  useEffect(() => {
    const updatePillPosition = () => {
      const activeIndex = navItems.findIndex((item) => item.name === activeTab);
      const activeBtn = buttonRefs.current[activeIndex];
      
      if (activeBtn && activeBgRef.current) {
        gsap.to(activeBgRef.current, {
          x: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    };

    // run initially and delay slightly to ensure fonts/layout are loaded
    setTimeout(updatePillPosition, 50);
    
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [activeTab]);

  return (
    <header 
      ref={navContainerRef}
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl opacity-0"
    >
      {/* Main Navbar Container */}
      <nav className="bg-white rounded-full shadow-[0px_10px_30px_rgba(0,0,0,0.08)] p-2 flex items-center justify-between relative">
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full relative">
          
          {/* Animated Background Pill */}
          <div
            ref={activeBgRef}
            className="absolute h-full bg-[#b8f29d] rounded-full pointer-events-none"
            style={{ top: 0, left: 0, opacity: 0 }}
          />

          {navItems.map((item, index) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => navigate(item.path)}
                className={`relative px-4 xl:px-6 py-2.5 rounded-full text-[14px] font-semibold transition-colors duration-300 flex items-center gap-2 z-10 cursor-pointer
                  ${isActive ? 'text-black' : 'text-gray-700 hover:text-black hover:bg-gray-100'}
                `}
              >
                {item.name}
                {item.badge && (
                  <span className={`flex items-center justify-center w-[22px] h-[22px] rounded-full text-[11px] font-extrabold pb-[1px] transition-colors duration-300
                    ${isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}
                  `}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Navbar Header */}
        <div className="lg:hidden flex items-center justify-between w-full px-4 py-2">
            <span className="text-lg font-bold text-gray-900 px-2 py-1">
              {activeTab}
            </span>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div 
        ref={mobileMenuRef} 
        className="lg:hidden absolute top-[110%] left-0 right-0 bg-white rounded-3xl shadow-xl overflow-hidden hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="p-3 flex flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-5 py-4 rounded-2xl text-base font-bold transition-colors flex items-center justify-between cursor-pointer
                  ${isActive ? 'bg-[#b8f29d] text-black' : 'text-gray-900 hover:bg-gray-50'}
                `}
              >
                <div className="flex items-center gap-3">
                  {item.name}
                </div>
                {item.badge && (
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-extrabold
                    ${isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}
                  `}>
                    {item.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </header>
  );
};

export default Nav;