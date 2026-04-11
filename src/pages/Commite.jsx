import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Committee = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Section Fade-ins
      const sections = gsap.utils.toArray('.committee-section');
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const organizingCommittee = {
    chiefPatron: { name: "Sardar Taranjit Singh", role: "MD, JIS Group" },
    patrons: [
      { name: "Sardar Haranjit Singh", role: "Joint MD, JIS Group" },
      { name: "Sardar Amrik Singh", role: "Deputy MD, JIS Group" },
      { name: "Ms Manpreet Kaur", role: "CEO, JIS Group" },
      { name: "Sardar Simarpreet Singh", role: "Director, JIS Group" },
      { name: "Ms Jaspreet Kaur", role: "Director, JIS Group" },
      { name: "Sardar Harjot Singh", role: "Director, JIS Group" },
      { name: "Sardar Amanjot Singh", role: "Director, JIS Group" },
      { name: "Sardar Anmol Singh Narula", role: "Director, JIS Group" },
      { name: "Prof. (Dr.) Ajay Kumar Ray", role: "Director JISIASR, Kolkata, India" },
      { name: "Prof. (Dr.) Bhabes Bhattacharya", role: "VC JIS University, Kolkata, India" },
    ],
    convenors: [
      { name: "Dr. Dipankar Das", role: "HoD, BSH, DSCSITSC" },
      { name: "Dr. Biswajit Das", role: "Asst. Prof., BSH, DSCSITSC" },
    ],
    jtConvenors: [
      { name: "Dr. Sukhendu Sadhukhan", role: "Asst. Prof., BSH, DSCSITSC" },
    ],
    members: [
      { name: "Mr. Bapin Mondal", role: "Asst. Prof., BSH, DSCSITSC" },
      { name: "Ms. Pallabi Bose", role: "Asst. Prof., BSH, DSCSITSC" },
      { name: "Ms. Debasmita Roy Chowdhury", role: "Asst. Prof., BSH, DSCSITSC" },
      { name: "Ms. Nibedita Biswas", role: "Asst. Prof., BSH, DSCSITSC" },
    ]
  };

  const advisoryCommittee = [
    { name: "Prof. (Dr.) Saradindu Panda", role: "Principal, DSCSITSC" },
    { name: "Prof. (Dr.) Nitin Chattopadhyay", role: "Program Chair, RDAMSE 2025 | President, Indian Photobiology Society | Professor, Dept. of Chemistry, Jadavpur University" },
    { name: "Prof. (Dr.) Chatiiranjan Sinha", role: "Program Chair, RDAMSE 2025 | Secretory, Indian Photobiology Society | Professor, Dept. of Chemistry, Jadavpur University" },
    { name: "Dr. Amrut Ranjan Jena", role: "HOD CSE, DSCSITSC" },
    { name: "Dr. Anitava Halder", role: "HOD, CSE-AIML, DSCSITSC" },
    { name: "Dr. Sayantan Chakraborty", role: "HOD EE, DSCSITSC" },
    { name: "Dr. Anirban Neogi", role: "HOD ECE, DSCSITSC" },
    { name: "Dr. Ruma Sen", role: "HOD ME, DSCSITSC" },
    { name: "Dr. Dipakar Das", role: "HOD BSH, DSCSITSC" },
    { name: "Mr. Baibaswata Das", role: "TIC CE, DSCSITSC" },
    { name: "Mr. Arindam Mukherjee", role: "TIC, AUE, DSCSITSC" },
    { name: "Dr. Soumitra Roy", role: "Coordinator, IQAC" },
    { name: "Dr. Biswabandhu Chatterjee", role: "Convener R&D, DSCSITSC" },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#fafafa] pt-32 pb-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b8f29d]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#059669]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="hero-content text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-6 mix-blend-multiply">
            <span className="w-12 h-1 bg-[#059669] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#059669]">Leadership Team</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter">
            Our <span className="text-[#059669]">Committee</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            A distinguished panel of visionaries and experts driving the excellence of RDAMSE 2026.
          </p>
        </div>

        {/* Organizing Committee Section */}
        <div className="committee-section mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-200 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase italic tracking-tight">Organizing Committee</h2>
              <p className="text-[#059669] font-bold">The Core Leadership</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chief Patron Specialized Card */}
            <div className="lg:col-span-3 bg-white p-10 rounded-[2.5rem] border border-[#b8f29d]/30 shadow-2xl shadow-gray-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 rounded-full bg-[#b8f29d]/20 flex items-center justify-center text-[#059669] font-black">CP</div>
              </div>
              <p className="text-[#059669] font-black uppercase tracking-widest text-sm mb-4">Chief Patron</p>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{organizingCommittee.chiefPatron.name}</h3>
              <p className="text-xl text-gray-500 font-medium">{organizingCommittee.chiefPatron.role}</p>
            </div>

            {/* Patrons Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {organizingCommittee.patrons.map((patron, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:border-[#b8f29d] transition-all group">
                    <p className="text-xs font-black text-[#059669] uppercase mb-3 opacity-60 group-hover:opacity-100">Patron</p>
                    <h4 className="text-lg font-black text-gray-900 mb-1 leading-tight">{patron.name}</h4>
                    <p className="text-sm text-gray-500 font-semibold">{patron.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Convenors & Joint Convenors */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-[#059669] rounded-full" />
                CONVENORS
              </h3>
              <div className="space-y-4">
                {organizingCommittee.convenors.map((c, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
                    <h4 className="font-black text-gray-900">{c.name}</h4>
                    <p className="text-sm text-gray-500">{c.role}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mt-10 mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-[#b8f29d] rounded-full" />
                JT. CONVENORS
              </h3>
              <div className="space-y-4">
                {organizingCommittee.jtConvenors.map((c, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
                    <h4 className="font-black text-gray-900">{c.name}</h4>
                    <p className="text-sm text-gray-500">{c.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Members Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-black rounded-full" />
                MEMBERS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {organizingCommittee.members.map((m, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg flex flex-col justify-center">
                    <h4 className="font-black text-gray-900">{m.name}</h4>
                    <p className="text-sm text-gray-500">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Committee Section */}
        <div className="committee-section mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-200 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase italic tracking-tight">Advisory Committee</h2>
              <p className="text-[#059669] font-bold">Guidance & Scientific Oversight</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryCommittee.map((adv, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border transition-all ${idx === 0 ? "bg-gray-900 border-gray-900 text-white lg:col-span-2" : "bg-white border-gray-100 text-gray-900 shadow-xl"}`}>
                {idx === 0 && <p className="text-[#b8f29d] font-black text-xs uppercase mb-4 tracking-widest">Principal</p>}
                <h4 className="text-xl font-black mb-2">{adv.name}</h4>
                <p className={`font-medium ${idx === 0 ? "text-gray-400" : "text-gray-500"}`}>{adv.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Team Section */}
        <div className="committee-section">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] border border-dashed border-gray-300 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#059669]/5 opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight italic">Editorial Team</h2>
              <div className="inline-block px-10 py-5 bg-gray-900 text-[#b8f29d] rounded-full font-black text-2xl animate-pulse">
                COMING SOON
              </div>
              <p className="mt-8 text-gray-500 font-medium max-w-lg mx-auto">
                We are currently finalizing our editorial panel consisting of leading researchers from around the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;

