import React from "react";
import logoTrans from "../assets/logo_trans.png";
import heroImageSrc from "../assets/homeimg.png";

const HomePage = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "Poppins", sans-serif;
          background: #f4f4f4;
        }

        .home-page {
          width: 100%;
          min-height: 100vh;
          background: #f1f1f1;
          color: #111;
        }

        .shell {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* NAVBAR */
        .top-nav {
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #ececec;
        }

        .top-nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 72px;
        }

        .brand-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .menu {
          display: flex;
          align-items: center;
          gap: 34px;
          list-style: none;
          font-size: 13px;
          font-weight: 600;
          color: #111;
        }

        .menu li {
          cursor: pointer;
          transition: 0.2s ease;
        }

        .menu li:hover {
          color: #4338ca;
        }

        /* HERO */
        .hero {
          background: #ededed;
          padding: 10px 0 0;
        }

        .hero-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 500px;
        }

        .hero-left {
          flex: 1;
          max-width: 48%;
        }

        .title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 4vw, 62px);
          font-weight: 700;
          line-height: 1.15;
          color: #000;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .title-accent {
          display: block;
          margin-top: 6px;
          background: linear-gradient(90deg, #4730b8 0%, #8ab8ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .hero-text {
          max-width: 430px;
          font-size: 16px;
          line-height: 1.6;
          color: #222;
          margin-bottom: 40px;
        }

        .login-btn {
          border: none;
          background: #3f43cc;
          color: white;
          padding: 14px 34px;
          border-radius: 999px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(63, 67, 204, 0.2);
          transition: 0.2s ease;
        }

        .login-btn:hover {
          transform: translateY(-2px);
        }

        .hero-right {
          flex: 1;
          max-width: 48%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          min-height: 420px;
          position: relative;
          overflow: hidden;
          border-top-left-radius: 140px;
          border-bottom-left-radius: 40px;
          background: radial-gradient(circle at top right, #d7e7ff 0%, #93b9ea 45%, #5f95db 100%);
        }

        .hero-right img {
          width: 100%;
          max-width: 470px;
          height: auto;
          object-fit: contain;
          display: block;
        }

        /* STATS */
        .stats {
          background: #ffffff;
          padding: 34px 0;
        }

        .stats-inner {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 100px;
          text-align: center;
        }

        .stat-item h2 {
          font-size: 34px;
          font-weight: 700;
          color: #4a38d3;
          margin-bottom: 6px;
        }

        .stat-item p {
          font-size: 18px;
          color: #222;
        }

        /* BANNER */
        .brand-banner {
          background: linear-gradient(90deg, #48c0e8 0%, #7ab0ff 100%);
          padding: 22px 0;
        }

        .brand-banner-inner {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .brand-banner-logo {
          width: 100%;
          max-width: 360px;
          display: block;
          object-fit: contain;
        }

        /* FOOTER */
        .footer {
          background: #4026a8;
          color: #fff;
          font-size: 14px;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column;
            padding: 30px 0 40px;
            min-height: auto;
          }

          .hero-left,
          .hero-right {
            max-width: 100%;
            width: 100%;
          }

          .hero-left {
            text-align: center;
          }

          .hero-text {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-right {
            min-height: 300px;
            border-radius: 30px;
            align-items: center;
          }

          .stats-inner {
            flex-direction: column;
            gap: 28px;
          }

          .footer-inner {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }

          .menu {
            gap: 18px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="home-page">
        <nav className="top-nav">
          <div className="shell top-nav-inner">
            <img className="brand-logo" src={logoTrans} alt="Quiz Hub logo" />

            <ul className="menu">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>LOGIN</li>
            </ul>
          </div>
        </nav>

        <section className="hero">
          <div className="shell hero-inner">
            <div className="hero-left">
              <h1 className="title">
                TEST YOUR KNOWLEDGE,
                <span className="title-accent">ANYTIME, ANYWHERE</span>
              </h1>

              <p className="hero-text">
                Join QUIZ HUB and challenge yourself with interactive quizzes,
                instant results, and detailed performance analytics.
              </p>

              <button className="login-btn" type="button">
                Login
              </button>
            </div>

            <div className="hero-right">
              <img src={heroImageSrc} alt="Quiz illustration" />
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="shell stats-inner">
            <div className="stat-item">
              <h2>1200+</h2>
              <p>Active Users</p>
            </div>

            <div className="stat-item">
              <h2>500+</h2>
              <p>Quizzes Available</p>
            </div>
          </div>
        </section>

        <section className="brand-banner">
          <div className="shell brand-banner-inner">
            <img className="brand-banner-logo" src={logoTrans} alt="Quiz Hub" />
          </div>
        </section>

        <footer className="footer">
          <div className="shell footer-inner">
            <p>Contact: quizhub@gmail.com</p>
            <p>© 2026 Quiz Hub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;