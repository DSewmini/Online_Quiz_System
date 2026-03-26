import logo from "./assets/logo.png";
import { FiLogOut, FiSearch, FiDownload } from "react-icons/fi";

export default function App() {
  const sidebar = [
    { name: "Dashboard", icon: "📊" },
    { name: "User Management", icon: "👥" },
    { name: "Courses", icon: "📚" },
    { name: "Reports", icon: "📄" },
    { name: "Activity", icon: "📅" },
    { name: "Profile", icon: "👤" },
  ];

  const stats = [
    { label: "Active Sessions", value: "12", icon: "🖥️" },
    { label: "Recent Activities", value: "04", icon: "🟢" },
    { label: "Today's Attempts", value: "02", icon: "👥" },
    { label: "Alerts", value: "02", icon: "🔔" },
  ];

  const activities = [
    ["John Smith", "Student", "Completed quiz", "Introduction to React", "2 hours ago"],
    ["Emma Watson", "Student", "Started quiz", "Database Fundamentals", "2 hours ago"],
    ["Lalith Perera", "Lecturer", "Created quiz", "Python Programming Basics", "2 hours ago"],
    ["David Brown", "Student", "Completed quiz", "Python Programming Basics", "2 hours ago"],
  ];

  const logs = [
    ["01", "Q1", "25/25 (100%)", "20m 0s", "17/03/2026, 16:20:00"],
    ["01", "Q2", "25/25 (100%)", "20m 0s", "17/03/2026, 14:30:00"],
    ["03", "Q2", "10/10 (100%)", "15m 0s", "16/03/2026, 10:15:00"],
    ["02", "Q1", "10/10 (100%)", "15m 0s", "16/03/2026, 16:18:00"],
  ];

  return (
    <div className="min-h-screen bg-[#161616] p-6 font-sans">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-md bg-white shadow-2xl">

        <div className="flex min-h-screen">
          <aside className="flex w-64 flex-col justify-between bg-gradient-to-b from-[#5e4bc2] to-[#4f4699] text-white">
            <div>
              <div className="flex items-center justify-center border-b border-gray-200 bg-white py-6">
                <img
                  src={logo}
                  alt="Quiz Hub Logo"
                  className="h-30 object-contain"
                />
              </div>

              <nav className="px-5 py-8">
                <ul className="space-y-3">
                  {sidebar.map((item, index) => (
                    <li
                      key={item.name}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                        index === 4
                          ? "bg-white/10 text-white shadow-inner"
                          : "text-white/90 hover:bg-white/10"
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="p-5">
              <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-red-500 shadow hover:opacity-90">
                <FiLogOut className="text-xl" />
                <span>Log Out</span>
              </button>
            </div>
          </aside>

          <main className="flex-1 bg-[#f4f4f6]">
            <header className="flex items-center justify-between gap-4 border-b bg-white px-8 py-4">
              <div className="w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-full border border-gray-300 px-5 py-2 text-sm outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8d1ff] text-lg">
                  👨‍💼
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Vihanga Sathsara
                  </p>
                </div>
                <div className="text-lg">🔔</div>
              </div>
            </header>

            <div className="space-y-8 p-8">
              <section className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-black">
                    Activity Monitoring
                  </h1>
                  <p className="mt-1 text-base text-black/70">
                    Track and monitor system activities
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-lg bg-[#7a3ff2] px-4 py-2 text-sm font-semibold text-white shadow-md hover:opacity-90">
                  <FiDownload />
                  Export Reports
                </button>
              </section>

              <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-xl bg-[#5c4eb1] p-5 text-white shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-white/80">{card.label}</p>
                        <p className="mt-2 text-3xl font-bold">{card.value}</p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#21184f] text-lg">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              <section className="rounded-2xl bg-[#34295f] p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-[#ff5b5b]">
                    Suspicious Activity Alerts
                  </h2>
                  <span className="text-red-500">🔴</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg bg-[#4a3152] px-5 py-4 text-white">
                    <div>
                      <p className="font-semibold text-[#ff7a7a]">Unknown User</p>
                      <p className="text-xs text-white/70">
                        Multiple failed login attempts.
                      </p>
                      <p className="text-xs text-white/50">5 minutes ago</p>
                    </div>

                    <button className="rounded-md bg-[#ff5b5b] px-4 py-2 text-xs font-semibold text-white">
                      Investigate
                    </button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-[#4b433f] px-5 py-4 text-white">
                    <div>
                      <p className="font-semibold text-[#ffd25f]">John Smith</p>
                      <p className="text-xs text-white/70">
                        Rapid quiz submissions
                      </p>
                      <p className="text-xs text-white/50">2 hours ago</p>
                    </div>

                    <button className="rounded-md bg-[#ff5b5b] px-4 py-2 text-xs font-semibold text-white">
                      Investigate
                    </button>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl bg-[#a193e6] p-6 shadow-lg">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Recent Activities
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl bg-[#5c4eb1] text-left text-sm text-white">
                    <thead>
                      <tr className="text-xs text-white/80">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Role</th>
                        <th className="px-4 py-3">Activity</th>
                        <th className="px-4 py-3">Module</th>
                        <th className="px-4 py-3">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activities.map((row, index) => (
                        <tr key={index} className="border-t border-white/10">
                          {row.map((cell, i) => (
                            <td key={i} className="px-4 py-4">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-2xl bg-[#a193e6] p-6 shadow-lg">
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Quiz Attempt Logs
                </h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl bg-[#5c4eb1] text-left text-sm text-white">
                    <thead>
                      <tr className="text-xs text-white/80">
                        <th className="px-4 py-3">Student ID</th>
                        <th className="px-4 py-3">Quiz ID</th>
                        <th className="px-4 py-3">Score</th>
                        <th className="px-4 py-3">Time Taken</th>
                        <th className="px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((row, index) => (
                        <tr key={index} className="border-t border-white/10">
                          {row.map((cell, i) => (
                            <td key={i} className="px-4 py-4">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <footer className="flex flex-col items-center justify-between gap-2 bg-[#4330a3] px-8 py-5 text-sm text-white md:flex-row">
              <p>Contact: quizhub@gmail.com</p>
              <p>© 2026 Quiz Hub. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}