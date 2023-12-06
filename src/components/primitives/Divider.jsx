import React from "react";

export default function Divider({ styles }) {
  return (
    <div className={`${styles}`}>
      <hr className="my-2 h-px border-0 bg-gray" />
    </div>
  );
}
