import React, { useMemo, useRef } from "react";
import logoWhBg from "../assets/logo_wh_bg.png";

function Icon({ children, size = 18 }) {
  return (
    <span className="ss-icon" aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </span>
  );
}

const SvgDashboard = () => (
  <>
    <path d="M4 13.5V20h7v-6.5H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M13 4h7v7h-7V4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M13 13.5V20h7v-6.5h-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M4 4h7v7H4V4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </>
);

const SvgFile = () => (
  <>
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </>
);

const SvgChart = () => (
  <>
    <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 17v-6M12 17V9M16 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </>
);

const SvgTrophy = () => (
  <>
    <path
      d="M8 21h8M12 17v4M16 3h4v3a4 4 0 0 1-4 4M8 3H4v3a4 4 0 0 0 4 4M12 3c3 0 6 2 6 6 0 4-2 8-6 8s-6-4-6-8c0-4 3-6 6-6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </>
);

const SvgCalendar = () => (
  <>
    <path
      d="M7 3v2M17 3v2M4 7h20M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

const SvgBell = () => (
  <>
    <path
      d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </>
);

const SvgGear = () => (
  <>
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2 2 0 0 1-1.4 3.4h-.2a1.8 1.8 0 0 0-1.9 1.3 2 2 0 0 1-3.8 0 1.8 1.8 0 0 0-1.9-1.3h-.2A2 2 0 0 1 4.5 17l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1.2H3.1a2 2 0 0 1 0-4h.2a1.8 1.8 0 0 0 1.7-1.2 1.8 1.8 0 0 0-.4-2l-.1-.1A2 2 0 0 1 6.6 4.9h.2a1.8 1.8 0 0 0 1.9-1.3 2 2 0 0 1 3.8 0 1.8 1.8 0 0 0 1.9 1.3h.2a2 2 0 0 1 1.4 3.4l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1.2h.2a2 2 0 0 1 0 4h-.2a1.8 1.8 0 0 0-1.7 1.2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </>
);

const SvgLogout = () => (
  <>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </>
);

const SvgSearch = () => (
  <>
    <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </>
);

const SvgChevronLeft = () => (
  <>
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </>
);

const SvgChevronRight = () => (
  <>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </>
);

export default function StudentSchedule() {
  const upcomingQuizzes = useMemo(
    () => [
      {
        dateLabel: "25th March",
        title: "Object Oriented Programming",
        deadline: "Deadline: 25th March",
        timeLimit: "Time limit: 20min",
      },
      {
        dateLabel: "28th March",
        title: "Programming Framework",
        deadline: "Deadline: 28th March",
        timeLimit: "Time limit: 10min",
      },
      {
        dateLabel: "25th March",
        title: "Mobile Computing",
        deadline: "Deadline: 12th April",
        timeLimit: "Time limit: 60min",
      },
    ],
    []
  );

  const scrollerRef = useRef(null);
  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 520, behavior: "smooth" });
  };

  return (
    <div className="ss-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap');
        :root{
          --ss-purple-900:#2f1f8f;
          --ss-purple-800:#3f2db8;
          --ss-purple-650:#5843d6;
          --ss-purple-600:#6b5cf1;
          --ss-bg:#f4f4ff;
          --ss-text:#111827;
          --ss-card:#4a38d3;
        }
        *{ box-sizing:border-box; margin:0; padding:0; }
        .ss-root{
          min-height:100vh;
          font-family:"Poppins", sans-serif;
          background: var(--ss-bg);
        }
        .ss-layout{
          display:grid;
          grid-template-columns: 270px 1fr;
          min-height:100vh;
        }
        @media (max-width: 980px){
          .ss-layout{ grid-template-columns: 1fr; }
        }

        /* Sidebar */
        .ss-sidebar{
          background: linear-gradient(180deg, var(--ss-purple-650) 0%, var(--ss-purple-800) 100%);
          color:#fff;
          padding: 22px 18px;
          display:flex;
          flex-direction:column;
          gap: 22px;
        }
        .ss-brand{
          display:flex;
          align-items:center;
          gap:10px;
          font-weight:900;
          letter-spacing:0.4px;
          font-size:18px;
        }
        .ss-brand-logo{
          width: 34px;
          height: 34px;
          object-fit:contain;
          display:block;
        }
        .ss-nav{
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .ss-nav-item{
          display:flex;
          align-items:center;
          gap:12px;
          padding: 12px 14px;
          border-radius: 16px;
          cursor: default;
          user-select:none;
          transition: background 0.15s ease, transform 0.15s ease;
          font-weight:700;
          font-size:14px;
          color: rgba(255,255,255,0.93);
        }
        .ss-nav-item:hover{
          background: rgba(255,255,255,0.10);
          transform: translateY(-1px);
        }
        .ss-nav-item--active{
          background: rgba(255,255,255,0.16);
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }
        .ss-icon{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          color:#fff;
        }
        .ss-icon svg{ display:block; }
        .ss-sidebar-spacer{ flex:1; }

        .ss-user-email{
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
          margin-bottom: 10px;
        }
        .ss-logout{
          width:100%;
          display:flex;
          align-items:center;
          gap:12px;
          justify-content:flex-start;
          background: rgba(255,255,255,0.96);
          color:#ef4444;
          border:0;
          border-radius: 12px;
          padding: 12px 14px;
          font-weight:800;
          cursor:pointer;
          transition: transform 0.15s ease;
        }
        .ss-logout:hover{ transform: translateY(-1px); }
        @media (max-width: 980px){
          .ss-sidebar{ position: sticky; top:0; z-index:10; }
        }

        /* Main */
        .ss-main{
          display:flex;
          flex-direction:column;
        }
        .ss-topbar{
          height: 82px;
          background:#fff;
          border-bottom: 1px solid rgba(15,23,42,0.08);
          display:flex;
          align-items:center;
        }
        .ss-topbar-inner{
          width:100%;
          padding: 0 26px;
          display:flex;
          align-items:center;
          justify-content:flex-end;
          gap: 18px;
        }
        .ss-search{
          width: 520px;
          max-width: 60vw;
          position: relative;
          margin-right: 12px;
        }
        @media (max-width: 980px){
          .ss-search{
            width: 100%;
            max-width: none;
            margin-right: 0;
          }
          .ss-topbar-inner{ justify-content: space-between; }
        }
        .ss-search-field{
          width:100%;
          height: 42px;
          border-radius: 999px;
          border: 1px solid rgba(15,23,42,0.14);
          background: #fff;
          display:flex;
          align-items:center;
          gap:10px;
          padding: 0 14px;
          box-shadow: 0 10px 30px rgba(15,23,42,0.06);
        }
        .ss-search-field input{
          width:100%;
          border:0;
          outline:none;
          font-size: 13px;
        }
        .ss-search-icon{
          color:#111827;
          display:inline-flex;
          align-items:center;
          justify-content:center;
        }
        .ss-avatar{
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--ss-purple-600) 0%, #06b6d4 100%);
          color:#fff;
          font-weight:900;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow: 0 14px 30px rgba(124,58,237,0.25);
          flex: 0 0 auto;
        }

        /* Content panel */
        .ss-content{
          padding: 26px;
          display:flex;
          flex-direction:column;
          gap: 18px;
        }
        .ss-panel{
          background:#fff;
          border-radius: 18px;
          box-shadow: 0 24px 70px rgba(30,41,59,0.12);
          padding: 26px;
        }
        .ss-panel h2{
          font-size: 18px;
          font-weight: 900;
          color: #111827;
          margin-bottom: 16px;
        }

        /* Carousel row */
        .ss-carousel{
          position: relative;
        }
        .ss-arrow{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 0;
          cursor: pointer;
          background: rgba(124,58,237,0.14);
          color: #4a38d3;
          display:flex;
          align-items:center;
          justify-content:center;
          z-index: 5;
        }
        .ss-arrow:hover{ background: rgba(124,58,237,0.22); }
        .ss-arrow--left{ left: -10px; }
        .ss-arrow--right{ right: -10px; }
        @media (max-width: 980px){
          .ss-arrow{ display:none; }
        }

        .ss-card-row{
          display:flex;
          gap: 22px;
          overflow-x:auto;
          padding-bottom: 10px;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }
        .ss-card-row::-webkit-scrollbar{ display:none; }

        .ss-quiz-card{
          width: 260px;
          flex: 0 0 auto;
          scroll-snap-align: start;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid rgba(15,23,42,0.10);
          box-shadow: 0 18px 40px rgba(17,24,39,0.10);
          padding: 16px 16px 18px;
          display:flex;
          flex-direction:column;
          gap: 12px;
          min-height: 340px;
        }
        .ss-date-pill{
          align-self:center;
          background: rgba(75, 56, 211, 0.95);
          color:#fff;
          font-weight: 900;
          font-size: 14px;
          padding: 8px 14px;
          border-radius: 999px;
        }
        .ss-quiz-title{
          text-align:left;
          font-weight: 900;
          font-size: 14px;
          color: #111827;
          line-height: 1.25;
          min-height: 44px;
        }
        .ss-meta{
          margin-top: 2px;
          font-size: 12.5px;
          font-weight: 700;
          color: #374151;
          display:flex;
          flex-direction:column;
          gap: 7px;
        }
        .ss-actions{
          margin-top:auto;
          display:flex;
          flex-direction:column;
          gap: 10px;
        }
        .ss-btn{
          height: 40px;
          width: 100%;
          border-radius: 10px;
          border:0;
          cursor:pointer;
          font-weight: 900;
          font-size: 14px;
          transition: transform 0.15s ease, filter 0.15s ease;
        }
        .ss-btn:hover{ transform: translateY(-1px); filter: brightness(0.98); }
        .ss-btn--start{ background: #16a34a; color:#fff; }
        .ss-btn--remind{ background: #dc2626; color:#fff; }
      `}</style>

      <div className="ss-layout">
        <aside className="ss-sidebar">
          <div className="ss-brand">
            <img className="ss-brand-logo" src={logoWhBg} alt="Quiz Hub logo" />
            <div>QUIZ HUB</div>
          </div>

          <nav className="ss-nav" aria-label="Student navigation">
            <div className="ss-nav-item">
              <Icon>
                <SvgDashboard />
              </Icon>
              Dashboard
            </div>
            <div className="ss-nav-item">
              <Icon>
                <SvgFile />
              </Icon>
              My Quizzes
            </div>
            <div className="ss-nav-item">
              <Icon>
                <SvgChart />
              </Icon>
              Results
            </div>
            <div className="ss-nav-item">
              <Icon>
                <SvgTrophy />
              </Icon>
              Leader-Board
            </div>
            <div className="ss-nav-item ss-nav-item--active">
              <Icon>
                <SvgCalendar />
              </Icon>
              Schedule
            </div>
            <div className="ss-nav-item">
              <Icon>
                <SvgBell />
              </Icon>
              Notice
            </div>
            <div className="ss-nav-item">
              <Icon>
                <SvgBell />
              </Icon>
              Notification
            </div>
            <div className="ss-nav-item">
              <Icon>
                <SvgGear />
              </Icon>
              Settings
            </div>
          </nav>

          <div className="ss-sidebar-spacer" />

          <div className="ss-user-email">UserName<br />student@email.com</div>

          <button className="ss-logout" type="button">
            <span style={{ color: "#ef4444", display: "inline-flex" }}>
              <Icon size={18}>
                <SvgLogout />
              </Icon>
            </span>
            LOG OUT
          </button>
        </aside>

        <div className="ss-main">
          <header className="ss-topbar">
            <div className="ss-topbar-inner">
              <div className="ss-search">
                <div className="ss-search-field">
                  <span className="ss-search-icon">
                    <Icon size={18}>
                      <SvgSearch />
                    </Icon>
                  </span>
                  <input aria-label="Search" placeholder="Search" />
                </div>
              </div>
              <div className="ss-avatar" aria-hidden="true">
                D
              </div>
            </div>
          </header>

          <main className="ss-content">
            <div className="ss-panel">
              <h2>Upcoming Quizzes</h2>

              <div className="ss-carousel" aria-label="Upcoming quiz list">
                <button className="ss-arrow ss-arrow--left" type="button" onClick={() => scrollByCards(-1)} aria-label="Previous quizzes">
                  <Icon size={20}>
                    <SvgChevronLeft />
                  </Icon>
                </button>
                <button className="ss-arrow ss-arrow--right" type="button" onClick={() => scrollByCards(1)} aria-label="Next quizzes">
                  <Icon size={20}>
                    <SvgChevronRight />
                  </Icon>
                </button>

                <div className="ss-card-row" ref={scrollerRef}>
                  {upcomingQuizzes.map((q) => (
                    <article key={q.title} className="ss-quiz-card">
                      <div className="ss-date-pill">{q.dateLabel}</div>
                      <div className="ss-quiz-title">{q.title}</div>
                      <div className="ss-meta">
                        <div>{q.deadline}</div>
                        <div>{q.timeLimit}</div>
                      </div>
                      <div className="ss-actions">
                        <button className="ss-btn ss-btn--start" type="button">
                          Start Quiz
                        </button>
                        <button className="ss-btn ss-btn--remind" type="button">
                          Remind Me
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}