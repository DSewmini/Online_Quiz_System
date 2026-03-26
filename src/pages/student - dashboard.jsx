import React, { useState } from "react";
import logoTrans from "../assets/logo_trans.png";
import stDashboardImg from "../assets/st_dashboard_img.jpg";
import ProfilePopup from "../components/ProfilePopup";

const StudentDashboard = () => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family: "Poppins", sans-serif;
          background:#efefef;
        }

        .student-dashboard{
          min-height:100vh;
          background:#efefef;
          display:flex;
          flex-direction:column;
        }

        .topbar{
          height:88px;
          background:#ffffff;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 28px;
          border-bottom:1px solid #ececec;
        }

        .topbar-left{
          display:flex;
          align-items:center;
        }

        .topbar-logo{
          height:42px;
          width:auto;
          object-fit:contain;
        }

        .topbar-right{
          display:flex;
          align-items:center;
          gap:20px;
        }

        .search-box{
          width:180px;
          height:38px;
          border:none;
          outline:none;
          background:#f5f5f5;
          border-radius:30px;
          padding:0 18px;
          font-size:15px;
          color:#444;
          box-shadow:inset 0 1px 2px rgba(0,0,0,0.05);
        }

        .profile-circle{
          width:68px;
          height:68px;
          border-radius:50%;
          border:5px solid #6a4df0;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#fff;
          overflow:hidden;
          font-size:30px;
          cursor:pointer;
          transition:transform 0.2s ease;
        }

        .profile-circle:hover{
          transform:scale(1.05);
        }

        .dashboard-body{
          flex:1;
          display:flex;
        }

        .sidebar{
          width:210px;
          background:#5743b7;
          margin:10px 0 10px 6px;
          border-radius:16px;
          padding:26px 18px;
          color:white;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          min-height:540px;
        }

        .menu-list{
          list-style:none;
          display:flex;
          flex-direction:column;
          gap:24px;
        }

        .menu-item{
          display:flex;
          align-items:center;
          gap:12px;
          font-size:18px;
          font-weight:500;
          color:#d7cdfd;
          cursor:pointer;
        }

        .menu-item.active{
          color:#ffffff;
          font-weight:700;
        }

        .menu-icon{
          width:18px;
          text-align:center;
          font-size:16px;
        }

        .user-card{
          background:rgba(255,255,255,0.18);
          border-radius:18px;
          padding:20px 14px;
          text-align:center;
          margin-top:30px;
        }

        .user-name{
          color:#ffffff;
          font-size:20px;
          font-weight:500;
          margin-bottom:6px;
        }

        .user-email{
          color:#f3ecff;
          font-size:14px;
          margin-bottom:16px;
          word-break:break-word;
        }

        .logout-btn{
          border:none;
          background:#4635b0;
          color:white;
          border-radius:30px;
          padding:12px 26px;
          font-size:15px;
          font-weight:700;
          cursor:pointer;
        }

        .main-content{
          flex:1;
          padding:18px 24px 10px 24px;
        }

        .welcome{
          font-size:22px;
          font-weight:500;
          color:#1d2b43;
          margin:4px 0 18px 0;
        }

        .welcome strong{
          font-weight:800;
        }

        .stats-row{
          display:flex;
          gap:24px;
          flex-wrap:wrap;
          margin-bottom:24px;
        }

        .stat-card{
          min-width:210px;
          height:68px;
          border-radius:16px;
          padding:14px 18px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          box-shadow:0 4px 10px rgba(0,0,0,0.06);
        }

        .stat-card.small{
          width:220px;
        }

        .stat-card.large{
          width:320px;
        }

        .pink{
          background:#f4bcc5;
        }

        .blue{
          background:#bfc4ff;
        }

        .lavender{
          background:#b8b9f4;
        }

        .stat-title{
          font-size:16px;
          color:#111;
          line-height:1.05;
        }

        .stat-value{
          font-size:34px;
          font-weight:800;
          color:#000;
        }

        .panel{
          background:#ffffff;
          border-radius:22px;
          padding:18px 20px 22px;
          box-shadow:0 4px 10px rgba(0,0,0,0.14);
          margin-bottom:22px;
        }

        .panel-title{
          font-size:18px;
          font-weight:700;
          color:#111;
          margin-bottom:14px;
        }

        .quiz-row{
          min-height:58px;
          border:2px solid #b88cff;
          border-radius:20px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 20px;
          margin-bottom:12px;
          gap:14px;
        }

        .quiz-name{
          color:#8857ea;
          font-size:17px;
          font-weight:500;
        }

        .quiz-middle{
          color:#ad8df5;
          font-size:28px;
          min-width:50px;
          text-align:center;
        }

        .quiz-btn{
          border:none;
          background:#8e58ef;
          color:#fff;
          font-size:16px;
          font-weight:700;
          padding:10px 28px;
          border-radius:14px;
          cursor:pointer;
          min-width:106px;
        }

        .performance-box{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:24px;
          min-height:140px;
        }

        .performance-left{
          width:220px;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .performance-img{
          width:100%;
          height:100%;
          object-fit:contain;
        }

        .chart-area{
          flex:1;
          height:150px;
          position:relative;
          padding:12px 8px 24px;
        }

        .chart-svg{
          width:100%;
          height:100%;
        }

        .chart-img{
          width:100%;
          height:100%;
          object-fit:contain;
        }

        .months{
          display:flex;
          justify-content:space-between;
          color:#9a73f0;
          font-size:11px;
          margin-top:6px;
          padding:0 8px;
        }

        .footer{
          background:#4326ab;
          color:#fff;
          padding:18px 30px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          font-size:16px;
          margin-top:auto;
        }

        @media (max-width: 1100px){
          .dashboard-body{
            flex-direction:column;
          }

          .sidebar{
            width:calc(100% - 20px);
            margin:10px;
            min-height:auto;
          }

          .main-content{
            padding:10px;
          }

          .performance-box{
            flex-direction:column;
            align-items:flex-start;
          }

          .performance-left{
            width:100%;
            justify-content:flex-start;
          }

          .footer{
            flex-direction:column;
            gap:8px;
            text-align:center;
          }
        }

        @media (max-width: 768px){
          .topbar{
            padding:0 14px;
          }

          .topbar-right{
            gap:10px;
          }

          .search-box{
            width:130px;
          }

          .stats-row{
            flex-direction:column;
          }

          .stat-card.small,
          .stat-card.large{
            width:100%;
          }

          .quiz-row{
            flex-direction:column;
            align-items:flex-start;
            padding:16px;
          }

          .quiz-middle{
            min-width:auto;
          }

          .quiz-btn{
            width:100%;
          }

          .footer{
            font-size:14px;
          }
        }
      `}</style>

      <div className="student-dashboard">
        <header className="topbar">
          <div className="topbar-left">
            <img className="topbar-logo" src={logoTrans} alt="Quiz Hub logo" />
          </div>

          <div className="topbar-right">
            <input className="search-box" type="text" placeholder="Search" />
            <div className="profile-circle" onClick={() => setShowProfilePopup(true)}>👩</div>
          </div>
        </header>

        <div className="dashboard-body">
          <aside className="sidebar">
            <div>
              <ul className="menu-list">
                <li className="menu-item active">
                  <span className="menu-icon">📊</span>
                  <span>Dashboard</span>
                </li>
                <li className="menu-item">
                  <span className="menu-icon">📝</span>
                  <span>My Quizzes</span>
                </li>
                <li className="menu-item">
                  <span className="menu-icon">➖</span>
                  <span>Results</span>
                </li>
                <li className="menu-item">
                  <span className="menu-icon">🏆</span>
                  <span>Leader-Board</span>
                </li>
                <li className="menu-item">
                  <span className="menu-icon">🗓️</span>
                  <span>Schedule</span>
                </li>
                <li className="menu-item">
                  <span className="menu-icon">💬</span>
                  <span>Notice</span>
                </li>
                <li className="menu-item">
                  <span className="menu-icon">🔔</span>
                  <span>Notification</span>
                </li>
                <li className="menu-item">
                  <span className="menu-icon">⚙️</span>
                  <span>Settings</span>
                </li>
              </ul>
            </div>

            <div className="user-card">
              <div className="user-name">UserName</div>
              <div className="user-email">student@gmail.com</div>
              <button className="logout-btn">LOG OUT</button>
            </div>
          </aside>

          <main className="main-content">
            <h2 className="welcome">
              👋 Welcome Back, <strong>John!</strong>
            </h2>

            <div className="stats-row">
              <div className="stat-card small pink">
                <div className="stat-title">
                  Available
                  <br />
                  Quizzes
                </div>
                <div className="stat-value">3</div>
              </div>

              <div className="stat-card small blue">
                <div className="stat-title">
                  Completed
                  <br />
                  Quizzes
                </div>
                <div className="stat-value">6</div>
              </div>

              <div className="stat-card large lavender">
                <div className="stat-title">
                  Average
                  <br />
                  Score
                </div>
                <div className="stat-value">78%</div>
              </div>
            </div>

            <section className="panel">
              <h3 className="panel-title">Recent Quizzes</h3>

              <div className="quiz-row">
                <div className="quiz-name">Object oriented programming</div>
                <div className="quiz-middle">🖥️</div>
                <button className="quiz-btn">Continue</button>
              </div>

              <div className="quiz-row">
                <div className="quiz-name">Fundamentals of database systems</div>
                <div className="quiz-middle">📊</div>
                <button className="quiz-btn">View</button>
              </div>
            </section>

            <section className="panel">
              <h3 className="panel-title">Overview performance</h3>

              <div className="performance-box">
                <div className="performance-left">
                  <img 
                    className="performance-img" 
                    src={stDashboardImg} 
                    alt="Performance Chart" 
                  />
                </div>

                <div className="chart-area">
                  <svg
                    className="chart-svg"
                    viewBox="0 0 600 150"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      fill="none"
                      stroke="#9f7cff"
                      strokeWidth="3"
                      points="0,90 45,70 90,110 135,100 180,95 225,60 270,65 315,20 360,25 405,5 450,45 495,30 540,60 600,28"
                    />
                    <polyline
                      fill="none"
                      stroke="#7f83ff"
                      strokeDasharray="5,5"
                      strokeWidth="2.5"
                      points="0,100 45,55 90,50 135,60 180,45 225,35 270,105 315,108 360,110 405,70 450,82 495,40 540,35 600,5"
                    />
                  </svg>

                  <div className="months">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <footer className="footer">
          <div>Contact: quiizhub@gmail.com</div>
          <div>© 2026 Quiz Hub. All rights reserved.</div>
        </footer>
      </div>

      {showProfilePopup && <ProfilePopup onClose={() => setShowProfilePopup(false)} />}
    </>
  );
};

export default StudentDashboard;
