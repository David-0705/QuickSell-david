import React from 'react';
import SearchIcon from '../assets/Utlis/test_Search-3.svg';
import FilterIcon from '../assets/Utlis/test_Filter.svg';


export default function SearchAndFilterRow({ onSearchChange, filterOpen, setFilterOpen }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px' }}>
      <div className="search" style={{ position: 'relative', display: 'flex', alignItems: 'center', width: 260 }}>
        <input
          placeholder="Search Customers"
          onChange={onSearchChange}
          style={{ paddingLeft: 32, width: '100%' }}
        />
        <img
          src={SearchIcon}
          alt="search"
          style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, pointerEvents: 'none' }}
        />
      </div>
      <div className="filters">
        <button onClick={() => setFilterOpen(o => !o)}>
          <img
            src={FilterIcon}
            alt="filter"
            style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, pointerEvents: 'none' }}
          />
          <span style={{ marginRight: 6, fontSize: 18, color: '#555' }}></span> Add Filters ▾
        </button>
        {filterOpen && (
          <div className="filter-dropdown">
            <ul style={{ padding: 0, margin: 0 }}>
              <li style={{ padding: '10px 18px', listStyle: 'none' }}>
                Filter 1
                <hr style={{ border: 'none', borderBottom: '1px solid #eee', margin: '8px -18px 0 -18px', width: 'auto' }} />
              </li>
              <li style={{ padding: '10px 18px', listStyle: 'none' }}>
                Filter 2
                <hr style={{ border: 'none', borderBottom: '1px solid #eee', margin: '8px 0 0 0' }} />
              </li>
              <li style={{ padding: '10px 18px', listStyle: 'none' }}>
                Filter 3
                <hr style={{ border: 'none', borderBottom: '1px solid #eee', margin: '8px 0 0 0' }} />
              </li>
              <li style={{ padding: '10px 18px', listStyle: 'none' }}>
                Filter 4
                <hr style={{ border: 'none', borderBottom: '1px solid #eee', margin: '8px 0 0 0' }} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
