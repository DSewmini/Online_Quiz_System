import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Pencil, Search } from 'lucide-react';
import logoTrans from '../assets/logo_trans.png';
import defaultAvatar from '../assets/dp.jpg';
import './student-profile.css';

/** Normalize score to 0–1 for header ring only (not shown as text in the UI). */
function scoreToProgress(score) {
  if (score == null || Number.isNaN(Number(score))) return 0;
  return Math.min(1, Math.max(0, Number(score) / 100));
}

function mapPlayerToForm(player) {
  return {
    firstName: player?.firstName ?? '',
    lastName: player?.lastName ?? '',
    studentId: player?.studentId ?? '',
    contactNo: player?.contactNo ?? '',
    email: player?.email ?? '',
    degreeProgram: player?.degreeProgram ?? '',
    password: '',
    confirmPassword: '',
  };
}

/**
 * Student profile settings. Pass `player` via route state (`navigate('/student-profile', { state: { player } })`)
 * or `initialPlayer` if you wrap this component. Fields and header ring derive from that object; `score` drives
 * the ring only (no score label).
 */
export default function StudentProfile({ initialPlayer: initialPlayerProp }) {
  const location = useLocation();
  const playerFromNav = location.state?.player;

  const basePlayer = useMemo(() => {
    return { ...(initialPlayerProp || {}), ...(playerFromNav || {}) };
  }, [initialPlayerProp, playerFromNav]);

  const [form, setForm] = useState(() => mapPlayerToForm(basePlayer));
  const [searchQuery, setSearchQuery] = useState('');
  const [avatarBlobUrl, setAvatarBlobUrl] = useState(null);
  const [avatarCleared, setAvatarCleared] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef(null);

  const ringProgress = scoreToProgress(basePlayer?.score);

  const displayAvatarSrc =
    avatarBlobUrl ?? (avatarCleared ? defaultAvatar : basePlayer?.avatarUrl ?? defaultAvatar);

  useEffect(() => {
    setForm((prev) => {
      const next = mapPlayerToForm(basePlayer);
      if (prev.password || prev.confirmPassword) {
        return { ...next, password: prev.password, confirmPassword: prev.confirmPassword };
      }
      return next;
    });
  }, [basePlayer]);

  useEffect(() => {
    return () => {
      if (avatarPreview?.startsWith('blob:')) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const updateField = useCallback((key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  }, []);

  const openFilePicker = () => fileInputRef.current?.click();

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (avatarBlobUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(avatarBlobUrl);
    }
    setAvatarCleared(false);
    setAvatarBlobUrl(URL.createObjectURL(file));
    e.target.value = '';
  };

  const removePicture = () => {
    if (avatarBlobUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(avatarBlobUrl);
    }
    setAvatarBlobUrl(null);
    setAvatarCleared(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Persist via API using `form` + optional new avatar blob URL
  };

  return (
    <div className="student-profile-page">
      <header className="sp-header">
        <Link to="/" className="sp-logo-link" aria-label="Quiz Hub home">
          <img src={logoTrans} alt="Quiz Hub" />
        </Link>
        <div className="sp-search-wrap">
          <div className="sp-search-inner">
            <Search size={18} strokeWidth={2} aria-hidden />
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
          </div>
        </div>
        <div className="sp-header-avatar" style={{ '--sp-progress': ringProgress }}>
          <img src={displayAvatarSrc} alt="" />
        </div>
      </header>

      <main className="sp-main">
        <div className="sp-cards">
          <section className="sp-card" aria-labelledby="sp-photo-heading">
            <h2 id="sp-photo-heading" className="sp-card-title">
              Profile Photo
            </h2>
            <div className="sp-photo-wrap">
              <div className="sp-avatar-editor">
                <div className="sp-avatar-ring">
                  <img src={displayAvatarSrc} alt="" />
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="sp-sr-only"
                  onChange={onFileChange}
                />
                <button
                  type="button"
                  className="sp-avatar-edit"
                  aria-label="Change profile photo"
                  onClick={openFilePicker}
                >
                  <Pencil size={18} strokeWidth={2} />
                </button>
              </div>
              <div className="sp-photo-actions">
                <button type="button" className="sp-btn-gradient" onClick={openFilePicker}>
                  Upload New Picture
                </button>
                <button
                  type="button"
                  className="sp-btn-gradient sp-btn-gradient--muted"
                  onClick={removePicture}
                >
                  Remove Picture
                </button>
              </div>
            </div>
          </section>

          <section className="sp-card" aria-labelledby="sp-info-heading">
            <h2 id="sp-info-heading" className="sp-card-title sp-card-title--left">
              Profile Information
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="sp-form-grid">
                <div className="sp-field">
                  <label htmlFor="sp-first">
                    First Name <span className="sp-req">*</span>
                  </label>
                  <input
                    id="sp-first"
                    name="firstName"
                    value={form.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    autoComplete="given-name"
                  />
                </div>
                <div className="sp-field">
                  <label htmlFor="sp-last">
                    Last Name <span className="sp-req">*</span>
                  </label>
                  <input
                    id="sp-last"
                    name="lastName"
                    value={form.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    autoComplete="family-name"
                  />
                </div>
                <div className="sp-field">
                  <label htmlFor="sp-student-id">Student ID</label>
                  <input
                    id="sp-student-id"
                    name="studentId"
                    value={form.studentId}
                    onChange={(e) => updateField('studentId', e.target.value)}
                  />
                </div>
                <div className="sp-field">
                  <label htmlFor="sp-contact">Contact No:</label>
                  <input
                    id="sp-contact"
                    name="contactNo"
                    type="tel"
                    value={form.contactNo}
                    onChange={(e) => updateField('contactNo', e.target.value)}
                    autoComplete="tel"
                  />
                </div>
                <div className="sp-field sp-field--full">
                  <label htmlFor="sp-email">
                    Email <span className="sp-req">*</span>
                  </label>
                  <input
                    id="sp-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    autoComplete="email"
                  />
                </div>
                <div className="sp-field sp-field--full">
                  <label htmlFor="sp-degree">Degree Program</label>
                  <input
                    id="sp-degree"
                    name="degreeProgram"
                    value={form.degreeProgram}
                    onChange={(e) => updateField('degreeProgram', e.target.value)}
                  />
                </div>
                <div className="sp-field">
                  <label htmlFor="sp-password">Password</label>
                  <div className="sp-input-password">
                    <input
                      id="sp-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={form.password}
                      onChange={(e) => updateField('password', e.target.value)}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? (
                        <EyeOff size={20} strokeWidth={1.75} />
                      ) : (
                        <Eye size={20} strokeWidth={1.75} />
                      )}
                    </button>
                  </div>
                </div>
                <div className="sp-field">
                  <label htmlFor="sp-confirm">Confirm Password</label>
                  <div className="sp-input-password">
                    <input
                      id="sp-confirm"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={form.confirmPassword}
                      onChange={(e) => updateField('confirmPassword', e.target.value)}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                      onClick={() => setShowConfirmPassword((v) => !v)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} strokeWidth={1.75} />
                      ) : (
                        <Eye size={20} strokeWidth={1.75} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="sp-form-actions">
                <button type="submit" className="sp-btn-gradient">
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <footer className="sp-footer">
        <span>
          Contact:{' '}
          <a href="mailto:quiizhub@gmail.com">quiizhub@gmail.com</a>
        </span>
        <span>© 2026 Quiz Hub. All rights reserved.</span>
      </footer>
    </div>
  );
}
