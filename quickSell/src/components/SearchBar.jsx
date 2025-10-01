import React from "react";

export default function SearchBar({ onChange }) {
  return (
    <div className="search">
      <input placeholder="Search Customers" onChange={onChange} />
    </div>
  );
}
