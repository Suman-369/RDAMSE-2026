import React from 'react';
import joe from "../assets/joe.jpg";
import dong from "../assets/dong.jpg";
import cit from "../assets/citations.jpg"
import ajoy from "../assets/ajoy.jpg"
import ak from "../assets/ak.jpg"
import rkb from "../assets/rkb.jpg"
import kk from "../assets/kk.jpg"
import cc from "../assets/cc.webp"
import nrb from "../assets/nrb.jpg"
import san from "../assets/san.jpg"
import dd from "../assets/dd.jpg"
import ddj from "../assets/ddj.jpeg"
import mm from "../assets/mm.jpg"
import jm from "../assets/jm.jpg"
import sj from "../assets/sj.jpg"
import miki from "../assets/miki.webp"
import srabanti from "../assets/srabanti.jpg"
import de from "../assets/de.jpg";
import ms from "../assets/ms.jpg"



// Inline Icons to avoid dependency resolution issues
const ExternalLink = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const speakers = [
  { 
    name: "Prof. Joe OTSUKI", 
    role: "Plenary Speaker", 
    org: "Nihon University, Japan",
    link: "https://www.chem.cst.nihon-u.ac.jp/~otsuki/otsuki-e-files/research.html",
    image: joe
  },
  { 
    name: "Prof. Don Seo", 
    role: "Keynote Speaker", 
    org: "Arizona State University, USA",
    link: "https://www.researchgate.net/profile/Dong-Kyun-Seo-2",
    image: dong
  },
  { 
    name: "Prof. Miki Hasegawa", 
    role: "Keynote Speaker", 
    org: "Aoyama Gakuin University, Japan",
    link: "https://www.researchgate.net/profile/Miki-Hasegawa",
    image: miki 
  },
  { 
    name: "Prof. A. K. Ray", 
    role: "Keynote Speaker (Padma Shri)", 
    org: "Director, JISASR",
    link: "https://jisiasr.org/prof-ajoy-kumar-ray/",
    image: ajoy
  },
  { 
    name: "Prof. A. K. Panda", 
    role: "Plenary Speaker", 
    org: "VC, Rani Rashmoni Green University",
    link: "https://www.rrgu.in/",
    image: ak
  },
  { 
    name: "Prof. R. Banerjee", 
    role: "Keynote Speaker", 
    org: "IISER, Kolkata",
    link: "https://www.iiserkol.ac.in/web/faculty-details/rahul-banerjee",
    image: rkb
  },
  { 
    name: "Prof. K. K. Chattopadhyay", 
    role: "Keynote Speaker", 
    org: "Jadavpur University, Kolkata",
    link: "https://jaduniv.irins.org/profile/56946",
    image: kk
  },
  { 
    name: "Prof. C. Sinha", 
    role: "Keynote Speaker", 
    org: "Jadavpur University, Kolkata",
    link: "https://www.researchgate.net/profile/Chittaranjan-Sinha-2",
    image: cc
  },
  { 
    name: "Prof. N. R. Bandyopadhyay", 
    role: "Keynote Speaker", 
    org: "IIEST, Kolkata",
    link: "https://mrsikol.org/index.php/committee/",
    image: nrb
  },
  { 
    name: "Prof. S. Mahapatra", 
    role: "Keynote Speaker", 
    org: "IISc, Bangalore",
    link: "https://faculty.dese.iisc.ac.in/santanu/",
    image: san
  },
  { 
    name: "Prof. D. Dhara", 
    role: "Keynote Speaker", 
    org: "IIT Kharagpur",
    link: "https://loop.frontiersin.org/people/138352/overview",
    image: dd
  },
  { 
    name: "Dr. S. Ghosh", 
    role: "Keynote Speaker", 
    org: "Principal Scientist, CSIR-CGCRI, Kolkata",
    link: "https://www.cgcri.res.in/research/research-divisions/sensor-actuator-division/dr-srabanti-ghosh/",
    image: srabanti // Placeholder
  },
  { 
    name: "Prof. D. Jana", 
    role: "Keynote Speaker", 
    org: "University of Calcutta",
    link: "http://independent.academia.edu/DebasishJana",
    image: ddj
  },
  { 
    name: "Dr. J. Mukhopadhyay", 
    role: "Keynote Speaker", 
    org: "CSIR-CGCRI, Kolkata",
    link: "https://www.cgcri.res.in/research/research-divisions/energy-materials-devices/dr-jayanta-mukhopadhyay/",
    image: jm
  },
  { 
    name: "Prof. Debashis De", 
    role: "Keynote Speaker", 
    org: "MAKAUT, Kolkata",
    link: "https://scholar.google.co.in/citations?user=vPj7n0QAAAAJ&hl=en",
    image: de // Placeholder
  },
  { 
    name: "Prof. M. Mondal", 
    role: "Keynote Speaker", 
    org: "IACS, Kolkata",
    link: "https://makautwb.ac.in/plug.php?e=WBUTtool&f=faculty_profile&user_id=36",
    image: mm
  },
  { 
    name: "Dr. M. Samanta", 
    role: "Keynote Speaker", 
    org: "Scientist, DRDO, Kolkata",
    link: "https://www.linkedin.com/in/dr-madhupriya-samanta-8360b3b3/",
    image: ms // Placeholder
  },
  { 
    name: "Dr. A. Ghosal", 
    role: "Keynote Speaker", 
    org: "Senior Manager, Exide Industries",
    link: "https://www.linkedin.com/in/avik-ghosal-5a30a485/",
    image: sj
  },
];

const SpeakerCard = ({ speaker }) => (
  <div className="group relative bg-white rounded-[2.5rem] p-2 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full">
    {/* Background Decorative Element */}
    <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-slate-50 rounded-full group-hover:bg-emerald-50/50 transition-colors duration-500" />
    
    <div className="relative p-7 flex flex-col items-center text-center flex-grow">
      {/* Photo Container */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-[2rem] bg-slate-100 p-1 mirror-shine overflow-hidden shadow-inner group-hover:rotate-3 transition-transform duration-500">
          <img 
            src={speaker.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=f1f5f9&color=64748b&bold=true&size=200`}
            alt={speaker.name}
            className="w-full h-full object-cover rounded-[1.75rem] grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=f1f5f9&color=64748b&bold=true&size=200`;
            }}
          />
        </div>
        {/* Badge Overlay */}
        <div className="absolute -bottom-1 -right-1 bg-white p-2 rounded-2xl shadow-xl border border-slate-50 group-hover:scale-110 transition-transform duration-300">
          {speaker.role.includes("Keynote") ? (
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-1.5 rounded-xl text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-1.5 rounded-xl text-white">
              <UserIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <h3 className="text-xl font-extrabold text-slate-800 mb-2 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
        {speaker.name}
      </h3>
      
      <div className={`inline-flex items-center px-4 py-1.5 rounded-full mb-4 border transition-colors duration-300 ${
        speaker.role.includes("Keynote") 
        ? 'bg-amber-50 border-amber-100 group-hover:bg-amber-100 group-hover:border-amber-200' 
        : 'bg-emerald-50 border-emerald-100 group-hover:bg-emerald-100 group-hover:border-emerald-200'
      }`}>
        <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${speaker.role.includes("Keynote") ? 'text-amber-600' : 'text-emerald-600'}`}>
          {speaker.role}
        </span>
      </div>

      <p className="text-sm text-slate-500 font-semibold leading-relaxed mb-8 flex-grow">
        {speaker.org}
      </p>

      {/* Efficient Action Button */}
      <a 
        href={speaker.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full py-4 px-6 bg-slate-50 hover:bg-emerald-600 text-slate-600 hover:text-white rounded-[1.5rem] font-bold text-xs transition-all duration-300 flex items-center justify-center gap-3 group/btn overflow-hidden relative"
      >
        <span className="relative z-10">View Detailed Profile</span>
        <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 -z-0" />
      </a>
    </div>
  </div>
);

const Speacker = () => {
  return (
    <div className="min-h-screen pt-36 pb-24 px-4 md:px-8 bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6 group hover:border-emerald-200 transition-all cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Eminent Scholars</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="relative">
              <span className="relative z-10 text-emerald-600">Speakers</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-100 -z-10 rounded-full" />
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed font-medium">
            Join us in welcoming the visionaries and trailblazers who are redefining the boundaries of Materials Science and Engineering.
          </p>
        </header>

        {/* Section: Keynote Speakers */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-800 whitespace-nowrap">Plenary Speakers</h2>
            <div className="h-[1px] w-full bg-slate-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.filter(s => s.role.includes("Plenary")).map((s, idx) => (
              <SpeakerCard key={idx} speaker={s} />
            ))}
          </div>
        </div>

        {/* Section: Invited Speakers */}
        <div>
          <div className="flex items-center gap-4 mb-10 mt-16">
            <h2 className="text-2xl font-bold text-slate-800 whitespace-nowrap">Keynote Speakers</h2>
            <div className="h-[1px] w-full bg-slate-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {speakers.filter(s => !s.role.includes("Plenary")).map((s, idx) => (
              <SpeakerCard key={idx} speaker={s} />
            ))}
          </div>
        </div>

        {/* Section: Women Excellence in Materials Science */}
        {/* <div>
          <div className="flex items-center gap-4 mb-10 mt-24">
            <h2 className="text-2xl font-bold text-slate-800 whitespace-nowrap">Women Excellence in Materials Science</h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-slate-200 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.filter(s => ["Prof. Miki Hasegawa", "Dr. S. Ghosh", "Dr. M. Samanta"].includes(s.name)).map((s, idx) => (
              <SpeakerCard key={idx} speaker={s} />
            ))}
          </div>
        </div> */}

        {/* ═══════════════ SESSION CHAIRS ═══════════════ */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-800 whitespace-nowrap">Session Chairs</h2>
            <div className="h-[1px] w-full bg-slate-200" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
            {[
              { name: "Dr. A. Basu",             role: "Assistant Professor",        org: "Sripat Singh College, Murshidabad",    image: null },
              { name: "Dr. B. Dutta",             role: "Assistant Professor",        org: "KIIT University",                      image: null },
              { name: "Dr. N. S. Das",            role: "Assistant Professor",        org: "Techno International, Batanagar",      image: null },
              { name: "Dr. P. Saha",              role: "Associate Professor",        org: "JISIASR, Kolkata",                     image: null },
              { name: "Dr. D. Dastidar",          role: "Associate Professor",        org: "GNIPST, Kolkata",                      image: null },
              { name: "Dr. D. Mallick",           role: "Researcher",                 org: "Mrinalini Datta Mahavidyapith",        image: null },
              { name: "Dr. D. Sarkar",            role: "Research Associate Professor", org: "SRM-IST",                            image: null },
              { name: "Dr. B. Kundu",             role: "Faculty",                    org: "GNIT",                                 image: null },
              { name: "Dr. D. Banerjee",          role: "Associate Professor",        org: "Teerthanker Mahaveer University",      image: null },
              { name: "Dr. Subhalakshmi Ghosh",   role: "Director",                   org: "Subhami Biopharma, Kolkata",           image: null },
              { name: "Dr. Kamal Krishna Sarkar", role: "Principal",                  org: "Sripat Singh College, Murshidabad",    image: null },
              { name: "Dr. I. Bhattacharya",      role: "Faculty",                    org: "GNIT",                                 image: null },
              { name: "Dr. G. Roymahapatra",      role: "Associate Professor",        org: "Haldia Institute of Technology, Haldia", image: null },
              { name: "Dr. D. Saha",              role: "Faculty",                    org: "NIT",                                  image: null },
              { name: "Dr. B. Das",               role: "Faculty",                    org: "JISIASR, Kolkata",                     image: null },
              { name: "Dr. S. Ganguly",           role: "Faculty",                    org: "NIT",                                  image: null },
            ].map((chair, idx) => {
              /* Auto-generate initials from capitalized name words */
              const initials = chair.name
                .split(' ')
                .filter(w => /^[A-Z]/.test(w))
                .slice(0, 2)
                .map(w => w[0])
                .join('');

              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-white border border-slate-100
                    shadow-sm hover:shadow-xl hover:shadow-emerald-500/10
                    hover:border-emerald-200 hover:-translate-y-1
                    transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Top accent bar on hover */}
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* ── Photo / Avatar area ── */}
                  <div className="relative bg-gradient-to-br from-slate-50 to-emerald-50 flex items-center justify-center pt-6 pb-4 px-4">
                    {/* Subtle glow behind photo */}
                    <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {chair.image ? (
                      /* Real photo */
                      <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-md group-hover:ring-emerald-200 transition-all duration-300">
                        <img
                          src={chair.image}
                          alt={chair.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                        />
                        {/* Fallback if image errors */}
                        <div
                          style={{ display: 'none' }}
                          className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-black text-xl"
                        >
                          {initials}
                        </div>
                      </div>
                    ) : (
                      /* Initials avatar (no photo yet) */
                      <div className="w-20 h-20 rounded-full ring-4 ring-white shadow-md
                        bg-gradient-to-br from-emerald-400 to-emerald-700
                        flex items-center justify-center
                        text-white font-black text-xl
                        group-hover:ring-emerald-200 group-hover:scale-105
                        transition-all duration-300">
                        {initials}
                      </div>
                    )}
                  </div>

                  {/* ── Info area ── */}
                  <div className="flex flex-col items-center text-center px-3 pb-5 pt-2 flex-1">
                    <p className="font-bold text-slate-800 text-[13px] leading-snug mb-1 group-hover:text-emerald-700 transition-colors duration-200">
                      {chair.name}
                    </p>
                    <span className="inline-block text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mb-2">
                      {chair.role}
                    </span>
                    <p className="text-[10px] text-black font-medium leading-relaxed">
                      {chair.org}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speacker;