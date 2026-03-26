import { useState } from "react";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
    <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
  </svg>
);

const PhoneIllustration = () => (
  <svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 420 }}>
    {/* Background circle */}
    <ellipse cx="210" cy="300" rx="180" ry="160" fill="#e8eaf6" opacity="0.6" />
    <ellipse cx="150" cy="320" rx="100" ry="80" fill="#c5cae9" opacity="0.3" />

    {/* Plants left */}
    <g transform="translate(30, 290)">
      <rect x="18" y="80" width="14" height="30" rx="4" fill="#5c6bc0" />
      <rect x="15" y="100" width="20" height="12" rx="3" fill="#3949ab" />
      {[0,1,2,3,4].map(i => (
        <ellipse key={i} cx={25 + Math.sin(i*1.2)*18} cy={80 - i*16} rx="14" ry="10"
          fill={i%2===0?"#7986cb":"#5c6bc0"} transform={`rotate(${i*30-20},${25 + Math.sin(i*1.2)*18},${80 - i*16})`}/>
      ))}
    </g>

    {/* Plants right */}
    <g transform="translate(330, 300)">
      <rect x="18" y="70" width="12" height="28" rx="4" fill="#5c6bc0" />
      <rect x="14" y="88" width="20" height="12" rx="3" fill="#3949ab" />
      {[0,1,2,3].map(i => (
        <ellipse key={i} cx={24 + Math.cos(i*1.4)*14} cy={70 - i*18} rx="12" ry="9"
          fill={i%2===0?"#7986cb":"#5c6bc0"} transform={`rotate(${i*25+10},${24 + Math.cos(i*1.4)*14},${70 - i*18})`}/>
      ))}
    </g>

    {/* Ground */}
    <rect x="40" y="400" width="340" height="8" rx="4" fill="#9fa8da" opacity="0.5" />

    {/* Phone body */}
    <rect x="130" y="80" width="160" height="310" rx="22" fill="#1a237e" />
    <rect x="138" y="90" width="144" height="290" rx="16" fill="#fdd835" />

    {/* Phone notch */}
    <rect x="185" y="85" width="50" height="10" rx="5" fill="#0d1b6e" />

    {/* Screen content - login form */}
    <rect x="150" y="160" width="120" height="18" rx="6" fill="white" opacity="0.9" />
    <text x="210" y="173" textAnchor="middle" fontSize="9" fill="#9e9e9e" fontFamily="sans-serif">username</text>

    <rect x="150" y="188" width="120" height="18" rx="6" fill="white" opacity="0.9" />
    <text x="210" y="201" textAnchor="middle" fontSize="9" fill="#9e9e9e" fontFamily="sans-serif">password</text>

    <rect x="162" y="216" width="96" height="22" rx="11" fill="#3949ab" />
    <text x="210" y="231" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="bold">LOGIN</text>

    {/* Avatar on phone */}
    <circle cx="210" cy="128" r="22" fill="#7986cb" />
    <circle cx="210" cy="120" r="10" fill="#e8eaf6" />
    <ellipse cx="210" cy="142" rx="14" ry="8" fill="#e8eaf6" />

    {/* Lock badge */}
    <circle cx="300" cy="120" r="24" fill="#f48fb1" />
    <rect x="292" y="115" width="16" height="14" rx="3" fill="white" />
    <path d="M296 115 Q296 108 304 108 Q312 108 312 115" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="300" cy="122" r="3" fill="#f48fb1" />

    {/* Person Left */}
    <g transform="translate(65, 180)">
      {/* body */}
      <rect x="10" y="60" width="36" height="50" rx="8" fill="#5c6bc0" />
      {/* head */}
      <circle cx="28" cy="48" r="18" fill="#ffcc80" />
      {/* hair */}
      <ellipse cx="28" cy="34" rx="18" ry="10" fill="#4a148c" />
      {/* legs */}
      <rect x="14" y="108" width="12" height="36" rx="6" fill="#3949ab" />
      <rect x="30" y="108" width="12" height="36" rx="6" fill="#3949ab" />
      {/* arm pointing */}
      <rect x="44" y="70" width="30" height="10" rx="5" fill="#5c6bc0" transform="rotate(-15, 44, 75)" />
    </g>

    {/* Person Right */}
    <g transform="translate(280, 185)">
      {/* body */}
      <rect x="10" y="55" width="34" height="48" rx="8" fill="#7986cb" />
      {/* head */}
      <circle cx="27" cy="44" r="17" fill="#ffcc80" />
      {/* hair */}
      <ellipse cx="27" cy="31" rx="18" ry="12" fill="#212121" />
      <ellipse cx="27" cy="37" rx="8" ry="16" fill="#212121" />
      {/* legs */}
      <rect x="13" y="101" width="11" height="34" rx="5" fill="#5c6bc0" />
      <rect x="28" y="101" width="11" height="34" rx="5" fill="#5c6bc0" />
      {/* arm */}
      <rect x="-10" y="65" width="22" height="10" rx="5" fill="#7986cb" transform="rotate(10,-10,70)" />
    </g>

    {/* Cloud */}
    <g transform="translate(60, 100)">
      <ellipse cx="40" cy="30" rx="30" ry="20" fill="white" opacity="0.9"/>
      <ellipse cx="65" cy="35" rx="22" ry="16" fill="white" opacity="0.9"/>
      <ellipse cx="20" cy="35" rx="20" ry="14" fill="white" opacity="0.9"/>
    </g>
  </svg>
);

export default function QuizHubLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "white",
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: 70,
        borderBottom: "1px solid #e0e0e0",
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        {/* Logo */}
        <div style={{
          background: "#3949ab",
          borderRadius: 10,
          padding: "6px 14px",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}>
          <span style={{
            color: "white",
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: 1,
          }}>QUIZ HUB</span>
          <div style={{ display: "flex", gap: 3, marginTop: 2 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: 3, background: "white", opacity: 0.8 }} />
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: 36 }}>
          {["HOME", "ABOUT"].map(link => (
            <a key={link} href="#" style={{
              textDecoration: "none",
              color: "#1a237e",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 1,
              borderBottom: link === "HOME" ? "2px solid #3949ab" : "none",
              paddingBottom: 2,
            }}>{link}</a>
          ))}
        </div>
      </nav>

      {/* Progress bar hint */}
      <div style={{ height: 3, background: "#e8eaf6" }}>
        <div style={{ width: "40%", height: "100%", background: "#3949ab" }} />
      </div>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        gap: 60,
      }}>
        {/* Illustration */}
        <div style={{ flex: 1, maxWidth: 440, display: "flex", justifyContent: "center" }}>
          <PhoneIllustration />
        </div>

        {/* Login Card */}
        <div style={{
          width: 380,
          background: "#f5f5f5",
          borderRadius: 16,
          padding: "40px 36px",
          boxShadow: "0 4px 24px rgba(57,73,171,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
        }}>
          <div style={{ textAlign: "center", marginBottom: 4 }}>
            <p style={{ margin: 0, color: "#555", fontSize: 14, fontWeight: 500 }}>WELCOME TO</p>
            <h1 style={{
              margin: "4px 0 0",
              color: "#3949ab",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: 2,
            }}>QUIZ HUB</h1>
          </div>

          {/* Google Login */}
          <button style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "11px 20px",
            borderRadius: 50,
            border: "1.5px solid #e0e0e0",
            background: "white",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
            color: "#333",
            transition: "box-shadow 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
          >
            <GoogleIcon />
            Login with Google
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", width: "100%", gap: 12 }}>
            <div style={{ flex: 1, height: 1, background: "#ccc" }} />
            <span style={{ color: "#999", fontSize: 12 }}>OR</span>
            <div style={{ flex: 1, height: 1, background: "#ccc" }} />
          </div>

          {/* Username */}
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 18px",
              borderRadius: 50,
              border: "1.5px solid #e0e0e0",
              background: "white",
              fontSize: 14,
              color: "#333",
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = "#3949ab"}
            onBlur={e => e.target.style.borderColor = "#e0e0e0"}
          />

          {/* Password */}
          <div style={{ width: "100%", position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 44px 12px 18px",
                borderRadius: 50,
                border: "1.5px solid #e0e0e0",
                background: "white",
                fontSize: 14,
                color: "#333",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "#3949ab"}
              onBlur={e => e.target.style.borderColor = "#e0e0e0"}
            />
            <button
              onClick={() => setShowPassword(v => !v)}
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#888",
                padding: 0,
                fontSize: 18,
                lineHeight: 1,
              }}
              aria-label="Toggle password"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          {/* Remember & Forgot */}
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 13, color: "#555" }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                style={{ accentColor: "#3949ab", width: 15, height: 15 }}
              />
              Remember me
            </label>
            <a href="#" style={{ fontSize: 13, color: "#3949ab", textDecoration: "none", fontWeight: 500 }}>
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button style={{
            width: "100%",
            padding: "13px",
            borderRadius: 50,
            border: "none",
            background: "#2d3699",
            color: "white",
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: 2,
            cursor: "pointer",
            transition: "background 0.2s, transform 0.1s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#3949ab"}
            onMouseLeave={e => e.currentTarget.style.background = "#2d3699"}
            onMouseDown={e => e.currentTarget.style.transform = "scale(0.98)"}
            onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
          >
            LOGIN
          </button>

          {/* Register */}
          <p style={{ margin: 0, fontSize: 13, color: "#555" }}>
            Don't have an account?{" "}
            <a href="#" style={{ color: "#3949ab", fontWeight: 600, textDecoration: "none" }}>Register</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: "#2d3699",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 48px",
        fontSize: 13,
      }}>
        <span>Contact: quiizhub@gmail.com</span>
        <span>© 2026 Quiz Hub. All rights reserved.</span>
      </footer>
    </div>
  );
}