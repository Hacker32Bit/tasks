import React from "react";
import "./newscard.css";

export default function NewsCard() {
  return (
    <div className="card">
      <div className="header">
        <span className="img">IMG object here</span>
        <h1 className="title">Title 1</h1>
      </div>
      <div className="content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button className="btn">Read more</button>
      </div>
    </div>
  );
}
