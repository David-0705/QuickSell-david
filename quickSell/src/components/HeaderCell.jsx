import React from "react";

export default function HeaderCell({ label, sortKey, sortState, onSort, className }) {
  const active = sortState.key === sortKey;
  const dir = active ? (sortState.dir === "asc" ? "▲" : "▼") : "";
  return (
    <div
      className={`th ${className || ""}`}
      onClick={() => onSort(sortKey)}
      role="button"
      tabIndex={0}
    >
      {label} <span className="sort-indicator">{dir}</span>
    </div>
  );
}
