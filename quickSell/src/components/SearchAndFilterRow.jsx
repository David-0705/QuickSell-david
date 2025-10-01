import React from 'react';

export default function SearchAndFilterRow({ onSearchChange, filterOpen, setFilterOpen }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px' }}>
      <div className="search">
        <input placeholder="Search Customers" onChange={onSearchChange} />
      </div>
      <div className="filters">
        <button onClick={() => setFilterOpen(o => !o)}>
          <span style={{ marginRight: 6, fontSize: 18, color: '#555' }}></span> Add Filters ▾
        </button>
        {filterOpen && (
          <div className="filter-dropdown">
            <ul>
              <li>Filter 1</li>
              <li>Filter 2</li>
              <li>Filter 3</li>
              <li>Filter 4</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
