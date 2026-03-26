import logo from "./assets/logo.png";
import { FiLogOut, FiSearch, FiUserPlus } from "react-icons/fi";

export default function App() {
  const stats = [
    { label: "Total Users", value: "07", icon: "👥" },
    { label: "Lecturers", value: "01", icon: "👨‍🏫" },
    { label: "Students", value: "05", icon: "🎓" },
    { label: "Active Users", value: "06", icon: "✅" },
  ];

  const users = [
    {
      name: "Sunil Joshi",
      role: "Lecturer",
      email: "lecture@quiz.com",
      status: "Active",
      avatar: "👨‍🏫",
    },
    {
      name: "John Doe",
      role: "Student",
      email: "student@quiz.com",
      status: "Active",
      avatar: "🧑‍🎓",
    },
    {
      name: "Nirav Joshi",
      role: "Lecturer",
      email: "lecturer@quiz.com",
      status: "Active",
      avatar: "👨‍🏫",
    },
    {
      name: "Yuvraj Sheth",
      role: "Student",
      email: "student@quiz.com",
      status: "Inactive",
      avatar: "🧑‍🎓",
    },
    {
      name: "Michael Doe",
      role: "Admin",
      email: "admin@quiz.com",
      status: "Active",
      avatar: "👨‍💼",
    },
  ];

  const sidebar = [
    { name: "Dashboard", icon: "📊" },
    { name: "User Management", icon: "👥" },
    { name: "Courses", icon: "📚" },
    { name: "Reports", icon: "📄" },
    { name: "Activity", icon: "📅" },
    { name: "Profile", icon: "👤" },
  ];

  return (
    <div className="min-h-screen bg-[#161616] p-6 font-sans">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-md bg-white shadow-2xl">
        <div className="border-b border-black/10 bg-[#1e1e1e] px-4 py-2 text-3xl text-white/40">
          User Management
        </div>

        <div className="flex min-h-screen">
          <aside className="flex w-64 flex-col justify-between bg-gradient-to-b from-[#5e4bc2] to-[#4f4699] text-white">
            <div>
              <div className="flex items-center justify-center border-b border-gray-200 bg-white py-6">
                <img src={logo} alt="Quiz Hub Logo" className="h-16 object-contain" />
              </div>

              <nav className="px-5 py-8">
                <ul className="space-y-3">
                  {sidebar.map((item, index) => (
                    <li
                      key={item.name}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                        index === 1
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
                  <p className="text-sm font-semibold text-gray-900">Vihanga Sathsara</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </header>

            <div className="space-y-8 p-8">
              <section>
                <h1 className="text-4xl font-bold text-black">User Management</h1>
                <p className="mt-1 text-lg text-black/70">Manage all system users</p>
              </section>

              <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((card) => (
                  <div key={card.label} className="rounded-xl bg-[#5c4eb1] p-5 text-white shadow-lg">
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

              <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-gray-400 bg-white px-4 py-3 shadow-sm">
                  <FiSearch className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search users by email or name........"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>

                <button className="inline-flex items-center gap-2 rounded-lg bg-[#7a3ff2] px-4 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90">
                  <FiUserPlus />
                  Add user
                </button>
              </section>

              <section className="rounded-2xl bg-[#a193e6] p-6 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Users</h2>
                  <button className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
                    March 2025 ▾
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm text-[#1d1740]">
                    <thead>
                      <tr className="border-b border-[#6e63ae] text-sm font-semibold text-[#231c48]">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.name} className="border-b border-[#6e63ae] last:border-b-0">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-lg">
                                {user.avatar}
                              </div>
                              <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-xs text-[#352c68]">{user.role}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">{user.email}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                                user.status === "Active" ? "bg-green-500" : "bg-red-500"
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">Edit</td>
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