import React from "react";

export default function Input({ label, type, name, placeholder, value, onChange, styles, disabled, onFocus }) {
  return (
    <div className="w-full">
      <label className="block mb-2 text-[14px] text-[#2e2d2c]">{label}</label>
      <div className={`${styles}`}>
        <input
          type={type}
          name={name}
          value={value}
          onFocus={onFocus}
          className={`h-full outline-none rounded text-gray-900 text-sm py-2  px-3  block w-full `}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
