import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────

const chiefPatron = { name: 'Sardar Taranjit Singh', role: 'MD, JIS Group' };

const patrons = [
  { name: 'Sardar Haranjit Singh',       role: 'Joint MD, JIS Group' },
  { name: 'Sardar Amrik Singh',           role: 'Deputy MD, JIS Group' },
  { name: 'Ms Manpreet Kaur',             role: 'CEO, JIS Group' },
  { name: 'Sardar Simarpreet Singh',      role: 'Director, JIS Group' },
  { name: 'Ms Jaspreet Kaur',             role: 'Director, JIS Group' },
  { name: 'Sardar Harjot Singh',          role: 'Director, JIS Group' },
  { name: 'Sardar Amanjot Singh',         role: 'Director, JIS Group' },
  { name: 'Sardar Anmol Singh Narula',    role: 'Director, JIS Group' },
  { name: 'Prof. (Dr.) Ajay Kumar Ray',   role: 'Director JISIASR, Kolkata, India' },
  { name: 'Prof. (Dr.) Neeraj Saxena',    role: 'Pro-Chancellor, JIS University, Kolkata' },
];

const advisoryCommittee = [
  { name: 'Prof. Ashok Kumar Mishra',       role: 'IIT-Madras' },
  { name: 'Prof. Joe Otsuki',               role: 'Nihon University, Japan' },
  { name: 'Prof. (Dr.) Dibakar Dhara',      role: 'IIT, Kharagpur' },
  {
    name: 'Dr. Srabanti Ghosh',
    role: 'Principal Scientist, CGCRI, Kolkata & Convener, Society for Material Chemistry, Kolkata Chapter',
  },
  {
    name: 'Prof. (Dr.) N. R. Bandyopadhyay',
    role: 'School of Materials Science and Engineering, IIEST, Shibpur',
  },
  {
    name: 'Prof. (Dr.) K. K. Chattopadhyay',
    role: 'Dept. of Physics, School of Materials Science & Nanotechnology, Jadavpur University, Kolkata',
  },
  {
    name: 'Dr. Jayanta Mukhopadhyay',
    role: 'Senior Principal Scientist & Head, Energy Materials & Devices Division, CGCRI, Kolkata',
  },
  {
    name: 'Prof. Chittaranjan Sinha',
    role: 'Jadavpur University & Secretary, Indian Photobiology Society',
  },
  { name: 'Prof. (Dr.) Rahul Banerjee',     role: 'IISER, Kolkata' },
  {
    name: 'Prof. (Dr.) Debnarayan Jana',
    role: 'Dept. of Physics, University of Calcutta, Kolkata',
  },
  { name: 'Dr. Avik Ghosal',               role: 'Senior Manager, Exide Industry, Kolkata' },
  { name: 'Prof. Kamal Krishna Sarkar',     role: 'Sripat Singh College' },
  {
    name: 'Dr. Subhalakshmi Ghosh',
    role: 'Subhami Biopharma Pvt. Ltd., Kolkata',
  },
  {
    name: 'Dr. Gourisankar Roymahapatra',
    role: 'Haldia Institute of Technology',
  },
];

const sponsors = [
  {
    name: 'Metrohm Company',
    desc: 'A leading global provider of high-precision instruments for chemical analysis, including ion chromatography and electrochemistry solutions.',
  },
  {
    name: 'Chempure Private Limited',
    desc: 'Supplier of high-quality laboratory chemicals, reagents, and consumables for research and industrial applications.',
  },
  {
    name: 'Guardian Company',
    desc: 'Provider of safety equipment, laboratory instruments, and industrial support solutions.',
  },
  {
    name: "Researchers' Pal Company",
    desc: 'Offers research support services, academic assistance, and scientific resources for scholars and institutions.',
  },
];

const organizingCommittee = {
  programChair: {
    name: 'Prof. (Dr.) Saradindu Panda',
    role: 'Principal, SURTECH · Program Chair, RDAMSE 2026',
  },
  convenor: { name: 'Dr. Dipankar Das',  role: 'HoD, BSH, SURTECH' },
  coConvenor: { name: 'Dr. Biswajit Das', role: 'Asst. Prof., BSH, SURTECH · Convener R&D' },
  members: [
    { name: 'Dr. Soumen Basu',              role: 'Registrar, SURTECH' },
    { name: 'Dr. Amrut Ranjan Jena',        role: 'HOD CSE, SURTECH' },
    { name: 'Ms. Madhusmita Mishra',        role: 'TIC, CSE-AIML, SURTECH' },
    { name: 'Dr. Sayantan Chakraborty',     role: 'HOD EE, SURTECH' },
    { name: 'Dr. Anirban Neogi',            role: 'IQAC Co-coordinator & HOD, ECE, SURTECH' },
    { name: 'Dr. Arpita Chatterjee',        role: 'HOD, ME, SURTECH' },
    { name: 'Mr. Baibaswata Das',           role: 'TIC, CE, SURTECH' },
    { name: 'Mr. Kalayan Banerjee',         role: 'TIC, AUE, SURTECH' },
    { name: 'Dr. Arindam Sadhu',            role: 'Convener, IIC, SURTECH' },
    { name: 'Dr. Amit Samadder',            role: 'Asst. Prof., BSH, SURTECH' },
    { name: 'Dr. Debasish Sadhukhan',       role: 'Asst. Prof., BSH, SURTECH' },
    { name: 'Dr. Sukhendu Sadhukhan',       role: 'Asst. Prof., BSH, SURTECH' },
    { name: 'Dr. Kausik Sardar',            role: 'Asst. Prof., BSH, SURTECH' },
    { name: 'Dr. Shayari Basu',             role: 'Asst. Prof., BSH, SURTECH' },
    { name: 'Ms. Debasmita Roy Chowdhury',  role: 'Asst. Prof., BSH, SURTECH' },
    { name: 'Ms. Nibedita Biswas',          role: 'Asst. Prof., BSH, SURTECH' },
    { name: 'Ms. Neha Saha',               role: 'Asst. Prof., BSH, SURTECH' },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeader = ({ title, subtitle }) => (
  <div className="cmt-section-header">
    <h2 className="cmt-section-title">{title}</h2>
    <p className="cmt-section-subtitle">{subtitle}</p>
    <div className="cmt-divider" />
  </div>
);

const MemberCard = ({ name, role, accent = false }) => (
  <div className={`cmt-member-card${accent ? ' cmt-member-card--accent' : ''}`}>
    <div className="cmt-member-avatar">{name.charAt(0)}</div>
    <div>
      <p className="cmt-member-name">{name}</p>
      <p className="cmt-member-role">{role}</p>
    </div>
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────

const Committee = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cmt-hero > *', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: 'power4.out',
      });

      gsap.utils.toArray('.cmt-animate').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 44,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Scoped Styles ── */}
      <style>{`
        /* ── Page shell ── */
        .cmt-page {
          min-height: 100vh;
          background: #f8fafc;
          padding-top: 7rem;
          padding-bottom: 6rem;
          overflow-x: hidden;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* ── Blob decorations ── */
        .cmt-blob {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          filter: blur(110px);
        }
        .cmt-blob-1 { top:-8%; left:-8%; width:38%; height:38%; background:rgba(184,242,157,.15); }
        .cmt-blob-2 { bottom:8%; right:-4%; width:28%; height:28%; background:rgba(5,150,105,.07); }

        /* ── Content wrapper ── */
        .cmt-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.25rem;
          position: relative;
          z-index: 1;
        }

        /* ── Hero ── */
        .cmt-hero { text-align: center; margin-bottom: 5rem; }
        .cmt-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: 1.25rem;
        }
        .cmt-hero-line { width: 3rem; height: 3px; background: #059669; border-radius: 99px; }
        .cmt-hero-label {
          font-size: .7rem;
          font-weight: 900;
          letter-spacing: .4em;
          text-transform: uppercase;
          color: #059669;
        }
        .cmt-hero-title {
          font-size: clamp(2.4rem, 7vw, 5.5rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.05;
          letter-spacing: -.03em;
          margin-bottom: 1rem;
        }
        .cmt-hero-title span { color: #059669; }
        .cmt-hero-desc {
          max-width: 38rem;
          margin: 0 auto;
          color: #64748b;
          font-size: 1.05rem;
          font-weight: 500;
          line-height: 1.7;
        }

        /* ── Section wrapper ── */
        .cmt-section { margin-bottom: 5rem; }

        /* ── Section header ── */
        .cmt-section-header { margin-bottom: 2.5rem; }
        .cmt-section-title {
          font-size: clamp(1.5rem, 3.5vw, 2.2rem);
          font-weight: 900;
          color: #0f172a;
          text-transform: uppercase;
          font-style: italic;
          letter-spacing: -.02em;
        }
        .cmt-section-subtitle {
          color: #059669;
          font-weight: 700;
          font-size: .95rem;
          margin-top: .2rem;
        }
        .cmt-divider {
          height: 3px;
          width: 4rem;
          background: linear-gradient(90deg, #059669, #b8f29d);
          border-radius: 99px;
          margin-top: .9rem;
        }

        /* ── Chief Patron ── */
        .cmt-chief-card {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          border-radius: 2rem;
          padding: 2.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          box-shadow: 0 20px 50px rgba(5,150,105,.25);
          flex-wrap: wrap;
        }
        .cmt-chief-badge {
          width: 5rem; height: 5rem; flex-shrink: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem; font-weight: 900; color: #fff;
          letter-spacing: -.04em;
        }
        .cmt-chief-label {
          font-size: .65rem; font-weight: 900;
          text-transform: uppercase; letter-spacing: .35em;
          color: rgba(255,255,255,.6); margin-bottom: .4rem;
        }
        .cmt-chief-name {
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          font-weight: 900; color: #fff; line-height: 1.1; margin-bottom: .3rem;
        }
        .cmt-chief-role { font-size: 1.05rem; color: rgba(255,255,255,.8); font-weight: 600; }

        /* ── Patron grid ── */
        .cmt-patron-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 1rem;
        }
        .cmt-patron-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 1.2rem;
          padding: 1.2rem 1.1rem;
          transition: border-color .25s, box-shadow .25s, transform .25s;
        }
        .cmt-patron-card:hover {
          border-color: #b8f29d;
          box-shadow: 0 8px 24px rgba(5,150,105,.1);
          transform: translateY(-3px);
        }
        .cmt-patron-tag {
          font-size: .6rem; font-weight: 900;
          text-transform: uppercase; letter-spacing: .3em;
          color: #059669; margin-bottom: .5rem; opacity: .65;
        }
        .cmt-patron-name { font-weight: 800; color: #0f172a; font-size: .95rem; line-height: 1.3; }
        .cmt-patron-role { font-size: .8rem; color: #64748b; font-weight: 600; margin-top: .25rem; }

        /* ── Advisory grid ── */
        .cmt-advisory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 1rem;
        }
        .cmt-advisory-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 1.2rem;
          padding: 1.4rem 1.2rem;
          transition: border-color .25s, box-shadow .25s, transform .25s;
          display: flex;
          flex-direction: column;
          gap: .4rem;
        }
        .cmt-advisory-card:hover {
          border-color: #b8f29d;
          box-shadow: 0 8px 24px rgba(5,150,105,.1);
          transform: translateY(-3px);
        }
        .cmt-advisory-name { font-weight: 800; color: #0f172a; font-size: 1rem; }
        .cmt-advisory-role { font-size: .82rem; color: #64748b; font-weight: 500; line-height: 1.5; }

        /* ── Sponsors ── */
        .cmt-sponsor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.1rem;
        }
        .cmt-sponsor-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 1.4rem;
          padding: 1.5rem 1.3rem;
          transition: border-color .25s, box-shadow .25s, transform .25s;
          border-top: 4px solid #059669;
        }
        .cmt-sponsor-card:hover {
          border-color: #059669;
          box-shadow: 0 8px 28px rgba(5,150,105,.12);
          transform: translateY(-3px);
        }
        .cmt-sponsor-icon {
          width: 2.4rem; height: 2.4rem;
          border-radius: .7rem;
          background: linear-gradient(135deg,#059669,#b8f29d);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: .9rem;
        }
        .cmt-sponsor-icon svg { width: 1.1rem; height: 1.1rem; fill: #fff; }
        .cmt-sponsor-name { font-weight: 900; color: #0f172a; font-size: 1rem; margin-bottom: .4rem; }
        .cmt-sponsor-desc { font-size: .82rem; color: #64748b; font-weight: 500; line-height: 1.55; }

        /* ── Organizing ── */
        .cmt-org-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 640px) {
          .cmt-org-top { grid-template-columns: repeat(3, 1fr); }
        }
        .cmt-org-highlight {
          border-radius: 1.4rem;
          padding: 1.5rem 1.3rem;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          transition: box-shadow .25s;
        }
        .cmt-org-highlight:hover { box-shadow: 0 8px 24px rgba(5,150,105,.1); }
        .cmt-org-highlight.green {
          background: linear-gradient(135deg,#059669 0%,#047857 100%);
          border-color: transparent;
        }
        .cmt-org-tag {
          font-size: .6rem; font-weight: 900; letter-spacing: .35em;
          text-transform: uppercase; margin-bottom: .5rem;
        }
        .cmt-org-tag.dark { color: #059669; }
        .cmt-org-tag.light { color: rgba(255,255,255,.65); }
        .cmt-org-name { font-weight: 900; font-size: 1.05rem; line-height: 1.3; }
        .cmt-org-name.dark { color: #0f172a; }
        .cmt-org-name.light { color: #fff; }
        .cmt-org-role { font-size: .82rem; margin-top: .3rem; }
        .cmt-org-role.dark { color: #64748b; }
        .cmt-org-role.light { color: rgba(255,255,255,.75); }

        /* ── Member card (list) ── */
        .cmt-member-card {
          display: flex;
          align-items: flex-start;
          gap: .85rem;
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 1rem;
          padding: 1rem 1.1rem;
          transition: border-color .25s, transform .2s;
        }
        .cmt-member-card:hover { border-color: #b8f29d; transform: translateY(-2px); }
        .cmt-member-card--accent .cmt-member-avatar { background: #059669; color: #fff; }
        .cmt-member-avatar {
          width: 2.2rem; height: 2.2rem; flex-shrink: 0;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex; align-items: center; justify-content: center;
          font-weight: 900; font-size: .85rem; color: #64748b;
        }
        .cmt-member-name { font-weight: 800; font-size: .92rem; color: #0f172a; }
        .cmt-member-role { font-size: .78rem; color: #64748b; font-weight: 500; margin-top: .15rem; }

        .cmt-member-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: .85rem;
        }

        /* ── Responsive tweaks ── */
        @media (max-width: 480px) {
          .cmt-chief-card { flex-direction: column; text-align: center; }
          .cmt-chief-badge { margin: 0 auto; }
        }
      `}</style>

      <div ref={pageRef} className="cmt-page">
        {/* Blobs */}
        <div className="cmt-blob cmt-blob-1" />
        <div className="cmt-blob cmt-blob-2" />

        <div className="cmt-container">

          {/* ── Hero ── */}
          <div className="cmt-hero">
            <div className="cmt-hero-eyebrow">
              <span className="cmt-hero-line" />
              <span className="cmt-hero-label">Leadership &amp; Committee</span>
              <span className="cmt-hero-line" />
            </div>
            <h1 className="cmt-hero-title">Our <span>Committee</span></h1>
            <p className="cmt-hero-desc">
              A distinguished panel of visionaries, scientists, and educators driving the excellence of RDAMSE&nbsp;2026.
            </p>
          </div>

          {/* ════ 1. CHIEF PATRON ════ */}
          <section className="cmt-section cmt-animate">
            <SectionHeader title="Chief Patron" subtitle="Highest Honorary Patron of RDAMSE 2026" />
            <div className="cmt-chief-card">
              <div className="cmt-chief-badge">TS</div>
              <div>
                <p className="cmt-chief-label">Chief Patron</p>
                <h3 className="cmt-chief-name">{chiefPatron.name}</h3>
                <p className="cmt-chief-role">{chiefPatron.role}</p>
              </div>
            </div>
          </section>

          {/* ════ 2. PATRONS ════ */}
          <section className="cmt-section cmt-animate">
            <SectionHeader title="Patrons" subtitle="Distinguished Patrons of RDAMSE 2026" />
            <div className="cmt-patron-grid">
              {patrons.map((p, i) => (
                <div key={i} className="cmt-patron-card">
                  <p className="cmt-patron-tag">Patron</p>
                  <p className="cmt-patron-name">{p.name}</p>
                  <p className="cmt-patron-role">{p.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════ 3. ADVISORY COMMITTEE ════ */}
          <section className="cmt-section cmt-animate">
            <SectionHeader title="Advisory Committee" subtitle="Eminent Scientific Advisory Board" />
            <div className="cmt-advisory-grid">
              {advisoryCommittee.map((a, i) => (
                <div key={i} className="cmt-advisory-card">
                  <p className="cmt-advisory-name">{a.name}</p>
                  <p className="cmt-advisory-role">{a.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════ 4. SPONSORS ════ */}
          <section className="cmt-section cmt-animate">
            <SectionHeader title="Sponsors" subtitle="Our Valued Industry Partners" />
            <div className="cmt-sponsor-grid">
              {sponsors.map((s, i) => (
                <div key={i} className="cmt-sponsor-card">
                  <div className="cmt-sponsor-icon">
                    {/* star / medal SVG */}
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="cmt-sponsor-name">{s.name}</p>
                  <p className="cmt-sponsor-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ════ 5. ORGANIZING COMMITTEE ════ */}
          <section className="cmt-section cmt-animate">
            <SectionHeader title="Organizing Committee" subtitle="The Core Team Behind RDAMSE 2026" />

            {/* Top 3 highlights */}
            <div className="cmt-org-top">
              {/* Program Chair */}
              <div className="cmt-org-highlight green">
                <p className="cmt-org-tag light">Program Chair</p>
                <p className="cmt-org-name light">{organizingCommittee.programChair.name}</p>
                <p className="cmt-org-role light">{organizingCommittee.programChair.role}</p>
              </div>
              {/* Convenor */}
              <div className="cmt-org-highlight">
                <p className="cmt-org-tag dark">Convenor</p>
                <p className="cmt-org-name dark">{organizingCommittee.convenor.name}</p>
                <p className="cmt-org-role dark">{organizingCommittee.convenor.role}</p>
              </div>
              {/* Co-Convenor */}
              <div className="cmt-org-highlight">
                <p className="cmt-org-tag dark">Co-Convenor</p>
                <p className="cmt-org-name dark">{organizingCommittee.coConvenor.name}</p>
                <p className="cmt-org-role dark">{organizingCommittee.coConvenor.role}</p>
              </div>
            </div>

            {/* All members */}
            <div className="cmt-member-grid">
              {organizingCommittee.members.map((m, i) => (
                <MemberCard key={i} name={m.name} role={m.role} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Committee;
