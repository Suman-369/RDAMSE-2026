import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  FileText, 
  Download, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Sparkles,
  FileCheck,
  ExternalLink
} from "lucide-react";

// Import real PDF assets
import rdamse2026Pdf from "../files/rdamse_2026.pdf";
import rdamse2025Pdf from "../files/rdamse_2025.pdf";

const ConferanseProceeding = () => {
  const [activeYear, setActiveYear] = useState(2026);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const viewerRef = useRef(null);

  // GSAP Entry Animation
  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      containerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.15 }
    );
  }, []);

  // Animate iframe transitions on year change
  useEffect(() => {
    gsap.fromTo(
      viewerRef.current,
      { opacity: 0.6, scale: 0.99 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [activeYear]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const downloadPdf = () => {
    const fileUrl = activeYear === 2026 ? rdamse2026Pdf : rdamse2025Pdf;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `RDAMSE_${activeYear}_Conference_Proceedings.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-[#fafafa] pt-[120px] pb-6 px-2 md:px-4 w-full max-w-full flex flex-col items-center select-none overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#b8f29d]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#059669]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Document Workspace Core Container */}
      <div 
        ref={containerRef}
        className={`w-full grid grid-cols-1 lg:grid-cols-4 rounded-2xl overflow-hidden border border-zinc-800/10 shadow-2xl bg-[#1c1c1e] transition-all duration-300 lg:h-[calc(100vh-150px)] min-h-[580px] ${
          isFullscreen ? "fixed inset-4 z-50 rounded-xl max-w-none pt-2 pb-2 px-2 bg-[#18181b] border-zinc-800 h-[calc(100vh-32px)]" : ""
        }`}
        style={isFullscreen ? { gridTemplateRows: "1fr" } : {}}
      >
        {/* Left Sidebar Section */}
        <div 
          ref={sidebarRef}
          className={`lg:col-span-1 border-b lg:border-b-0 lg:border-r border-zinc-800 p-4 flex-col justify-between bg-[#151517] ${
            isFullscreen ? "hidden" : "flex"
          }`}
        >
          <div>
            {/* Title / Repository Branding */}
            <div className="flex items-center gap-2.5 pb-4 border-b border-zinc-800/50">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#059669] to-[#b8f29d] p-[1px]">
                <div className="w-full h-full rounded-[7px] bg-zinc-950 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[#b8f29d]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xs tracking-widest uppercase leading-none">RDAMSE</span>
                <span className="text-zinc-500 text-[8px] font-bold uppercase tracking-wider mt-0.5">Document Repository</span>
              </div>
            </div>

            {/* Proceedings Sidebar Tabs */}
            <div className="mt-4">
              <span className="text-[8px] tracking-widest text-zinc-500 font-black uppercase block mb-2.5">Proceedings</span>
              <div className="flex flex-col gap-2">
                {/* RDAMSE 2026 Tab */}
                <button
                  onClick={() => setActiveYear(2026)}
                  className={`w-full group text-left p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    activeYear === 2026
                      ? "bg-zinc-800/80 border-emerald-500/30 text-white shadow-lg shadow-black/20"
                      : "bg-zinc-900/30 border-transparent text-zinc-400 hover:bg-zinc-800/30 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg transition-colors ${activeYear === 2026 ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-300"}`}>
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold leading-tight">RDAMSE 2026</span>
                      <span className="text-[8px] text-zinc-500 mt-0.5">2nd Edition</span>
                    </div>
                  </div>
                  <span className={`text-[8px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider transition-colors ${
                    activeYear === 2026 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse" 
                      : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-400"
                  }`}>
                    New
                  </span>
                </button>

                {/* RDAMSE 2025 Tab */}
                <button
                  onClick={() => setActiveYear(2025)}
                  className={`w-full group text-left p-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    activeYear === 2025
                      ? "bg-zinc-800/80 border-zinc-700 text-white shadow-lg shadow-black/20"
                      : "bg-zinc-900/30 border-transparent text-zinc-400 hover:bg-zinc-800/30 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg transition-colors ${activeYear === 2025 ? "bg-zinc-700 text-zinc-300" : "bg-zinc-800 text-zinc-500 group-hover:text-zinc-300"}`}>
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold leading-tight">RDAMSE 2025</span>
                      <span className="text-[8px] text-zinc-500 mt-0.5">1st Edition</span>
                    </div>
                  </div>
                  <span className="text-[8px] px-2 py-0.5 bg-zinc-800/80 text-zinc-400 border border-zinc-700 rounded-full font-black tracking-wider">
                    2025
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Secure Info Bottom Panel */}
          <div className="mt-4 pt-4 border-t border-zinc-800/50">
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/50">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Protected Repository</span>
              </div>
              <p className="text-[9px] text-zinc-400 font-semibold leading-relaxed">
                Official documents are secured. Downloading provides high-resolution publication PDF.
              </p>
            </div>
          </div>
        </div>

        {/* Right PDF Viewer Panel */}
        <div className={`${isFullscreen ? "lg:col-span-4" : "lg:col-span-3"} flex flex-col justify-between bg-[#18181a] relative overflow-hidden h-full`}>
          
          {/* Top Viewer Header Bar */}
          <div className="px-4 py-2.5 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-[#141416]/80 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <div>
                <h3 className="text-xs font-black text-white leading-tight">
                  RDAMSE {activeYear} — Conference Proceedings
                </h3>
                <p className="text-[8px] text-zinc-400 font-semibold mt-0.5">
                  Research & Development in Advanced Materials, Systems & Engineering
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-2">
              {/* Fullscreen Toggle */}
              <button
                onClick={toggleFullscreen}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[9px] font-black text-zinc-300 uppercase tracking-widest flex items-center gap-1.5 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                title="Toggle Fullscreen mode"
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3 h-3" />
                    Exit Full
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3 h-3" />
                    Fullscreen
                  </>
                )}
              </button>

              {/* High-visibility Immersive Reader Link */}
              <a
                href={activeYear === 2026 ? rdamse2026Pdf : rdamse2025Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mirror-shine px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#b8f29d] to-[#4ade80] text-zinc-950 text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-[#4ade80]/20 hover:shadow-lg hover:shadow-[#4ade80]/40 border border-[#b8f29d]/20 cursor-pointer"
                title="Open PDF in an immersive fullscreen browser tab"
              >
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12" />
                <span>✨ IMMERSIVE READER</span>
              </a>

              {/* Download Action */}
              <button
                onClick={downloadPdf}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#059669] to-[#047857] text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 hover:from-[#06b67e] hover:to-[#059669] hover:shadow-lg hover:shadow-emerald-950/20 active:scale-95 transition-all cursor-pointer"
                title="Download full high-resolution PDF publication"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Interactive Document Display Canvas (Embeds the actual real PDF file!) */}
          <div 
            ref={viewerRef}
            className="flex-1 bg-[#2b2b2d] relative h-full w-full p-2"
          >
            <iframe
              src={`${activeYear === 2026 ? rdamse2026Pdf : rdamse2025Pdf}#toolbar=1&view=FitH`}
              className="w-full h-full border-none bg-zinc-900 rounded-xl"
              title={`RDAMSE ${activeYear} Conference Proceedings`}
            />
          </div>

          {/* Bottom Security Details Bar */}
          <div className="px-6 py-3.5 border-t border-zinc-800 bg-[#111112] flex items-center justify-between gap-3 select-none">
            
            {/* PDF Loaded Status */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/30 animate-pulse" />
              <span className="text-[9px] text-zinc-300 font-black tracking-wider uppercase">Real PDF Document Loaded</span>
              <span className="h-2.5 w-[1px] bg-zinc-800" />
              <span className="text-[9px] text-zinc-500 font-bold uppercase">{activeYear} Official Edition</span>
            </div>

            {/* Safety status */}
            <div className="flex items-center gap-1 text-zinc-500">
              <FileCheck className="w-3 h-3 text-emerald-500" />
              <span className="text-[8px] font-black uppercase tracking-widest">Read-only Secure Archive</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConferanseProceeding;
