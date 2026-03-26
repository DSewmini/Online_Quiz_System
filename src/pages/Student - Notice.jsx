import React, { useState } from "react";
import logoTrans from "../assets/logo_trans.png";

function StudentNotice() {
  const [assignments] = useState([
    {
      id: 1,
      title: "Object Oriented Programming",
      description:
        "Object Oriented Programming 2nd Assignment will be scheduled on 25th March according to OOP concepts.",
      status: "NOTIFIED",
    },
    {
      id: 2,
      title: "Mobile Computing",
      description:
        "Mobile Computing 1st Assignment will be scheduled on 27th March according to Android Developer Guide.",
      status: "NOTIFIED",
    },
  ]);

  return (
    <div className="sn-root">
      <style>{`
        .sn-root {
          font-family: "Poppins", sans-serif;
          background: #f4f4ff;
          min-height: 100vh;
        }

        .sn-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
        }

        /* Sidebar */
        .sn-sidebar {
          background: linear-gradient(180deg, #5843d6, #3f2db8);
          color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .sn-logo {
          width: 140px;
          margin-bottom: 30px;
        }

        .sn-menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sn-menu div {
          padding: 12px;
          border-radius: 12px;
          cursor: pointer;
          opacity: 0.9;
        }

        .sn-menu div:hover {
          background: rgba(255,255,255,0.1);
        }

        .sn-menu .active {
          background: rgba(255,255,255,0.2);
          font-weight: bold;
        }

        .sn-user {
          margin-top: auto;
          background: rgba(255,255,255,0.1);
          padding: 15px;
          border-radius: 12px;
        }

        .sn-user button {
          margin-top: 10px;
          padding: 8px;
          width: 100%;
          border-radius: 10px;
          border: none;
          background: white;
          color: #5b3cc4;
          font-weight: bold;
        }

        /* Main */
        .sn-main {
          padding: 30px;
        }

        .sn-topbar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sn-topbar input {
          padding: 10px 15px;
          border-radius: 20px;
          border: none;
          width: 300px;
          background: #eee;
        }

        .sn-content {
          display: flex;
          gap: 30px;
        }

        /* Categories */
        .sn-categories {
          width: 220px;
          background: white;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .sn-categories ul {
          padding: 0;
        }

        .sn-categories li {
          list-style: none;
          padding: 8px;
        }

        .sn-categories .active {
          color: #5b3cc4;
          font-weight: bold;
        }

        /* Cards */
        .sn-cards {
          flex: 1;
        }

        .sn-card {
          background: white;
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .sn-card-inner {
          background: #eaeaea;
          padding: 15px;
          border-radius: 10px;
          margin-top: 10px;
        }

        .sn-card-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }

        .sn-btn {
          background: #5b3cc4;
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: bold;
        }

        /* Footer */
        .sn-footer {
          margin-top: 30px;
          background: #5b3cc4;
          color: white;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          border-radius: 10px;
        }
      `}</style>

      <div className="sn-layout">
        {/* Sidebar */}
        <div className="sn-sidebar">
          <img src={logoTrans} alt="Quiz Hub Logo" className="sn-logo" />

          <div className="sn-menu">
            <div>Dashboard</div>
            <div>My Quizzes</div>
            <div>Results</div>
            <div>Leader-Board</div>
            <div>Schedule</div>
            <div className="active">Notice</div>
            <div>Notification</div>
            <div>Settings</div>
          </div>

          <div className="sn-user">
            <p>UserName</p>
            <p>student@gmail.com</p>
            <button>LOG OUT</button>
          </div>
        </div>

        {/* Main */}
        <div className="sn-main">
          <div className="sn-topbar">
            <input placeholder="Search" />
            <div>👤</div>
          </div>

          <div className="sn-content">
            {/* Categories */}
            <div className="sn-categories">
              <h3>Categories</h3>
              <ul>
                <li className="active">Assignments</li>
                <li>Activities</li>
                <li>Exams</li>
                <li>Practice</li>
              </ul>
            </div>

            {/* Cards */}
            <div className="sn-cards">
              <h2>Assignments</h2>

              {assignments.map((a) => (
                <div className="sn-card" key={a.id}>
                  <h3>Assignment – {a.title}</h3>

                  <div className="sn-card-inner">
                    <p>{a.description}</p>
                  </div>

                  <div className="sn-card-footer">
                    <button className="sn-btn">{a.status}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="sn-footer">
            <p>Contact: quizhub@gmail.com</p>
            <p>© 2026 Quiz Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentNotice;