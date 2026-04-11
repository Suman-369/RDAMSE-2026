import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clgImg from "../assets/clg.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
    gsap.set([imageRef.current, contentRef.current], { opacity: 0, y: 40 });

    tl.to(imageRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.2 })
      .to(contentRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=0.6");
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b8f29d]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left: Image Section */}
        <div ref={imageRef} className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#b8f29d] to-[#059669] rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={clgImg}
                alt="Institute Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-bold text-lg">Our Campus</p>
                <p className="text-white/80 text-sm">Sur Tech, Kolkata</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content Section */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-1.5 bg-[#059669] rounded-full" />
            <span className="text-sm font-black uppercase tracking-[0.3em] text-[#059669]">The Legacy</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
            About the Institute
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            <p>
              Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex (formerly known as Dr. Sudhir Chandra Sur Degree Engineering College) 
              was established under the auspices of JIS Foundation, a pioneer in educational excellence.
            </p>
            <p>
              Renowned for its research culture and 15-year legacy in Engineering and Science education, our institute is strategically located near Kolkata's major transit hubs, bridging academic rigor with urban connectivity.
            </p>
            <p className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <span className="text-[#059669] font-black">Environmental Harmony:</span> Our campus, titled "Green Field," is a virtual paradise of lush greenery—a perfect atmosphere for academic endeavors and ecological consciousness.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-gray-900">15+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Legacy</p>
            </div>
            <div className="px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-[#059669]">UGC</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recognized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
