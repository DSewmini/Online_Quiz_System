import React from "react";
import logoTrans from "../assets/logo_trans_tight.png";

import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  CalendarDays,
  UserCircle,
  LogOut,
  Search,
  Plus,
  BookCopy,
  Briefcase,
  UserRound,
  BarChart3,
  Pencil,
  Trash2,
  Bell,
} from "lucide-react";

const courses = [
  {
    title: "Web Development",
    code: "CS301",
    lecturer: "Mr. Sunil Joshi",
    students: 45,
    status: "Active",
  },
  {
    title: "Database Systems",
    code: "CS302",
    lecturer: "Mr. Devendra Ranasinghe",
    students: 38,
    status: "Active",
  },
  {
    title: "Programming Fundamentals",
    code: "CS101",
    lecturer: "Mr. Lalith Perera",
    students: 34,
    status: "Active",
  },
  {
    title: "Data Structures",
    code: "CS201",
    lecturer: "Mrs. Sarah Gamage",
    students: 30,
    status: "Inactive",
  },
];

export default function AdminCourse() {
  return (
    <div style={styles.page}>
      {/* FULL WIDTH TOP HEADER */}
      <div style={styles.topHeader}>
        <div style={styles.topHeaderLeft}>
          <img src={logoTrans} alt="Quiz Hub" style={styles.topLogo} />
        </div>

        <div style={styles.topHeaderCenter}>
          <div style={styles.searchBox}>
            <Search size={15} color="#7a7a7a" />
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
              src="https://i.pravatar.cc/40?img=12"
              alt="profile"
              style={styles.avatar}
            />
            <span style={styles.profileName}>Vihanga Sathsara</span>
          </div>
          <Bell size={18} color="#111" />
        </div>
      </div>

      {/* BODY */}
      <div style={styles.bodyArea}>
        {/* SIDEBAR */}
        <aside style={styles.sidebar}>
          <div style={styles.menu}>
            <div style={styles.menuItem}>
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </div>

            <div style={styles.menuItem}>
              <Users size={18} />
              <span>User Management</span>
            </div>

            <div style={{ ...styles.menuItem, ...styles.activeMenuItem }}>
              <BookOpen size={18} />
              <span style={styles.activeText}>Courses</span>
            </div>

            <div style={styles.menuItem}>
              <FileText size={18} />
              <span>Reports</span>
            </div>

            <div style={styles.menuItem}>
              <CalendarDays size={18} />
              <span>Activity</span>
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

        {/* MAIN */}
        <div style={styles.main}>
          {/* HERO */}
          <div style={styles.hero}>
            <div>
              <h1 style={styles.title}>Course Management</h1>
              <p style={styles.subtitle}>
                Manage academic courses and enrollments
              </p>
            </div>

            <button style={styles.createBtn}>
              <Plus size={14} />
              <span>Create course</span>
            </button>
          </div>

          {/* CONTENT */}
          <div style={styles.content}>
            {/* STATS */}
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div>
                  <p style={styles.statLabel}>Total Courses</p>
                  <h2 style={styles.statValue}>05</h2>
                </div>
                <div style={{ ...styles.iconCircle, backgroundColor: "#241248" }}>
                  <BookCopy size={16} />
                </div>
              </div>

              <div style={styles.statCard}>
                <div>
                  <p style={styles.statLabel}>Active Courses</p>
                  <h2 style={styles.statValue}>04</h2>
                </div>
                <div style={{ ...styles.iconCircle, backgroundColor: "#0c9a49" }}>
                  <Briefcase size={16} />
                </div>
              </div>

              <div style={styles.statCard}>
                <div>
                  <p style={styles.statLabel}>Total Students</p>
                  <h2 style={styles.statValue}>211</h2>
                </div>
                <div style={{ ...styles.iconCircle, backgroundColor: "#0a4fa8" }}>
                  <UserRound size={16} />
                </div>
              </div>

              <div style={styles.statCard}>
                <div>
                  <p style={styles.statLabel}>Average students/course</p>
                  <h2 style={styles.statValue}>42</h2>
                </div>
                <div style={{ ...styles.iconCircle, backgroundColor: "#b36a00" }}>
                  <BarChart3 size={16} />
                </div>
              </div>
            </div>

            {/* COURSE CARDS */}
            <div style={styles.courseGrid}>
              {courses.map((course, index) => (
                <div key={index} style={styles.courseCard}>
                  <div style={styles.cardTop}>
                    <div>
                      <h3 style={styles.courseTitle}>{course.title}</h3>
                      <p style={styles.courseCode}>{course.code}</p>
                    </div>

                    <span
                      style={
                        course.status === "Active"
                          ? styles.activeBadge
                          : styles.inactiveBadge
                      }
                    >
                      {course.status}
                    </span>
                  </div>

                  <div style={styles.cardInfo}>
                    <div style={styles.infoRow}>
                      <span style={styles.infoLabel}>Lecturer</span>
                      <span style={styles.infoValue}>{course.lecturer}</span>
                    </div>

                    <div style={styles.infoRow}>
                      <span style={styles.infoLabel}>Enrolled students</span>
                      <span style={styles.infoValue}>{course.students}</span>
                    </div>
                  </div>

                  <div style={styles.cardActions}>
                    <button style={styles.actionBtn}>
                      <Pencil size={13} />
                      <span>Edit</span>
                    </button>

                    <button style={styles.actionBtn}>
                      <span>Assign</span>
                    </button>

                    <button style={styles.deleteBtn}>
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH FOOTER */}
      <div style={styles.footer}>
        <span>Contact: quiiizhub@gmail.com</span>
        <span>© 2026 Quiz Hub. All rights reserved.</span>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f7",
    fontFamily: "Poppins, sans-serif",
    display: "flex",
    flexDirection: "column",
  },

  topHeader: {
    width: "100%",
    height: "70px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e9e9e9",
    display: "grid",
    gridTemplateColumns: "220px 1fr 290px",
    alignItems: "center",
    padding: "0 24px",
    boxSizing: "border-box",
  },

  topHeaderLeft: {
    display: "flex",
    alignItems: "center",
  },

  topLogo: {
    width: "105px",
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
    gap: "18px",
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
    gap: "18px",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "10px 12px",
    fontSize: "15px",
    color: "#f5f5f5",
    cursor: "pointer",
    borderRadius: "10px",
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
    padding: "11px 16px",
    borderRadius: "8px",
    fontWeight: "500",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    width: "160px",
    marginLeft: "8px",
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
    padding: "28px 34px 24px",
    boxSizing: "border-box",
    borderBottom: "1px solid #efefef",
  },

  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111",
    margin: "0",
    textAlign: "left",
  },

  subtitle: {
    fontSize: "14px",
    color: "#555",
    margin: "5px 0 0 0",
    textAlign: "left",
  },

  createBtn: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "11px 16px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },

  searchBox: {
    width: "345px",
    height: "40px",
    border: "1px solid #cfcfcf",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 14px",
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
  },

  searchInput: {
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "14px",
    color: "#555",
  },

  profileBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  avatar: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  profileName: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#111",
  },

  content: {
    flex: 1,
    padding: "18px 14px 18px 14px",
    boxSizing: "border-box",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "14px",
    marginBottom: "24px",
  },

  statCard: {
    backgroundColor: "#6558a8",
    color: "#fff",
    borderRadius: "10px",
    minHeight: "95px",
    padding: "16px 18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
  },

  statLabel: {
    fontSize: "12px",
    color: "#eee7ff",
    marginBottom: "8px",
  },

  statValue: {
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
  },

  iconCircle: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  courseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "18px 20px",
  },

  courseCard: {
    backgroundColor: "#17092f",
    color: "#fff",
    borderRadius: "12px",
    padding: "18px 16px 14px",
    borderTop: "4px solid #6a2fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.14)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "22px",
  },

  courseTitle: {
    fontSize: "16px",
    fontWeight: "700",
    margin: 0,
  },

  courseCode: {
    fontSize: "12px",
    color: "#b2a8d9",
    marginTop: "12px",
  },

  activeBadge: {
    backgroundColor: "#8c52ff",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "600",
    padding: "6px 12px",
    borderRadius: "999px",
  },

  inactiveBadge: {
    backgroundColor: "#ff4338",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "600",
    padding: "6px 12px",
    borderRadius: "999px",
  },

  cardInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginBottom: "22px",
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoLabel: {
    color: "#d5d0e8",
    fontSize: "13px",
  },

  infoValue: {
    color: "#fff",
    fontWeight: "700",
    fontSize: "13px",
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "12px",
  },

  actionBtn: {
    background: "transparent",
    border: "1px solid #ffffff",
    color: "#fff",
    borderRadius: "9px",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "500",
  },

  deleteBtn: {
    background: "transparent",
    border: "none",
    color: "#ff3b30",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },

  footer: {
    width: "100%",
    height: "60px",
    backgroundColor: "#4b34a8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    boxSizing: "border-box",
    fontSize: "13px",
  },
};