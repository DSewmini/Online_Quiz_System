import logo from "./assets/logo.png";

export default function QuizHubAdminDashboard() {
  const stats = [
    { label: "Total Users", value: "05", icon: "👥" },
    { label: "Active Quizzes", value: "03", icon: "🗂️" },
    { label: "Courses", value: "03", icon: "📚" },
    { label: "Quiz Attempts", value: "03", icon: "✅" },
  ];

  const miniCards = [
    {
      title: "User distribution",
      items: [
        ["Students", "03"],
        ["Lecturers", "01"],
        ["Admins", "01"],
      ],
    },
    {
      title: "Quiz Activity",
      items: [
        ["Published", "03"],
        ["Drafts", "00"],
        ["Total Attempts", "01"],
      ],
    },
    {
      title: "System Status",
      items: [
        ["System Health", "Healthy"],
        ["Active sessions", "01"],
        ["Up-time", "99.9%"],
      ],
    },
  ];

  const courses = [
    {
      name: "Web Development",
      lecturer: "Mrs. Sarah Wedage",
      students: 45,
      status: "Active",
    },
    {
      name: "Introduction to React",
      lecturer: "Mr. Devendra Ranasinghe",
      students: 55,
      status: "Active",
    },
    {
      name: "Database Systems",
      lecturer: "Mr. Lalith Perera",
      students: 45,
      status: "Active",
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
    <div className="min-h-screen bg-[#1b1b1b] p-4">
      <div className="mx-auto w-[1200px] overflow-hidden bg-[#f2f2f2] shadow-2xl">
        <p className="bg-[#1b1b1b] px-4 py-2 text-sm text-gray-500">
          Admin dashboard
        </p>

        <div className="flex">
          <aside className="flex w-[270px] flex-col justify-between bg-gradient-to-b from-[#6657d2] to-[#51479e] text-white">
            <div>
              <div className="bg-white py-6 flex items-center justify-center">
  <img
    src={logo}
    alt="Quiz Hub Logo"
    className="h-20 object-contain"
  />
</div>

              <nav className="mt-4 px-5">
                <ul className="space-y-6">
                 {sidebar.map((item, index) => (
  <li
    key={item.name}
    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
      index === 0
        ? "bg-white/10 text-white"
        : "text-white/90 hover:bg-white/10"
    }`}
  >
    <span>{item.icon}</span>
    <span>{item.name}</span>
  </li>
))}
                </ul>
              </nav>
            </div>

            <div className="px-6 pb-14">
            <button className="flex items-center gap-3 w-full rounded-xl bg-white px-4 py-3 font-semibold text-red-500 shadow hover:opacity-90">
  <span className="text-lg">🔓</span>
  <span>Log Out</span>
</button>
            </div>
          </aside>

          <main className="flex-1 bg-[#efefef]">
            <header className="flex items-center justify-between bg-white px-8 py-3">
              <div className="flex-1">
                <div className="mx-auto w-[250px]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full rounded-full border border-gray-400 bg-white px-4 py-1.5 text-center text-sm outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm">
                  👨‍💼
                </div>
                <p className="text-sm font-semibold text-black">
                  Vihanga Sathsara
                </p>
              </div>
            </header>

            <div className="p-3">
              <section className="flex items-center justify-between rounded-md bg-[#b0a1ea] px-8 py-5">
                <div>
                  <h1 className="text-[28px] font-bold text-black">
                    Welcome back, Mr. Vihanga!
                  </h1>
                </div>
                <div className="text-7xl">👩‍💻</div>
              </section>

              <section className="mt-10 grid grid-cols-4 gap-4">
                {stats.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-md bg-[#5e50b8] px-4 py-3 text-white shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[11px]">{card.label}</p>
                        <p className="mt-2 text-[20px] font-bold">{card.value}</p>
                      </div>
                      <div className="text-xl">{card.icon}</div>
                    </div>
                  </div>
                ))}
              </section>

              <section className="mt-16 grid grid-cols-3 gap-16 px-0">
                {miniCards.map((card) => (
                  <div
                    key={card.title}
                    className="w-[180px] rounded-md bg-[#5e50b8] p-4 text-white shadow-md"
                  >
                    <h2 className="mb-4 text-sm font-semibold">{card.title}</h2>
                    <div className="space-y-4 text-[11px]">
                      {card.items.map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between">
                          <span>✓ {label}</span>
                          <span className="text-green-300">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section className="mt-16">
                <h2 className="mb-5 text-[24px] font-bold text-black">
                  Recent courses
                </h2>
                <div className="w-[380px] overflow-hidden rounded-md bg-[#5e50b8] shadow-md">
                  <table className="w-full text-left text-[10px] text-white">
                    <thead>
                      <tr>
                        <th className="px-3 py-2">Course Name</th>
                        <th className="px-3 py-2">Lecturer</th>
                        <th className="px-3 py-2">Students</th>
                        <th className="px-3 py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.name}>
                          <td className="px-3 py-1.5">{course.name}</td>
                          <td className="px-3 py-1.5">{course.lecturer}</td>
                          <td className="px-3 py-1.5">{course.students}</td>
                          <td className="px-3 py-1.5">
                            <span className="rounded-full bg-green-500 px-2 py-0.5 text-[9px] text-white">
                              {course.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <footer className="mt-8 flex items-center justify-between bg-[#4430a8] px-8 py-4 text-white">
              <p>Contact: quizhub@gmail.com</p>
              <p>© 2026 Quiz Hub. All rights reserved.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}