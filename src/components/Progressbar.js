import React from "react";

export default function Progressbar({ filled }) {
  return (
    <div>
      <div
        className="progressbar"
        style={{
          width: "800px",
          height: "30px",
          border: "1px solid #000",
          borderRadius: "5px",
          overflow: "hidden",
          backgroundColor: "#e0e0e0",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#041461",
            transition: "width 0.5s",
          }}
        ></div>
      </div>
      <span className="progressPercent font-bold">{filled}%</span>
    </div>
  );
}
