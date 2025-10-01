import React from "react";

export default function FiltersDropdown({ open }) {
  if (!open) return null;
  return (
    <div className="filter-dropdown">
      <ul>
        <li>Filter 1</li>
        <li>Filter 2</li>
        <li>Filter 3</li>
        <li>Filter 4</li>
      </ul>
    </div>
  );
}
