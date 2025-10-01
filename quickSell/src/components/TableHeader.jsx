import React from "react";
import './TableHeader.css';
import HeaderCell from "./HeaderCell";

export default function TableHeader({ sortState = { key: '', dir: 'asc' }, onSort = () => {} }) {
  return (
    <div className="thead sticky">
      <div className="tr header">
        <div className="th checkbox"></div>
        <HeaderCell label="Customer" sortKey="name" sortState={sortState} onSort={onSort} className="customer-col" />
        <HeaderCell label="Score" sortKey="score" sortState={sortState} onSort={onSort} className="score-col" />
        <HeaderCell label="Email" sortKey="email" sortState={sortState} onSort={onSort} className="email-col" />
        <HeaderCell label="Last message sent at" sortKey="lastMessageAt" sortState={sortState} onSort={onSort} className="lastmsg-col" />
        <HeaderCell label="Added by" sortKey="addedBy" sortState={sortState} onSort={onSort} className="addedby-col" />
      </div>
    </div>
  );
}
