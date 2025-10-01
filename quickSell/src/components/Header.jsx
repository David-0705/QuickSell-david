import React from 'react';
import DoubleTick from '../assets/Utlis/Doubletick.png';
import './Header.css';

export default function Header() {
  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img
        src={DoubleTick}
        alt="logo"
        style={{ height: 32, marginRight: 8, objectFit: 'contain', display: 'block' }}
      />
        {/* <span className="logo" style={{ fontWeight: 700, fontSize: '1.25rem', color: '#222' }}>DoubleTick</span> */}
      </div>
      <div>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 8 }}>
          <span style={{ fontSize: 24, color: '#555' }}>⋯</span>
        </button>
      </div>
    </header>
  );
}
