import React from 'react';
import './SubtitleRow.css';

export default function SubtitleRow({ total }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 18px 0 18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontWeight: 500, fontSize: '1.1rem', color: '#222' }}>All Customers</span>
        <span style={{ background: '#e6f4ea', color: '#2e7d32', fontWeight: 600, fontSize: '0.95rem', borderRadius: 12, padding: '2px 10px' }}>{total}</span>
      </div>
    </div>
  );
}
