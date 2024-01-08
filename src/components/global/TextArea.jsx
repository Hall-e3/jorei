import React from "react";

export default function TextArea({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  styles,
  rows,
}) {
  return (
    <div className="flex flex-col justify-center">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      <textarea
        className={`min-h-[auto] w-full rounded border text-sm border-stroke outline-none bg-transparent px-3 py-[0.32rem] ${styles}`}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        type={type}
      />
    </div>
  );
}
