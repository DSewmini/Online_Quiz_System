import React from "react";
import logoTrans from "../assets/logo_trans.png";
import {
  LayoutDashboard,
  FilePlus2,
  Share2,
  Layers3,
  UserCircle,
  LogOut,
  Search,
  Plus,
  BookCopy,
  CalendarDays,
  Users,
  BarChart3,
  Bell,
} from "lucide-react";

const recentCompletions = [
  {
    student: "Alex Johnson",
    score: "85%",
    timeSpent: "15:24",
    completed: "2 hours ago",
  },
  {
    student: "Emma Wilson",
    score: "92%",
    timeSpent: "18:24",
    completed: "2 hours ago",
  },
  {
    student: "Michael Cohen",
    score: "92%",
    timeSpent: "18:24",
    completed: "2 hours ago",
  },
  {
    student: "Sophia Garcia",
    score: "92%",
    timeSpent: "18:24",
    completed: "2 hours ago",
  },
];

export default function LecturerAnalytics() {
  return (
    <div style={styles.page}>
      {/* Top Header */}
      <div style={styles.topHeader}>
        <div style={styles.topHeaderLeft}>
          <img src={logoTrans} alt="Quiz Hub" style={styles.topLogo} />
        </div>

        <div style={styles.topHeaderCenter}>
          <div style={styles.searchBox}>
            <Search size={14} color="#7a7a7a" />
            <input
              type="text"
              placeholder="Search"
              style={styles.searchInput}
            />
          </div>
        </div>

        <div style={styles.topHeaderRight}>
          <div style={styles.profileBox}>
            <img
              src="https://i.pravatar.cc/40?img=68"
              alt="profile"
              style={styles.avatar}
            />
            <span style={styles.profileName}>Devendra Ranasinghe</span>
          </div>
          <Bell size={16} color="#111" />
        </div>
      </div>

      {/* Body */}
      <div style={styles.bodyArea}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.menu}>
            <div style={styles.menuItem}>
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>

            <div style={styles.menuItem}>
              <FilePlus2 size={18} />
              <span>Create Quiz</span>
            </div>

            <div style={styles.menuItem}>
              <Share2 size={18} />
              <span>Quiz Management</span>
            </div>

            <div style={{ ...styles.menuItem, ...styles.activeMenuItem }}>
              <Layers3 size={18} />
              <span style={styles.activeText}>Analytics</span>
            </div>

            <div style={styles.menuItem}>
              <UserCircle size={18} />
              <span>Profile</span>
            </div>
          </div>

          <button style={styles.logoutBtn}>
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </aside>

        {/* Main */}
        <div style={styles.main}>
          {/* Hero */}
          <div style={styles.hero}>
            <div>
              <h1 style={styles.title}>Analytics</h1>
              <p style={styles.subtitle}>Introduction to React</p>
            </div>

            <button style={styles.createBtn}>
              <Plus size={14} />
              <span>Create New Quiz</span>
            </button>
          </div>

          {/* Content */}
          <div style={styles.content}>
            {/* Stats */}
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div>
                  <p style={styles.statLabel}>Total Completions</p>
                  <h2 style={styles.statValue}>28</h2>
                </div>
                <div style={{ ...styles.iconCircle, backgroundColor: "#241248" }}>
                  <BookCopy size={16} />
                </div>
              </div>

              <div style={styles.statCard}>
                <div>
                  <p style={styles.statLabel}>Completion Time</p>
                  <h2 style={styles.statValue}>12:45</h2>
                </div>
                <div style={{ ...styles.iconCircle, backgroundColor: "#0c9a49" }}>
                  <CalendarDays size={16} />
                </div>
              </div>

              <div style={styles.statCard}>
                <div>
                  <p style={styles.statLabel}>Average Score</p>
                  <h2 style={styles.statValue}>78.5%</h2>
                </div>
                <div style={{ ...styles.iconCircle, backgroundColor: "#0a4fa8" }}>
                  <Users size={16} />
                </div>
              </div>

              <div style={styles.statCard}>
                <div>
                  <p style={styles.statLabel}>Top Score</p>
                  <h2 style={styles.statValue}>95%</h2>
                </div>
                <div style={{ ...styles.iconCircle, backgroundColor: "#b36a00" }}>
                  <BarChart3 size={16} />
                </div>
              </div>
            </div>

            {/* Table Card */}
            <div style={styles.bottomArea}>
              <div style={styles.tableCard}>
                <div style={styles.tableHeader}>
                  <div>
                    <h3 style={styles.cardTitle}>Recent Completions</h3>
                    <p style={styles.cardSubtitle}>
                      Students who recently completed this quiz
                    </p>
                  </div>

                  <button style={styles.darkBtn}>View All Results</button>
                </div>

                <div style={styles.tableWrap}>
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Student</th>
                        <th style={styles.th}>Score</th>
                        <th style={styles.th}>Time Spent</th>
                        <th style={styles.th}>Completed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentCompletions.map((item, index) => (
                        <tr key={index}>
                          <td style={styles.td}>{item.student}</td>
                          <td style={styles.td}>{item.score}</td>
                          <td style={styles.td}>{item.timeSpent}</td>
                          <td style={styles.td}>{item.completed}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={styles.shareWrap}>
                <button style={styles.shareBtn}>
                  <Share2 size={14} />
                  <span>Share results</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <span>Contact: quiiizhub@gmail.com</span>
        <span>© 2026 Quiz Hub. All rights reserved.</span>
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#f5f5f7",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    flexDirection: "column",
  },

  topHeader: {
    width: "100%",
    height: "54px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e9e9e9",
    display: "grid",
    gridTemplateColumns: "220px 1fr 290px",
    alignItems: "center",
    padding: "0 16px",
    boxSizing: "border-box",
  },

  topHeaderLeft: {
    display: "flex",
    alignItems: "center",
  },

  topLogo: {
    width: "95px",
    objectFit: "contain",
  },

  topHeaderCenter: {
    display: "flex",
    justifyContent: "center",
  },

  topHeaderRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "16px",
  },

  searchBox: {
    width: "250px",
    height: "30px",
    border: "1px solid #cfcfcf",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0 12px",
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
  },

  searchInput: {
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "12px",
    color: "#555",
    textAlign: "left",
  },

  profileBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #8c52ff",
  },

  profileName: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#111",
  },

  bodyArea: {
    display: "flex",
    flex: 1,
  },

  sidebar: {
    width: "220px",
    background: "linear-gradient(180deg, #5d49ba 0%, #6f66e1 100%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "34px 18px 24px",
    boxSizing: "border-box",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "flex-start",
    width: "100%",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "12px",
    padding: "8px 10px",
    fontSize: "15px",
    color: "#f5f5f5",
    cursor: "pointer",
    borderRadius: "10px",
    width: "100%",
    textAlign: "left",
  },

  activeMenuItem: {
    backgroundColor: "transparent",
  },

  activeText: {
    fontWeight: "700",
    color: "#ffffff",
  },

  logoutBtn: {
    border: "none",
    backgroundColor: "#f5f5f7",
    color: "#ff3b30",
    padding: "10px 14px",
    borderRadius: "8px",
    fontWeight: "500",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "8px",
    cursor: "pointer",
    width: "128px",
    paddingLeft: "18px",
    marginLeft: "10px",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f7f7f8",
  },

  hero: {
    width: "100%",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 20px 14px",
    boxSizing: "border-box",
  },

  title: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111",
    margin: "0",
    textAlign: "left",
  },

  subtitle: {
    fontSize: "13px",
    color: "#444",
    margin: "6px 0 0 0",
    textAlign: "left",
  },

  createBtn: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "9px 14px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "11px",
    fontWeight: "600",
    cursor: "pointer",
  },

  content: {
    flex: 1,
    padding: "18px 18px 18px 18px",
    boxSizing: "border-box",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
    marginBottom: "38px",
  },

  statCard: {
    backgroundColor: "#6558a8",
    color: "#fff",
    borderRadius: "8px",
    minHeight: "68px",
    padding: "14px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
  },

  statLabel: {
    fontSize: "11px",
    color: "#eee7ff",
    marginBottom: "8px",
  },

  statValue: {
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
    lineHeight: 1.1,
  },

  iconCircle: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  bottomArea: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  tableCard: {
    width: "58%",
    backgroundColor: "#6558a8",
    color: "#fff",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.14)",
  },

  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "14px",
  },

  cardTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    margin: "0",
    textAlign: "left",
  },

  cardSubtitle: {
    fontSize: "10px",
    color: "#eae4ff",
    margin: "6px 0 0 0",
    textAlign: "left",
  },

  darkBtn: {
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 12px",
    fontSize: "10px",
    fontWeight: "600",
    cursor: "pointer",
  },

  tableWrap: {
    backgroundColor: "#111",
    borderRadius: "6px",
    padding: "8px 10px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    color: "#fff",
    fontSize: "10px",
    fontWeight: "600",
    textAlign: "left",
    padding: "8px 6px",
    borderBottom: "1px solid #2c2c2c",
  },

  td: {
    color: "#f2f2f2",
    fontSize: "10px",
    padding: "8px 6px",
    textAlign: "left",
  },

  shareWrap: {
    display: "flex",
    justifyContent: "flex-end",
  },

  shareBtn: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "11px",
    fontWeight: "600",
    cursor: "pointer",
  },

  footer: {
    width: "100%",
    height: "46px",
    backgroundColor: "#4b34a8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    boxSizing: "border-box",
    fontSize: "11px",
  },
};