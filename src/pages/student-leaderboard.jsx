import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  Trophy,
  Calendar,
  MessageCircle,
  Bell,
  Settings,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import logoTrans from '../assets/logo_trans.png';
import jetImg from '../assets/jet1.png';
import crownImg from '../assets/crown1.png';
import './student-leaderboard.css';

const LIST_PAGE_SIZE = 6;

/**
 * Replace this array with data from your API.
 * The UI renders only `name`, `score`, optional `avatarUrl`, and `trend`.
 */
export const LEADERBOARD_SAMPLE_PLAYERS = [
  { id: 'p01', name: 'Avery Brooks', score: 512, trend: 'up', avatarUrl: null },
  { id: 'p02', name: 'Jordan Lee', score: 498, trend: 'up', avatarUrl: null },
  { id: 'p03', name: 'Casey Morgan', score: 471, trend: 'down', avatarUrl: null },
  { id: 'p04', name: 'Riley Chen', score: 455, trend: 'same', avatarUrl: null },
  { id: 'p05', name: 'Quinn Patel', score: 430, trend: 'up', avatarUrl: null },
  { id: 'p06', name: 'Taylor Singh', score: 401, trend: 'down', avatarUrl: null },
  { id: 'p07', name: 'Morgan Diaz', score: 388, trend: 'up', avatarUrl: null },
  { id: 'p08', name: 'Jamie Okoro', score: 362, trend: 'same', avatarUrl: null },
  { id: 'p09', name: 'Skyler Wu', score: 340, trend: 'down', avatarUrl: null },
  { id: 'p10', name: 'Reese Adebayo', score: 315, trend: 'up', avatarUrl: null },
  { id: 'p11', name: 'Drew Matsuda', score: 299, trend: 'down', avatarUrl: null },
  { id: 'p12', name: 'Blair Nakamura', score: 276, trend: 'up', avatarUrl: null },
];

function initialsFromName(name) {
  if (!name || !name.trim()) return '?';
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function buildRankedList(players) {
  return [...players]
    .sort((a, b) => b.score - a.score)
    .map((p, index) => ({
      ...p,
      rank: index + 1,
    }));
}

function PlayerAvatar({ name, avatarUrl, className }) {
  if (avatarUrl) {
    return (
      <div className={className}>
        <img src={avatarUrl} alt="" />
      </div>
    );
  }
  return <div className={className}>{initialsFromName(name)}</div>;
}

function sidebarLinkIsActive(pathname, item) {
  if (item.to === '/student-leaderboard') {
    return pathname === '/student-leaderboard';
  }
  if (item.to === '/student-dashboard') {
    return pathname === '/student-dashboard' && item.label === 'Dashboard';
  }
  if (item.to === '/student-notice') {
    return pathname === '/student-notice' && item.label === 'Notice';
  }
  return pathname === item.to;
}

const SIDEBAR_LINKS = [
  { to: '/student-dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/quizes', label: 'My Quizzes', icon: ClipboardList },
  { to: '/student-dashboard', label: 'Results', icon: BarChart3 },
  { to: '/student-leaderboard', label: 'Leader-Board', icon: Trophy },
  { to: '/student-schedule', label: 'Schedule', icon: Calendar },
  { to: '/student-notice', label: 'Notice', icon: MessageCircle },
  { to: '/student-notice', label: 'Notification', icon: Bell },
  { to: '/student-profile', label: 'Settings', icon: Settings },
];

export default function StudentLeaderboard({
  players: playersProp,
  currentUser = {
    displayName: 'UserName',
    email: 'student@gmail.com',
    avatarUrl: null,
  },
}) {
  const location = useLocation();
  const [search, setSearch] = useState('');

  const ranked = useMemo(
    () => buildRankedList(playersProp ?? LEADERBOARD_SAMPLE_PLAYERS),
    [playersProp]
  );

  const topThree = ranked.slice(0, 3);
  const secondPlace = topThree[1];
  const firstPlace = topThree[0];
  const thirdPlace = topThree[2];

  const [listPage, setListPage] = useState(0);
  const listTotalPages = Math.max(1, Math.ceil(ranked.length / LIST_PAGE_SIZE));
  const safeListPage = Math.min(listPage, listTotalPages - 1);
  const listSlice = ranked.slice(
    safeListPage * LIST_PAGE_SIZE,
    safeListPage * LIST_PAGE_SIZE + LIST_PAGE_SIZE
  );
  const mid = Math.ceil(listSlice.length / 2);
  const listColLeft = listSlice.slice(0, mid);
  const listColRight = listSlice.slice(mid);

  return (
    <div className="lb-page">
      <header className="lb-header">
        <Link to="/student-dashboard" className="lb-logo" aria-label="Quiz Hub home">
          <img src={logoTrans} alt="Quiz Hub" />
        </Link>
        <div className="lb-search-wrap">
          <input
            className="lb-search"
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search"
          />
        </div>
        <div className="lb-header-user">
          <div className="lb-avatar-ring" aria-hidden="true">
            <div className="lb-avatar-inner">
              {currentUser.avatarUrl ? (
                <img src={currentUser.avatarUrl} alt="" />
              ) : (
                initialsFromName(currentUser.displayName)
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="lb-body">
        <aside className="lb-sidebar" aria-label="Student navigation">
          <nav>
            <ul className="lb-menu">
              {SIDEBAR_LINKS.map(({ to, label, icon: Icon }) => {
                const isActive = sidebarLinkIsActive(location.pathname, { to, label });
                return (
                  <li key={`${to}-${label}`}>
                    <Link to={to} className={isActive ? 'active' : ''}>
                      <Icon className="lb-menu-icon" size={18} strokeWidth={2} />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="lb-user-card">
            <div className="lb-user-name">{currentUser.displayName}</div>
            <div className="lb-user-email">{currentUser.email}</div>
            <Link to="/login" className="lb-logout">
              LOG OUT
            </Link>
          </div>
        </aside>

        <main className="lb-main">
          <h1 className="lb-title">Leader Board</h1>

          <section className="lb-podium-wrap" aria-label="Top three players">
            <div className="lb-podium-deco lb-podium-deco--1" />
            <div className="lb-podium-deco lb-podium-deco--2" />
            <div className="lb-podium-deco lb-podium-deco--3" />
            <img src={jetImg} alt="" className="lb-jet" />

            <div className="lb-podium-inner">
              {secondPlace && (
                <div className="lb-podium-slot lb-podium-slot--second">
                  <div className="lb-podium-photo-wrap">
                    <PlayerAvatar
                      name={secondPlace.name}
                      avatarUrl={secondPlace.avatarUrl}
                      className="lb-podium-face"
                    />
                  </div>
                  <div className="lb-podium-bar">
                    <div className="lb-podium-rank-num">{secondPlace.rank}</div>
                    <div className="lb-podium-points">Point {secondPlace.score}</div>
                  </div>
                </div>
              )}

              {firstPlace && (
                <div className="lb-podium-slot lb-podium-slot--first">
                  <div className="lb-podium-photo-wrap">
                    <img src={crownImg} alt="" className="lb-crown" />
                    <PlayerAvatar
                      name={firstPlace.name}
                      avatarUrl={firstPlace.avatarUrl}
                      className="lb-podium-face"
                    />
                  </div>
                  <div className="lb-podium-bar">
                    <div className="lb-podium-rank-num">{firstPlace.rank}</div>
                    <div className="lb-podium-points">Point {firstPlace.score}</div>
                  </div>
                </div>
              )}

              {thirdPlace && (
                <div className="lb-podium-slot lb-podium-slot--third">
                  <div className="lb-podium-photo-wrap">
                    <PlayerAvatar
                      name={thirdPlace.name}
                      avatarUrl={thirdPlace.avatarUrl}
                      className="lb-podium-face"
                    />
                  </div>
                  <div className="lb-podium-bar">
                    <div className="lb-podium-rank-num">{thirdPlace.rank}</div>
                    <div className="lb-podium-points">Point {thirdPlace.score}</div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="lb-list-section" aria-label="Full rankings">
            <button
              type="button"
              className="lb-list-nav"
              aria-label="Previous page"
              disabled={safeListPage <= 0}
              onClick={() => setListPage((p) => Math.max(0, p - 1))}
            >
              ‹
            </button>

            <div className="lb-list-cols">
              <div>
                {listColLeft.map((player) => (
                  <ListRow key={player.id} player={player} />
                ))}
              </div>
              <div>
                {listColRight.map((player) => (
                  <ListRow key={player.id} player={player} />
                ))}
              </div>
            </div>

            <button
              type="button"
              className="lb-list-nav"
              aria-label="Next page"
              disabled={safeListPage >= listTotalPages - 1}
              onClick={() => setListPage((p) => Math.min(listTotalPages - 1, p + 1))}
            >
              ›
            </button>
          </section>
        </main>
      </div>

      <footer className="lb-footer">
        <span>
          Contact:{' '}
          <a href="mailto:quiizhub@gmail.com">quiizhub@gmail.com</a>
        </span>
        <span>© 2026 Quiz Hub. All rights reserved.</span>
      </footer>
    </div>
  );
}

function ListRow({ player }) {
  const up = player.trend === 'up';
  const down = player.trend === 'down';

  return (
    <div className={`lb-row ${player.rank === 1 ? 'lb-row--top' : ''}`}>
      <div className="lb-row-rank-block">
        <span
          className={`lb-trend ${down ? 'lb-trend--down' : ''}`}
          aria-hidden="true"
        >
          {up && <ChevronUp size={16} strokeWidth={2.5} />}
          {down && <ChevronDown size={16} strokeWidth={2.5} />}
          {!up && !down && <span style={{ width: 16, display: 'inline-block' }}>·</span>}
        </span>
        <span className="lb-rank">{player.rank}</span>
      </div>
      <PlayerAvatar name={player.name} avatarUrl={player.avatarUrl} className="lb-row-avatar" />
      <span className="lb-row-name">{player.name}</span>
      <span className="lb-row-score">{player.score}</span>
    </div>
  );
}
