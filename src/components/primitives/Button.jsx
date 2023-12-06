import React from "react";

export default function Button({
  text,
  buttonStyle,
  onClick,
  icon,
  type,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${buttonStyle} `}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4 justify-center">
        {text && <div>{text}</div>}
        {icon && <div>{icon}</div>}
      </div>
    </button>
  );
}
