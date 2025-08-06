// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // perhatikan path: "/" untuk Home, "/profile", "/mbg", "/contact"
  const items = [
    { label: 'Home', to: '/' },
    { label: 'Profile', to: '/profile' },
    // Logo akan di tengah, jadi kita sisipkan kosong di array dan render manual
    { label: 'MBG', to: '/mbg' },
    { label: 'Articles', to: '/articles' }
  ];

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        height: '80px'
      }}
    >
      <div className="container d-flex justify-content-center">
        <ul className="navbar-nav d-flex align-items-center" style={{ gap: '3rem' }}>
          {/* Dua item kiri */}
          {items.slice(0, 2).map(item => (
            <li className="nav-item" key={item.to}>
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  'nav-link' +
                  (isActive
                    ? ' fw-bold border-bottom border-3 border-success'
                    : ' fw-normal border-bottom border-0')
                }
                style={{ paddingBottom: '4px' }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Logo di tengah */}
          <li className="nav-item">
            <NavLink to="/">
              <img src="/images/logo.svg" alt="KPM HADIST" height="40" />
            </NavLink>
          </li>

          {/* Dua item kanan */}
          {items.slice(2).map(item => (
            <li className="nav-item" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  'nav-link' +
                  (isActive
                    ? ' fw-bold border-bottom border-3 border-success'
                    : ' fw-normal border-bottom border-0')
                }
                style={{ paddingBottom: '4px' }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
