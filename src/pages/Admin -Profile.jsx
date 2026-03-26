<<<<<<< HEAD
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
  Bell,
  Download,
  Camera,
  Edit,
  Trash2,
} from "lucide-react";

export default function AdminProfile() {
  return (
    <div style={styles.page}>
      {/* TOP HEADER */}
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
              src="https://i.pravatar.cc/40?img=12"
              alt="profile"
              style={styles.avatar}
            />
            <span style={styles.profileName}>Vihanga Sathsara</span>
          </div>
          <Bell size={17} color="#111" />
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

            <div style={styles.menuItem}>
              <BookOpen size={18} />
              <span>Courses</span>
            </div>

            <div style={styles.menuItem}>
              <FileText size={18} />
              <span>Reports</span>
            </div>

            <div style={styles.menuItem}>
              <CalendarDays size={18} />
              <span>Activity</span>
            </div>

            <div style={{ ...styles.menuItem, ...styles.activeMenuItem }}>
              <UserCircle size={18} />
              <span style={styles.activeText}>Profile</span>
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
              <h1 style={styles.title}>Profile Details & Settings</h1>
              <p style={styles.subtitle}>
                Manage your account settings and preferences
              </p>
            </div>

            <button style={styles.exportBtn}>
              <Download size={13} />
              <span>Export Reports</span>
            </button>
          </div>

          {/* TABS */}
          <div style={styles.tabsWrap}>
            <div style={styles.tabs}>
              <button style={styles.activeTab}>Profile</button>
              <button style={styles.tab}>Account</button>
              <button style={styles.tab}>Notifications</button>
              <button style={styles.tab}>Appearance</button>
              <button style={styles.tab}>Privacy</button>
              <button style={styles.tab}>Billing</button>
            </div>
          </div>

          {/* CONTENT */}
          <div style={styles.contentGrid}>
            {/* LEFT COLUMN */}
            <div style={styles.leftColumn}>
              <div style={styles.cardLarge}>
                <h3 style={styles.cardTitle}>Profile Information</h3>
                <p style={styles.cardSubtitle}>
                  Update your profile information and public details
                </p>

                <div style={styles.profileInfoWrap}>
                  <div style={styles.profilePhotoSection}>
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt="profile"
                      style={styles.bigAvatar}
                    />
                    <button style={styles.photoBtn}>
                      <Camera size={12} />
                      <span>Change Photo</span>
                    </button>
                  </div>

                  <div style={styles.formArea}>
                    <div style={styles.formGrid}>
                      <div>
                        <label style={styles.label}>First Name</label>
                        <input
                          defaultValue="Vihanga"
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Last Name</label>
                        <input
                          defaultValue="Sathsara"
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Email</label>
                        <input
                          defaultValue="vjhanga@gmail.com"
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Status</label>
                        <input
                          defaultValue="Active"
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>New password</label>
                        <input
                          defaultValue=""
                          placeholder=""
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Confirm password</label>
                        <input
                          defaultValue=""
                          placeholder=""
                          readOnly
                          style={styles.input}
                        />
                      </div>
                    </div>

                    <div style={styles.cardButtonRow}>
                      <button style={styles.smallPurpleBtn}>Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.cardMedium}>
                <h3 style={styles.cardTitle}>Security Settings</h3>
                <p style={styles.cardSubtitle}>
                  Add an extra layer of security to your account
                </p>

                <div style={styles.settingRow}>
                  <div>
                    <p style={styles.settingTitle}>
                      Enable Two-Factor Authentication
                    </p>
                    <p style={styles.settingText}>
                      Receive a verification code via email or authenticator app
                    </p>
                  </div>
                  <div style={styles.toggleOn}></div>
                </div>
              </div>

              <div style={styles.cardLarge}>
                <h3 style={styles.cardTitle}>Privacy Settings</h3>
                <p style={styles.cardSubtitle}>
                  Control your privacy and data settings
                </p>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Profile Visibility</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Public Profile</p>
                      <p style={styles.settingText}>
                        Allow others to view your profile and statistics
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Show Online Status</p>
                      <p style={styles.settingText}>
                        Display when you are active on the platform
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Activity History</p>
                      <p style={styles.settingText}>
                        Show your quiz creation and participation history
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Data Usage</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Analytics & Improvements</p>
                      <p style={styles.settingText}>
                        Allow us to collect anonymous usage data to improve the
                        platform
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Personalization</p>
                      <p style={styles.settingText}>
                        Use your activity to personalize your experience
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Cookies</p>
                      <p style={styles.settingText}>
                        Manage cookie preferences and tracking
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Data Export & Deletion</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Export Your Data</p>
                      <p style={styles.settingText}>
                        Download a copy of your personal data
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Delete Your Data</p>
                      <p style={styles.settingText}>
                        Request deletion of your personal data
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <button style={styles.smallPurpleBtn}>Save Preferences</button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div style={styles.rightColumn}>
              <div style={styles.cardLargeRight}>
                <h3 style={styles.cardTitle}>Notification Preferences</h3>
                <p style={styles.cardSubtitle}>
                  Choose how and when you want to be notified
                </p>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Email Notifications</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Quiz Completions</p>
                      <p style={styles.settingText}>
                        Receive notifications when students complete your quizzes
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Event Reminders</p>
                      <p style={styles.settingText}>
                        Get reminders before your scheduled quiz events
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>New Student Joins</p>
                      <p style={styles.settingText}>
                        Be notified when new students join your classes
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Marketing & Updates</p>
                      <p style={styles.settingText}>
                        Receive news, updates, and promotional emails
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>In-App Notifications</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Quiz Completions</p>
                      <p style={styles.settingText}>
                        Receive notifications when students complete your quizzes
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Event Reminders</p>
                      <p style={styles.settingText}>
                        Get reminders before your scheduled quiz events
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>New Student Joins</p>
                      <p style={styles.settingText}>
                        Be notified when new students join your classes
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Notification Frequency</h4>

                  <div style={styles.radioWrap}>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="freq" defaultChecked />
                      Immediately
                    </label>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="freq" />
                      Daily Digest
                    </label>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="freq" />
                      Weekly Digest
                    </label>
                  </div>
                </div>

                <button style={styles.smallPurpleBtn}>Save Preferences</button>
              </div>

              <div style={styles.cardSmallRight}>
                <h3 style={styles.cardTitle}>General Settings</h3>

                <div style={styles.generalField}>
                  <label style={styles.label}>Site Name</label>
                  <input
                    defaultValue="Quiz Hub"
                    readOnly
                    style={styles.inputSmall}
                  />
                </div>

                <div style={styles.generalField}>
                  <label style={styles.label}>Site Logo</label>
                  <div style={styles.logoUploadBox}>
                    <img src={logoTrans} alt="logo" style={styles.smallLogo} />
                    <div style={styles.logoActionWrap}>
                      <button style={styles.iconBtnPurple}>
                        <Edit size={11} />
                        <span>Edit</span>
                      </button>
                      <button style={styles.iconDeleteBtn}>
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>

                <div style={styles.generalBottom}>
                  <button style={styles.smallPurpleBtn}>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
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
    width: "320px",
    height: "36px",
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
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  profileName: {
    fontSize: "12px",
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
    padding: "26px 18px 20px",
    boxSizing: "border-box",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
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
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    width: "120px",
    marginLeft: "4px",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f7f7f8",
    paddingBottom: "20px",
  },

  hero: {
    width: "100%",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 20px 16px",
    boxSizing: "border-box",
  },

  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111",
    margin: "0",
    textAlign: "left",
  },

  subtitle: {
    fontSize: "13px",
    color: "#555",
    margin: "5px 0 0 0",
    textAlign: "left",
  },

  exportBtn: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    padding: "7px 10px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "10px",
    fontWeight: "600",
    cursor: "pointer",
  },

  tabsWrap: {
    padding: "0 20px 14px",
    backgroundColor: "#ffffff",
  },

  tabs: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    backgroundColor: "#a38de5",
    borderRadius: "4px",
    width: "fit-content",
    overflow: "hidden",
  },

  activeTab: {
    backgroundColor: "#8b52ff",
    color: "#fff",
    border: "none",
    padding: "4px 12px",
    fontSize: "9px",
    fontWeight: "600",
    cursor: "pointer",
  },

  tab: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    padding: "4px 12px",
    fontSize: "9px",
    cursor: "pointer",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    padding: "18px 20px 0",
    boxSizing: "border-box",
    alignItems: "start",
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  cardLarge: {
    backgroundColor: "#9a89dd",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  },

  cardMedium: {
    backgroundColor: "#9a89dd",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  },

  cardLargeRight: {
    backgroundColor: "#9a89dd",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
    minHeight: "310px",
  },

  cardSmallRight: {
    backgroundColor: "#9a89dd",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
    width: "62%",
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    margin: "0",
    textAlign: "left",
  },

  cardSubtitle: {
    fontSize: "10px",
    color: "#eae4ff",
    margin: "4px 0 14px 0",
    textAlign: "left",
  },

  profileInfoWrap: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },

  profilePhotoSection: {
    width: "110px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },

  bigAvatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #d7ceff",
  },

  photoBtn: {
    backgroundColor: "#6f57d7",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "6px 8px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "8px",
    cursor: "pointer",
  },

  formArea: {
    flex: 1,
    textAlign: "left",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px 12px",
    alignItems: "start",
  },

  label: {
    display: "block",
    fontSize: "10px",
    color: "#fff",
    marginBottom: "5px",
    textAlign: "left",
  },

  input: {
    width: "100%",
    height: "32px",
    border: "none",
    outline: "none",
    borderRadius: "4px",
    backgroundColor: "#6f57d7",
    color: "#fff",
    fontSize: "11px",
    padding: "0 12px",
    boxSizing: "border-box",
    textAlign: "left",
  },

  inputSmall: {
    width: "60%",
    height: "28px",
    border: "none",
    outline: "none",
    borderRadius: "4px",
    backgroundColor: "#f5f5f7",
    color: "#555",
    fontSize: "11px",
    padding: "0 12px",
    boxSizing: "border-box",
    textAlign: "left",
  },

  cardButtonRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "18px",
  },

  smallPurpleBtn: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "6px 10px",
    fontSize: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },

  sectionBlock: {
    marginBottom: "18px",
  },

  sectionTitle: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#fff",
    margin: "0 0 10px 0",
    textAlign: "left",
  },

  settingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "10px",
  },

  settingTitle: {
    margin: "0",
    fontSize: "11px",
    fontWeight: "600",
    color: "#111",
    textAlign: "left",
  },

  settingText: {
    margin: "4px 0 0 0",
    fontSize: "9px",
    color: "#111",
    textAlign: "left",
    lineHeight: "1.4",
  },

  toggleOn: {
    width: "15px",
    height: "8px",
    backgroundColor: "#8b52ff",
    borderRadius: "999px",
    position: "relative",
    flexShrink: 0,
  },

  radioWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  radioLabel: {
    fontSize: "10px",
    color: "#111",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textAlign: "left",
  },

  generalField: {
    marginBottom: "16px",
    textAlign: "left",
  },

  logoUploadBox: {
    width: "66%",
    minHeight: "40px",
    backgroundColor: "#f5f5f7",
    borderRadius: "4px",
    padding: "10px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },

  smallLogo: {
    width: "45px",
    objectFit: "contain",
  },

  logoActionWrap: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  iconBtnPurple: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "8px",
    cursor: "pointer",
  },

  iconDeleteBtn: {
    background: "transparent",
    border: "none",
    color: "#ff5b52",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
  },

  generalBottom: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "30px",
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
=======
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
  Bell,
  Download,
  Camera,
  Edit,
  Trash2,
} from "lucide-react";

export default function AdminProfile() {
  return (
    <div style={styles.page}>
      {/* TOP HEADER */}
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
              src="https://i.pravatar.cc/40?img=12"
              alt="profile"
              style={styles.avatar}
            />
            <span style={styles.profileName}>Vihanga Sathsara</span>
          </div>
          <Bell size={17} color="#111" />
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

            <div style={styles.menuItem}>
              <BookOpen size={18} />
              <span>Courses</span>
            </div>

            <div style={styles.menuItem}>
              <FileText size={18} />
              <span>Reports</span>
            </div>

            <div style={styles.menuItem}>
              <CalendarDays size={18} />
              <span>Activity</span>
            </div>

            <div style={{ ...styles.menuItem, ...styles.activeMenuItem }}>
              <UserCircle size={18} />
              <span style={styles.activeText}>Profile</span>
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
              <h1 style={styles.title}>Profile Details & Settings</h1>
              <p style={styles.subtitle}>
                Manage your account settings and preferences
              </p>
            </div>

            <button style={styles.exportBtn}>
              <Download size={13} />
              <span>Export Reports</span>
            </button>
          </div>

          {/* TABS */}
          <div style={styles.tabsWrap}>
            <div style={styles.tabs}>
              <button style={styles.activeTab}>Profile</button>
              <button style={styles.tab}>Account</button>
              <button style={styles.tab}>Notifications</button>
              <button style={styles.tab}>Appearance</button>
              <button style={styles.tab}>Privacy</button>
              <button style={styles.tab}>Billing</button>
            </div>
          </div>

          {/* CONTENT */}
          <div style={styles.contentGrid}>
            {/* LEFT COLUMN */}
            <div style={styles.leftColumn}>
              <div style={styles.cardLarge}>
                <h3 style={styles.cardTitle}>Profile Information</h3>
                <p style={styles.cardSubtitle}>
                  Update your profile information and public details
                </p>

                <div style={styles.profileInfoWrap}>
                  <div style={styles.profilePhotoSection}>
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt="profile"
                      style={styles.bigAvatar}
                    />
                    <button style={styles.photoBtn}>
                      <Camera size={12} />
                      <span>Change Photo</span>
                    </button>
                  </div>

                  <div style={styles.formArea}>
                    <div style={styles.formGrid}>
                      <div>
                        <label style={styles.label}>First Name</label>
                        <input
                          defaultValue="Vihanga"
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Last Name</label>
                        <input
                          defaultValue="Sathsara"
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Email</label>
                        <input
                          defaultValue="vjhanga@gmail.com"
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Status</label>
                        <input
                          defaultValue="Active"
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>New password</label>
                        <input
                          defaultValue=""
                          placeholder=""
                          readOnly
                          style={styles.input}
                        />
                      </div>

                      <div>
                        <label style={styles.label}>Confirm password</label>
                        <input
                          defaultValue=""
                          placeholder=""
                          readOnly
                          style={styles.input}
                        />
                      </div>
                    </div>

                    <div style={styles.cardButtonRow}>
                      <button style={styles.smallPurpleBtn}>Save Changes</button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.cardMedium}>
                <h3 style={styles.cardTitle}>Security Settings</h3>
                <p style={styles.cardSubtitle}>
                  Add an extra layer of security to your account
                </p>

                <div style={styles.settingRow}>
                  <div>
                    <p style={styles.settingTitle}>
                      Enable Two-Factor Authentication
                    </p>
                    <p style={styles.settingText}>
                      Receive a verification code via email or authenticator app
                    </p>
                  </div>
                  <div style={styles.toggleOn}></div>
                </div>
              </div>

              <div style={styles.cardLarge}>
                <h3 style={styles.cardTitle}>Privacy Settings</h3>
                <p style={styles.cardSubtitle}>
                  Control your privacy and data settings
                </p>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Profile Visibility</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Public Profile</p>
                      <p style={styles.settingText}>
                        Allow others to view your profile and statistics
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Show Online Status</p>
                      <p style={styles.settingText}>
                        Display when you are active on the platform
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Activity History</p>
                      <p style={styles.settingText}>
                        Show your quiz creation and participation history
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Data Usage</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Analytics & Improvements</p>
                      <p style={styles.settingText}>
                        Allow us to collect anonymous usage data to improve the
                        platform
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Personalization</p>
                      <p style={styles.settingText}>
                        Use your activity to personalize your experience
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Cookies</p>
                      <p style={styles.settingText}>
                        Manage cookie preferences and tracking
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Data Export & Deletion</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Export Your Data</p>
                      <p style={styles.settingText}>
                        Download a copy of your personal data
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Delete Your Data</p>
                      <p style={styles.settingText}>
                        Request deletion of your personal data
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <button style={styles.smallPurpleBtn}>Save Preferences</button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div style={styles.rightColumn}>
              <div style={styles.cardLargeRight}>
                <h3 style={styles.cardTitle}>Notification Preferences</h3>
                <p style={styles.cardSubtitle}>
                  Choose how and when you want to be notified
                </p>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Email Notifications</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Quiz Completions</p>
                      <p style={styles.settingText}>
                        Receive notifications when students complete your quizzes
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Event Reminders</p>
                      <p style={styles.settingText}>
                        Get reminders before your scheduled quiz events
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>New Student Joins</p>
                      <p style={styles.settingText}>
                        Be notified when new students join your classes
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Marketing & Updates</p>
                      <p style={styles.settingText}>
                        Receive news, updates, and promotional emails
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>In-App Notifications</h4>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Quiz Completions</p>
                      <p style={styles.settingText}>
                        Receive notifications when students complete your quizzes
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>Event Reminders</p>
                      <p style={styles.settingText}>
                        Get reminders before your scheduled quiz events
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>

                  <div style={styles.settingRow}>
                    <div>
                      <p style={styles.settingTitle}>New Student Joins</p>
                      <p style={styles.settingText}>
                        Be notified when new students join your classes
                      </p>
                    </div>
                    <div style={styles.toggleOn}></div>
                  </div>
                </div>

                <div style={styles.sectionBlock}>
                  <h4 style={styles.sectionTitle}>Notification Frequency</h4>

                  <div style={styles.radioWrap}>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="freq" defaultChecked />
                      Immediately
                    </label>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="freq" />
                      Daily Digest
                    </label>
                    <label style={styles.radioLabel}>
                      <input type="radio" name="freq" />
                      Weekly Digest
                    </label>
                  </div>
                </div>

                <button style={styles.smallPurpleBtn}>Save Preferences</button>
              </div>

              <div style={styles.cardSmallRight}>
                <h3 style={styles.cardTitle}>General Settings</h3>

                <div style={styles.generalField}>
                  <label style={styles.label}>Site Name</label>
                  <input
                    defaultValue="Quiz Hub"
                    readOnly
                    style={styles.inputSmall}
                  />
                </div>

                <div style={styles.generalField}>
                  <label style={styles.label}>Site Logo</label>
                  <div style={styles.logoUploadBox}>
                    <img src={logoTrans} alt="logo" style={styles.smallLogo} />
                    <div style={styles.logoActionWrap}>
                      <button style={styles.iconBtnPurple}>
                        <Edit size={11} />
                        <span>Edit</span>
                      </button>
                      <button style={styles.iconDeleteBtn}>
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>

                <div style={styles.generalBottom}>
                  <button style={styles.smallPurpleBtn}>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
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
    width: "320px",
    height: "36px",
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
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  profileName: {
    fontSize: "12px",
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
    padding: "26px 18px 20px",
    boxSizing: "border-box",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
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
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    width: "120px",
    marginLeft: "4px",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f7f7f8",
    paddingBottom: "20px",
  },

  hero: {
    width: "100%",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 20px 16px",
    boxSizing: "border-box",
  },

  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#111",
    margin: "0",
    textAlign: "left",
  },

  subtitle: {
    fontSize: "13px",
    color: "#555",
    margin: "5px 0 0 0",
    textAlign: "left",
  },

  exportBtn: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    padding: "7px 10px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "10px",
    fontWeight: "600",
    cursor: "pointer",
  },

  tabsWrap: {
    padding: "0 20px 14px",
    backgroundColor: "#ffffff",
  },

  tabs: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    backgroundColor: "#a38de5",
    borderRadius: "4px",
    width: "fit-content",
    overflow: "hidden",
  },

  activeTab: {
    backgroundColor: "#8b52ff",
    color: "#fff",
    border: "none",
    padding: "4px 12px",
    fontSize: "9px",
    fontWeight: "600",
    cursor: "pointer",
  },

  tab: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    padding: "4px 12px",
    fontSize: "9px",
    cursor: "pointer",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    padding: "18px 20px 0",
    boxSizing: "border-box",
    alignItems: "start",
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  cardLarge: {
    backgroundColor: "#9a89dd",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  },

  cardMedium: {
    backgroundColor: "#9a89dd",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  },

  cardLargeRight: {
    backgroundColor: "#9a89dd",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
    minHeight: "310px",
  },

  cardSmallRight: {
    backgroundColor: "#9a89dd",
    borderRadius: "8px",
    padding: "16px 14px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
    width: "62%",
  },

  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    margin: "0",
    textAlign: "left",
  },

  cardSubtitle: {
    fontSize: "10px",
    color: "#eae4ff",
    margin: "4px 0 14px 0",
    textAlign: "left",
  },

  profileInfoWrap: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },

  profilePhotoSection: {
    width: "110px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },

  bigAvatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #d7ceff",
  },

  photoBtn: {
    backgroundColor: "#6f57d7",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "6px 8px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "8px",
    cursor: "pointer",
  },

  formArea: {
    flex: 1,
    textAlign: "left",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px 12px",
    alignItems: "start",
  },

  label: {
    display: "block",
    fontSize: "10px",
    color: "#fff",
    marginBottom: "5px",
    textAlign: "left",
  },

  input: {
    width: "100%",
    height: "32px",
    border: "none",
    outline: "none",
    borderRadius: "4px",
    backgroundColor: "#6f57d7",
    color: "#fff",
    fontSize: "11px",
    padding: "0 12px",
    boxSizing: "border-box",
    textAlign: "left",
  },

  inputSmall: {
    width: "60%",
    height: "28px",
    border: "none",
    outline: "none",
    borderRadius: "4px",
    backgroundColor: "#f5f5f7",
    color: "#555",
    fontSize: "11px",
    padding: "0 12px",
    boxSizing: "border-box",
    textAlign: "left",
  },

  cardButtonRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "18px",
  },

  smallPurpleBtn: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "6px 10px",
    fontSize: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },

  sectionBlock: {
    marginBottom: "18px",
  },

  sectionTitle: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#fff",
    margin: "0 0 10px 0",
    textAlign: "left",
  },

  settingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "10px",
  },

  settingTitle: {
    margin: "0",
    fontSize: "11px",
    fontWeight: "600",
    color: "#111",
    textAlign: "left",
  },

  settingText: {
    margin: "4px 0 0 0",
    fontSize: "9px",
    color: "#111",
    textAlign: "left",
    lineHeight: "1.4",
  },

  toggleOn: {
    width: "15px",
    height: "8px",
    backgroundColor: "#8b52ff",
    borderRadius: "999px",
    position: "relative",
    flexShrink: 0,
  },

  radioWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  radioLabel: {
    fontSize: "10px",
    color: "#111",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textAlign: "left",
  },

  generalField: {
    marginBottom: "16px",
    textAlign: "left",
  },

  logoUploadBox: {
    width: "66%",
    minHeight: "40px",
    backgroundColor: "#f5f5f7",
    borderRadius: "4px",
    padding: "10px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },

  smallLogo: {
    width: "45px",
    objectFit: "contain",
  },

  logoActionWrap: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  iconBtnPurple: {
    backgroundColor: "#8c4cff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "4px 8px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "8px",
    cursor: "pointer",
  },

  iconDeleteBtn: {
    background: "transparent",
    border: "none",
    color: "#ff5b52",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
  },

  generalBottom: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "30px",
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
>>>>>>> e1de364e75331dd75f900476d9e9df97e7da9cab
};