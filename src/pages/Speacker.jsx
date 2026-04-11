import React from 'react';

const speakers = [
  { name: "Prof. Joe OTSUKI", role: "Keynote Speaker", org: "Nihon University, Japan" },
  { name: "Prof. Hiroshi Kitagawa", role: "Keynote Speaker", org: "Kyoto University, Japan" },
  { name: "Prof. Don Seo", role: "Keynote Speaker", org: "Arizona State University, USA" },
  { name: "Prof. Miki Hasegawa", role: "Keynote Speaker", org: "Aoyama Gakuin University, Japan" },
  { name: "Prof. A. K. Ray", role: "Distinguished Speaker", org: "Director, JIBABR" },
  { name: "Prof. A. K. Panda", role: "Distinguished Speaker", org: "VC, Rani Rashmoni Green University" },
  { name: "Prof. R. Banerjee", role: "Distinguished Speaker", org: "IISER, India" },
  { name: "Prof. K. K. Chattopadhyay", role: "Distinguished Speaker", org: "Jadavpur University, Kolkata" },
  { name: "Prof. C. Sinha", role: "Distinguished Speaker", org: "Jadavpur University, Kolkata" },
  { name: "Prof. N. R. Bandyopadhyay", role: "Distinguished Speaker", org: "IIEST Shibpur, India" },
  { name: "Prof. B. Mahapatra", role: "Distinguished Speaker", org: "IISc Bangalore, India" },
  { name: "Prof. D. Dhara", role: "Distinguished Speaker", org: "IIT Kharagpur, India" },
  { name: "Prof. Debnarayan Jana", role: "Distinguished Speaker", org: "University of Calcutta" },
  { name: "Dr. J. Mukhopadhyay", role: "Principal Scientist", org: "CSIR-CGCRI, Kolkata" },
  { name: "Dr. Avik Ghosal", role: "Senior Manager", org: "Exide Industries Limited" },
];

const SpeakerCard = ({ speaker }) => (
  <div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
    <div className="relative mb-5">
      <div className="w-24 h-24 rounded-full bg-slate-50 p-1 border border-slate-100 group-hover:border-emerald-500/30 transition-colors duration-300 overflow-hidden">
        <img 
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=f0fdf4&color=10b981&bold=true&size=128`}
          alt={speaker.name}
          className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute top-0 right-0">
        <div className="w-5 h-5 bg-emerald-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </div>
    </div>

    <div className="flex-grow">
      <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
        {speaker.name}
      </h3>
      <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 mb-3 inline-block px-2.5 py-0.5 bg-emerald-50 rounded-full">
        {speaker.role}
      </p>
      <p className="text-xs text-slate-500 font-medium leading-relaxed">
        {speaker.org}
      </p>
    </div>
  </div>
);

const Speacker = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block py-1.5 px-4 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
            Keynote & Invited Speakers
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Eminent <span className="text-emerald-600">Speakers</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
            Leading experts from across the globe sharing innovative research and futuristic visions in Materials Science and Engineering.
          </p>
          <div className="mt-8 w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {speakers.map((s, idx) => (
            <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s`, opacity: 0, animationFillMode: 'forwards' }}>
              <SpeakerCard speaker={s} />
            </div>
          ))}
        </div>

        <section className="mt-24 p-8 md:p-14 rounded-3xl bg-slate-900 text-center relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in Speaking?</h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
              Contribute your expertise to IC-RDAMSE 2026. Join a community of innovators and thought leaders.
            </p>
            <button 
              disabled
              className="px-8 py-3.5 bg-blue-500 text-white rounded-xl font-bold cursor-not-allowed border border-slate-700 transition-all opacity-80"
            >
              Nomination
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Speacker;