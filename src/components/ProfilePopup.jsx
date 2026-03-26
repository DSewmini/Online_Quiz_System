import React from "react";

const ProfilePopup = ({ onClose }) => {
  return (
    <>
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-content {
          background: white;
          border-radius: 24px;
          padding: 32px;
          width: 380px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .popup-profile-container {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
        }

        .popup-profile-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 6px solid #6a4df0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          overflow: hidden;
          font-size: 48px;
          margin: 0 auto;
        }

        .progress-ring {
          position: absolute;
          top: -8px;
          left: -8px;
          width: 116px;
          height: 116px;
          transform: rotate(-90deg);
        }

        .progress-ring-circle {
          stroke: #e0e0e0;
          stroke-width: 4;
          fill: transparent;
        }

        .progress-ring-progress {
          stroke: #4CAF50;
          stroke-width: 4;
          fill: transparent;
          stroke-linecap: round;
          stroke-dasharray: 339.292;
          stroke-dashoffset: 84.823;
          transition: stroke-dashoffset 0.35s;
        }

        .popup-user-name {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
        }

        .popup-user-email {
          font-size: 16px;
          color: #666;
          margin-bottom: 6px;
        }

        .popup-user-department {
          font-size: 16px;
          color: #666;
          margin-bottom: 24px;
        }

        .popup-logout-btn {
          background: #ff4757;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: background 0.2s ease;
        }

        .popup-logout-btn:hover {
          background: #ff3838;
        }
      `}</style>

      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <div className="popup-profile-container">
            <svg className="progress-ring" width="116" height="116">
              <circle
                className="progress-ring-circle"
                cx="58"
                cy="58"
                r="54"
              />
              <circle
                className="progress-ring-progress"
                cx="58"
                cy="58"
                r="54"
              />
            </svg>
            <div className="popup-profile-circle">👩</div>
          </div>

          <div className="popup-user-name">UserName</div>
          <div className="popup-user-email">student@gmail.com</div>
          <div className="popup-user-department">Information Technology</div>

          <button className="popup-logout-btn">LOG OUT</button>
        </div>
      </div>
    </>
  );
};

export default ProfilePopup;
