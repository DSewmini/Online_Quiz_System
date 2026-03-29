import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ChevronDown } from 'lucide-react';
import logoTrans from '../assets/logo_trans.png';
import boyImg from '../assets/boy.jpeg';
import './RegistrationPage.css';

const ROLE_OPTIONS = [
  { value: '', label: 'Select role' },
  { value: 'student', label: 'Student' },
  { value: 'lecturer', label: 'Lecturer' },
  { value: 'admin', label: 'Admin' },
];

export default function RegistrationPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire to API when ready
  }

  return (
    <div className="registration-page">
      <header className="reg-header">
        <Link to="/" aria-label="Quiz Hub home">
          <img src={logoTrans} alt="Quiz Hub" className="reg-logo" />
        </Link>
        <nav className="reg-nav">
          <Link to="/">Home</Link>
          <Link to="/homepage">About</Link>
        </nav>
      </header>

      <main className="reg-main">
        <div className="reg-illustration" aria-hidden="true">
          <img src={boyImg} alt="" />
        </div>

        <div className="reg-form-column">
          <div className="reg-form-card">
            <h1 className="reg-form-title">Create account</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="reg-field">
                <div className="reg-input-wrap">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="reg-field">
                <div className="reg-input-wrap">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="reg-field">
                <div className="reg-input-wrap">
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Contact number"
                    autoComplete="tel"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
              </div>
              <div className="reg-field">
                <div className="reg-input-wrap">
                  <input
                    className="reg-input-with-toggle"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="reg-toggle"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? <EyeOff size={20} strokeWidth={1.75} /> : <Eye size={20} strokeWidth={1.75} />}
                  </button>
                </div>
              </div>
              <div className="reg-field">
                <div className="reg-input-wrap">
                  <input
                    className="reg-input-with-toggle"
                    type={showConfirm ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="reg-toggle"
                    aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                    onClick={() => setShowConfirm((v) => !v)}
                  >
                    {showConfirm ? <EyeOff size={20} strokeWidth={1.75} /> : <Eye size={20} strokeWidth={1.75} />}
                  </button>
                </div>
              </div>
              <div className="reg-field">
                <div className="reg-input-wrap">
                  <select
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className={role ? 'has-value' : ''}
                    aria-label="Select role"
                  >
                    {ROLE_OPTIONS.map((opt) => (
                      <option key={opt.value || 'placeholder'} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="reg-select-chevron" size={20} strokeWidth={2} aria-hidden />
                </div>
              </div>
              <button type="submit" className="reg-submit">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="reg-footer">
        <span>
          Contact:{' '}
          <a href="mailto:quiizhub@gmail.com">quiizhub@gmail.com</a>
        </span>
        <span>© 2026 Quiz Hub. All rights reserved.</span>
      </footer>
    </div>
  );
}
