import React from "react";
import './TableRow.css';

export default function TableRow({ row }) {
  return (
    <div className="tr row" key={row.id}>
      <div className="td checkbox"><input type="checkbox" /></div>
      <div className="td customer customer-col">
        <img src={row.avatar} alt="avatar" className="avatar" />
        <div className="meta">
          <div className="name">{row.name}</div>
          <div className="phone">{row.phone}</div>
        </div>
      </div>
      <div className="td score score-col">{row.score}</div>
      <div className="td email email-col">{row.email}</div>
      <div className="td lastmsg-col">{new Date(row.lastMessageAt).toLocaleString()}</div>
      <div className="td addedby-col">{row.addedBy}</div>
    </div>
  );
}
