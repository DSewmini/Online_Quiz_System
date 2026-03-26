import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import logoTrans from "../assets/logo_trans.png";

function Icon({ children, size = 18 }) {
  return (
    <span className="ld-icon" aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </span>
  );
}

const SvgDashboard = () => (
  <>
    <path
      d="M4 13.5V20h7v-6.5H4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M13 4h7v7h-7V4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M13 13.5V20h7v-6.5h-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M4 4h7v7H4V4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </>
);

const SvgPencil = () => (
  <>
    <path
      d="M12 20h9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </>
);

const SvgQuiz = () => (
  <>
    <path
      d="M4 7h16M4 12h16M4 17h10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19 16l1 1 3-3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

const SvgChart = () => (
  <>
    <path
      d="M4 19V5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4 19h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 17v-6M12 17V9M16 17V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>
);

const SvgUser = () => (
  <>
    <path
      d="M20 21a8 8 0 0 0-16 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="currentColor"
      strokeWidth="2"
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
    <path
      d="M13.73 21a2 2 0 0 1-3.46 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>
);

const SvgLogout = () => (
  <>
    <path
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M16 17l5-5-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>
);

const SvgSearch = () => (
  <>
    <path
      d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>
);

const SvgPlus = () => (
  <>
    <path
      d="M12 5v14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>
);

const GraduationCapArt = () => (
  <svg
    width="210"
    height="160"
    viewBox="0 0 210 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M105 18L10 60l95 42 95-42-95-42Z"
      fill="#ffffff"
      opacity="0.18"
    />
    <path
      d="M105 26L22 61l83 35 83-35-83-35Z"
      stroke="white"
      strokeWidth="2"
      opacity="0.55"
      strokeLinejoin="round"
    />
    <path
      d="M48 78v39c0 10 23 20 57 20s57-10 57-20V78"
      stroke="white"
      strokeWidth="2"
      opacity="0.55"
      strokeLinecap="round"
    />
    <path
      d="M149 82l-44 20-44-20"
      stroke="white"
      strokeWidth="2"
      opacity="0.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M60 130l10-26h70l10 26"
      fill="#ffffff"
      opacity="0.12"
    />
    <circle cx="165" cy="35" r="5" fill="#7EE8C7" opacity="0.9" />
    <circle cx="150" cy="46" r="3" fill="#FFB3C7" opacity="0.9" />
    <circle cx="178" cy="54" r="4" fill="#A7C8FF" opacity="0.9" />
  </svg>
);

function StatCard({ value, title, icon }) {
  return (
    <div className="ld-stat-card">
      <div className="ld-stat-icon">{icon}</div>
      <div className="ld-stat-meta">
        <div className="ld-stat-value">{value}</div>
        <div className="ld-stat-title">{title}</div>
      </div>
    </div>
  );
}

function ProgressBar({ percent }) {
  const safe = Math.max(0, Math.min(100, percent));
  return (
    <div className="ld-progress">
      <div className="ld-progress-fill" style={{ width: `${safe}%` }} />
    </div>
  );
}

function QuizCard({ title, questions, completions, completionPercent }) {
  return (
    <div className="ld-quiz-card">
      <div className="ld-quiz-title">{title}</div>

      <div className="ld-quiz-row">
        <span className="ld-quiz-chip">
          <Icon size={16}>
            <path
              d="M5 7h14M5 12h14M5 17h10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </Icon>
          {questions} questions
        </span>
      </div>

      <div className="ld-quiz-row ld-quiz-row--muted">
        <span className="ld-quiz-chip">
          <Icon size={16}>
            <path
              d="M12 21s-7-4.5-7-11A7 7 0 0 1 19 10c0 6.5-7 11-7 11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </Icon>
          {completions} completions
        </span>
      </div>

      <div className="ld-quiz-progress">
        <div className="ld-quiz-progress-top">
          <div className="ld-quiz-progress-label">Completion Rate</div>
          <div className="ld-quiz-progress-percent">{completionPercent}%</div>
        </div>
        <ProgressBar percent={completionPercent} />
      </div>
    </div>
  );
}

function LecturerDashboard() {
  const placeholderQuizzes = useMemo(
    () => [
      { title: "Recent Quiz", questions: 0, completions: 0, completionPercent: 0 },
      { title: "Recent Quiz", questions: 0, completions: 0, completionPercent: 0 },
      { title: "Recent Quiz", questions: 0, completions: 0, completionPercent: 0 },
    ],
    []
  );

  const [recentQuizzes, setRecentQuizzes] = useState(placeholderQuizzes);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    totalQuizzes: "TBD",
    totalAttempts: "TBD",
    participation: "TBD",
    averageMarks: "TBD",
  });

  const [userName, setUserName] = useState("Lecturer");

  useEffect(() => {
    let cancelled = false;

    const API_BASE = process.env.REACT_APP_API_BASE_URL || "";
    const lecturerEmail =
      window.localStorage.getItem("lecturerEmail") ||
      window.localStorage.getItem("email") ||
      "";

    // Optional: if your login stores a name, use it; otherwise fall back to email.
    const storedName = window.localStorage.getItem("lecturerName") || window.localStorage.getItem("name") || "";
    if (!cancelled) {
      setUserName(storedName || (lecturerEmail ? lecturerEmail.split("@")[0] : "Lecturer"));
    }

    const toNum = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };

    const fetchDashboard = async () => {
      try {
        const params = {};
        if (lecturerEmail) params.lecturerEmail = lecturerEmail;

        // NOTE: Adjust these endpoints to match your backend.
        const [statsRes, quizzesRes] = await Promise.all([
          axios.get(`${API_BASE}/api/lecturers/dashboard-stats`, { params }).catch(() => null),
          axios.get(`${API_BASE}/api/lecturers/recent-quizzes`, { params }).catch(() => null),
        ]);

        if (!cancelled) {
          const sData = statsRes?.data;
          if (sData) {
            const normalized = {
              totalQuizzes: sData.totalQuizzes ?? sData.quizzesCount ?? "TBD",
              totalAttempts: sData.totalAttempts ?? sData.attemptsCount ?? "TBD",
              participation: sData.participation ?? sData.studentParticipation ?? "TBD",
              averageMarks: sData.averageMarks ?? sData.avgMarks ?? "TBD",
            };
            setStats(normalized);
          }

          const qData = quizzesRes?.data;
          const list = qData?.quizzes ?? qData?.recentQuizzes ?? qData?.upcomingQuizzes ?? qData ?? [];
          const normalizedQuizzes = Array.isArray(list)
            ? list.slice(0, 3).map((q) => ({
                title: q.title ?? q.quizTitle ?? q.name ?? "Recent Quiz",
                questions: toNum(q.questions ?? q.questionCount),
                completions: toNum(q.completions ?? q.completedCount ?? q.attempts),
                completionPercent: toNum(q.completionPercent ?? q.completionRate ?? q.rate),
              }))
            : [];

          setRecentQuizzes(normalizedQuizzes.length ? normalizedQuizzes : placeholderQuizzes);
        }
      } catch (e) {
        if (!cancelled) {
          setRecentQuizzes(placeholderQuizzes);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchDashboard();
    return () => {
      cancelled = true;
    };
  }, [placeholderQuizzes]);

  return (
    <div className="ld-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap');
        :root{
          --ld-purple-900:#2f1f8f;
          --ld-purple-800:#3f2db8;
          --ld-purple-700:#4b3bbd;
          --ld-purple-650:#5843d6;
          --ld-purple-600:#6b5cf1;
          --ld-bg:#f4f4ff;
          --ld-text:#111827;
          --ld-muted:rgba(255,255,255,0.8);
          --ld-card:#4a38d3;
          --ld-card-dark:#111827;
        }
        .ld-root{
          min-height:100vh;
          font-family:"Poppins", sans-serif;
          background: var(--ld-bg);
        }

        /* Layout */
        .ld-layout{
          display:grid;
          grid-template-columns: 260px 1fr;
          min-height:100vh;
        }
        @media (max-width: 980px){
          .ld-layout{
            grid-template-columns: 1fr;
          }
        }

        /* Sidebar */
        .ld-sidebar{
          background: linear-gradient(180deg, var(--ld-purple-650) 0%, var(--ld-purple-800) 100%);
          color:#fff;
          padding: 20px 18px;
          display:flex;
          flex-direction:column;
          gap: 22px;
        }
        .ld-brand{
          display:flex;
          align-items:center;
          justify-content:flex-start;
          gap:10px;
          font-weight:800;
          letter-spacing:0.4px;
          font-size:18px;
        }
        .ld-brand-logo{
          width: auto;
          height: 36px;
          object-fit: contain;
          display:block;
        }
        .ld-brand-text{ display:none; }
        .ld-nav{
          display:flex;
          flex-direction:column;
          gap: 10px;
          margin-top: 2px;
        }
        .ld-nav-item{
          display:flex;
          align-items:center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 16px;
          cursor:pointer;
          user-select:none;
          transition: background 0.15s ease, transform 0.15s ease;
          color: rgba(255,255,255,0.92);
          font-weight: 600;
          font-size: 14px;
        }
        .ld-nav-item:hover{
          background: rgba(255,255,255,0.1);
          transform: translateY(-1px);
        }
        .ld-nav-item--active{
          background: rgba(255,255,255,0.14);
          box-shadow: 0 10px 24px rgba(0,0,0,0.12);
        }
        .ld-icon{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          color:#fff;
        }
        .ld-sidebar-spacer{
          flex:1;
        }
        .ld-logout{
          width:100%;
          display:flex;
          align-items:center;
          gap:12px;
          justify-content:flex-start;
          background: rgba(255,255,255,0.96);
          color: #ef4444;
          border:0;
          border-radius: 12px;
          padding: 12px 14px;
          font-weight:700;
          cursor:pointer;
          transition: transform 0.15s ease;
        }
        .ld-logout:hover{
          transform: translateY(-1px);
        }
        @media (max-width: 980px){
          .ld-sidebar{
            position: sticky;
            top:0;
            z-index: 10;
          }
        }

        /* Main */
        .ld-main{
          display:flex;
          flex-direction:column;
        }

        /* Top bar */
        .ld-topbar{
          height: 80px;
          background:#fff;
          border-bottom: 1px solid rgba(15,23,42,0.08);
          display:flex;
          align-items:center;
        }
        .ld-topbar-inner{
          width: 100%;
          padding: 0 26px;
          display:flex;
          align-items:center;
          justify-content:flex-end;
          gap: 18px;
          position: relative;
        }
        .ld-search{
          width: 470px;
          max-width: 52vw;
          margin-left: 0;
          position:absolute;
          left:50%;
          transform:translateX(-50%);
        }
        @media (max-width: 980px){
          .ld-search{
            position: static;
            left:auto;
            transform:none;
            width: 100%;
            max-width:none;
          }
        }
        .ld-search-field{
          width: 100%;
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
        .ld-search-field input{
          border:0;
          outline:none;
          width: 100%;
          font-size: 13px;
          background:transparent;
        }
        .ld-user{
          display:flex;
          align-items:center;
          gap: 14px;
        }
        .ld-avatar{
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%);
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 800;
          color:#fff;
          box-shadow: 0 14px 30px rgba(124,58,237,0.25);
          flex: 0 0 auto;
        }
        .ld-user-name{
          font-weight: 700;
          font-size: 13px;
          color: #111827;
          white-space:nowrap;
        }
        .ld-bell{
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 0;
          background: rgba(15,23,42,0.06);
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#111827;
          transition: transform 0.15s ease;
        }
        .ld-bell:hover{
          transform: translateY(-1px);
        }

        /* Content */
        .ld-content{
          padding: 26px;
          display:flex;
          flex-direction:column;
          gap: 22px;
        }

        /* Welcome */
        .ld-welcome{
          background: linear-gradient(135deg, var(--ld-purple-800) 0%, var(--ld-purple-700) 100%);
          border-radius: 18px;
          padding: 26px 26px;
          box-shadow: 0 20px 48px rgba(63,67,204,0.24);
          position: relative;
          overflow:hidden;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 16px;
        }
        .ld-welcome::before{
          content:'';
          position:absolute;
          inset:-80px -60px auto auto;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle at center, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 70%);
          transform: rotate(15deg);
          pointer-events:none;
        }
        .ld-welcome-text h1{
          font-size: 22px;
          margin: 0 0 6px 0;
          color:#fff;
          font-weight: 800;
        }
        .ld-welcome-text p{
          margin:0;
          color: rgba(255,255,255,0.86);
          font-weight: 600;
          font-size: 13px;
        }
        .ld-welcome-art{
          position: relative;
          flex: 0 0 auto;
        }

        /* Stats */
        .ld-stats{
          display:grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        @media (max-width: 1120px){
          .ld-stats{
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 520px){
          .ld-stats{
            grid-template-columns: 1fr;
          }
        }
        .ld-stat-card{
          background: #4a38d3;
          color:#fff;
          border-radius: 16px;
          box-shadow: 0 16px 36px rgba(17,24,39,0.12);
          padding: 16px 16px;
          display:flex;
          align-items:flex-start;
          gap: 12px;
          position: relative;
          overflow:hidden;
        }
        .ld-stat-card::after{
          content:'';
          position:absolute;
          right:-30px;
          top:-40px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          pointer-events:none;
        }
        .ld-stat-icon{
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background: rgba(17,24,39,0.35);
          display:flex;
          align-items:center;
          justify-content:center;
          flex: 0 0 auto;
          position: relative;
          z-index: 1;
        }
        .ld-stat-icon svg{
          color:#fff;
        }
        .ld-stat-meta{
          position: relative;
          z-index: 1;
          display:flex;
          flex-direction:column;
          gap: 6px;
        }
        .ld-stat-value{
          font-size: 28px;
          font-weight: 900;
          line-height: 1;
        }
        .ld-stat-title{
          font-size: 13px;
          font-weight: 700;
          opacity: 0.95;
        }

        /* Recent quizzes panel */
        .ld-recent{
          background: #4a38d3;
          border-radius: 18px;
          padding: 18px 18px 22px;
          color:#fff;
          box-shadow: 0 30px 70px rgba(30,41,59,0.22);
        }
        .ld-recent-header{
          margin-bottom: 14px;
        }
        .ld-recent-header h2{
          margin:0;
          font-size: 16px;
          font-weight: 900;
          color:#fff;
        }
        .ld-recent-header p{
          margin: 6px 0 0 0;
          font-size: 12px;
          color: rgba(255,255,255,0.78);
          font-weight: 600;
        }
        .ld-quiz-grid{
          display:grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        @media (max-width: 980px){
          .ld-quiz-grid{
            grid-template-columns: 1fr;
          }
        }

        /* Quiz cards */
        .ld-quiz-card{
          background: #111827;
          border-radius: 12px;
          padding: 16px 16px;
          box-shadow: 0 18px 34px rgba(0,0,0,0.16);
          min-height: 152px;
          display:flex;
          flex-direction:column;
          gap: 10px;
        }
        .ld-quiz-title{
          font-weight: 900;
          font-size: 14px;
          color:#fff;
          letter-spacing: 0.2px;
        }
        .ld-quiz-row{
          display:flex;
          gap: 10px;
          align-items:center;
          font-size: 12px;
          color: rgba(255,255,255,0.82);
          font-weight: 700;
        }
        .ld-quiz-row--muted{
          margin-top: -2px;
          opacity: 0.92;
        }
        .ld-quiz-chip{
          display:flex;
          align-items:center;
          gap: 8px;
          white-space:nowrap;
        }

        .ld-quiz-progress{
          margin-top:auto;
          display:flex;
          flex-direction:column;
          gap: 8px;
        }
        .ld-quiz-progress-top{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
        }
        .ld-quiz-progress-label{
          font-size: 12px;
          font-weight: 800;
          color: rgba(255,255,255,0.82);
        }
        .ld-quiz-progress-percent{
          font-size: 12px;
          font-weight: 900;
          color:#fff;
        }
        .ld-progress{
          width: 100%;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
          overflow:hidden;
        }
        .ld-progress-fill{
          height:100%;
          border-radius: 999px;
          background: #7c3aed;
        }

        /* Create quiz card */
        .ld-create-quiz{
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          border: 1px dashed rgba(255,255,255,0.35);
          padding: 18px 16px;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-direction:column;
          gap: 10px;
          min-height: 152px;
        }
        .ld-create-quiz-btn{
          width: 100%;
          border:0;
          background: transparent;
          color:#fff;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-direction:column;
          gap: 10px;
          text-align:center;
        }
        .ld-create-quiz-btn b{
          font-size: 13px;
          letter-spacing:0.2px;
        }
        .ld-create-quiz-btn span{
          font-size: 12px;
          color: rgba(255,255,255,0.78);
          font-weight: 600;
        }
        .ld-create-plus{
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(255,255,255,0.12);
          display:flex;
          align-items:center;
          justify-content:center;
        }

        /* Small tweak when sidebar stacks */
        @media (max-width: 980px){
          .ld-content{
            padding: 18px;
          }
          .ld-topbar-inner{
            padding: 0 14px;
          }
        }
      `}</style>

      <div className="ld-layout">
        <aside className="ld-sidebar">
          <div className="ld-brand">
            <img className="ld-brand-logo" src={logoTrans} alt="Quiz Hub" />
            <div className="ld-brand-text">QUIZ HUB</div>
          </div>

          <nav className="ld-nav" aria-label="Dashboard navigation">
            <div className="ld-nav-item ld-nav-item--active">
              <Icon>
                <SvgDashboard />
              </Icon>
              Dashboard
            </div>
            <div className="ld-nav-item">
              <Icon>
                <SvgPencil />
              </Icon>
              Create Quiz
            </div>
            <div className="ld-nav-item">
              <Icon>
                <SvgQuiz />
              </Icon>
              Quiz
            </div>
            <div className="ld-nav-item">
              <Icon>
                <SvgQuiz />
              </Icon>
              Management
            </div>
            <div className="ld-nav-item">
              <Icon>
                <SvgChart />
              </Icon>
              Analytics
            </div>
            <div className="ld-nav-item">
              <Icon>
                <SvgUser />
              </Icon>
              Profile
            </div>
          </nav>

          <div className="ld-sidebar-spacer" />

          <button className="ld-logout" type="button">
            <span style={{ color: "#ef4444", display: "inline-flex" }}>
              <Icon>
                <SvgLogout />
              </Icon>
            </span>
            Log Out
          </button>
        </aside>

        <div className="ld-main">
          <header className="ld-topbar">
            <div className="ld-topbar-inner">
              <div className="ld-search">
                <div className="ld-search-field">
                  <span style={{ color: "#111827", display: "inline-flex" }}>
                    <Icon>
                      <SvgSearch />
                    </Icon>
                  </span>
                  <input aria-label="Search" placeholder="Search" />
                </div>
              </div>

              <div className="ld-user">
                <div className="ld-user-name">{userName}</div>
                <div className="ld-avatar" aria-hidden="true">
                  D
                </div>
                <button className="ld-bell" type="button" aria-label="Notifications">
                  <span style={{ color: "#111827", display: "inline-flex" }}>
                    <Icon>
                      <SvgBell />
                    </Icon>
                  </span>
                </button>
              </div>
            </div>
          </header>

          <main className="ld-content">
            <section className="ld-welcome">
              <div className="ld-welcome-text">
                <h1>Welcome back, {userName}!</h1>
                <p>Lecturer Dashboard</p>
              </div>

              <div className="ld-welcome-art">
                <GraduationCapArt />
              </div>
            </section>

            <section className="ld-stats" aria-label="Summary statistics">
              <StatCard
                value={stats.totalQuizzes}
                title="Total Quizzes"
                icon={
                  <Icon>
                    <SvgQuiz />
                  </Icon>
                }
              />
              <StatCard
                value={stats.totalAttempts}
                title="Total attempts"
                icon={
                  <Icon>
                    <SvgChart />
                  </Icon>
                }
              />
              <StatCard
                value={stats.participation}
                title="Student Participation"
                icon={
                  <Icon>
                    <SvgUser />
                  </Icon>
                }
              />
              <StatCard
                value={stats.averageMarks}
                title="Average Marks"
                icon={
                  <Icon>
                    <SvgDashboard />
                  </Icon>
                }
              />
            </section>

            <section className="ld-recent" aria-label="Recent quizzes">
              <div className="ld-recent-header">
                <h2>Recent Quizzes</h2>
                <p>{loading ? "Loading..." : "Your recently created quizzes"}</p>
              </div>

              <div className="ld-quiz-grid">
                {recentQuizzes.map((q) => (
                  <QuizCard
                    key={q.title}
                    title={q.title}
                    questions={q.questions}
                    completions={q.completions}
                    completionPercent={q.completionPercent}
                  />
                ))}

                <div className="ld-create-quiz">
                  <button className="ld-create-quiz-btn" type="button">
                    <div className="ld-create-plus">
                      <Icon>
                        <SvgPlus />
                      </Icon>
                    </div>
                    <b>Create Quiz</b>
                    <span>Add questions, set time limits and more</span>
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LecturerDashboard;

