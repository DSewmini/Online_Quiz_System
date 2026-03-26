import { useState, useEffect, useRef } from "react";

const quizzes = [
  {
    id: 1,
    title: "Object Oriented Programming",
    deadline: "25th March",
    timeLimit: "20min",
    timeLimitSeconds: 20 * 60,
    status: "start",
  },
  {
    id: 2,
    title: "Programming Framework",
    deadline: "28th March",
    timeLimit: "10min",
    timeLimitSeconds: 10 * 60,
    status: "start",
  },
  {
    id: 3,
    title: "Mobile Computing",
    deadline: "5th April",
    timeLimit: "60min",
    timeLimitSeconds: 60 * 60,
    status: "reattempt",
    warning: "Marks lower than passing score. Re do quiz.",
  },
  {
    id: 4,
    title: "Advance Computer Networking",
    deadline: "10th April",
    timeLimit: "No time limit",
    timeLimitSeconds: null,
    status: "continue",
  },
];

const navItems = [
  { label: "Dashboard", icon: "⊞" },
  { label: "My Quizzes", icon: "☰" },
  { label: "Results", icon: "◎" },
  { label: "Leader-Board", icon: "⊘" },
  { label: "Schedule", icon: "▦" },
  { label: "Notice", icon: "⊡" },
  { label: "Notification", icon: "🔔" },
  { label: "Settings", icon: "⚙" },
];

const oopQuestions = [
  {
    q: "Which concept of Object-Oriented Programming allows a class to inherit properties and methods from another class?",
    options: ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
    answer: 3,
  },
  {
    q: "What is the process of hiding implementation details and showing only the functionality to the user?",
    options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    answer: 2,
  },
  {
    q: "Which OOP principle wraps data and methods into a single unit called a class?",
    options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    answer: 1,
  },
  {
    q: "Which concept allows a method to have different implementations based on the object calling it?",
    options: ["Encapsulation", "Inheritance", "Abstraction", "Polymorphism"],
    answer: 3,
  },
  {
    q: "In OOP, a blueprint for creating objects is called a:",
    options: ["Function", "Class", "Module", "Interface"],
    answer: 1,
  },
  {
    q: "Which keyword is used to create a derived class in most OOP languages?",
    options: ["implements", "extends", "inherits", "derives"],
    answer: 1,
  },
  {
    q: "What is a constructor in OOP?",
    options: [
      "A method to destroy objects",
      "A special method called when an object is created",
      "A method to copy objects",
      "A static function",
    ],
    answer: 1,
  },
  {
    q: "Which access modifier makes a class member accessible only within its own class?",
    options: ["public", "protected", "private", "internal"],
    answer: 2,
  },
  {
    q: "What is method overriding?",
    options: [
      "Defining multiple methods with the same name but different parameters",
      "Providing a new implementation for a method in a subclass",
      "Calling a parent class method",
      "Hiding a method from subclasses",
    ],
    answer: 1,
  },
  {
    q: "Which OOP concept allows objects of different classes to be treated as objects of a common superclass?",
    options: ["Encapsulation", "Abstraction", "Polymorphism", "Composition"],
    answer: 2,
  },
];

const frameworkQuestions = [
  {
    q: "Which JavaScript framework uses a virtual DOM to optimize rendering?",
    options: ["Angular", "Vue", "React", "Svelte"],
    answer: 2,
  },
  {
    q: "Which framework is developed and maintained by Google?",
    options: ["React", "Vue", "Svelte", "Angular"],
    answer: 3,
  },
  {
    q: "What does MVC stand for in software frameworks?",
    options: [
      "Module View Controller",
      "Model View Controller",
      "Model Virtual Component",
      "Main View Core",
    ],
    answer: 1,
  },
  {
    q: "Which Python framework is commonly used for building REST APIs quickly?",
    options: ["Django", "Flask", "FastAPI", "Tornado"],
    answer: 2,
  },
  {
    q: "In React, what hook is used to manage state in functional components?",
    options: ["useEffect", "useRef", "useContext", "useState"],
    answer: 3,
  },
  {
    q: "Which framework follows the 'convention over configuration' principle?",
    options: ["Express.js", "Ruby on Rails", "FastAPI", "Spring Boot"],
    answer: 1,
  },
  {
    q: "What is the primary purpose of a CSS framework like Tailwind CSS?",
    options: [
      "To handle JavaScript logic",
      "To provide utility classes for styling",
      "To manage API calls",
      "To create databases",
    ],
    answer: 1,
  },
  {
    q: "Which of the following is a server-side rendering framework for React?",
    options: ["Vite", "Webpack", "Next.js", "Babel"],
    answer: 2,
  },
  {
    q: "What is 'two-way data binding' most associated with?",
    options: ["React", "Angular", "Svelte", "Solid.js"],
    answer: 1,
  },
  {
    q: "Which framework uses a component-based architecture with a template syntax similar to HTML?",
    options: ["React", "Express", "Vue.js", "Django"],
    answer: 2,
  },
];

const quizQuestions = {
  1: oopQuestions,
  2: frameworkQuestions,
  3: oopQuestions,
  4: frameworkQuestions,
};

const LETTER = ["A", "B", "C", "D"];

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}.${String(s).padStart(2, "0")}`;
}

function QuizPage({ quiz, onBack }) {
  const questions = quizQuestions[quiz.id];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimitSeconds);
  const timerRef = useRef(null);

  useEffect(() => {
    if (quiz.timeLimitSeconds === null) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setSubmitted(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [quiz.timeLimitSeconds]);

  const q = questions[current];
  const totalQ = questions.length;

  const handleSelect = (i) => {
    if (submitted) return;
    const updated = [...selected];
    updated[current] = i;
    setSelected(updated);
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    setSubmitted(true);
  };

  const score = submitted
    ? selected.reduce(
        (acc, ans, i) => acc + (ans === questions[i].answer ? 1 : 0),
        0
      )
    : 0;

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f3f4f6" }}>
      {/* Header */}
      <header style={{
        background: "#fff",
        padding: "12px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            background: "#5b21b6",
            color: "#fff",
            fontWeight: 900,
            fontSize: 18,
            borderRadius: 10,
            padding: "6px 14px",
            letterSpacing: 1,
          }}>
            QUIZ HUB
          </div>
          <span style={{ fontSize: 10, color: "#7c3aed", fontWeight: 700, letterSpacing: 2, marginLeft: 2 }}>●●●</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "1.5px solid #d1d5db",
              borderRadius: "20px",
              padding: "8px 20px",
              fontSize: "14px",
              outline: "none",
              width: "220px",
              background: "#f9fafb",
              color: "#374151",
            }}
          />
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "3px solid #5b21b6",
            overflow: "hidden",
            background: "#e0d7ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
          }}>🧑</div>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <aside style={{
          width: "230px",
          background: "#5b21b6",
          display: "flex",
          flexDirection: "column",
          padding: "24px 0 16px 0",
          minHeight: "calc(85vh - 72px)",
        }}>
          <nav style={{ flex: 1 }}>
            {navItems.map(item => (
              <div key={item.label} style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 20px",
                cursor: "pointer",
                color: item.label === "My Quizzes" ? "#fff" : "#c4b5fd",
                background: item.label === "My Quizzes" ? "rgba(255,255,255,0.12)" : "transparent",
                fontWeight: item.label === "My Quizzes" ? "700" : "500",
                fontSize: "14px",
                borderLeft: item.label === "My Quizzes" ? "4px solid #fff" : "4px solid transparent",
              }}>
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </nav>
          <div style={{
            margin: "16px 12px 12px 12px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px",
            textAlign: "center",
          }}>
            <div style={{ color: "#fff", fontWeight: "700", fontSize: "13px" }}>UserName</div>
            <div style={{ color: "#c4b5fd", fontSize: "11px", marginBottom: "10px" }}>student@gmail.com</div>
            <button onClick={onBack} style={{
              background: "#fff",
              color: "#5b21b6",
              border: "none",
              borderRadius: "8px",
              padding: "7px 18px",
              fontWeight: "800",
              fontSize: "12px",
              cursor: "pointer",
              width: "100%",
            }}>LOG OUT</button>
          </div>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: "36px 40px" }}>
          {submitted ? (
            <div style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "40px 48px",
              textAlign: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              maxWidth: 560,
              margin: "0 auto",
            }}>
              {/* Title */}
              <div style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 6 }}>
                {quiz.title}
              </div>
              <div style={{
                fontSize: 26,
                fontWeight: 900,
                color: "#7c3aed",
                letterSpacing: 2,
                marginBottom: 28,
                fontStyle: "italic",
              }}>
                QUIZ COMPLETED
              </div>

              {/* Circular score */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
                <div style={{ position: "relative", width: 140, height: 140 }}>
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    {/* Background circle */}
                    <circle cx="70" cy="70" r="58" fill="none" stroke="#e9d5ff" strokeWidth="12" />
                    {/* Progress arc */}
                    <circle
                      cx="70" cy="70" r="58"
                      fill="none"
                      stroke="url(#scoreGrad)"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${(score / totalQ) * 364.4} 364.4`}
                      strokeDashoffset="91.1"
                      transform="rotate(-90 70 70)"
                    />
                    <defs>
                      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Graduation cap emoji */}
                  <div style={{
                    position: "absolute",
                    top: -14,
                    right: -10,
                    fontSize: 36,
                    transform: "rotate(10deg)",
                  }}>🎓</div>
                  {/* Center text */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 600 }}>Your Score</div>
                    <div style={{ fontSize: 32, fontWeight: 900, color: "#111827", lineHeight: 1.1 }}>
                      {Math.round((score / totalQ) * 100)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: 12,
                padding: "18px 24px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px 0",
                marginBottom: 28,
                textAlign: "left",
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#7c3aed", display: "inline-block" }}></span>
                    <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{Math.round((score / totalQ) * 100)}%</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280", marginLeft: 16 }}>Completion</div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#111827", display: "inline-block" }}></span>
                    <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{String(totalQ).padStart(2, "0")}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280", marginLeft: 16 }}>Total Question</div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block" }}></span>
                    <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{String(score).padStart(2, "0")}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280", marginLeft: 16 }}>Correct</div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block" }}></span>
                    <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{String(totalQ - score).padStart(2, "0")}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#6b7280", marginLeft: 16 }}>Wrong</div>
                </div>
              </div>

              {/* View Answers button */}
              <button
                onClick={onBack}
                style={{
                  background: "#5b21b6",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "14px 52px",
                  fontWeight: "700",
                  fontSize: "15px",
                  cursor: "pointer",
                  letterSpacing: 0.5,
                }}
              >
                View Answers
              </button>
            </div>
          ) : (
            <>
              {/* Quiz header row */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}>
                <div style={{ fontWeight: 800, fontSize: 20, color: "#111827" }}>{quiz.title}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>
                  Time limit: {quiz.timeLimit}
                </div>
              </div>

              <div style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              }}>
                {/* Question header */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                }}>
                  <div style={{
                    background: "#e5e7eb",
                    borderRadius: 8,
                    padding: "8px 18px",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#111827",
                  }}>
                    Question {current + 1} of {totalQ}
                  </div>
                  <div style={{
                    background: "#111827",
                    borderRadius: 8,
                    padding: "8px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#fff",
                  }}>
                    <span style={{ fontSize: 16 }}>🕐</span>
                    <div>
                      <div style={{ fontSize: 11, color: "#9ca3af", lineHeight: 1 }}>Time counter</div>
                      <div style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: timeLeft !== null && timeLeft < 60 ? "#ef4444" : "#ef4444",
                        letterSpacing: 1,
                      }}>
                        {timeLeft !== null ? formatTime(timeLeft) : "∞"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Question */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 6 }}>Question:</div>
                  <div style={{ fontSize: 15, color: "#111827", lineHeight: 1.6 }}>{q.q}</div>
                </div>

                {/* Options */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                  marginBottom: 32,
                }}>
                  {q.options.map((opt, i) => (
                    <div
                      key={i}
                      onClick={() => handleSelect(i)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "14px 18px",
                        borderRadius: 10,
                        border: selected[current] === i
                          ? "2px solid #5b21b6"
                          : "1.5px solid #e5e7eb",
                        background: selected[current] === i ? "#ede9fe" : "#f9fafb",
                        cursor: "pointer",
                        transition: "all 0.15s",
                        userSelect: "none",
                      }}
                    >
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: selected[current] === i ? "#5b21b6" : "#e5e7eb",
                        color: selected[current] === i ? "#fff" : "#6b7280",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: 14,
                        flexShrink: 0,
                        transition: "all 0.15s",
                      }}>
                        {LETTER[i]}
                      </div>
                      <span style={{ fontSize: 14, color: "#111827", fontWeight: selected[current] === i ? 600 : 400 }}>
                        {opt}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Submit */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <button
                    onClick={handleSubmit}
                    disabled={selected[current] === null}
                    style={{
                      background: selected[current] !== null ? "#22c55e" : "#d1d5db",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      padding: "14px 48px",
                      fontWeight: "800",
                      fontSize: "15px",
                      cursor: selected[current] !== null ? "pointer" : "not-allowed",
                      letterSpacing: 1,
                      transition: "background 0.2s",
                    }}
                  >
                    SUBMIT ANSWER
                  </button>
                </div>

                {/* Prev / Next */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <button
                    onClick={() => setCurrent(c => Math.max(0, c - 1))}
                    disabled={current === 0}
                    style={{
                      background: "transparent",
                      border: "1.5px solid #d1d5db",
                      borderRadius: 8,
                      padding: "9px 22px",
                      fontSize: 14,
                      color: current === 0 ? "#d1d5db" : "#374151",
                      cursor: current === 0 ? "not-allowed" : "pointer",
                      fontWeight: 600,
                    }}
                  >
                    ‹ PREVIOUS
                  </button>
                  <button
                    onClick={() => setCurrent(c => Math.min(totalQ - 1, c + 1))}
                    disabled={current === totalQ - 1}
                    style={{
                      background: "transparent",
                      border: "1.5px solid #d1d5db",
                      borderRadius: 8,
                      padding: "9px 22px",
                      fontSize: 14,
                      color: current === totalQ - 1 ? "#d1d5db" : "#374151",
                      cursor: current === totalQ - 1 ? "not-allowed" : "pointer",
                      fontWeight: 600,
                    }}
                  >
                    NEXT ›
                  </button>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      <footer style={{
        background: "#5b21b6",
        color: "#e0d7ff",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "13px",
      }}>
        <span>Contact: quizhub@gmail.com</span>
        <span>© 2026 Quiz Hub. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default function QuizHub() {
  const [activeNav, setActiveNav] = useState("My Quizzes");
  const [selectedQuiz, setSelectedQuiz] = useState(1);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  if (activeQuiz) {
    return <QuizPage quiz={activeQuiz} onBack={() => setActiveQuiz(null)} />;
  }

  const buttonStyle = (status) => {
    const base = {
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      fontWeight: "700",
      fontSize: "14px",
      cursor: "pointer",
      minWidth: "110px",
      letterSpacing: "0.3px",
      transition: "opacity 0.2s",
      whiteSpace: "nowrap",
    };
    if (status === "start") return { ...base, background: "#22c55e", color: "#fff" };
    if (status === "reattempt") return { ...base, background: "#dc2626", color: "#fff" };
    if (status === "continue") return { ...base, background: "#22c55e", color: "#fff" };
    return base;
  };

  const buttonLabel = (status) => {
    if (status === "start") return "Start Quiz";
    if (status === "reattempt") return "Re-attempt";
    if (status === "continue") return "Continue";
    return "Start Quiz";
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f3f4f6" }}>
      {/* Header */}
      <header style={{
        background: "#fff",
        padding: "12px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            background: "#5b21b6",
            color: "#fff",
            fontWeight: 900,
            fontSize: 18,
            borderRadius: 10,
            padding: "6px 14px",
            letterSpacing: 1,
          }}>
            QUIZ HUB
          </div>
          <span style={{ fontSize: 10, color: "#7c3aed", fontWeight: 700, letterSpacing: 2, marginLeft: 2 }}>●●●</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            style={{
              border: "1.5px solid #d1d5db",
              borderRadius: "20px",
              padding: "8px 20px",
              fontSize: "14px",
              outline: "none",
              width: "220px",
              background: "#f9fafb",
              color: "#374151",
            }}
          />
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "3px solid #5b21b6",
            overflow: "hidden",
            background: "#e0d7ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
          }}>🧑</div>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <aside style={{
          width: "230px",
          background: "#5b21b6",
          display: "flex",
          flexDirection: "column",
          padding: "24px 0 16px 0",
          minHeight: "calc(85vh - 72px)",
        }}>
          <nav style={{ flex: 1 }}>
            {navItems.map(item => (
              <div
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 20px",
                  cursor: "pointer",
                  color: activeNav === item.label ? "#fff" : "#c4b5fd",
                  background: activeNav === item.label ? "rgba(255,255,255,0.12)" : "transparent",
                  fontWeight: activeNav === item.label ? "700" : "500",
                  fontSize: "14px",
                  borderLeft: activeNav === item.label ? "4px solid #fff" : "4px solid transparent",
                  transition: "all 0.15s",
                  userSelect: "none",
                }}
              >
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </nav>
          <div style={{
            margin: "16px 12px 12px 12px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px",
            textAlign: "center",
          }}>
            <div style={{ color: "#fff", fontWeight: "700", fontSize: "13px" }}>UserName</div>
            <div style={{ color: "#c4b5fd", fontSize: "11px", marginBottom: "10px" }}>student@gmail.com</div>
            <button style={{
              background: "#fff",
              color: "#5b21b6",
              border: "none",
              borderRadius: "8px",
              padding: "7px 18px",
              fontWeight: "800",
              fontSize: "12px",
              cursor: "pointer",
              width: "100%",
            }}>LOG OUT</button>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "36px 40px" }}>
          <div style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "28px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          }}>
            <h2 style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "20px",
              marginTop: 0,
            }}>Available Quizzes</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {quizzes.map(quiz => (
                <div
                  key={quiz.id}
                  onClick={() => setSelectedQuiz(quiz.id)}
                  style={{
                    border: selectedQuiz === quiz.id
                      ? "2px solid #3b82f6"
                      : "1.5px solid #e5e7eb",
                    borderRadius: "10px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    background: "#fff",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "16px", color: "#111827", marginBottom: "4px" }}>
                      {quiz.title}
                    </div>
                    <div style={{ fontSize: "13px", color: "#6b7280" }}>
                      Deadline: {quiz.deadline}&nbsp;&nbsp;|&nbsp;&nbsp;Time limit: {quiz.timeLimit}
                    </div>
                    {quiz.warning && (
                      <div style={{ fontSize: "12px", color: "#dc2626", marginTop: "4px" }}>
                        {quiz.warning}
                      </div>
                    )}
                  </div>
                  <button
                    style={buttonStyle(quiz.status)}
                    onMouseOver={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseOut={e => e.currentTarget.style.opacity = "1"}
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedQuiz(quiz.id);
                      setActiveQuiz(quiz);
                    }}
                  >
                    {buttonLabel(quiz.status)}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer style={{
        background: "#5b21b6",
        color: "#e0d7ff",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "13px",
      }}>
        <span>Contact: quizhub@gmail.com</span>
        <span>© 2026 Quiz Hub. All rights reserved.</span>
      </footer>
    </div>
  );
}