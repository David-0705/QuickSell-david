import React from "react";

export default function TableRow({ row }) {
  return (
    <div className="tr row" key={row.id}>
      <div className="td checkbox"><input type="checkbox" /></div>
      <div className="td customer">
        <img src={row.avatar} alt="avatar" className="avatar" />
        <div className="meta">
          <div className="name">{row.name}</div>
          <div className="phone">{row.phone}</div>
        </div>
      </div>
      <div className="td score">{row.score}</div>
      <div className="td email">{row.email}</div>
      <div className="td">{new Date(row.lastMessageAt).toLocaleString()}</div>
      <div className="td">{row.addedBy}</div>
    </div>
  );
}
