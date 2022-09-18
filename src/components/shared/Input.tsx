import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface InputProps {
  name: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  error: { message: string };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  label,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
}: InputProps) {
  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="text-xs font-bold tracking-wide text-gray-500 dark:text-white"
        >
          {label}
        </label>
      )}

      <div
        className={`relative overflow-hidden rounded border border-gray-500/25 duration-150 ${
          error ? "border-red-500" : ""
        }`}
      >
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          className="w-full bg-transparent py-3 px-3.5 text-sm font-medium leading-none text-gray-900 caret-purple-500 placeholder:text-gray-900/25 dark:text-white dark:placeholder:text-white/25"
        />

        {error && (
          <span className="absolute top-2/4 right-0 inline-block -translate-y-2/4 whitespace-nowrap pr-3 text-sm text-red-500">
            {error.message}
          </span>
        )}
      </div>
    </>
  );
}
