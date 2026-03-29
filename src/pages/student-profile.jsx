import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Pencil } from 'lucide-react';
import logoTrans from '../assets/logo_trans.png';
import defaultAvatar from '../assets/dp.jpg';
import './student-profile.css';

export default function StudentProfile() {
  const [search, setSearch] = useState('');
  const [photoSrc, setPhotoSrc] = useState(defaultAvatar);
  const fileRef = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [degreeProgram, setDegreeProgram] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleUploadClick() {
    fileRef.current?.click();
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setPhotoSrc((prev) => {
      if (prev && prev.startsWith('blob:')) URL.revokeObjectURL(prev);
      return url;
    });
    e.target.value = '';
  }

  function handleRemovePicture() {
    setPhotoSrc((prev) => {
      if (prev && prev.startsWith('blob:')) URL.revokeObjectURL(prev);
      return defaultAvatar;
    });
  }

  function handleSave(e) {
    e.preventDefault();
  }

  return (
    <div className="student-profile">
      <header className="sp-header">
        <Link to="/" className="sp-header-logo" aria-label="Quiz Hub home">
          <img src={logoTrans} alt="Quiz Hub" />
        </Link>
        <div className="sp-header-search-wrap">
          <input
            type="search"
            className="sp-header-search"
            placeholder="Search"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            aria-label="Search"
          />
        </div>
        <div className="sp-header-user">
          <div className="sp-avatar-ring sp-avatar-sm" aria-hidden="true">
            <div className="sp-avatar-inner">
              <img src={photoSrc} alt="" />
            </div>
          </div>
        </div>
      </header>

      <main className="sp-main">
        <div className="sp-cards">
          <section className="sp-card sp-card--photo" aria-labelledby="photo-heading">
            <h2 id="photo-heading" className="sp-card-title">
              Profile Photo
            </h2>
            <div className="sp-photo-body">
              <div className="sp-avatar-lg-wrap">
                <div className="sp-avatar-ring sp-avatar-ring--lg">
                  <div className="sp-avatar-inner sp-avatar-lg">
                    <img src={photoSrc} alt="Your profile" />
                  </div>
                </div>
                <button
                  type="button"
                  className="sp-avatar-edit"
                  aria-label="Edit profile photo"
                  onClick={handleUploadClick}
                >
                  <Pencil size={18} strokeWidth={2} />
                </button>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
              <div className="sp-photo-actions">
                <button type="button" className="sp-gradient-btn" onClick={handleUploadClick}>
                  Upload New Picture
                </button>
                <button type="button" className="sp-gradient-btn" onClick={handleRemovePicture}>
                  Remove Picture
                </button>
              </div>
            </div>
          </section>

          <section className="sp-card sp-card--info" aria-labelledby="form-heading">
            <h2 id="form-heading" className="sp-card-title">
              Profile Information
            </h2>
            <form onSubmit={handleSave} noValidate>
              <div className="sp-form-grid">
                <div className="sp-field">
                  <label className="sp-label" htmlFor="sp-first">
                    First Name <span className="sp-required">*</span>
                  </label>
                  <div className="sp-input-wrap">
                    <input
                      id="sp-first"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(ev) => setFirstName(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="sp-field">
                  <label className="sp-label" htmlFor="sp-last">
                    Last Name <span className="sp-required">*</span>
                  </label>
                  <div className="sp-input-wrap">
                    <input
                      id="sp-last"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={lastName}
                      onChange={(ev) => setLastName(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="sp-field">
                  <label className="sp-label" htmlFor="sp-sid">
                    Student ID
                  </label>
                  <div className="sp-input-wrap">
                    <input
                      id="sp-sid"
                      name="studentId"
                      type="text"
                      autoComplete="username"
                      value={studentId}
                      onChange={(ev) => setStudentId(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="sp-field">
                  <label className="sp-label" htmlFor="sp-contact">
                    Contact No:
                  </label>
                  <div className="sp-input-wrap">
                    <input
                      id="sp-contact"
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      value={contact}
                      onChange={(ev) => setContact(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="sp-field sp-field-full">
                  <label className="sp-label" htmlFor="sp-email">
                    Email <span className="sp-required">*</span>
                  </label>
                  <div className="sp-input-wrap">
                    <input
                      id="sp-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="sp-field sp-field-full">
                  <label className="sp-label" htmlFor="sp-degree">
                    Degree Program
                  </label>
                  <div className="sp-input-wrap">
                    <input
                      id="sp-degree"
                      name="degreeProgram"
                      type="text"
                      autoComplete="organization-title"
                      value={degreeProgram}
                      onChange={(ev) => setDegreeProgram(ev.target.value)}
                    />
                  </div>
                </div>
                <div className="sp-field">
                  <label className="sp-label" htmlFor="sp-password">
                    Password
                  </label>
                  <div className="sp-input-wrap">
                    <input
                      id="sp-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      className="sp-input-password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <button
                      type="button"
                      className="sp-toggle-pw"
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
                  <label className="sp-label" htmlFor="sp-confirm">
                    Confirm Password
                  </label>
                  <div className="sp-input-wrap">
                    <input
                      id="sp-confirm"
                      name="confirmPassword"
                      type={showConfirm ? 'text' : 'password'}
                      className="sp-input-password"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(ev) => setConfirmPassword(ev.target.value)}
                    />
                    <button
                      type="button"
                      className="sp-toggle-pw"
                      aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                      onClick={() => setShowConfirm((v) => !v)}
                    >
                      {showConfirm ? (
                        <EyeOff size={20} strokeWidth={1.75} />
                      ) : (
                        <Eye size={20} strokeWidth={1.75} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="sp-save-wrap">
                <button type="submit" className="sp-save-btn">
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
